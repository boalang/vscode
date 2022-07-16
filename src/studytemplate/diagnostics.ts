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
import { adminPrefix, analysesPath, scriptPath } from '../consts';
import { getWorkspaceRoot } from '../utils';
import { DatasetActionProvider, StudyDatasetActionProvider } from './codeactions';
import { cache } from './jsoncache';
import * as consts from './consts';

let diagnosticCollection: vscode.DiagnosticCollection;

export default async function enableDiagnostics(context: vscode.ExtensionContext, studyConfigSelector: vscode.DocumentSelector) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection(studyConfigSelector.toString());
    context.subscriptions.push(diagnosticCollection);

    cache.onDidChange(e => checkStudyConfig());
    onDatasetsChange(e => { if (e !== null) checkStudyConfig(); });

    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(studyConfigSelector, new DatasetActionProvider(), {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
    }));

    context.subscriptions.push(vscode.languages.registerCodeActionsProvider(studyConfigSelector, new StudyDatasetActionProvider(), {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix]
    }));
}

async function checkStudyConfig() {
    const diags = [];

    const datasets = await getDatasets(false);

    if (datasets !== null && datasets.length > 0) {
        for (const dsName in cache.json['datasets']) {
            const ds = cache.json['datasets'][dsName];
            if (datasets.indexOf(ds) == -1 && datasets.indexOf(adminPrefix + ds) == -1) {
                diags.push(makeJsonDiagnostic(ds, dsName, consts.CODE_INVALID_DS, `"${ds}" is not a valid Boa dataset.`));
            }
        }
    }

    const datasetNames = cache.getDatasets();

    for (const outputPath in cache.json['queries']) {
        const ds = cache.json['queries'][outputPath]['dataset'];
        if (datasetNames.indexOf(ds) == -1) {
            diags.push(makeJsonDiagnostic(ds, outputPath, consts.CODE_UNKNOWN_STUDY_DS, `"${ds}" is not a valid study dataset. Current study datasets are: ${datasetNames.join(', ')}`));
        }
    }

    for (const outputPath in cache.json['queries']) {
        const q = cache.json['queries'][outputPath]['query'];
        try {
            await vscode.workspace.fs.stat(vscode.Uri.file(getWorkspaceRoot() + '/' + scriptPath + '/' + q));
        } catch {
            diags.push(makeJsonDiagnostic(q, outputPath, consts.CODE_BAD_QUERY, `The Boa query "${q}" does not exist in the "${scriptPath}/" folder.`));
        }
    }

    for (const analysis in cache.json['analyses']) {
        try {
            await vscode.workspace.fs.stat(vscode.Uri.file(getWorkspaceRoot() + '/' + analysesPath + '/' + analysis));
        } catch {
            diags.push(makeJsonDiagnostic(analysis, analysis, consts.CODE_BAD_ANALYSIS, `The analysis script "${analysis}" does not exist in the "${analysesPath}/" folder.`));
        }
    }

    diagnosticCollection.set(cache.uri, diags);
}

function makeJsonDiagnostic(badStr: string, jsonKey: string, code, err) {
    const rawJson = cache.raw;

    badStr = '"' + badStr + '"';

    const idx = rawJson.indexOf(badStr, rawJson.indexOf('"' + jsonKey + '"'));
    const splits = rawJson.slice(0, idx + badStr.length).split('\n');

    const line = splits.length - 1;
    const col = splits.pop().indexOf(badStr);

    const diag = new vscode.Diagnostic(new vscode.Range(line, col + 1, line, col + badStr.length - 1), err, vscode.DiagnosticSeverity.Error);
    diag.code = code;
    diag.source = 'boa';
    return diag;
}