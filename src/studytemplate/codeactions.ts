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
            .map(diagnostic => datasets.map(ds => createCodeAction(diagnostic, ds.replace(adminPrefix, ''))))
            .flat();
    }
}

export class StudyDatasetActionProvider implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
        const datasetNames = cache.getDatasets();
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === consts.CODE_UNKNOWN_STUDY_DS)
            .map(diagnostic => datasetNames.map(ds => createCodeAction(diagnostic, ds)))
            .flat();
    }
}

function createCodeAction(diagnostic: vscode.Diagnostic, ds: string): vscode.CodeAction {
    const action = new vscode.CodeAction('replace with: ' + ds, vscode.CodeActionKind.QuickFix);
    action.diagnostics = [diagnostic];
    action.edit = new vscode.WorkspaceEdit();
    action.edit.replace(cache.uri, diagnostic.range, ds);
    return action;
}