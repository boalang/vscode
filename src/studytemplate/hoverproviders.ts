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
import { cache } from './jsoncache';

export default class SubstitutionHoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover> {
        const templateRange = document.getWordRangeAtPosition(position, /{@[^>]+@}/);
        if (!templateRange) {
            return undefined;
        }
        const word = document.getText(templateRange);

        const hovers = [];

        const substitutions = cache.getSubstitutions();
        for (const filename in substitutions) {
            if (filename != 'substitutions' && document.fileName.endsWith(filename)) {
                for (const items of substitutions[filename]) {
                    const sub = items[word];
                    if (sub) {
                        hovers.push(await cache.renderSubstitution(sub.subst, sub.output));
                    }
                }
            }
        }

        const sub = substitutions.substitutions[word];
        if (sub) {
            hovers.push(await cache.renderSubstitution(sub.subst, sub.output));
        }

        if (hovers.length == 0) {
            return new vscode.Hover(new vscode.MarkdownString('$(error) No substitution is defined for this template variable.', true));
        }

        return new vscode.Hover(new vscode.MarkdownString(hovers.join('\n\n----\n\n'), true));
    }
}