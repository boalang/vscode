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
import { getDatasets, showJob, runQuery, showOutput, showFullOutput, downloadOutput, setFavorite, setEndpoint, viewPublicUrl, deleteJob, togglePublic, resubmitJob, closeClient, stopJob } from './boa';
import { AuthSettings, removeCredentials, resetPassword } from './credentials';
import { treeProvider } from './treeprovider';
import { activateStudyTemplateSupport } from './studytemplate/extension';
import { boaDocumentProvider } from './contentprovider';
import { enableDiagnostics } from './diagnostics';
import JobCache from './jobcache';
import { AttributeCompletionItemProvider, BuiltInsCompletionItemProvider, DSLTypesCompletionItemProvider, EnumValuesCompletionItemProvider } from './completions';
import BoaSignatureHelpProvider from './ast/signatures';
import FunctionsHoverProvider from './hoverproviders';
import BoaDefinitionProvider from './ast/definitions';
import BoaReferenceProvider from './ast/references';
import BoaDocumentHighlightProvider from './highlights';
import { BoaDocumentSymbolProvider, BoaWorkspaceSymbolProvider } from './ast/symbols';
import BoaRenameProvider from './ast/renames';
import { BoaRefactoringProvider, extractMethod } from './ast/refactor';
import { generateCFG } from './ast/cfg';
import { BoaDocumentFormatter } from './ast/formatter';

export var outputChannel: vscode.OutputChannel;

// this method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    // initialize password storage
    AuthSettings.init(context);

    getDatasets();

    enableDiagnostics(context);

    // create channel to show query outputs
    outputChannel = vscode.window.createOutputChannel('Boa: Query Output', 'boaoutput');
    context.subscriptions.push(outputChannel);

    // register all commands
    context.subscriptions.push(vscode.commands.registerCommand('boalang.setFavorite', setFavorite));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.setEndpoint', setEndpoint));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.resetLogin', removeCredentials));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runQuery', runQuery));

    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.first', () => treeProvider.firstPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.prev', () => treeProvider.prevPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.next', () => treeProvider.nextPage()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.joblist.refresh', () => treeProvider.refresh()));

    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.showSource', showJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.showOutput', showOutput()));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.showFullOutput', showFullOutput));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.downloadOutput', downloadOutput));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.viewPublicUrl', viewPublicUrl));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.delete', deleteJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.togglePublic', togglePublic));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.resubmit', resubmitJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.job.stop', stopJob));

    context.subscriptions.push(vscode.commands.registerCommand('boalang.refactor.extractfunction', extractMethod));

    context.subscriptions.push(vscode.commands.registerCommand('boalang.source.cfg', uri => generateCFG(uri, false)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.source.cfgzoom', uri => generateCFG(uri, true)));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('boalang', new BuiltInsCompletionItemProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('boalang', new EnumValuesCompletionItemProvider(), '.'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('boalang', new DSLTypesCompletionItemProvider(), ':'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('boalang', new AttributeCompletionItemProvider(), '.'));

    context.subscriptions.push(vscode.languages.registerDefinitionProvider('boalang', new BoaDefinitionProvider()));
    context.subscriptions.push(vscode.languages.registerReferenceProvider('boalang', new BoaReferenceProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentHighlightProvider('boalang', new BoaDocumentHighlightProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider('boalang', new BoaDocumentSymbolProvider()));

    context.subscriptions.push(vscode.languages.registerWorkspaceSymbolProvider(new BoaWorkspaceSymbolProvider()));

    context.subscriptions.push(vscode.languages.registerHoverProvider('boalang', new FunctionsHoverProvider()));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('boalang', new BoaSignatureHelpProvider(), '(', ','));

    context.subscriptions.push(vscode.languages.registerRenameProvider('boalang', new BoaRenameProvider()));

    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('boalang', new BoaDocumentFormatter()));

    context.subscriptions.push(vscode.languages.registerCodeActionsProvider('boalang', new BoaRefactoringProvider(), {
        providedCodeActionKinds: [vscode.CodeActionKind.RefactorExtract]
    }));

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
        } else if (event.affectsConfiguration('boalang.login.username')) {
            resetPassword();
            closeClient();
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
    closeClient();
}