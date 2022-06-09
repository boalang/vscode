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

export default class StudyConfigCodelensProvider implements vscode.CodeLensProvider {
    public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
        const lenses = [];
        const docPath = document.uri.fsPath.substring(0, document.uri.fsPath.lastIndexOf('/'));

        // looks for the analysis section, e.g.: "analyses": {
        for (const output of document.getText().matchAll(/"analyses"\s*:\s*{/g)) {
            const range = new vscode.Range(document.positionAt(output.index), document.positionAt(output.index + 1));
            lenses.push(new vscode.CodeLens(range, {
                title: '$(run-all) Run All Analyses',
                command: 'boalang.template.make'
            }));

            lenses.push(new vscode.CodeLens(range, {
                title: '$(trash) Clean Analysis Output',
                tooltip: 'Cleans all tables and figures',
                command: 'boalang.template.clean'
            }));
        }

        // looks for the analysis section, e.g.: "queries": {
        for (const output of document.getText().matchAll(/"queries"\s*:\s*{/g)) {
            const range = new vscode.Range(document.positionAt(output.index), document.positionAt(output.index + 1));
            lenses.push(new vscode.CodeLens(range, {
                title: '$(graph) Generate All Data',
                tooltip: 'Runs queries, downloads outputs, and converts to CSV as necessary',
                command: 'boalang.template.generateData'
            }));

            lenses.push(new vscode.CodeLens(range, {
                title: '$(trash) Clean All Data',
                tooltip: 'Cleans all downloaded and generated output files',
                command: 'boalang.template.cleanData'
            }));
        }

        // looks for query outputs, e.g.: "kotlin/rq1.txt": {
        for (const output of document.getText().matchAll(/"([^"]+\.txt)"\s*:\s*{/g)) {
            const range = new vscode.Range(document.positionAt(output.index + 1), document.positionAt(output.index + 1 + output[1].length));
            lenses.push(new vscode.CodeLens(range, {
                title: '$(cloud-download) Download Output',
                tooltip: 'Make sure this output is up to date and downloaded',
                command: 'boalang.template.downloadOutput',
                arguments: [output[1]]
            }));

            lenses.push(new vscode.CodeLens(range, {
                title: '$(trash) Clean Output',
                tooltip: `Cleans downloaded and generated output files for ${consts.outputPath}/${output[1]}`,
                command: 'boalang.template.cleanOutput',
                arguments: [output[1]]
            }));
        }

        // looks for CSV files, e.g.: "csv": "kotlin/dupes.csv"
        for (const csv of document.getText().matchAll(/"([^"]+\.csv)"/g)) {
            const range = new vscode.Range(document.positionAt(csv.index + 1), document.positionAt(csv.index + 1 + csv[1].length));
            lenses.push(new vscode.CodeLens(range, {
                title: '$(table) Generate CSV',
                tooltip: 'Generates the CSV output - this might trigger a download on the input',
                command: 'boalang.template.generateCSV',
                arguments: [csv[1]]
            }));
        }

        // looks for dupes output files, e.g.: "output": "kotlin/dupes.txt",
        for (const output of document.getText().matchAll(/"output"\s*:\s*"([^"]+\.txt)"/g)) {
            const range = new vscode.Range(document.positionAt(output.index + 1), document.positionAt(output.index + 1 + output[1].length));
            lenses.push(new vscode.CodeLens(range, {
                title: '$(list-filter) Generate Dupes',
                tooltip: 'Generates the Dupes output - this might trigger a download on the input',
                command: 'boalang.template.generateDupes',
                arguments: [output[1]]
            }));
        }

        // looks for analyses, e.g.: "rq1.py": {
        for (const target of document.getText().matchAll(/"([^"]+)\.py"\s*:/g)) {
            const range = new vscode.Range(document.positionAt(target.index + 1), document.positionAt(target.index + 1 + target[1].length));
            lenses.push(new vscode.CodeLens(range, {
                title: '$(play) Run Analysis',
                tooltip: 'Runs the selected analysis script - this will download all inputs',
                command: 'boalang.template.runAnalysis',
                arguments: [target[1]]
            }));
        }

        return lenses;
    }
}
