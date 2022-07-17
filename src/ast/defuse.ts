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
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as ast from '../antlr/boaParser';
import { boaVisitor } from '../antlr/boaVisitor';

export default class DefsUsesVisitor extends AbstractParseTreeVisitor<void> implements boaVisitor<void> {
    private scopes: { [name: string]: ast.IdentifierContext }[] = [{}];

    private _defs: { [defIdx: number]: ast.IdentifierContext } = {};
    private _uses: { [defIdx: number]: ast.IdentifierContext[] } = {};
    private _usedefs: { [defIdx: number]: number } = {};

    protected defaultResult() {
        return undefined;
    }

    public get defs() {
        return this._defs;
    }

    public get uses() {
        return this._uses;
    }

    public get usedefs() {
        return this._usedefs;
    }

    private getDef(ctx: ast.IdentifierContext, depth: number = 0): ast.IdentifierContext {
        const id = ctx.text;

        if (this.scopes.length - depth == 0) {
            return undefined;
        }

        const curScope = this.scopes[this.scopes.length - depth - 1];
        if (id in curScope) {
            return curScope[id];
        }

        return this.getDef(ctx, depth + 1);
    }

    private addDef(ctx: ast.IdentifierContext) {
        this._defs[ctx.start.startIndex] = ctx;
        this.addUse(ctx, ctx);
        this.scopes[this.scopes.length - 1][ctx.text] = ctx;
    }

    private addUse(ctx: ast.IdentifierContext, defCtx: ast.IdentifierContext) {
        if (defCtx !== undefined) {
            const defIdx = defCtx.start.startIndex;
            if (!(defIdx in this._uses)) {
                this._uses[defIdx] = [];
            }
            this._uses[defIdx].push(ctx);
    
            this.usedefs[ctx.start.startIndex] = defIdx;
        }
    }

    public visitChildren(node: RuleNode) {
        let n = node.childCount;
        for (let i = 0; i < n; i++) {
            node.getChild(i).accept(this);
        }
    }

    protected visitScoped(ctx) {
        this.enterScope();
        this.visitChildren(ctx);
        this.exitScope();
    }

    protected enterScope() {
        this.scopes.push({});
    }

    protected exitScope() {
        this.scopes.pop();
    }

    // handle scoping
    public visitDoStatement(ctx: ast.DoStatementContext) {
        this.visitScoped(ctx);
    }
    public visitForStatement(ctx: ast.ForStatementContext) {
        this.visitScoped(ctx);
    }
    public visitSwitchCaseStatement(ctx: ast.SwitchCaseContext) {
        this.visitScoped(ctx);
    }
    public visitWhileStatement(ctx: ast.WhileStatementContext) {
        this.visitScoped(ctx);
    }

    // symbol definitions that also scope
    public visitExistsStatement(ctx: ast.ExistsStatementContext) {
        this.enterScope();

        this.addDef(ctx.identifier());

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }
    public visitFixpStatement(ctx: ast.FixpStatementContext) {
        this.enterScope();

        this.addDef(ctx.identifier(0));
        this.addDef(ctx.identifier(1));

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }
    public visitForeachStatement(ctx: ast.ForeachStatementContext) {
        this.enterScope();

        this.addDef(ctx.identifier());

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }
    public visitFunctionExpression(ctx: ast.FunctionExpressionContext) {
        this.enterScope();

        const type = ctx.functionType();
        for (const id of type.identifier()) {
            this.addDef(id);
        }

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }
    public visitIfallStatement(ctx: ast.IfallStatementContext) {
        this.enterScope();

        this.addDef(ctx.identifier());

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }
    public visitTraverseStatement(ctx: ast.TraverseStatementContext) {
        this.enterScope();

        this.addDef(ctx.identifier(0));

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }
    public visitVisitStatement(ctx: ast.VisitStatementContext) {
        this.enterScope();

        const ids = ctx.identifier();
        if (ids && ids.length == 2) {
            this.addDef(ids[0]);
        }

        const ret = this.visitChildren(ctx);
        this.exitScope();
    }

    // symbol definitions
    public visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        this.addDef(ctx.identifier());

        this.visitChildren(ctx);
    }

    // symbol uses
    public visitIdentifier(ctx: ast.IdentifierContext) {
        this.addUse(ctx, this.getDef(ctx));

        this.visitChildren(ctx);
    }
}