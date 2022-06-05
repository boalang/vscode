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
import * as consts from './consts';
import { JobsJSONLinkProvider, StudyConfigJSONLinkProvider } from './studytemplate/linkproviders';
import { StudyConfigCodelensProvider } from './studytemplate/StudyConfigCodelensProvider';
import { StudyConfigCompletionItemProvider } from './studytemplate/StudyConfigCompletionItemProvider';

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

    context.subscriptions.push(vscode.commands.registerCommand('boalang.downloadOutput', function downloadOuput(filename) {
        const terminal = vscode.window.createTerminal(`Boa makefile command`);
        terminal.show(false);
        terminal.sendText(`make ${consts.outputPath}/${filename}`);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.generateCSV', function generateCSV(filename) {
        const terminal = vscode.window.createTerminal(`Boa makefile command`);
        terminal.show(false);
        terminal.sendText(`make ${consts.csvPath}/${filename}`);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.generateDupes', function generateDupes(filename) {
        const terminal = vscode.window.createTerminal(`Boa makefile command`);
        terminal.show(false);
        terminal.sendText(`make ${consts.outputPath}/${filename}`);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runAnalysis', function runAnalysis(target) {
        const terminal = vscode.window.createTerminal(`Boa makefile command`);
        terminal.show(false);
        terminal.sendText(`make ${target}`);
    }));

    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(jobsSelector, new JobsJSONLinkProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(studyConfigSelector, new StudyConfigJSONLinkProvider()));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(studyConfigSelector, new StudyConfigCompletionItemProvider(), '\"'));

    context.subscriptions.push(vscode.languages.registerCodeLensProvider(studyConfigSelector, new StudyConfigCodelensProvider()));
}