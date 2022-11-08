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
import { ExpressionContext, OperandContext } from './antlr/boaParser';

export function getWorkspaceRoot() {
    return vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';
}

export function removeDuplicates(src: string[]) : string[] {
    const seen: {[key: string]: boolean} = {};
    const result: string[] = [];
    src.forEach(item => {
        if (!seen[item]) {
            seen[item] = true;
            result.push(item);
        }
    });

    return result;
}

export async function promptUser(message: string) {
    const chosen = await vscode.window.showErrorMessage<vscode.MessageItem>(message,
        { title: 'Yes', isCloseAffordance: false },
        { title: 'No', isCloseAffordance: true });

    return chosen !== undefined && chosen.title === 'Yes';
}

export async function getFileContents(path: string): Promise<string> {
    return vscode.workspace.fs.readFile(vscode.Uri.file(path)).then(
        (val) => {
            return val.toString();
        }
    );
}

export function atDot(document: vscode.TextDocument, position: vscode.Position) {
    const r = document.getWordRangeAtPosition(position, /[\s.]+/);
    return document.getText(r).trim() === '.';
}

export function getOperand(e: ExpressionContext|undefined): OperandContext|undefined {
    if (e === undefined) return undefined;
    return e.conjunction(0).comparison(0).simpleExpression(0).term(0).factor(0).operand();
}

export function getAnalysesRange(document: vscode.TextDocument) {
    var analysesEnd = -1;
    var analysesStart = -1;

    const text = document.getText();
    const analyses = text.match(/"analyses"\s*:\s*{/);

    if (analyses) {
        analysesStart = analyses.index + analyses[0].length + 1;
        var brackets = 1;
        for (analysesEnd = analysesStart; analysesEnd < text.length; analysesEnd++) {
            const char = text.charAt(analysesEnd);
            if (char == '}') {
                brackets--;
            } else if (char == '{') {
                brackets++;
            }
            if (brackets == 0) {
                break;
            }
        }
    }
    return { analysesStart, analysesEnd };
}