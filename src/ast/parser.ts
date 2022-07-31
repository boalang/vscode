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
import { ANTLRErrorListener, BailErrorStrategy, CharStreams, CommonTokenStream, DefaultErrorStrategy, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { PredictionMode } from 'antlr4ts/atn/PredictionMode';
import { boaLexer } from '../antlr/BoaLexer';
import { boaParser, StartContext } from '../antlr/boaParser';
import { reportDocumentErrors } from '../diagnostics';

class ErrorListener implements ANTLRErrorListener<Token> {
    uri: vscode.Uri = undefined;
    errors: vscode.Diagnostic[] = [];

    constructor(uri: vscode.Uri|string) {
        if (typeof(uri) === 'string')
            this.uri = vscode.Uri.parse(uri);
        else if (uri instanceof vscode.Uri)
            this.uri = uri;
    }

    syntaxError(recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        line: number,
        charPositionInLine: number,
        msg: string, e: RecognitionException | undefined) {
            if (this.uri) {
                const start = new vscode.Position(line - 1, charPositionInLine);
                const end = new vscode.Position(line - 1, charPositionInLine);
                this.errors.push(new vscode.Diagnostic(new vscode.Range(start, end), msg));
            } else {
                if (this.uri) {
                    console.error(`${this.uri}:${line}:${charPositionInLine} ${msg}`);
                } else {
                    console.error(`${line}:${charPositionInLine} ${msg}`);
                }
            }
    }
}

function _internalParse(txt: string, uri: vscode.Uri|string) {
    const lexer = new boaLexer(CharStreams.fromString(txt));
    const tokenStream = new CommonTokenStream(lexer);

    const parser = new boaParser(tokenStream);
    const listener = new ErrorListener(uri);

    parser.removeErrorListeners();
    parser.errorHandler = new BailErrorStrategy();
    parser.addErrorListener(listener);
    parser.interpreter.setPredictionMode(PredictionMode.SLL);

    let tree: StartContext;
    try {
        tree = parser.start();
    } catch (e) {
        tokenStream.seek(0);
        parser.reset();

        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        parser.errorHandler = new DefaultErrorStrategy();
        parser.interpreter.setPredictionMode(PredictionMode.LL);

        tree = parser.start();
    }

    return { tree, errors: listener.errors };
}

export function parseBoaCode(txt: string, uri: vscode.Uri|string = undefined) {
    const { tree, errors } = _internalParse(txt, uri);

    if (uri) {
        uri = uri.toString();
        let found = false;
        for (const tabGroup of vscode.window.tabGroups.all) {
            for (const tab of tabGroup.tabs) {
                const input = tab.input as vscode.TabInputText;
                if (input.uri.toString() == uri) {
                    reportDocumentErrors(vscode.workspace.textDocuments.filter(d => d.uri.toString() == uri).pop()?.uri, errors);
                    break;
                }
            }
            if (found) break;
        }
    }

    return tree.program();
}