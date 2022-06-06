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
import { getDatasets, showJob, runQuery, showOutput, showFullOutput, setFavorite, viewPublicUrl, deleteJob, togglePublic, resubmitJob } from './boa';
import { AuthSettings } from './credentials';
import { treeProvider } from './treeprovider';
import { BoaSourceCodelensProvider } from './codelens';
import { activateStudyTemplateSupport } from './studytemplate/extension';
import { boaDocumentProvider } from './contentprovider';
import { enableDiagnostics } from './diagnostics';
import JobCache from './cache';

// this method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    // initialize password storage
    AuthSettings.init(context);

    getDatasets();

    enableDiagnostics(context);

    // create channel to show query outputs
    const output = vscode.window.createOutputChannel('Boa: Query Output', 'boaoutput');
    context.subscriptions.push(output);

    // register all commands
    context.subscriptions.push(vscode.commands.registerCommand('boalang.setFavorite', setFavorite));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runQuery', runQuery));

    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.first', () => treeProvider.firstPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.prev', () => treeProvider.prevPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.next', () => treeProvider.nextPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.refresh', () => treeProvider.refresh()));

    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.showSource', showJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.showOutput', showOutput(output)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.showFullOutput', showFullOutput));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.viewPublicUrl', viewPublicUrl));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.delete', deleteJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.togglePublic', togglePublic));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.resubmit', resubmitJob));


    
    context.subscriptions.push(vscode.languages.registerCodeLensProvider('boalang', new BoaSourceCodelensProvider()));

    activateStudyTemplateSupport(context);

    // set up the job list TreeView
    context.subscriptions.push(treeProvider.setView(vscode.window.createTreeView('boalang.jobList', {
        treeDataProvider: treeProvider
    })));

    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('boalang.joblist.pagesize')) {
            vscode.commands.executeCommand('boalang.joblist.refresh');
        } else if (event.affectsConfiguration('boalang.output.size')) {
            JobCache.clearOutputs();
        }
    })

    const boaConfig = vscode.workspace.getConfiguration('boalang');
    if (boaConfig.get('joblist.autoload', false)) {
        vscode.commands.executeCommand('boalang.joblist.refresh');
    }

    context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider('boalang', boaDocumentProvider));
}

// this method is called when the extension is deactivated
export function deactivate() {
}