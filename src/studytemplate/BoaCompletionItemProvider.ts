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
import { removeDuplicates } from '../utils';
import { cache } from './StudyConfigCache';

export default class BoaCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem[]> {
        const items = [];

        if (position.character >= 0) {
            const substitutions = cache.getSubstitutions();
            let keys = Object.keys(substitutions.substitutions);

            Object.keys(substitutions)
                .filter(filename => document.fileName.endsWith(filename))
                .forEach(k => {
                    keys = keys.concat(Object.keys(substitutions[k]));
                })

            removeDuplicates(keys).forEach(k => items.push(this.makeCompletionItem(k)));
        }

        return items;
    }

    private makeCompletionItem(label: string) {
        const trimmed = label.substring(2, label.length - 2);
        const item = new vscode.CompletionItem(trimmed, vscode.CompletionItemKind.Value);
        item.detail = 'template';
        item.commitCharacters = ['>'];
        return item;
    }
}