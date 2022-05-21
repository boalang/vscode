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

const boaConfig = vscode.workspace.getConfiguration('boalang');

class BoaJobsProvider implements vscode.TreeDataProvider<BoaJob> {
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

    getTreeItem(element: BoaJob): vscode.TreeItem {
        return element;
    }

    getChildren(element?: BoaJob): Thenable<BoaJob[]> {
        // jobs have no children
        if (element) {
            return Promise.resolve([]);
        }

        // the root lists the jobs
        return Promise.resolve(this.jobs);
    }
    length() {
        return boaConfig.get('joblist.pagesize', 10);
    }

    setView(view) {
        this.view = view;
        return view;
    }

    setMax(max) {
        this.max = max;
    }

    async prevPage() {
        if (this.start > 0)
            this.start -= this.length();
        if (this.start < 0)
            this.start = 0;
        this.refresh();
    }

    async nextPage() {
        if (this.start + this.length() < this.max)
            this.start += this.length();
        this.refresh();
    }

    clear() {
        this.jobs = [];
    }

    append(item) {
        this.jobs.push(new BoaJob(item));
    }

    async refresh() {
        await refreshJobs(this, this.start, this.length());

        vscode.commands.executeCommand('setContext', 'boalang.prevPageEnabled', this.start > 0);
        vscode.commands.executeCommand('setContext', 'boalang.nextPageEnabled', this.start + this.length() < this.max);
        this.view.title = `Boa: Jobs ${this.start + 1}-${this.start + this.length()}/${this.max}`;
        this._onDidChangeTreeData.fire(undefined);
    }
}

export const treeProvider = new BoaJobsProvider();

class BoaJob extends vscode.TreeItem {
    constructor(public readonly job) {
        super(`Job #${job.id}`, vscode.TreeItemCollapsibleState.None);
        this.tooltip = job.submitted;
        this.command = {
            command: 'boalang.showJob',
            arguments: [getJobUri(job.id)],
            title: 'show job',
        };
    }
    // iconPath = new vscode.ThemeIcon('bold');
}