//
// Copyright 2022, Robert Dyer, Kareem Keshk
//                 and University of Nebraska Board of Regents
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import * as vscode from 'vscode';
import { getJobUri, runBoaCommands } from './boa';
import * as boaapi from '@boalang/boa-api';
import JobCache from './jobcache';
import { getWorkspaceRoot } from './utils';

class BoaJobsProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
    readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

    private start = 0;
    private max = 0;
    private jobs: BoaJob[] = null;
    private view = null;

    constructor() {
        vscode.commands.executeCommand('setContext', 'boalang.joblist.prevEnabled', false);
        vscode.commands.executeCommand('setContext', 'boalang.joblist.nextEnabled', false);
    }

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    /**
     * Gets the size as a readable string.
     * @param {number} size - the size to convert
     * @return {number} the size as a readable string
     */
    private getSize(size) {
        let remaining = size;
        let power = 0;
        while (remaining >= 1024) {
            power++;
            remaining = remaining / 1024;
        }
        switch (power) {
        case 0:
            return Math.floor(remaining) + 'b';
        case 1:
            return Math.floor(remaining) + 'k';
        case 2:
            return Math.floor(remaining) + 'M';
        case 3:
            return Math.floor(remaining) + 'G';
        case 4:
            return Math.floor(remaining) + 'T';
        default:
            return size;
        }
    }

    async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        // jobs have status items
        if (element instanceof BoaJob) {
            const children = [];
            if (!element.label.toString().startsWith('Job #')) {
                children.push(new vscode.TreeItem(`Job #${element.job.id}`));
            }
            children.push(new vscode.TreeItem(element.job.input.name));
            if (element.job.executionStatus == boaapi.ExecutionStatus.FINISHED) {
                const sizeItem = new vscode.TreeItem('output size: ' + this.getSize(element.size));
                sizeItem.tooltip = element.size.toLocaleString() + ' bytes';
                children.push(sizeItem);
            } else {
                const compiler = new vscode.TreeItem('compile: ' + element.job.compilerStatus);
                if (element.job.compilerStatus == boaapi.CompilerStatus.ERROR) {
                    const errs = await JobCache.getCompilerErrors(element.job);
                    compiler.tooltip = errs.join('\n').replace('\\n', '\n');
                }
                children.push(compiler);
                if (element.job.compilerStatus == boaapi.CompilerStatus.FINISHED) {
                    children.push(new vscode.TreeItem('exec: ' + element.job.executionStatus));
                }
            }
            return Promise.resolve(children);
        }

        // status items have no children
        if (element) {
            return Promise.resolve([]);
        }

        // on initial load, do nothing
        if (this.jobs === null) {
            return Promise.resolve([]);
        }

        // the root lists the jobs for the current page
        return runBoaCommands(async (client: boaapi.BoaClient) => {
            this.setMax(await client.jobCount(false));

            const jobs = await client.jobList(false, this.start, this.length());
            this.jobs = [];
            for (const job of jobs) {
                const source = await JobCache.getSource(job);
                var size = 0;
                if (job.executionStatus == boaapi.ExecutionStatus.FINISHED) {
                    size = await JobCache.getOutputSize(job);
                }
                this.jobs.push(new BoaJob(job, source, size));
                if (this.jobs.length == 1 && (job.compilerStatus == boaapi.CompilerStatus.ERROR || job.executionStatus == boaapi.ExecutionStatus.ERROR))
                    this.jobs[0].collapsibleState = vscode.TreeItemCollapsibleState.Expanded;
            }
        }).then(async() => {
            this.jobs.sort((a, b) => b.job.id - a.job.id)

            const filteredOutputJobs: String[] = [];
            for (const job of this.jobs) {
                if ((await JobCache.getOutputSize(job.job)) > 0) {
                    filteredOutputJobs.push(job.contextValue);
                }
            }

            vscode.commands.executeCommand('setContext', 'boalang.joblist.hasoutput', filteredOutputJobs);
            vscode.commands.executeCommand('setContext', 'boalang.joblist.running', this.jobs.filter(j => j.job.running).map(j => j.contextValue));
            // FIXME at some point, the 'not in' when context operator will be released (1.70.0) and we can drop this context once we bump vscode version
            // see: https://github.com/microsoft/vscode/issues/154582
            vscode.commands.executeCommand('setContext', 'boalang.joblist.stopped', this.jobs.filter(j => !j.job.running).map(j => j.contextValue));

            vscode.commands.executeCommand('setContext', 'boalang.joblist.prevEnabled', this.start > 0);
            vscode.commands.executeCommand('setContext', 'boalang.joblist.nextEnabled', this.start + this.jobs.length < this.max);
            if (this.max < 1) {
                this.view.title = 'Boa: Recent Jobs';
            } else {
                this.view.title = `Boa: Jobs ${this.start + 1}-${this.start + this.jobs.length} (${this.max})`;
            }

            return Promise.resolve(this.jobs);
        }).catch(() => { return Promise.resolve([]); });
    }

    setView(view: vscode.TreeView<vscode.TreeItem>): vscode.TreeView<vscode.TreeItem> {
        this.view = view;
        return view;
    }

    async firstPage() {
        this.start = 0;
        this.refresh();
    }

    async prevPage() {
        if (this.start > 0) {
            this.start -= this.length();
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.refresh();
    }

    async nextPage() {
        if (this.start + this.length() < this.max) {
            this.start += this.length();
        }
        this.refresh();
    }

    async reset() {
        this.jobs = null;
        this.max = 0;
        this.start = 0;
        this.view.title = 'Boa: Recent Jobs';
        this._onDidChangeTreeData.fire(undefined);
    }

    async refresh() {
        this.jobs = [];
        this._onDidChangeTreeData.fire(undefined);
    }

    async refreshIfLoaded() {
        if (this.jobs !== null) {
            this.firstPage();
        }
    }

    private length(): number {
        return vscode.workspace.getConfiguration('boalang').get('joblist.pagesize', 10);
    }

    private setMax(max: number) {
        this.max = max;
        if (this.start > this.max) {
            this.start = this.max - this.length();
            this.refresh();
        }
    }
}

export const treeProvider = new BoaJobsProvider();

export class BoaJob extends vscode.TreeItem {
    constructor(public readonly job, public readonly source, public readonly size) {
        super(`Job #${job.id}`, vscode.TreeItemCollapsibleState.Collapsed);

        const jobFile = JobCache.getFileFromJob(job);
        if (jobFile) {
            if (jobFile.scheme == 'file') {
                this.label = jobFile.fsPath.replace(getWorkspaceRoot() + '/', '');
            } else if (jobFile.scheme == 'untitled') {
                this.label = jobFile.path;
            }
        }

        this.tooltip = source;
        this.description = job.submitted.toString();
        this.contextValue = `boalang.joblist.job${job.id}`;

        this.command = {
            command: 'boalang.job.showSource',
            arguments: [getJobUri(job.id)],
            title: 'show job details',
        };

        if (job.compilerStatus == boaapi.CompilerStatus.KILLED || job.executionStatus == boaapi.ExecutionStatus.KILLED) {
            this.iconPath = new vscode.ThemeIcon('close', new vscode.ThemeColor('boalang.icon.jobCanceled'));
        } else if (job.executionStatus == boaapi.ExecutionStatus.ERROR) {
           this.iconPath = new vscode.ThemeIcon('bug', new vscode.ThemeColor('boalang.icon.jobExecError'));
        } else if (job.compilerStatus == boaapi.CompilerStatus.ERROR) {
           this.iconPath = new vscode.ThemeIcon('bracket-error', new vscode.ThemeColor('boalang.icon.jobCompileError'));
        } else if (job.running) {
           this.iconPath = new vscode.ThemeIcon('pulse', new vscode.ThemeColor('boalang.icon.jobRunning'));
        } else {
           this.iconPath = new vscode.ThemeIcon('pass', new vscode.ThemeColor('boalang.icon.jobDone'));
        }
    }
}