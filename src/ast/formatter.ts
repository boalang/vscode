//
// Copyright 2022, Robert Dyer,
//                and University of Nebraska Board of Regents
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import * as vscode from 'vscode';
import { parseBoaCodeWithWhitespace } from './parser';
import PrettyPrinter from './prettyprint';

export class BoaDocumentFormatter implements vscode.DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        const items = [];

        const original = document.getText();

        const { tree, errors, lines: blanks, templates } = parseBoaCodeWithWhitespace(original);
        if (errors.length == 0) {
            options['eol'] = document.eol;
            const printer = new PrettyPrinter(blanks, templates, options);
            const newText = printer.visit(tree);

            items.push(vscode.TextEdit.replace(new vscode.Range(new vscode.Position(0, 0), document.positionAt(original.length)), newText));
        }

        return items;
    }
}