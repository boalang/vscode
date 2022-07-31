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
import { getDatasets } from '../boa';
import { adminPrefix } from '../consts';
import { removeDuplicates } from '../utils';
import * as consts from './consts';
import { cache } from './jsoncache';

export class DatasetActionProvider implements vscode.CodeActionProvider {
    async provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): Promise<vscode.CodeAction[]> {
        const datasets = await getDatasets(false);
        if (datasets === null || datasets.length == 0) {
            return [];
        }
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === consts.CODE_INVALID_DS)
            .map(diagnostic => datasets.map(ds => createReplaceCodeAction(diagnostic, cache.uri, ds.replace(adminPrefix, ''))))
            .flat();
    }
}

export class StudyDatasetActionProvider implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
        const datasetNames = cache.getDatasets();
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === consts.CODE_UNKNOWN_STUDY_DS)
            .map(diagnostic => datasetNames.map(ds => createReplaceCodeAction(diagnostic, cache.uri, ds)))
            .flat();
    }
}

function createReplaceCodeAction(diagnostic: vscode.Diagnostic, uri: vscode.Uri, replacement: string): vscode.CodeAction {
    const action = new vscode.CodeAction(`Replace with "${replacement}"`, vscode.CodeActionKind.QuickFix);
    action.diagnostics = [diagnostic];
    action.edit = new vscode.WorkspaceEdit();
    action.edit.replace(uri, diagnostic.range, replacement);
    return action;
}

export class TemplateTagActionProvider implements vscode.CodeActionProvider {
    async provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): Promise<vscode.CodeAction[]> {
        const items = []

        const substitutions = cache.getSubstitutions();
        let alltags = Object.keys(substitutions.substitutions);

        for (const filename in substitutions) {
            if (filename != 'substitutions' && document.fileName.endsWith(filename)) {
                for (const items of substitutions[filename]) {
                    alltags = alltags.concat(Object.keys(items));
                }
            }
        }
        alltags = removeDuplicates(alltags);
        alltags.sort();

        return context.diagnostics
            .filter(diagnostic => diagnostic.code === consts.CODE_UNKNOWN_TEMPLATE_TAG)
            .map(diagnostic => alltags.map(tag => createReplaceCodeAction(diagnostic, document.uri, tag)).concat(createMakeTagCodeAction(diagnostic, document.uri, document.getText(diagnostic.range))))
            .flat();
    }
}

function createMakeTagCodeAction(diagnostic: vscode.Diagnostic, uri: vscode.Uri, tag: string): vscode.CodeAction {
    const action = new vscode.CodeAction(`Create global tag "${tag}"`, vscode.CodeActionKind.QuickFix);
    action.diagnostics = [diagnostic];
    action.command = {
        command: 'boalang.template.addtag',
        title: action.title,
        arguments: [tag],
    }
    return action;
}