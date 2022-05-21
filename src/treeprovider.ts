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

export class BoaJobsProvider implements vscode.TreeDataProvider<BoaJob> {
    getTreeItem(element: BoaJob): vscode.TreeItem {
        return element;
    }

    getChildren(element?: BoaJob): Thenable<BoaJob[]> {
        // jobs have no children
        if (element) {
            return Promise.resolve([]);
        }

        // the root lists the jobs
        return Promise.resolve([
            new BoaJob('32982398'),
            new BoaJob('32982394'),
            new BoaJob('32982698'),
            new BoaJob('32982098'),
        ]);
    }
}

class BoaJob extends vscode.TreeItem {
    constructor(public readonly id: string) {
        super('BoaJob#' + id, vscode.TreeItemCollapsibleState.None);
        // this.tooltip = `BoaJob#${this.label}`;
        // this.description = this.version;
        // this.command = vscode.commands.getCommand('boalang.jobinfo')
    }
    // iconPath = new vscode.ThemeIcon('bold');
}