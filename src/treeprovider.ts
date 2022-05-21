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

class BoaJobsProvider implements vscode.TreeDataProvider<BoaJob> {
	private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

    private start = 0;
    private length = 10;
    private jobs = [];

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

    clear() {
        this.jobs = [];
    }

    append(item) {
        this.jobs.push(new BoaJob(item));
    }

    async refresh() {
        await refreshJobs(this, this.start, this.length);
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