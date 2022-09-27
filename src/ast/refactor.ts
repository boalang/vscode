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
import { parseBoaCode } from './parser';
import { SymbolsVisitor } from './symbols';

export class BoaRefactoringProvider implements vscode.CodeActionProvider {
    async provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): Promise<vscode.CodeAction[]> {
        const items = [];

        let start: vscode.Position;
        let end: vscode.Position;
        if (range instanceof vscode.Selection) {
            start = range.isReversed ? range.active : range.anchor;
            end = range.isReversed ? range.anchor : range.active;
        } else if (range instanceof vscode.Range) {
            start = range.start;
            end = range.end;
        }
        range = new vscode.Range(start, end);

        if (!canExtractFunction(document, range)) {
            return items;
        }

        const action = new vscode.CodeAction('extract method', vscode.CodeActionKind.RefactorExtract);
        action.command = {
            command: 'boalang.refactor.extractfunction',
            title: action.title,
            arguments: [document, range]
        };

        items.push(action);

        return items;
    }
}

function canExtractFunction(document: vscode.TextDocument, range: vscode.Range) {
    if (range.start == range.end)                   return false;
    if (document.getText(range).trim().length == 0) return false;
    // TODO determine if selection is something we can extract
    return true;
}

export async function extractFunction(document: vscode.TextDocument, range: vscode.Range) {
    const text = document.getText();
    const tree = parseBoaCode(text);

    // TODO adjust the range? or if the range is bad, we say we can't extract?
    const selectedText = document.getText(range);

    // ensure unique name for new function
    const visitor = new SymbolsVisitor(document.uri);
    const syms = visitor.visit(tree).filter(s => s.kind == vscode.SymbolKind.Function);
    const existingFuncs = syms.map(s => s.name);

    let funcName = 'new_func';
    let exists = 1;
    while (exists !== 0) {
        if (existingFuncs.indexOf(funcName) === -1) {
            exists = 0;
        } else {
            funcName = 'new_func' + exists++;
        }
    }

    // TODO handle finding all variable uses (args/params) and live vars (returned)

    // handle indentation/newlines inside the function body
    const originalIndent = text.split('\n')[range.start.line].match(/^(\s*)/)[1];
    let funcBody = originalIndent + selectedText.trim();
    funcBody = funcBody.replace(new RegExp('^' + originalIndent, 'mg'), '\t');

    // TODO add param(s) to new function, if any
    const params = '';

    // TODO handle return type, if any
    const ret = '';

    let newFunc = `${funcName} := function(${params})${ret} {\n`;
    newFunc += funcBody;
    // TODO handle returning value(s), if any
    newFunc += '\n};\n\n';
    const addedLines = newFunc.split('\n').length - 1;

    // handle indenting the call
    const firstLine = selectedText.split('\n')[0];
    const indent = firstLine.match(/^(\s*)/)[1];

    let funcCall = indent;
    // TODO pass in used var(s) as args, if any
    const args = '';
    // TODO handle returned value(s), if any
    const returned = '';
    funcCall += `${returned}${funcName}(${args});`;

    // handle newline right after the call
    if (selectedText.endsWith('\n')) {
        funcCall += '\n';
    }

    // TODO compute where to put new function - should be at global scope, right before current block
    const insertPosition = new vscode.Position(0, 0);

    const edit = new vscode.WorkspaceEdit();
    edit.replace(document.uri, range, funcCall);
    edit.insert(document.uri, insertPosition, newFunc);
    await vscode.workspace.applyEdit(edit);

    const funcNamePos = new vscode.Position(range.start.line + addedLines, range.start.character + indent.length + returned.length);
    vscode.window.activeTextEditor.selection = new vscode.Selection(funcNamePos, funcNamePos.translate(0, funcName.length));
    await vscode.commands.executeCommand('editor.action.rename', [
        document.uri
    ]);
}