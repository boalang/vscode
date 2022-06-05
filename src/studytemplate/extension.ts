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
import { JobsJSONLinkProvider, StudyConfigJSONLinkProvider } from './linkproviders';
import { StudyConfigCodelensProvider } from './StudyConfigCodelensProvider';
import { StudyConfigCompletionItemProvider } from './StudyConfigCompletionItemProvider';

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

    context.subscriptions.push(vscode.commands.registerCommand('boalang.downloadOutput', filename => runMakeCommand(`${consts.outputPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.generateCSV', filename => runMakeCommand(`${consts.csvPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.generateDupes', filename => runMakeCommand(`${consts.outputPath}/${filename}`)));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runAnalysis', target => runMakeCommand(target)));

    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(jobsSelector, new JobsJSONLinkProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(studyConfigSelector, new StudyConfigJSONLinkProvider()));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(studyConfigSelector, new StudyConfigCompletionItemProvider(), '\"'));

    context.subscriptions.push(vscode.languages.registerCodeLensProvider(studyConfigSelector, new StudyConfigCodelensProvider()));
}

async function runMakeCommand(target) {
    let taskCommand: vscode.ShellQuotedString = {value: 'make', quoting: vscode.ShellQuoting.Strong};
    let taskArgs: vscode.ShellQuotedString[] = [{value: target, quoting: vscode.ShellQuoting.Strong}];

    const cwd: string = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';
    let myTaskOptions: vscode.ShellExecutionOptions = {env: process.env, cwd};

    const makefileBuildTaskName = 'Boa template make tasks';

    let shellExec = new vscode.ShellExecution(taskCommand, taskArgs, myTaskOptions);
    let makeTask = new vscode.Task({type: 'shell', group: 'build', label: makefileBuildTaskName}, vscode.TaskScope.Workspace, makefileBuildTaskName, 'makefile', shellExec);

    await vscode.tasks.executeTask(makeTask);
}