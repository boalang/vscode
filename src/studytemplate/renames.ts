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
import { getFileContents, getWorkspaceRoot, removeDuplicates } from '../utils';

export default class TemplateTagRenameProvider implements vscode.RenameProvider {
    prepareRename(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Range> {
        if (position.character >= 0) {
            const templateRange = document.getWordRangeAtPosition(position, /{@[-a-zA-Z0-9_.:]+@}/);
            if (templateRange) {
                const start = templateRange.start.translate(0, 2);
                const end = templateRange.end.translate(0, -2);
                return Promise.resolve(new vscode.Range(start, end));
            }
        }

        return null;
    }

    async provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): Promise<vscode.WorkspaceEdit> {
        if (position.character >= 0) {
            const templateRange = document.getWordRangeAtPosition(position, /{@[-a-zA-Z0-9_.:]+@}/);
            if (templateRange) {
                // clean the new name
                newName = newName.trim();
                if (newName.startsWith('{@')) newName = newName.slice(2);
                if (newName.endsWith('@}')) newName = newName.slice(0, newName.length - 2);
                newName = newName.trim();

                // verify the name is allowed
                const badchars = newName.split(/[-a-zA-Z0-9_.:]+/);
                if (badchars.length != 2 || badchars[0].length > 0 || badchars[1].length > 0) {
                    vscode.window.showInformationMessage('Template targets can only contain alpha-numeric characters, or the following special characters: .-_:');
                    await vscode.commands.executeCommand('editor.action.rename', [
                        document.uri,
                    ]);
                    return undefined;
                }

                const tag = document.getText(templateRange);
                const edit = new vscode.WorkspaceEdit();

                let files = [document.uri.fsPath];
                files = files.concat(await getRenameFileList(getWorkspaceRoot() + '/' + consts.scriptPath));
                files = files.concat(await getRenameFileList(getWorkspaceRoot() + '/' + consts.snippetPath));
                files.push(getWorkspaceRoot() + '/' + consts.studyConfigFile);

                for (const path of removeDuplicates(files)) {
                    await getRenameEdits(path, edit, tag, newName);
                }

                return Promise.resolve(edit);
            }
        }

        return undefined;
    }
}

async function getRenameFileList(path: string) {
    const items = await vscode.workspace.fs.readDirectory(vscode.Uri.file(path));

    let files = items.filter(item => item[1] == vscode.FileType.File && item[0].endsWith('.boa')).map(item => path + '/' + item[0]);

    const subdirs = items.filter(item => item[1] == vscode.FileType.Directory).map(dir => dir[0]);
    for (const dir of subdirs) {
        files = files.concat((await getRenameFileList(path + '/' + dir)));
    }

    return files;
}

async function getRenameEdits(path: string, edit: vscode.WorkspaceEdit, tag: string, newName: string) {
    let text = null;
    let uri = null;

    // if the editor is unsaved, get from the document
    vscode.window.tabGroups.all.forEach(grp => {
        grp.tabs.filter(tab => tab.isDirty).forEach(tab => {
            const input = tab.input as vscode.TabInputText;
            if (input?.uri.fsPath == path) {
                uri = input.uri;
                text = vscode.workspace.textDocuments.find((doc) => doc.uri.toString() == uri.toString()).getText();
            }
        });
    });

    // otherwise read from disk
    if (text === null) {
        uri = vscode.Uri.file(path);
        text = await getFileContents(path);
    }

    const matches = text.matchAll(new RegExp(tag, 'g'));

    if (matches) {
        for (const m of matches) {
            const start = positionAt(text, m.index + 2);
            const end = positionAt(text, m.index + tag.length - 2);
            edit.replace(uri, new vscode.Range(start, end), newName);
        }
    }
}

function positionAt(text: string, offset: number): vscode.Position {
    let line = -1;
    let col = 0;
    const lines = text.split('\n');

    let total = -1;
    for (let i = 0; i < lines.length && total < offset; i++) {
        line++;
        col = Math.max(0, Math.min(offset - total, lines[i].length + 1));
        total += lines[i].length + 1;
    }

    return new vscode.Position(line, Math.max(0, col) - 1);
}