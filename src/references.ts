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
import { parseBoaCode } from './parser';
import DefsUsesVisitor from './defuse';
import { getRange } from './symbols';

export default class BoaReferenceProvider implements vscode.ReferenceProvider {
    public provideReferences(document: vscode.TextDocument, position: vscode.Position, options: { includeDeclaration: boolean }, token: vscode.CancellationToken): Thenable<vscode.Location[]> {
        const items = [];
 
        if (position.character >= 0) {
            const tree = parseBoaCode(document.getText());
            const visitor = new DefsUsesVisitor();
            visitor.visit(tree);

            const range = document.getWordRangeAtPosition(position);
            let pos = document.offsetAt(range.start);

            // if asking at a use site, look up the def
            if (pos in visitor.usedefs) {
                pos = visitor.usedefs[pos];
            }

            if (pos in visitor.uses) {
                const def = visitor.defs[pos];

                for (const u of visitor.uses[pos]) {
                    if (options.includeDeclaration || u != def) {
                        items.push(new vscode.Location(document.uri, getRange(u)));
                    }
                }
            }
        }

        return Promise.resolve(items);
    }
}