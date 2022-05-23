//
// Copyright 2022, Robert Dyer,
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
import * as boaapi from '@boa/boa-api/lib/boaclient';
import { CompilerStatus, ExecutionStatus } from '@boa/boa-api/lib/jobhandle';

class BoaJobsProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

    private start = 0;
    private max = 0;
    private jobs: BoaJob[] = null;
    private view = null;

    constructor() {
        vscode.commands.executeCommand('setContext', 'boalang.prevPageEnabled', false);
        vscode.commands.executeCommand('setContext', 'boalang.nextPageEnabled', false);
    }

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        // jobs have status items
        if (element instanceof BoaJob) {
            const compiler = new vscode.TreeItem('compile: ' + element.job.compilerStatus);
            if (element.job.compilerStatus == CompilerStatus.ERROR) {
                const errs = await element.job.compilerErrors;
                compiler.tooltip = errs.join('\n').replace('\\n', '\n');
            }
            return Promise.resolve([
                new vscode.TreeItem(element.job.input.name),
                compiler,
                new vscode.TreeItem('exec: ' + element.job.executionStatus),
            ]);
        }

        // status items have no children
        if (element) {
            return Promise.resolve([]);
        }

        // on initial load, do nothing
        if (this.jobs == null) {
            return Promise.resolve([]);
        }

        // the root lists the jobs for the current page
        return runBoaCommands(async (client: boaapi.BoaClient) => {
            this.setMax(await client.jobCount(false));
    
            const jobs = await client.jobList(false, this.start, this.length());
            for (const job of jobs) {
                const source = await job.source;
                this.jobs.push(new BoaJob(job, source));
            }
        }).then(() => {
            this.jobs.sort((a, b) => (b.label as string).localeCompare(a.label as string))

            vscode.commands.executeCommand('setContext', 'boalang.prevPageEnabled', this.start > 0);
            vscode.commands.executeCommand('setContext', 'boalang.nextPageEnabled', this.start + this.jobs.length < this.max);
            this.view.title = `Boa: Jobs ${this.start + 1}-${this.start + this.jobs.length} (${this.max})`;
    
            return Promise.resolve(this.jobs);
        });
    }

    setView(view: vscode.TreeView<vscode.TreeItem>): vscode.TreeView<vscode.TreeItem> {
        this.view = view;
        return view;
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

    async refresh() {
        this.jobs = [];
        this._onDidChangeTreeData.fire(undefined);
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

class BoaJob extends vscode.TreeItem {
    constructor(public readonly job, public readonly source) {
        super(`Job #${job.id}`, vscode.TreeItemCollapsibleState.Collapsed);
        this.tooltip = source;
        this.description = job.submitted.toString();

        this.command = {
            command: 'boalang.showJob',
            arguments: [getJobUri(job.id)],
            title: 'show job',
        };

        if (job.compilerStatus == CompilerStatus.KILLED || job.executionStatus == ExecutionStatus.KILLED) {
            this.iconPath = new vscode.ThemeIcon('close');
        } else if (job.executionStatus == ExecutionStatus.ERROR) {
           this.iconPath = new vscode.ThemeIcon('bug');
        } else if (job.compilerStatus == CompilerStatus.ERROR) {
           this.iconPath = new vscode.ThemeIcon('bracket-error');
        } else if (job.isRunning) {
           this.iconPath = new vscode.ThemeIcon('pulse');
        } else {
           this.iconPath = new vscode.ThemeIcon('pass');
        }
    }
}