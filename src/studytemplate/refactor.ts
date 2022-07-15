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
import { TextEncoder } from 'util';
import * as consts from '../consts';
import { getWorkspaceRoot } from '../utils';

export class BoaTemplateRefactoringProvider implements vscode.CodeActionProvider {
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

        const action = new vscode.CodeAction('extract template snippet', vscode.CodeActionKind.RefactorExtract);
        action.command = {
            command: 'boalang.refactor.template.extract',
            title: action.title,
            arguments: [document, range],
        };
        items.push(action);

        return items;
    }
}

export async function extractSnippet(document: vscode.TextDocument, range: vscode.Range) {
    const text = document.getText(range);

    let path = getWorkspaceRoot() + '/' + consts.snippetPath;
    vscode.workspace.fs.createDirectory(vscode.Uri.file(path));

    // FIXME make sure filename is unique
    path += '/' + 'new-snippet.boa';
    await vscode.workspace.fs.writeFile(vscode.Uri.file(path), new TextEncoder().encode(text));

    // TODO update study config to add new substitution

    const edit = new vscode.WorkspaceEdit();
    // FIXME make sure template name is unique
    const template = '{@new-snippet@}';
    edit.replace(document.uri, range, template);
    await vscode.workspace.applyEdit(edit);

    vscode.window.activeTextEditor.selection = new vscode.Selection(range.start, new vscode.Position(range.start.line, range.start.character + template.length));
    await vscode.commands.executeCommand('editor.action.rename', [
        document.uri,
    ]);
}