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
import { getFuncDoc, getFuncSignature } from './hoverproviders';
import { builtinConsts, builtinEnums, builtinFunctions, builtinTypes, builtinVars } from './types';

export class BuiltInsCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // if autocompleting an enum, dont suggest other built-ins
        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();
        if (Object.keys(builtinEnums).indexOf(word) != -1)
            return items;

        for (const c of Object.keys(builtinConsts)) {
            if (token.isCancellationRequested) return items;
            const item = new vscode.CompletionItem(c, vscode.CompletionItemKind.Value);
            item.detail = c;
            if (builtinConsts[c].length > 0)
                item.documentation = new vscode.MarkdownString(builtinConsts[c]);
            items.push(item);
        }

        for (const v of Object.keys(builtinVars)) {
            if (token.isCancellationRequested) return items;
            const item = new vscode.CompletionItem(v, vscode.CompletionItemKind.Variable);
            item.detail = `(var) ${v}: ${builtinVars[v].type}`;
            if (builtinVars[v].doc.length > 0)
                item.documentation = new vscode.MarkdownString(builtinVars[v].doc);
            items.push(item);
        }

        for (const funcName of Object.keys(builtinFunctions)) {
            if (token.isCancellationRequested) return items;
            const item = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
            item.detail = getFuncSignature(funcName);
            item.documentation = new vscode.MarkdownString(getFuncDoc(funcName));
            items.push(item);
        }

        for (const enumName of Object.keys(builtinEnums)) {
            if (token.isCancellationRequested) return items;
            const item = new vscode.CompletionItem(enumName, vscode.CompletionItemKind.Function);
            item.detail = `(enum) ${enumName}`;
            item.documentation = new vscode.MarkdownString(builtinEnums[enumName].doc);
            items.push(item);
        }

        return items;
    }
}

export class AttributeCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // if autocompleting an enum, dont suggest attributes
        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();
        if (Object.keys(builtinEnums).indexOf(word) != -1)
            return items;

        for (const type of Object.keys(builtinTypes)) {
            for (const attr of builtinTypes[type].attrs) {
                if (token.isCancellationRequested) return items;
                const item = new vscode.CompletionItem(attr.name, vscode.CompletionItemKind.Field);
                item.detail = `(attr) ${attr.type} ${type}.${attr.name}`;
                item.documentation = new vscode.MarkdownString(attr.doc);
                items.push(item);
            }
        }

        return items;
    }
}

export class EnumValuesCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();

        if (Object.keys(builtinEnums).indexOf(word) != -1) {
            Object.keys(builtinEnums[word].attrs).forEach(attr => {
                const item = new vscode.CompletionItem(attr, vscode.CompletionItemKind.Function);
                item.detail = `(enum) ${word}.${attr}`;
                item.documentation = new vscode.MarkdownString(builtinEnums[word].attrs[attr]);
                items.push(item);
            });
        }

        return items;
    }
}

export class DSLTypesCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        const startText = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        const startWords = startText.split(/\s+/).filter(s => s.length > 0).slice(-4);

        let visitIdx = startWords.length - 1;
        while (visitIdx >= 0) {
            if (startWords[visitIdx] == 'after' || startWords[visitIdx] == 'before') {
                break;
            }
            visitIdx--;
        }

        let colonIdx = startWords.length - 1;
        while (colonIdx > visitIdx) {
            if (startWords[colonIdx].endsWith(':')) {
                break;
            }
            colonIdx--;
        }

        if (startWords[startWords.length - 1].startsWith(':')) {
            startWords.push(startWords[startWords.length - 1].slice(1));
            startWords[startWords.length - 2] = ':';
        }

        let hasPartialType = false;
        if (colonIdx == -1) {
            hasPartialType = visitIdx < startWords.length - 1;
        } else {
            hasPartialType = colonIdx < startWords.length - 1;
        }

        let hasSpace = startText.charAt(startText.length - 1).trim().length == 0;
        if (!hasSpace && hasPartialType && startWords.length > 0) {
            const spacePos = startText.length - startWords[startWords.length - 1].length;
            hasSpace = startText.charAt(spacePos - 1).trim().length == 0;
        }

        let trailingArrow = false;
        if (visitIdx > -1) {
            const trailText = document.getText(new vscode.Range(position, position.translate(0, 10))).split(/\s+/).filter(s => s.length > 0);
            trailingArrow = trailText[0] == '->';
        }

        Object.keys(builtinTypes).filter(t => !hasPartialType || t.startsWith(startWords[startWords.length - 1])).forEach(t => {
            const item = new vscode.CompletionItem(t, vscode.CompletionItemKind.Function);
            item.detail = `(type) ${t}`;
            item.insertText = hasSpace ? t : ' ' + t;
            if (visitIdx > -1 && !trailingArrow) {
                item.insertText += ' -> ';
            }
            item.documentation = new vscode.MarkdownString(builtinTypes[t].doc);
            items.push(item);
        });

        return items;
    }
}