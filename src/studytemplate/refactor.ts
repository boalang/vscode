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
import { cache } from './jsoncache';

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

    let path = getWorkspaceRoot() + '/' + consts.snippetPath + '/';
    vscode.workspace.fs.createDirectory(vscode.Uri.file(path));

    // make sure filename is unique
    let filename = 'new-snippet';
    let exists = 1;
    while (exists !== 0) {
        try {
            let stat = await vscode.workspace.fs.stat(vscode.Uri.file(path + filename + '.boa'));
            filename = 'new-snippet' + exists++;
        } catch (e) {
            exists = 0;
        }
    }

    await vscode.workspace.fs.writeFile(vscode.Uri.file(path + filename + '.boa'), new TextEncoder().encode(text));

    // make sure template name is unique
    const substitutions = cache.getSubstitutions();
    let alltags = Object.keys(substitutions.substitutions);

    for (const filename in substitutions) {
        if (filename != 'substitutions' && document.fileName.endsWith(filename)) {
            for (const items of substitutions[filename]) {
                alltags = alltags.concat(Object.keys(items));
            }
        }
    }

    let template = 'new-snippet';
    exists = 1;
    while (exists !== 0) {
        if (alltags.indexOf(`{@${template}@}`) === -1) {
            exists = 0;
        } else {
            template = 'new-snippet' + exists++;
        }
    }
    template = `{@${template}@}`;

    // update study config to add new tag
    cache.addTemplateTag(template);

    // edit the original document
    const edit = new vscode.WorkspaceEdit();
    edit.replace(document.uri, range, template);
    await vscode.workspace.applyEdit(edit);

    // perform a rename to allow the user to select a tag name
    vscode.window.activeTextEditor.selection = new vscode.Selection(range.start, new vscode.Position(range.start.line, range.start.character + template.length));
    await vscode.commands.executeCommand('editor.action.rename', [
        document.uri,
    ]);
}