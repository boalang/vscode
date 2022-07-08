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
import { builtinFunctions } from './types';

export default class BoaSignatureHelpProvider implements vscode.SignatureHelpProvider {
    public provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.SignatureHelp> {
        const { funcName, paramNum } = findFunction(document, position);
        if (funcName === null || paramNum === null)
            return undefined;
        if (!(funcName in builtinFunctions))
            return undefined;

        const func = builtinFunctions[funcName];

        const help = new vscode.SignatureHelp();
        const args = func.args.map(arg => arg.name).join(', ');
        const sig = new vscode.SignatureInformation(`${funcName}(${args})${func.ret.type}`, new vscode.MarkdownString(func.doc));
        sig.parameters = func.args
            .map(arg => new vscode.ParameterInformation(arg.name, arg.doc.length > 0 ? new vscode.MarkdownString(`**${arg.name}** - ${arg.doc}`) : ''));
        help.signatures = [sig];
        help.activeSignature = 0;
        help.activeParameter = paramNum;
        return Promise.resolve(help);
    }
}

function findFunction(document, position) {
    const text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
    const offset = document.offsetAt(position);

    let openParenPos = 0;
    let paramNum = 0;
    for (let i = offset; i >= 0; i--) {
        switch (text.charAt(i)) {
            case ')':
                openParenPos++;
                break;
            case '(':
                openParenPos--;
                break;
            case '{':
                if (openParenPos == 0)
                    return { funcName: null, paramNum: null };
                break;
            case ',':
                if (openParenPos == 0)
                    paramNum++;
                break;
        }
        if (openParenPos == -1) {
            openParenPos = i;
            break;
        }
    }

    let closeParenPos = 0;
    for (let i = offset; i < text.length; i++) {
        switch (text.charAt(i)) {
            case '(':
                closeParenPos++;
                break;
            case ')':
                closeParenPos--;
                break;
            case ';':
            case '}':
                if (closeParenPos == 0)
                    return { funcName: null, paramNum: null };
                break;
        }
        if (closeParenPos == -1) {
            closeParenPos = i;
            break;
        }
    }

    const funcName = document.getText(document.getWordRangeAtPosition(document.positionAt(openParenPos - 1)));

    return { funcName, paramNum };
}