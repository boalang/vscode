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
import { runBoaCommands } from './boa';
import { CompilerStatus, ExecutionStatus } from '@boalang/boa-api';

let diagnosticCollection: vscode.DiagnosticCollection;
const diagsCache = new Map();

export async function enableDiagnostics(context: vscode.ExtensionContext) {
    diagnosticCollection = vscode.languages.createDiagnosticCollection('boalang');
    context.subscriptions.push(diagnosticCollection);

    vscode.window.onDidChangeVisibleTextEditors(e => {
        const editors = e.map(editor => editor.document.uri.toString());

        // remove diagnostics for closed editors
        diagnosticCollection.forEach(async (uri, diag) => {
            if (editors.indexOf(uri.toString()) == -1) {
                diagnosticCollection.set(uri, undefined);
            }
        });

        // add diagnostics for open editors
        e.map(editor => {
            const uri = editor.document.uri;
            if (uri.scheme == 'boalang' && !diagsCache.has(uri)) {
                runBoaCommands(async (client) => {
                    const job = await client.getJob(uri.authority);
                    await job.wait();
                    if (job.compilerStatus == CompilerStatus.ERROR) {
                        reportErrors(uri, await job.compilerErrors);
                    } else if (job.executionStatus == ExecutionStatus.ERROR) {
                        reportErrors(uri, ['There was a runtime error.']);
                    } else {
                        diagsCache.set(uri, undefined);
                    }
                }).then((val) => {
                    diagnosticCollection.set(uri, diagsCache.get(uri));
                });
            } else {
                diagnosticCollection.set(uri, diagsCache.get(uri));
            }
        })
    });
}

export function reportErrors(uri: vscode.Uri, errors: [string]) {
    let diagnostics = errors.map((err) => errorToDiagnostic(err));

    if (diagnostics.length > 0) {
        diagsCache.set(uri, diagnostics);
    } else {
        diagsCache.set(uri, undefined);
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

    return new vscode.Diagnostic(new vscode.Range(start, end), errStr);
}