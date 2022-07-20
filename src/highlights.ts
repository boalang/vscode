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
import { DefsUsesVisitor } from './ast/defuse';
import { parseBoaCode } from './ast/parser';
import { getRange } from './ast/symbols';

export default class BoaDocumentHighlightProvider implements vscode.DocumentHighlightProvider {
    public async provideDocumentHighlights(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.DocumentHighlight[]> {
        const items = [];

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

            if (pos in visitor.uses) {
                for (const u of visitor.uses[pos]) {
                    items.push(new vscode.DocumentHighlight(getRange(u), vscode.DocumentHighlightKind.Read));
                }
            } else {
                // if there is no proper def/use found, highlight current word everywhere
                const wordpos = document.getWordRangeAtPosition(position);
                items.push(new vscode.DocumentHighlight(wordpos));

                if (wordpos) {
                    const text = document.getText();
                    const word = document.getText(wordpos);

                    const matches = text.matchAll(new RegExp('\\b' + word + '\\b', 'g'));
                    for (const m of matches) {
                        const start = document.positionAt(m.index);
                        const end = document.positionAt(m.index + word.length);
                        items.push(new vscode.DocumentHighlight(new vscode.Range(start, end), vscode.DocumentHighlightKind.Text));
                    }
                }
            }
        }

        return Promise.resolve(items);
    }
}