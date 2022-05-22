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
import { getJobUri, refreshJobs } from './boa';

class BoaJobsProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
	private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

    private start = 0;
    private max = 0;
    private jobs = [];
    private view = null;

    constructor() {
        vscode.commands.executeCommand('setContext', 'boalang.prevPageEnabled', false);
        vscode.commands.executeCommand('setContext', 'boalang.nextPageEnabled', false);
    }

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        // jobs have no children
        if (element instanceof BoaJob) {
            console.log(element.job);
            return Promise.resolve([
                new vscode.TreeItem(element.job.input.name),
                new vscode.TreeItem('compile: ' + element.job.compilerStatus),
                new vscode.TreeItem('exec: ' + element.job.executionStatus),
            ]);
        }

        // the root lists the jobs
        return Promise.resolve(this.jobs);
    }

    length() {
        return vscode.workspace.getConfiguration('boalang').get('joblist.pagesize', 10);
    }

    setView(view) {
        this.view = view;
        return view;
    }

    setMax(max) {
        this.max = max;
        if (this.start > this.max) {
            this.start = this.max - this.length();
            this.refresh();
        }
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

    clear() {
        this.jobs = [];
    }

    async append(job) {
        this.jobs.push(new BoaJob(job, await job.source));
        this.jobs.sort((a, b) => b.label.localeCompare(a.label))
        this.changed();
    }

    async refresh() {
        await refreshJobs(this, this.start, this.length());
        this.changed();
    }

    changed() {
        vscode.commands.executeCommand('setContext', 'boalang.prevPageEnabled', this.start > 0);
        vscode.commands.executeCommand('setContext', 'boalang.nextPageEnabled', this.start + this.length() < this.max);
        this.view.title = `Boa: Jobs ${this.start + 1}-${this.start + this.length()} (${this.max})`;
        this._onDidChangeTreeData.fire(undefined);
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
    }
    // iconPath = new vscode.ThemeIcon('bold');
}