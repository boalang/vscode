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
import { getDatasets } from '../boa';
import * as consts from '../consts';

/**
 * Provides intellisense completions for dataset names in the study-config.json file.
 */
export default class StudyConfigCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem[]> {
        if (position.character >= 0) {
            // scope completions to just the "datasets" key
            const prefix = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
            const bracePos = prefix.lastIndexOf('{', prefix.length);

            if (bracePos > -1) {
                const matches = prefix.match(/"datasets"\s*:\s*{/);
                if (matches && matches.index + matches[0].length == bracePos + 1) {
                    return getDatasets().then((datasets) => {
                        const items = datasets.map((ds) => new vscode.CompletionItem(ds, vscode.CompletionItemKind.Constant));
                        items.forEach((item) => item.insertText = '"' + (item.label as string).replace(consts.adminPrefix, '') + '"');
                        return Promise.resolve(items);
                    });
                }
            }
        }

        return [];
    }
}
