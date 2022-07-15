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
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import * as vscode from 'vscode';
import { FactorContext, ProgramContext } from './antlr/boaParser';
import { boaVisitor } from './antlr/boaVisitor';
import { parseBoaCode } from './ast/parser';
import { builtinFunctions } from './types';

export default class BoaSignatureHelpProvider implements vscode.SignatureHelpProvider {
    public provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.SignatureHelp> {
        const tree = parseBoaCode(document.getText());

        const { funcName, paramNum } = findFunctionCall(tree, document.offsetAt(position));

        if (funcName === undefined || paramNum === undefined)
            return undefined;
        if (!(funcName in builtinFunctions))
            return undefined;

        const func = builtinFunctions[funcName];

        const args = func.args.map(arg => arg.name).join(', ');
        const sig = new vscode.SignatureInformation(`${funcName}(${args})${func.ret.type}`, new vscode.MarkdownString(func.doc));
        sig.parameters = func.args
            .map(arg => new vscode.ParameterInformation(arg.name, arg.doc.length > 0 ? new vscode.MarkdownString(`**${arg.name}** - ${arg.doc}`) : ''));

        const help = new vscode.SignatureHelp();
        help.signatures = [sig];
        help.activeSignature = 0;
        help.activeParameter = paramNum;

        return Promise.resolve(help);
    }
}

function findFunctionCall(tree: ProgramContext, position: number) {
    const visitor = new FunctionCallFinder(position);
    const id = visitor.visit(tree);

    const funcName = id?.operand()?.identifier()?.text

    let paramNum = 0;
    let calls = id?.call();
    if (calls?.length > 0) {
        const exps = calls[0].expressionList();
        if (exps) {
            for (const comma of exps.COMMA()) {
                if (position <= comma.symbol.startIndex) {
                    break;
                }
                paramNum++;
            }
        }
    }

    return { funcName, paramNum };
}

class FunctionCallFinder extends AbstractParseTreeVisitor<FactorContext> implements boaVisitor<FactorContext> {
    public constructor(private position: number) {
        super();
    }

    protected defaultResult() {
        return undefined;
    }

    protected aggregateResult(aggregate: FactorContext, nextResult: FactorContext) {
        return nextResult;
    }

    protected shouldVisitNextChild(node: RuleNode, currentResult: FactorContext) {
        return currentResult === undefined;
    }

    public visitFactor(ctx: FactorContext) {
        const ret = this.visitChildren(ctx);
        if (ret !== undefined)
            return ret;

        if (ctx.selector().length == 0 && ctx.index().length == 0 && ctx.call().length == 1) {
            const call = ctx.call()[0];
            if (call.start.startIndex < this.position && this.position <= call.stop.stopIndex) {
                if ((ctx.operand().text != 'visit' && ctx.operand().text != 'traverse') || call.start.startIndex >= this.position - 35) {
                    return ctx;
                }
            }
        }

        return ret;
    }
}