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
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        const substitutions = cache.getSubstitutions();
        let keys = Object.keys(substitutions.substitutions);
        const hovers = new Map<string,string[]>();

        for (const k of keys) {
            if (!hovers.has(k)) hovers.set(k, []);
            const sub = substitutions.substitutions[k];
            hovers.get(k).push(await cache.renderSubstitution(sub.subst, sub.output));
        }

        for (const k of Object.keys(substitutions).filter(filename => document.fileName.endsWith(filename))) {
            for (const items of substitutions[k]) {
                const newKeys = Object.keys(items);
                for (const k2 of newKeys) {
                    if (!hovers.has(k2)) hovers.set(k2, []);
                    const sub = items[k2];
                    hovers.get(k2).push(await cache.renderSubstitution(sub.subst, sub.output));
                }
                keys = keys.concat(newKeys);
            }
        }

        const range = document.getWordRangeAtPosition(position, /{@?\s*[-_.:a-zA-Z0-9]*\s*@?}?/);
        const text = range ? document.getText(range) : document.getText(document.getWordRangeAtPosition(position));
        const start = text.startsWith('{') ? 0 : 2;

        removeDuplicates(keys).forEach(k => {
            items.push(this.makeCompletionItem(k, range, start, hovers.get(k).reverse()));
        });

        return items;
    }

    private makeCompletionItem(label: string, range, start, hovers: string[]) {
        const item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Value);
        if (range) {
            item.range = range;
        }
        item.filterText = label.substring(start, label.length - 2).trim();
        item.sortText = item.filterText;
        item.detail = 'substitution';
        if (hovers) {
            item.documentation = new vscode.MarkdownString(hovers.join('\n\n----\n\n'), true);
        }
        return item;
    }
}