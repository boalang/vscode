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
import * as consts from '../consts';
import { jobsFile } from '../consts';
import { getFileContents, getWorkspaceRoot, promptUser } from '../utils';
import BoaCompletionItemProvider from './BoaCompletionItemProvider';
import SubstitutionHoverProvider from './SubstitutionHoverProvider';
import { JobsJSONLinkProvider, StudyConfigJSONLinkProvider } from './linkproviders';
import StudyConfigCodelensProvider from './StudyConfigCodelensProvider';
import StudyConfigCompletionItemProvider from './StudyConfigCompletionItemProvider';
import { showUri } from '../boa';
import { cache } from './StudyConfigCache';
import { boaDocumentProvider } from '../contentprovider';
import { enableDiagnostics } from './StudyConfigDiagnostics';

export function activateStudyTemplateSupport(context: vscode.ExtensionContext) {
    const jobsSelector: vscode.DocumentSelector = {
        language: 'json',
        scheme: 'file',
        pattern: '**/jobs.json',
    };
    const studyConfigSelector: vscode.DocumentSelector = {
        language: 'json',
        scheme: 'file',
        pattern: '**/study-config.json',
    };

    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.preview', showPreview));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.downloadOutput', filename => runMakeCommand(`${consts.outputPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.generateCSV', filename => runMakeCommand(`${consts.csvPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.generateDupes', filename => runMakeCommand(`${consts.outputPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.runAnalysis', target => runMakeCommand(target)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.generateData', _ => runMakeCommand('data')));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.clean', _ => runMakeCommand('clean', false)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.cleanData', async _ => {
        if (await promptUser('This deletes *all* output files. Are you sure you want to do this?')) {
            runMakeCommand('clean-data', false);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.cleanOutput', filename => runMakeCommand(`clean-${consts.outputPath}/${filename}`, false)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.make', _ => runMakeCommand(undefined)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.zip', _ => runMakeCommand('zip', false)));

    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(jobsSelector, new JobsJSONLinkProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(studyConfigSelector, new StudyConfigJSONLinkProvider()));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(studyConfigSelector, new StudyConfigCompletionItemProvider(), '\"'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('boalang', new BoaCompletionItemProvider(), '@'));

    context.subscriptions.push(vscode.languages.registerCodeLensProvider(studyConfigSelector, new StudyConfigCodelensProvider()));

    context.subscriptions.push(vscode.languages.registerHoverProvider('boalang', new SubstitutionHoverProvider()));

    enableDiagnostics(context, studyConfigSelector);

    // watch jobs.json for changes, then refresh the jobs list
    const watcher = vscode.workspace.createFileSystemWatcher(getWorkspaceRoot() + '/' + jobsFile, false, false, true);
    context.subscriptions.push(watcher);

    watcher.onDidChange(() => vscode.commands.executeCommand('boalang.joblist.refresh'));
    watcher.onDidCreate(() => vscode.commands.executeCommand('boalang.joblist.refresh'));

    cache.onDidChange(e => {
        Object.keys(previewMap).forEach(
            uriStr => previewMap[uriStr].forEach(
                t => boaDocumentProvider.onDidChangeEmitter.fire(vscode.Uri.parse(t))));
    });
}

async function runMakeCommand(target, shouldRefresh = true) {
    let taskCommand: vscode.ShellQuotedString = {value: 'make', quoting: vscode.ShellQuoting.Strong};
    let taskArgs: vscode.ShellQuotedString[] = [];
    if (target) {
        taskArgs.push({value: target, quoting: vscode.ShellQuoting.Strong});
    }

    let myTaskOptions: vscode.ShellExecutionOptions = {env: process.env, cwd: getWorkspaceRoot()};

    const makefileBuildTaskName = 'Boa template make tasks';

    let shellExec = new vscode.ShellExecution(taskCommand, taskArgs, myTaskOptions);
    let makeTask = new vscode.Task({type: 'shell', group: 'build', label: makefileBuildTaskName}, vscode.TaskScope.Workspace, makefileBuildTaskName, 'makefile', shellExec);

    await vscode.tasks.executeTask(makeTask);
    if (shouldRefresh) {
        vscode.commands.executeCommand('boalang.joblist.first');
    }
}

let previewMap: { [key: string]: [string] } = {};
export async function showPreview(uri) {
    let targetUri = null;
    const uriStr = uri.toString();
    const uriPath = uri.path.substring(getWorkspaceRoot().length);

    const items = cache.getQueryTargets(uri);
    if (items.length == 0) {
        targetUri = `boalang:///preview/from${uriPath}?${uriStr}#preview`;
    } else {
        const target = await vscode.window.showQuickPick(items, {
            title: 'Select the query to preview',
            ignoreFocusOut: false
        });
        if (target) {
            targetUri = `boalang://${encodeURIComponent(target)}/preview/${target}/from${uriPath}?${uriStr}#preview`;
        }
    }

    if (targetUri != null) {
        if (!(uriStr in previewMap)) {
            previewMap[uriStr] = [targetUri];
            vscode.workspace.onDidChangeTextDocument(e => {
                if (e.document.uri.toString() == uriStr) {
                    for (const t of previewMap[uriStr]) {
                        boaDocumentProvider.onDidChangeEmitter.fire(vscode.Uri.parse(t));
                    }
                }
            })
        } else {
            if (previewMap[uriStr].indexOf(targetUri) == -1) {
                previewMap[uriStr].push(targetUri);
            }
        }
        showUri(vscode.Uri.parse(targetUri));
    }
}

export async function getQuery(uri: vscode.Uri, authority) {
    let query = '';
    if (uri.scheme == 'untitled' || uri.scheme == 'boalang') {
        query = vscode.window.activeTextEditor.document.getText();
    } else {
        const dirty = vscode.workspace.textDocuments.filter((doc) => doc.uri.toString() == uri.toString() && doc.isDirty);
        if (dirty.length == 1) {
            query = dirty[0].getText();
        } else {
            query = await getFileContents(uri.fsPath);
        }
    }

    const subs = await cache.resolveSubstitutions(decodeURIComponent(authority));
    return await cache.performSubstitutions(query, subs);
}