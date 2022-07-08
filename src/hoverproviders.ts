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
import { functionDefinitions } from './utils';

export default class FunctionsHoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover> {
        const funcRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9]+(?=\s*\()/);

        if (funcRange && document.getText(new vscode.Range(position, position.translate(0, 1))) != '(') {
            const funcName = document.getText(funcRange);
            if (funcName in functionDefinitions) {
                const func = functionDefinitions[funcName];
                const args = func.args.map(arg => arg.name).join(', ');
                const argHelp = func.args.map(arg => `*@param* \`${arg.name}\` - ${arg.help}`).join('\n\n');
                const ret = func.ret.help.length > 0 ? `\n\n*@return* ${func.ret.help}` : '';

                return new vscode.Hover(new vscode.MarkdownString(`\`\`\`boalang\n(method) ${funcName}(${args})${func.ret.type}\n\`\`\`\n\n----\n\n${func.help}\n\n${argHelp}${ret}`));
            }
        }

        return undefined;
    }
}