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

export default class TemplateTagHighlightProvider implements vscode.DocumentHighlightProvider {
    public async provideDocumentHighlights(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.DocumentHighlight[]> {
        const items = [];

        if (position.character >= 0) {
            const templateRange = document.getWordRangeAtPosition(position, /{@[-a-zA-Z0-9_.:]+@}/);
            if (templateRange) {
                items.push(new vscode.DocumentHighlight(templateRange));

                const text = document.getText();
                const word = document.getText(templateRange);

                const matches = text.matchAll(new RegExp(word, 'g'));
                for (const m of matches) {
                    const start = document.positionAt(m.index);
                    const end = document.positionAt(m.index + word.length);
                    items.push(new vscode.DocumentHighlight(new vscode.Range(start, end), vscode.DocumentHighlightKind.Read));
                }
            }
        }

        return Promise.resolve(items);
    }
}