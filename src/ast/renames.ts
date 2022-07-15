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
import DefsUsesVisitor from './defuse';
import { getRange } from './symbols';

export default class BoaRenameProvider implements vscode.RenameProvider {
    prepareRename(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Range> {
        if (position.character >= 0) {
            const tree = parseBoaCode(document.getText());
            const visitor = new DefsUsesVisitor();
            visitor.visit(tree);

            const range = document.getWordRangeAtPosition(position);
            let pos = document.offsetAt(range.start);

            // if asking at a use site, look up the def
            if (pos in visitor.usedefs) {
                pos = visitor.usedefs[pos];
            }

            if (pos in visitor.defs) {
                return Promise.resolve(document.getWordRangeAtPosition(position));
            }
        }

        throw new Error('You cannot rename this element.');
    }

    provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): vscode.ProviderResult<vscode.WorkspaceEdit> {
        const edit = new vscode.WorkspaceEdit();

        if (position.character >= 0) {
            const tree = parseBoaCode(document.getText());
            const visitor = new DefsUsesVisitor();
            visitor.visit(tree);

            const range = document.getWordRangeAtPosition(position);
            let pos = document.offsetAt(range.start);

            // if asking at a use site, look up the def
            if (pos in visitor.usedefs) {
                pos = visitor.usedefs[pos];
            }

            if (pos in visitor.defs) {
                const def = visitor.defs[pos];
                edit.replace(document.uri, getRange(def), newName);
                for (const u of visitor.uses[pos]) {
                    if (u != def) {
                        edit.replace(document.uri, getRange(u), newName);
                    }
                }
            }
        }

        return edit;
    }
}