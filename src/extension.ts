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
import { getDatasets, showJob, runQuery } from './boa';
import { AuthSettings } from './credentials';
import { treeProvider } from './treeprovider';
import { BoaCodelensProvider } from './codelens';

function refreshJobs(uri:vscode.Uri) {
    treeProvider.refresh();
}

// this method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    // initialize password storage
    AuthSettings.init(context);

    getDatasets();

    // register all commands
    context.subscriptions.push(vscode.commands.registerCommand('boalang.showJob', showJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.refreshJobs', refreshJobs));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runQuery', runQuery));

    context.subscriptions.push(vscode.languages.registerCodeLensProvider("boalang", new BoaCodelensProvider()));

    // set up the job list TreeView
    vscode.window.registerTreeDataProvider('boalang.jobList', treeProvider);
}

// this method is called when the extension is deactivated
export function deactivate() {
}