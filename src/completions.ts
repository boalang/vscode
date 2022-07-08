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

        for (const typeName of Object.keys(builtinTypes)) {
            if (token.isCancellationRequested) return items;
            const item = new vscode.CompletionItem(typeName, vscode.CompletionItemKind.Function);
            item.detail = `(type) ${typeName}`;
            item.documentation = new vscode.MarkdownString(builtinTypes[typeName].doc);
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

export class EnumValuesCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();

        if (Object.keys(builtinEnums).indexOf(word) != -1) {
            builtinEnums[word].attrs.forEach(attr => {
                const item = new vscode.CompletionItem(attr.name, vscode.CompletionItemKind.Function);
                item.detail = `(enum) ${word}.${attr.name}`;
                item.documentation = new vscode.MarkdownString(attr.doc);
                item.sortText = '-' + item.label;
                items.push(item);
            });
        }

        return items;
    }
}