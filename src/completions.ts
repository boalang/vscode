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
import { builtinConsts, builtinFunctions } from './types';

export default class BuiltInFunctionsCompletionItemProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.CompletionItem[]> {
        const items = [];
        true

        for (const c of Object.keys(builtinConsts)) {
            const item = new vscode.CompletionItem(c, vscode.CompletionItemKind.Value);
            item.detail = c;
            if (builtinConsts[c].length > 0)
                item.documentation = new vscode.MarkdownString(builtinConsts[c]);
            items.push(item);
        }

        for (const func of Object.keys(builtinFunctions)) {
            const item = new vscode.CompletionItem(func, vscode.CompletionItemKind.Function);
            item.detail = 'method';
            item.documentation = 'test';
            items.push(item);
        }

        return items;
    }
}