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
import { ExpressionContext, OperandContext, ProgramContext } from './antlr/boaParser';
import { DefsUsesVisitor } from './ast/defuse';
import UDFFinder from './ast/UDFFinder';
import { builtinFunctions, builtinTypes } from './types';

export function getWorkspaceRoot() {
    return vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : '';
}

export function removeDuplicates(src: string[]) : string[] {
    const seen: {[key: string]: boolean} = {};
    const result: string[] = [];
    src.forEach(item => {
        if (!seen[item]) {
            seen[item] = true;
            result.push(item);
        }
    });

    return result;
}

export async function promptUser(message: string) {
    const chosen = await vscode.window.showErrorMessage<vscode.MessageItem>(message,
        { title: 'Yes', isCloseAffordance: false },
        { title: 'No', isCloseAffordance: true });

    return chosen !== undefined && chosen.title === 'Yes';
}

export async function getFileContents(path: string): Promise<string> {
    return vscode.workspace.fs.readFile(vscode.Uri.file(path)).then(
        (val) => {
            return val.toString();
        }
    );
}

export function atDot(document: vscode.TextDocument, position: vscode.Position) {
    const r = document.getWordRangeAtPosition(position, /[\s.]+/);
    return document.getText(r).trim() === '.';
}

export function inComment(document: vscode.TextDocument, position: vscode.Position) {
    const txt = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
    const pos = txt.lastIndexOf('#');
    return pos > -1 && pos < position.character;
}

export function getOperand(e: ExpressionContext|undefined): OperandContext|undefined {
    if (e === undefined) return undefined;
    return e.conjunction(0).comparison(0).simpleExpression(0).term(0).factor(0).operand();
}

export function getAnalysesRange(document: vscode.TextDocument) {
    var analysesEnd = -1;
    var analysesStart = -1;

    const text = document.getText();
    const analyses = text.match(/"analyses"\s*:\s*{/);

    if (analyses) {
        analysesStart = analyses.index + analyses[0].length + 1;
        var brackets = 1;
        for (analysesEnd = analysesStart; analysesEnd < text.length; analysesEnd++) {
            const char = text.charAt(analysesEnd);
            if (char == '}') {
                brackets--;
            } else if (char == '{') {
                brackets++;
            }
            if (brackets == 0) {
                break;
            }
        }
    }
    return { analysesStart, analysesEnd };
}

export function symbolToCompletion(k: vscode.SymbolKind): vscode.CompletionItemKind {
    switch (k) {
        case vscode.SymbolKind.Variable:
            return vscode.CompletionItemKind.Variable;
        case vscode.SymbolKind.Struct:
            return vscode.CompletionItemKind.Struct;
        case vscode.SymbolKind.Field:
            return vscode.CompletionItemKind.Field;
        default:
            return vscode.CompletionItemKind.Text;
    }
}

function cleanType(t: string) {
    return t.replace('array of ', '').replace('?', '').replace(': ', '').trim();
}

export function getType(document: vscode.TextDocument, exprRange: vscode.Range, tree: ProgramContext, defuses: DefsUsesVisitor): string|undefined {
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
            return undefined;
        }

        exprOffset += parts.pop().length + 1;
    }

    return type;
}