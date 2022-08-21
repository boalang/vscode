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
import { parseBoaCode } from './ast/parser';
import UDFFinder from "./ast/UDFFinder";
import { builtinFunctions } from './types';

export default class FunctionsHoverProvider implements vscode.HoverProvider {
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
                    const args = func.args.map(arg => arg.name).join(', ');
                    return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n${funcName}(${args})${func.ret.type}\n\`\`\``));
                }
            }
        }

        return undefined;
    }
}

export function getFuncSignature(funcName: string) {
    const func = builtinFunctions[funcName];
    const args = func.args.map(arg => arg.name).join(', ');
    const ret = func.ret.type.length > 0 ? `: ${func.ret.type}` : '';
    return `(method) ${funcName}(${args})${ret}`;
}

export function getFuncDoc(funcName: string) {
    const func = builtinFunctions[funcName];
    const argDocs = func.args.map(arg => `*@param* \`${arg.name}\` - ${arg.doc}`).join('\n\n');
    const ret = func.ret.doc.length > 0 ? `\n\n*@return* ${func.ret.doc}` : '';

    return `${func.doc}\n\n${argDocs}${ret}`;
}