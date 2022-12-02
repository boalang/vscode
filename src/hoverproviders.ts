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
import UDFFinder from "./ast/UDFFinder";
import { builtinConsts, builtinEnums, builtinFunctions, builtinTypes, builtinVars } from './types';
import { getType } from './utils';

export class BoaHoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover> {
        const word = document.getText(document.getWordRangeAtPosition(position)).trim();

        if (word in builtinVars) {
            return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(var) ${word}: ${builtinVars[word].type}\n\`\`\`\n\n----\n\n${builtinVars[word].doc}`));
        }

        if (word in builtinConsts) {
            return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(const) ${word}: ${builtinConsts[word].type}\n\`\`\`\n\n----\n\n${builtinConsts[word].doc}`));
        }

        if (word in builtinTypes) {
            return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(tuple) ${word}\n\`\`\`\n\n----\n\n${builtinTypes[word].doc}`));
        }

        if (word in builtinEnums) {
            return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(enum) ${word}\n\`\`\`\n\n----\n\n${builtinEnums[word].doc}`));
        }

        const tree = parseBoaCode(document.getText());
        const defuses = new DefsUsesVisitor();
        defuses.visit(tree);

        const t = defuses.getType(defuses.usedefs[document.offsetAt(position)]);
        if (t !== undefined) {
            return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n${word}: ${t}\n\`\`\``));
        }

        const r = document.getWordRangeAtPosition(position, /(([a-zA-Z0-9_]+(\[[^\]]+\])?(\([^)]+\))?)\.)+\w+/);
        let prevWord = document.getText(r).trim();
        if (prevWord.length < document.offsetAt(position)) {
            const dots = prevWord.split('.');
            prevWord = dots[dots.length - 2];
            if (prevWord in builtinEnums) {
                return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(enum) ${prevWord}.${word}\n\`\`\`\n\n----\n\n${builtinEnums[prevWord].attrs[word]}`));
            }

            const exprRange = new vscode.Range(r.start, position);
            const type = getType(document, exprRange, tree, defuses);

            if (type in builtinTypes) {
                const attr = builtinTypes[type].attrs[word];
                if (token.isCancellationRequested) return undefined;
                return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(attr) ${type}.${word}: ${attr.type}\n\`\`\`\n\n----\n\n${attr.doc}`));
            }
        }

        return undefined;
    }
}

export class FunctionsHoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover> {
        const funcRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_]+(?=\s*\()/);

        if (funcRange && document.getText(new vscode.Range(position, position.translate(0, 1))) != '(') {
            const funcName = document.getText(funcRange);
            if (funcName in builtinFunctions) {
                return new vscode.Hover(new vscode.MarkdownString(
`\`\`\`boalang
${getFuncSignature(funcName)}
\`\`\`

----

${getFuncDoc(funcName)}`));
            } else {
                const tree = parseBoaCode(document.getText());
                const visitor = new UDFFinder(document.offsetAt(position));
                visitor.visit(tree);
                const func = visitor.funcs[funcName];
                if (func !== undefined) {
                    const args = Object.keys(func.args).map(arg => arg + ': ' + func.args[arg].type).join(', ');
                    return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n${funcName}(${args})${func.ret.type}\n\`\`\``));
                }
            }
        }

        return undefined;
    }
}

export function getFuncSignature(funcName: string) {
    const func = builtinFunctions[funcName];
    const args = Object.keys(func.args).map(arg => arg + ': ' + func.args[arg].type).join(', ');
    const ret = func.ret.type.length > 0 ? `: ${func.ret.type}` : '';
    return `(method) ${funcName}(${args})${ret}`;
}

export function getFuncDoc(funcName: string) {
    const func = builtinFunctions[funcName];
    const argDocs = Object.keys(func.args).map(arg => `*@param* \`${arg + ': ' + func.args[arg].type}\` - ${func.args[arg].doc}`).join('\n\n');
    const ret = func.ret.doc.length > 0 ? `\n\n*@return* ${func.ret.doc}` : '';

    return `${func.doc}\n\n${argDocs}${ret}`;
}