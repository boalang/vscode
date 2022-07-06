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

let diagnosticCollection: vscode.DiagnosticCollection;

export async function enableDiagnostics(context: vscode.ExtensionContext) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection('study-config.json');
    context.subscriptions.push(diagnosticCollection);

    cache.onDidChange(e => checkStudyConfig());
    onDatasetsChange(e => checkStudyConfig());
}

export async function checkStudyConfig() {
    const diags = [];

    const datasets = await getDatasets();

    for (const idx in cache.json['datasets']) {
        const ds = cache.json['datasets'][idx];
        if (datasets.indexOf(ds) == -1 && datasets.indexOf(adminPrefix + ds) == -1) {
            const idx = cache.raw.indexOf(ds);
            const splits = cache.raw.slice(0, idx + ds.length).split('\n');

            const line = splits.length - 1;
            const col = splits.pop().indexOf(ds);
            const diag = new vscode.Diagnostic(
                new vscode.Range(line, col, line, col + ds.length),
                '"' + ds + '" is not a valid Boa dataset.',
                vscode.DiagnosticSeverity.Error
            );
            diag.code = 'invalid-dataset';
            diag.source = 'boa';
            diags.push(diag);
        }
    }

    diagnosticCollection.set(cache.uri, diags);
}