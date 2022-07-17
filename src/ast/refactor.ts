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

export async function extractMethod(document: vscode.TextDocument, range: vscode.Range) {
    // TODO compute where to put new function
    const insertPosition = new vscode.Position(0, 0);

    // ensure unique name for new function
    const tree = parseBoaCode(document.getText());
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

    // TODO handle finding all variable uses and live vars
    // TODO handle return value(s)
    // FIXME handle indentation/newlines
    let funcBody = document.getText(range).trim();
    // TODO add params to new function
    const newFunc = `${funcName} := function() {\n${funcBody}\n};\n\n`;
    const lines = newFunc.split('\n').length - 1;

    // handle indenting the call
    const firstLine = document.getText(range).split('\n')[0];
    const indent = firstLine.match(/^(\s*)/)[1];

    let funcCall = indent;
    // TODO pass in used vars as args
    // TODO handle returned values, if any
    funcCall += `${funcName}();`;

    // handle newline right after the call
    if (document.getText(range).endsWith('\n')) {
        funcCall += '\n';
    }

    const edit = new vscode.WorkspaceEdit();
    edit.replace(document.uri, range, funcCall);
    edit.insert(document.uri, insertPosition, newFunc);
    await vscode.workspace.applyEdit(edit);

    vscode.window.activeTextEditor.selection = new vscode.Selection(
        new vscode.Position(range.start.line + lines, range.start.character + indent.length),
        new vscode.Position(range.start.line + lines, range.start.character + indent.length + funcName.length));
    await vscode.commands.executeCommand('editor.action.rename', [
        document.uri
    ]);
}