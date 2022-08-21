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

export class ScopedVisitor<T> extends AbstractParseTreeVisitor<void> implements boaVisitor<void> {
    protected scopes: T[] = [];

    protected defaultResult() {
        return undefined;
    }

    public visitChildren(node: RuleNode) {
        let n = node.childCount;
        for (let i = 0; i < n; i++) {
            node.getChild(i).accept(this);
        }
    }

    protected enterScope() {
        this.scopes.push({} as T);
    }

    protected exitScope() {
        this.scopes.pop();
    }

    // handle scoping
    public visitProgram(ctx: ast.ProgramContext) {
        this.enterScope();
        this.visitScopedProgram(ctx);
        this.exitScope();
    }
    public visitDoStatement(ctx: ast.DoStatementContext) {
        this.enterScope();
        this.visitScopedDoStatement(ctx);
        this.exitScope();
    }
    public visitForStatement(ctx: ast.ForStatementContext) {
        this.enterScope();
        this.visitScopedForStatement(ctx);
        this.exitScope();
    }
    public visitSwitchCase(ctx: ast.SwitchCaseContext) {
        this.enterScope();
        this.visitScopedSwitchCase(ctx);
        this.exitScope();
    }
    public visitWhileStatement(ctx: ast.WhileStatementContext) {
        this.enterScope();
        this.visitScopedWhileStatement(ctx);
        this.exitScope();
    }
    public visitExistsStatement(ctx: ast.ExistsStatementContext) {
        this.enterScope();
        this.visitScopedExistsStatement(ctx);
        this.exitScope();
    }
    public visitFixpExpression(ctx: ast.FixpExpressionContext) {
        this.enterScope();
        this.visitScopedFixpExpression(ctx);
        this.exitScope();
    }
    public visitForeachStatement(ctx: ast.ForeachStatementContext) {
        this.enterScope();
        this.visitScopedForeachStatement(ctx);
        this.exitScope();
    }
    public visitFunctionExpression(ctx: ast.FunctionExpressionContext) {
        this.enterScope();
        this.visitScopedFunctionExpression(ctx);
        this.exitScope();
    }
    public visitIfallStatement(ctx: ast.IfallStatementContext) {
        this.enterScope();
        this.visitScopedIfallStatement(ctx);
        this.exitScope();
    }
    public visitTraversalExpression(ctx: ast.TraversalExpressionContext) {
        this.enterScope();
        this.visitScopedTraversalExpression(ctx);
        this.exitScope();
    }
    public visitVisitStatement(ctx: ast.VisitStatementContext) {
        this.enterScope();
        this.visitScopedVisitStatement(ctx);
        this.exitScope();
    }

    public visitScopedProgram(ctx: ast.ProgramContext) {
        this.visitChildren(ctx);
    }
    public visitScopedDoStatement(ctx: ast.DoStatementContext) {
        this.visitChildren(ctx);
    }
    public visitScopedForStatement(ctx: ast.ForStatementContext) {
        this.visitChildren(ctx);
    }
    public visitScopedSwitchCase(ctx: ast.SwitchCaseContext) {
        this.visitChildren(ctx);
    }
    public visitScopedWhileStatement(ctx: ast.WhileStatementContext) {
        this.visitChildren(ctx);
    }
    public visitScopedExistsStatement(ctx: ast.ExistsStatementContext) {
        this.visitChildren(ctx);
    }
    public visitScopedFixpExpression(ctx: ast.FixpExpressionContext) {
        this.visitChildren(ctx);
    }
    public visitScopedForeachStatement(ctx: ast.ForeachStatementContext) {
        this.visitChildren(ctx);
    }
    public visitScopedFunctionExpression(ctx: ast.FunctionExpressionContext) {
        this.visitChildren(ctx);
    }
    public visitScopedIfallStatement(ctx: ast.IfallStatementContext) {
        this.visitChildren(ctx);
    }
    public visitScopedTraversalExpression(ctx: ast.TraversalExpressionContext) {
        this.visitChildren(ctx);
    }
    public visitScopedVisitStatement(ctx: ast.VisitStatementContext) {
        this.visitChildren(ctx);
    }
}

export class DefsUsesVisitor extends ScopedVisitor<{ [name: string]: ast.IdentifierContext }> {
    private _defs: { [defIdx: number]: ast.IdentifierContext } = {};
    private _uses: { [defIdx: number]: ast.IdentifierContext[] } = {};
    private _usedefs: { [defIdx: number]: number } = {};
    private _types: { [defIdx: number]: ast.TypeContext } = {};

    public get defs() {
        return this._defs;
    }

    public get uses() {
        return this._uses;
    }

    public get usedefs() {
        return this._usedefs;
    }

    public getType(def: number) {
        return this._types[def];
    }

    protected getDef(ctx: ast.IdentifierContext, depth: number = 0): ast.IdentifierContext {
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

    private addDef(ctx: ast.IdentifierContext, type: ast.TypeContext = undefined) {
        this._defs[ctx.start.startIndex] = ctx;
        this.scopes[this.scopes.length - 1][ctx.text] = ctx;
        if (type !== undefined) {            
            this._types[ctx.start.startIndex] = type;
        }
    }

    private addUse(ctx: ast.IdentifierContext, defCtx: ast.IdentifierContext) {
        if (defCtx !== undefined) {
            const defIdx = defCtx.start.startIndex;
            if (!(defIdx in this._uses)) {
                this._uses[defIdx] = [];
            }
            if (this._uses[defIdx].indexOf(ctx) == -1) {
                this._uses[defIdx].push(ctx);
            }

            this.usedefs[ctx.start.startIndex] = defIdx;
        }
    }

    // symbol definitions that also scope
    public visitScopedFixpExpression(ctx: ast.FixpExpressionContext) {
        this.addDef(ctx.fixpStatement().identifier(0), ctx.fixpStatement().type());
        this.addDef(ctx.fixpStatement().identifier(1), ctx.fixpStatement().type());
        super.visitScopedFixpExpression(ctx);
    }

    public visitScopedFunctionExpression(ctx: ast.FunctionExpressionContext) {
        const type = ctx.functionType();
        for (const v of type.varDecl()) {
            this.addDef(v.identifier(), v.type());
        }
        super.visitScopedFunctionExpression(ctx);
    }

    public visitScopedTraversalExpression(ctx: ast.TraversalExpressionContext) {
        this.addDef(ctx.traversalType().identifier(0), ctx.traversalType().type());
        super.visitScopedTraversalExpression(ctx);
    }

    public visitScopedVisitStatement(ctx: ast.VisitStatementContext) {
        const v = ctx.varDecl();
        if (v !== undefined) {
            this.addDef(v.identifier(), v.type());
        }
        super.visitScopedVisitStatement(ctx);
    }

    // symbol definitions
    public visitVarDecl(ctx: ast.VarDeclContext) {
        this.addDef(ctx.identifier(), ctx.type());
        this.visitChildren(ctx);
    }

    public visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        this.addDef(ctx.identifier(), ctx.type());
        this.visitChildren(ctx);
    }

    // symbol uses
    public visitIdentifier(ctx: ast.IdentifierContext) {
        this.addUse(ctx, this.getDef(ctx));
        this.visitChildren(ctx);
    }
}