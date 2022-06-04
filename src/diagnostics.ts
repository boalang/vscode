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

let diagnosticCollection: vscode.DiagnosticCollection;

export function enableDiagnostics(context: vscode.ExtensionContext) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection('boalang');
    context.subscriptions.push(diagnosticCollection);
}

export function reportErrors(uri: vscode.Uri, errors: [string]) {
    diagnosticCollection.clear();

    let diagnostics = errors.map((err) => errorToDiagnostic(err));

    if (diagnostics.length > 0) {
        diagnosticCollection.set(uri, diagnostics);
    }
}

const lexRegex = /Lexical error at line (\d+), columns? (\d+)(?:-(\d+))?\.\s*(.*)\s*/;
const parseRegex = /Encountered .* at line (\d+), columns? (\d+)(?:-(\d+))?\.\s*(.*)\s*/;
const typeRegex = /Error at lines (\d+)-(\d+), columns (\d+)-(\d+):\s*(.*)\s*/;

function errorToDiagnostic(error: string): vscode.Diagnostic {
    let errStr = error;
    let start = new vscode.Position(0, 0);
    let end = new vscode.Position(0, 0);

    let matches = lexRegex.exec(error);
    if (matches) {
        errStr = matches[4];
        const line = parseInt(matches[1]) - 1;
        const col1 = parseInt(matches[2]);
        const col2 = parseInt(matches[3]) + 1;
        start = new vscode.Position(line, col1);
        end = new vscode.Position(line, col2 > 0 ? col2 : col1 + 1);
    } else {
        matches = parseRegex.exec(error);
        if (matches) {
            errStr = matches[4];
            const line = parseInt(matches[1]) - 1;
            const col1 = parseInt(matches[2]);
            const col2 = parseInt(matches[3]) + 1;
            start = new vscode.Position(line, col1);
            end = new vscode.Position(line, col2 > 0 ? col2 : col1 + 1);
        } else {
            matches = typeRegex.exec(error);
            if (matches) {
                errStr = matches[5];
                start = new vscode.Position(parseInt(matches[1]) - 1, parseInt(matches[3]));
                end = new vscode.Position(parseInt(matches[2]) - 1, parseInt(matches[4]) + 1);
            }
        }
    }

    console.log(start);
    console.log(end);
    return new vscode.Diagnostic(new vscode.Range(start, end), errStr);
}