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
import { getDatasets, showJob, runQuery, showOutput, showFullOutput } from './boa';
import { AuthSettings } from './credentials';
import { treeProvider } from './treeprovider';
import { BoaSourceCodelensProvider } from './codelens';
import { activateStudyTemplateSupport } from './studytemplate';

// this method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    // initialize password storage
    AuthSettings.init(context);

    getDatasets();

    // create channel to show query outputs
    const output = vscode.window.createOutputChannel('Boa: Query Output', 'boalang');
    context.subscriptions.push(output);

    // register all commands
    context.subscriptions.push(vscode.commands.registerCommand('boalang.showJob', showJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.prevPage', () => treeProvider.prevPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.nextPage', () => treeProvider.nextPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.refreshJobs', () => treeProvider.refresh()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runQuery', runQuery));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.showOutput', showOutput(output)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.showFullOutput', showFullOutput));

    context.subscriptions.push(vscode.languages.registerCodeLensProvider('boalang', new BoaSourceCodelensProvider()));

    activateStudyTemplateSupport(context);

    // set up the job list TreeView
    context.subscriptions.push(treeProvider.setView(vscode.window.createTreeView('boalang.jobList', {
        treeDataProvider: treeProvider
    })));

    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('boalang.joblist.pagesize')) {
            vscode.commands.executeCommand('boalang.refreshJobs');
        }
    })
}

// this method is called when the extension is deactivated
export function deactivate() {
}