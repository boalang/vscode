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
import { StudyConfigCompletionItemProvider, TemplateCompletionItemProvider } from './completions';
import SubstitutionHoverProvider from './hoverproviders';
import { JobsJSONLinkProvider, StudyConfigJSONLinkProvider } from './linkproviders';
import StudyConfigCodelensProvider from './codelens';
import { showUri } from '../boa';
import { cache } from './jsoncache';
import { boaDocumentProvider } from '../contentprovider';
import { enableDiagnostics, checkStudyConfig } from './diagnostics';
import { reportDocumentErrors } from '../diagnostics';
import { BoaTemplateRefactoringProvider, extractSnippet } from './refactor';
import TemplateTagRenameProvider from './renames';
import TemplateTagHighlightProvider from './highlights';
import { TemplateTagSymbolProvider } from './symbols';

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

    context.subscriptions.push(vscode.commands.registerCommand('boalang.refactor.template.extract', extractSnippet));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.preview', showPreview));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.downloadOutput', filename => runMakeCommand(`${consts.outputPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.generateCSV', filename => runMakeCommand(`${consts.csvPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.runProcessor', filename => runMakeCommand(`${filename}`)));
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
    context.subscriptions.push(vscode.commands.registerCommand('boalang.template.addtag', tag => cache.addTemplateTag(tag)));

    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(jobsSelector, new JobsJSONLinkProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(studyConfigSelector, new StudyConfigJSONLinkProvider()));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(studyConfigSelector, new StudyConfigCompletionItemProvider(), '\"', ':'));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('boalang', new TemplateCompletionItemProvider(), '@'));

    context.subscriptions.push(vscode.languages.registerCodeLensProvider(studyConfigSelector, new StudyConfigCodelensProvider()));

    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider('boalang', new TemplateTagSymbolProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentHighlightProvider('boalang', new TemplateTagHighlightProvider()));

    context.subscriptions.push(vscode.languages.registerHoverProvider('boalang', new SubstitutionHoverProvider()));

    context.subscriptions.push(vscode.languages.registerCodeActionsProvider('boalang', new BoaTemplateRefactoringProvider(), {
        providedCodeActionKinds: [vscode.CodeActionKind.RefactorExtract]
    }));

    context.subscriptions.push(vscode.languages.registerRenameProvider('boalang', new TemplateTagRenameProvider()));
    context.subscriptions.push(vscode.languages.registerRenameProvider(studyConfigSelector, new TemplateTagRenameProvider()));

    enableDiagnostics(context, studyConfigSelector);

    vscode.workspace.onDidRenameFiles(e => {
        checkStudyConfig();
    });

    // watch jobs.json for changes, then refresh the jobs list
    const watcher = vscode.workspace.createFileSystemWatcher(getWorkspaceRoot() + '/' + jobsFile, false, false, true);
    context.subscriptions.push(watcher);

    watcher.onDidChange(() => vscode.commands.executeCommand('boalang.joblist.refreshIfLoaded'));
    watcher.onDidCreate(() => vscode.commands.executeCommand('boalang.joblist.refreshIfLoaded'));

    cache.onDidChange(e => {
        Object.keys(previewMap).forEach(
            uriStr => previewMap[uriStr].forEach(
                t => boaDocumentProvider.onDidChangeEmitter.fire(vscode.Uri.parse(t))));
    });

    // live updating of previews
    vscode.workspace.onDidChangeTextDocument(e => {
        const uri = e.document.uri.toString();
        if (uri in previewMap) {
            for (const t of previewMap[uri]) {
                boaDocumentProvider.onDidChangeEmitter.fire(vscode.Uri.parse(t));
            }
        }
    })

    // cleanup preview cache
    vscode.workspace.onDidCloseTextDocument(e => {
        removePreviewCache(e.uri);
    });
    vscode.window.tabGroups.onDidChangeTabs(e => {
        for (const tab of e.closed) {
            removePreviewCache((tab.input as vscode.TabInputText)?.uri);
        }
    });
}

async function runMakeCommand(target: string, shouldRefresh = true) {
    const taskArgs: vscode.ShellQuotedString[] = [];
    if (target) {
        taskArgs.push({
            value: target,
            quoting: vscode.ShellQuoting.Escape
        });
    }
    const myTaskOptions: vscode.ShellExecutionOptions = {
        env: process.env,
        cwd: getWorkspaceRoot()
    };

    const shellExec = new vscode.ShellExecution('make', taskArgs, myTaskOptions);

    const makeTask = new vscode.Task({
        type: 'boa',
        icon: { id: 'bold', color: 'terminal.ansiRed'},
    }, vscode.TaskScope.Workspace, 'Boa study template', 'makefile', shellExec);

    await vscode.tasks.executeTask(makeTask);
    if (shouldRefresh) {
        vscode.commands.executeCommand('boalang.joblist.refreshIfLoaded');
    }
}

const previewMap: { [key: string]: string[] } = {};
export async function showPreview(uri: vscode.Uri) {
    let targetUriStr = null;
    const uriStr = uri.toString();
    const uriPath = uri.path.substring(getWorkspaceRoot().length);

    const items = cache.getQueryTargets(uri);
    if (items.length == 0) {
        targetUriStr = `boalang:///preview/from${uriPath}?${encodeURIComponent(uriStr)}#preview`;
    } else {
        const target = await vscode.window.showQuickPick(items, {
            title: 'Select the query to preview',
            ignoreFocusOut: false
        });
        if (target) {
            targetUriStr = `boalang://${encodeURIComponent(target)}/preview/${target}/from${uriPath}?${encodeURIComponent(uriStr)}#preview`;
        }
    }

    if (targetUriStr !== null) {
        if (!(uriStr in previewMap)) {
            previewMap[uriStr] = [targetUriStr];
        } else {
            if (previewMap[uriStr].indexOf(targetUriStr) == -1) {
                previewMap[uriStr].push(targetUriStr);
            }
        }
        const targetUri = vscode.Uri.parse(targetUriStr);
        boaDocumentProvider.onDidChangeEmitter.fire(targetUri);
        showUri(targetUri);
    }
}

function removePreviewCache(uri: vscode.Uri) {
    const uriStr = uri.toString();

    for (const [key, value] of Object.entries(previewMap)) {
        const idx = value.indexOf(uriStr);
        if (idx != -1) {
            value.splice(idx, 1);
        }
        if (value.length == 0) {
            delete previewMap[key];
        }
    }
    reportDocumentErrors(uri, []);
}

export async function getQuery(uri: vscode.Uri, authority: string) {
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