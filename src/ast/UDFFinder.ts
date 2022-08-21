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
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import * as ast from '../antlr/boaParser';
import { IFunction } from '../types';
import { ParserRuleContext } from 'antlr4ts';
import { ScopedVisitor } from './defuse';
import { getOperand } from '../utils';

export default class UDFFinder extends ScopedVisitor<{ [name: string]: IFunction; }> {
    private _found = false;
    private position: number;

    constructor(position: number) {
        super();
        this.position = position;
    }

    get funcs() {
        let funcs = { ...this.scopes[0] };
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