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
import { getDatasets, onDatasetsChange } from '../boa';
import { adminPrefix } from '../consts';
import { cache } from './StudyConfigCache';

const CODE_INVALID_DS = 'invalid-dataset';
const CODE_UNKNOWN_STUDY_DS = 'unknown-study-dataset';

let diagnosticCollection: vscode.DiagnosticCollection;

export async function enableDiagnostics(context: vscode.ExtensionContext, studyConfigSelector: vscode.DocumentSelector) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection(studyConfigSelector.toString());
    context.subscriptions.push(diagnosticCollection);

    cache.onDidChange(e => checkStudyConfig());
    onDatasetsChange(e => checkStudyConfig());

    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(studyConfigSelector, new DatasetActionProvider(), {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
    }));

    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(studyConfigSelector, new StudyDatasetActionProvider(), {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
    }));
}

export async function checkStudyConfig() {
    const diags = [];

    const datasets = await getDatasets();

    for (const dsidx in cache.json['datasets']) {
        const ds = cache.json['datasets'][dsidx];
        if (datasets.indexOf(ds) == -1 && datasets.indexOf(adminPrefix + ds) == -1) {
            const idx = cache.raw.indexOf('"' + ds + '"', cache.raw.indexOf('"' + dsidx + '"'));
            const splits = cache.raw.slice(0, idx + ds.length + 2).split('\n');

            const line = splits.length - 1;
            const col = splits.pop().indexOf('"' + ds + '"');
            const diag = new vscode.Diagnostic(
                new vscode.Range(line, col + 1, line, col + 1 + ds.length),
                '"' + ds + '" is not a valid Boa dataset.',
                vscode.DiagnosticSeverity.Error
            );
            diag.code = CODE_INVALID_DS;
            diag.source = 'boa';
            diags.push(diag);
        }
    }

    const datasetNames = cache.getDatasets();

    for (const dsidx in cache.json['queries']) {
        const query = cache.json['queries'][dsidx];
        const ds = query['dataset'];
        if (datasetNames.indexOf(ds) == -1) {
            const idx = cache.raw.indexOf('"' + ds + '"', cache.raw.indexOf('"' + dsidx + '"'));
            const splits = cache.raw.slice(0, idx + ds.length + 2).split('\n');

            const line = splits.length - 1;
            const col = splits.pop().indexOf('"' + ds + '"');
            const diag = new vscode.Diagnostic(
                new vscode.Range(line, col + 1, line, col + 1 + ds.length),
                '"' + ds + '" is not a valid study dataset.' + ' Current study datasets are: ' + datasetNames.join(', '),
                vscode.DiagnosticSeverity.Error
            );
            diag.code = CODE_UNKNOWN_STUDY_DS;
            diag.source = 'boa';
            diags.push(diag);
        }
    }

    diagnosticCollection.set(cache.uri, diags);
}

export class DatasetActionProvider implements vscode.CodeActionProvider {
	async provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): Promise<vscode.CodeAction[]> {
        const datasets = await getDatasets();
        return context.diagnostics
			.filter(diagnostic => diagnostic.code === CODE_INVALID_DS)
			.map(diagnostic => datasets.map(ds => createCodeAction(diagnostic, ds.replace(adminPrefix, ''))))
            .flat();
	}
}

export class StudyDatasetActionProvider implements vscode.CodeActionProvider {
	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		const datasetNames = cache.getDatasets();
        return context.diagnostics
			.filter(diagnostic => diagnostic.code === CODE_UNKNOWN_STUDY_DS)
			.map(diagnostic => datasetNames.map(ds => createCodeAction(diagnostic, ds)))
            .flat();
	}
}

function createCodeAction(diagnostic: vscode.Diagnostic, ds): vscode.CodeAction {
    const action = new vscode.CodeAction('replace with: ' + ds, vscode.CodeActionKind.QuickFix);
    const edit = new vscode.WorkspaceEdit();
    edit.replace(cache.uri, diagnostic.range, ds);
    action.edit = edit;
    action.diagnostics = [diagnostic];
    return action;
}