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
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import * as ast from '../antlr/boaParser';
import { boaVisitor } from '../antlr/boaVisitor';
import { parseBoaCode } from './parser';
import { builtinFunctions, IFunction } from '../types';
import { ParserRuleContext } from 'antlr4ts';
import { ScopedVisitor } from './defuse';
import { getOperand } from '../utils';

export default class BoaSignatureHelpProvider implements vscode.SignatureHelpProvider {
    public provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.SignatureHelp> {
        const tree = parseBoaCode(document.getText());

        const { funcName, paramNum } = findFunctionCall(tree, document.offsetAt(position));

        if (funcName === undefined || paramNum === undefined)
            return undefined;

        let func = builtinFunctions[funcName];
        if (func === undefined) {
            const visitor = new UDFFinder(document.offsetAt(position));
            visitor.visit(tree);
            func = visitor.funcs[funcName];
        }

        if (func === undefined)
            return undefined;

        const args = func.args.map(arg => arg.name).join(', ');
        const ret = func.ret.type.length > 0 ? `: ${func.ret.type}` : '';
        const sig = new vscode.SignatureInformation(`${funcName}(${args})${ret}`, new vscode.MarkdownString(func.doc));
        sig.parameters = func.args
            .map(arg => new vscode.ParameterInformation(arg.name, arg.doc.length > 0 ? new vscode.MarkdownString(`**${arg.name}** - ${arg.doc}`) : ''));

        const help = new vscode.SignatureHelp();
        help.signatures = [sig];
        help.activeSignature = 0;
        help.activeParameter = paramNum;

        return Promise.resolve(help);
    }
}

function findFunctionCall(tree: ast.ProgramContext, position: number) {
    const callFinder = new FunctionCallFinder(position);
    const id = callFinder.visit(tree);

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

class FunctionCallFinder extends AbstractParseTreeVisitor<ast.FactorContext> implements boaVisitor<ast.FactorContext> {
    public constructor(private position: number) {
        super();
    }

    protected defaultResult() {
        return undefined;
    }

    protected aggregateResult(aggregate: ast.FactorContext, nextResult: ast.FactorContext) {
        return nextResult;
    }

    protected shouldVisitNextChild(node: RuleNode, currentResult: ast.FactorContext) {
        return currentResult === undefined;
    }

    public visitFactor(ctx: ast.FactorContext) {
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

type funcDict = { [name: string]: IFunction };
export class UDFFinder extends ScopedVisitor<funcDict> {
    private _found = false;
    private position: number;

    constructor(position: number) {
        super();
        this.position = position;
    }

    get funcs() {
        let funcs = {...this.scopes[0]};
        for (let i = 1; i < this.scopes.length; i++) {
            Object.keys(this.scopes[i]).forEach(k => funcs[k] = this.scopes[i][k]);
        }
        return funcs;
    }

    visit(tree: ParseTree) {
        tree.accept(this);
    }

    protected defaultResult() {
        return {};
    }

    protected exitScope() {
        if (!this._found) {
            this.scopes.pop();
        }
    }

    visitChildren(node: RuleNode) {
        if (!this._found) {
            if ((node.ruleContext as ParserRuleContext).start.startIndex <= this.position) {
                const n = node.childCount;
                for (let i = 0; i < n; i++) {
                    node.getChild(i).accept(this);
                }
                if ((node.ruleContext as ParserRuleContext).stop.stopIndex > this.position) {
                    this._found = true;
                }
            } else {
                this._found = true;
            }
        }
    }

    visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        const funcExp = getOperand(ctx.expression())?.functionExpression();
        if (funcExp) {
            const id = ctx.identifier().text;
            const funcType = funcExp.functionType();
            const numArgs = funcType.varDecl().length;
            const funcRet = funcType.type();

            const func: IFunction = {
                args: [],
                ret: { type: '', doc: '' },
                doc: '',
            };
            for (let i = 0; i < numArgs; i++) {
                func.args.push({ name: funcType.varDecl(i).identifier().text + ': ' + funcType.varDecl(i).type().text, doc: '' });
            }
            if (funcRet) {
                func.ret.type = ': ' + funcRet.text;
            }
            this.scopes[this.scopes.length - 1][id] = func;
        }
        this.visitChildren(ctx);
    }
}