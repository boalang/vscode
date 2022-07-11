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
import { getWorkspaceRoot, removeDuplicates } from '../utils';
import { cache } from './jsoncache';
import { getDatasets } from '../boa';
import * as consts from '../consts';
import { builtinEnums } from '../types';

export class TemplateCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // if autocompleting an enum, dont suggest other built-ins
        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();
        if (Object.keys(builtinEnums).indexOf(word) != -1)
            return items;

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

/**
 * Provides intellisense completions for dataset names in the study-config.json file.
 */
 export class StudyConfigCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        if (position.character >= 0) {
            const prefix = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
            let hasSpace = document.getText(new vscode.Range(position.translate(0, -1), position)).trim().length == 0;

            // scope completions to just the "dataset" key
            if (prefix.match(/"dataset"\s*:\s*$/)) {
                const items = cache.getDatasets().map(ds => new vscode.CompletionItem(ds, vscode.CompletionItemKind.Constant));
                items.forEach((item) => item.insertText = ensureSpace('"' + (item.label as string).replace(consts.adminPrefix, '') + '"', hasSpace));
                return items;
            } else if (prefix.match(/"file"\s*:\s*$/)) {
                // scope completions to just the "file" key
                const files = await getAllFiles(getWorkspaceRoot() + '/' + consts.snippetPath, '.boa');
                const items = files.map(f => new vscode.CompletionItem(f, vscode.CompletionItemKind.File));
                items.forEach((item) => item.insertText = ensureSpace('"' + item.label + '"', hasSpace));
                return items;
            } else if (prefix.match(/"query"\s*:\s*$/)) {
                // scope completions to just the "query" key
                const files = await getAllFiles(getWorkspaceRoot() + '/' + consts.scriptPath, '.boa');
                const items = files.map(f => new vscode.CompletionItem(f, vscode.CompletionItemKind.File));
                items.forEach((item) => item.insertText = ensureSpace('"' + item.label + '"', hasSpace));
                return items;
            } else {
                const parts = prefix.split(/\s+|,|:/).filter(s => s.trim().length > 0);
                let braceCount = 0;
                let i = parts.length - 1
                for (; i >= 0 && braceCount >= 0; i--) {
                    if (parts[i] == '}') braceCount++;
                    else if (parts[i] == '{') braceCount--;
                }

                if (braceCount < 0) {
                    if (parts[i] == '"datasets"') {
                        // scope completions to just the "datasets" key
                        return getDatasets().then((datasets) => {
                            const items = datasets.map((ds) => new vscode.CompletionItem(ds, vscode.CompletionItemKind.Constant));
                            items.forEach((item) => item.insertText = ensureSpace('"' + (item.label as string).replace(consts.adminPrefix, '') + '"', hasSpace));
                            return Promise.resolve(items);
                        });
                    } else if (parts[i] == '"queries"') {
                        // scope completions to just the individual queries
                        const files = await getAllFiles(getWorkspaceRoot() + '/' + consts.outputPath, '.txt');
                        const items = files.map(f => new vscode.CompletionItem(f, vscode.CompletionItemKind.File));
                        items.forEach((item) => item.insertText = ensureSpace('"' + item.label + '": {\n\t\n}', hasSpace));
                        return items;
                    }
                }
            }
        }

        return [];
    }
}

function ensureSpace(text: string, hasSpace: boolean) {
    return hasSpace ? text : ' ' + text;
}

async function getAllFiles(path: string, extension: string) {
    const items = await vscode.workspace.fs.readDirectory(vscode.Uri.file(path));
    const subdirs = items.filter(item => item[1] == vscode.FileType.Directory).map(dir => dir[0]);
    let files = items.filter(item => item[1] == vscode.FileType.File && item[0].endsWith(extension)).map(item => item[0]);
    for (const dir of subdirs) {
        files = files.concat((await getAllFiles(path + '/' + dir, extension)).map(f => dir + '/' + f));
    }
    return files;
}