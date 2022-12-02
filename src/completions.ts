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
import { SymbolsVisitor } from './ast/symbols';
import UDFFinder from "./ast/UDFFinder";
import { getFuncDoc, getFuncSignature } from './hoverproviders';
import { builtinConsts, builtinEnums, builtinFunctions, builtinTypes, builtinVars } from './types';
import { atDot, symbolToCompletion } from './utils';

export class BuiltInsCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // this completion provider should not respond if the character was '.'
        if (atDot(document, position)) {
            return items;
        }

        // if autocompleting an enum, dont suggest other built-ins
        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();
        if (Object.keys(builtinEnums).indexOf(word) != -1) {
            return items;
        }

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

function cleanType(t: string) {
    return t.replace('array of ', '').replace('?', '').replace(': ', '').trim();
}

export class AttributeCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // this completion provider should ONLY respond if the character was '.'
        if (!atDot(document, position)) {
            return items;
        }

        const pos = document.validatePosition(position.translate(0, -1));

        // if autocompleting an enum, dont suggest attributes
        const word = document.getText(document.getWordRangeAtPosition(pos)).trim();
        if (Object.keys(builtinEnums).indexOf(word) != -1) {
            return items;
        }

        const tree = parseBoaCode(document.getText());
        const defuses = new DefsUsesVisitor();
        defuses.visit(tree);

        const exprRange = new vscode.Range(document.getWordRangeAtPosition(pos, /(([a-zA-Z0-9_]+(\[[^\]]+\])?(\([^)]+\))?)\.)+/).start, pos);
        let exprOffset = document.offsetAt(exprRange.start);

        let parts = document.getText(exprRange).split('.').reverse();
        let type: string = undefined;
        while (parts.length > 0) {
            const funcMatches = parts[parts.length - 1].match(/^([a-zA-Z0-9_]+)\s*\(([^)]*)\)$/);
            if (funcMatches !== null) {
                const funcName = funcMatches[1];
                const args = funcMatches[2];
                if (funcName in builtinFunctions) {
                    if (funcName === 'current') {
                        type = args;
                    } else if (funcName == 'pop' || funcName == 'peek' || funcName == 'poll' || funcName == 'lookup') {
                        // type is 'val_type', based on first arg e.g. 'stack of val_type'
                        const argType = cleanType(defuses.getType(defuses.usedefs[exprOffset + funcName.length + 1]));
                        type = argType.replace('stackof', '').replace('queueof', '').replace(/^map\[[^\]]+\]of/, '');
                    } else if (funcName == 'getvalue') {
                        // type is 'T' but based on traversal's return type
                        const argParts = args.split(',');
                        if (argParts.length == 2) {
                            // named traversal
                            const idx = exprOffset + funcName.length + 2 + argParts[0].length + (argParts[1].length - argParts[1].trim().length);
                            type = cleanType(defuses.getType(defuses.usedefs[idx]).split('):')[1]);
                        } else {
                            // return type of current traversal
                            let text = document.getText(new vscode.Range(new vscode.Position(0, 0), document.positionAt(exprOffset)));
                            text = text.substring(text.lastIndexOf('traversal'));
                            text = text.substring(0, text.indexOf('{'));
                            const typeParts = text.split(':');
                            type = typeParts[typeParts.length - 1].trim();
                        }
                    } else if (funcName == 'getinedge' || funcName == 'getoutedge') {
                        // type is 'graph_edge', related to argument node's type
                        const argType = cleanType(defuses.getType(defuses.usedefs[exprOffset + funcName.length + 1]));
                        type = argType.replace(/Node$/, 'Edge');
                    } else {
                        type = cleanType(builtinFunctions[funcName].ret.type);
                    }
                } else {
                    const visitor = new UDFFinder(exprOffset);
                    visitor.visit(tree);
                    type = cleanType(visitor.funcs[funcName].ret.type);
                }
            } else if (type === undefined && exprOffset in defuses.usedefs) {
                type = cleanType(defuses.getType(defuses.usedefs[exprOffset]));
            } else if (type === undefined && parts[parts.length - 1] === 'input') {
                type = 'Project';
            } else if (type in builtinTypes) {
                const attrMatches = parts[parts.length - 1].match(/^([a-zA-Z0-9_]+)(\[[^\]]+\])?$/);
                const attrName = attrMatches[1];
                if (attrName !== undefined) {
                    if (Object.keys(builtinTypes[type].attrs).indexOf(attrName) != -1) {
                        const attrType = builtinTypes[type].attrs[attrName].type;
                        type = undefined;
                        if (attrType.indexOf('array of ') == -1 || attrMatches[2] !== undefined) {
                            type = cleanType(attrType);
                        }
                    }
                }
            }

            if (type === undefined) {
                break;
            }
            exprOffset += parts.pop().length + 1;
        }

        if (type === undefined) {
            return items;
        }

        if (type in builtinTypes) {
            for (const attrName of Object.keys(builtinTypes[type].attrs)) {
                const attr = builtinTypes[type].attrs[attrName];
                if (token.isCancellationRequested) return items;
                const item = new vscode.CompletionItem(attrName, vscode.CompletionItemKind.Field);
                item.detail = `(attr) ${attr.type} ${type}.${attrName}`;
                item.documentation = new vscode.MarkdownString(attr.doc);
                items.push(item);
            }
        } else {
            const syms = new SymbolsVisitor(document.uri, document.offsetAt(position)).visit(tree);

            for (const s of syms.filter(s => s.containerName == type && s.kind == vscode.SymbolKind.Field)) {
                items.push(new vscode.CompletionItem(s.name, symbolToCompletion(s.kind)));
            }
        }

        return items;
    }
}

export class EnumValuesCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // this completion provider should ONLY respond if the character was '.'
        if (!atDot(document, position)) {
            return items;
        }

        const word = document.getText(document.getWordRangeAtPosition(position.translate(0, -1))).trim();

        const tree = parseBoaCode(document.getText(), document.uri);
        const syms = new SymbolsVisitor(document.uri, document.offsetAt(position)).visit(tree);

        for (const s of syms.filter(s => s.containerName == word && s.kind == vscode.SymbolKind.Field)) {
            items.push(new vscode.CompletionItem(s.name, symbolToCompletion(s.kind)));
        }

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

        // this completion provider should not respond if the character was '.'
        if (atDot(document, position)) {
            return items;
        }

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

export class IdentifierCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];

        // this completion provider should not respond if the character was '.'
        if (atDot(document, position)) {
            return items;
        }

        const tree = parseBoaCode(document.getText(), document.uri);
        const syms = new SymbolsVisitor(document.uri, document.offsetAt(position)).visit(tree);

        for (const s of syms.filter(s => s.kind == vscode.SymbolKind.Variable || s.kind == vscode.SymbolKind.Struct)) {
            items.push(new vscode.CompletionItem(s.name, symbolToCompletion(s.kind)));
        }

        return items;
    }
}