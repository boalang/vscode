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
import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import * as ast from '../antlr/boaParser';
import { boaVisitor } from '../antlr/boaVisitor';

export default class PrettyPrinter extends AbstractParseTreeVisitor<string> implements boaVisitor<string> {
    protected lineEnding = '\n';
    protected tab = '    ';

    protected indents: number = 0;

    protected wslines: { [idx: number]: string } = {};

    constructor(protected wsLineTokens, protected templates, protected options: vscode.FormattingOptions = undefined) {
        super();

        wsLineTokens.forEach(t => this.wslines[t.tokenIndex - 1] = t.text);

        if (options !== undefined) {
            if (!options.insertSpaces) {
                this.tab = '\t';
            } else {
                this.tab = '';
                for (let i = 0; i < options.tabSize; i++) {
                    this.tab += ' ';
                }
            }

            if ('eol' in options && options['eol'] as number == vscode.EndOfLine.CRLF) {
                this.lineEnding = '\r\n';
            }

            if ('startIndent' in options) {
                this.indents = options['startIndent'] as number;
            }
        }
    }

    protected indent() {
        this.indents++;
        return '';
    }

    protected dedent() {
        this.indents--;
        return '';
    }

    protected lineStart() {
        let s = '';
        for (let i = 0; i < this.indents; i++) s += this.tab;
        return s;
    }

    protected lineEnd(ctx: ParserRuleContext|TerminalNode, endctx: ParserRuleContext|TerminalNode = undefined) {
        const ws = this.addWS(ctx, endctx);
        if (ws.length > 0)
            return ws;
        return this.lineEnding;
    }

    protected addWS(ctx: ParserRuleContext|TerminalNode, endctx: ParserRuleContext|TerminalNode = undefined) {
        let start: number;
        if (ctx instanceof TerminalNode) {
            start = ctx.symbol.tokenIndex;
        } else {
            start = ctx.start.tokenIndex;
        }

        let end: number;
        if (endctx === undefined) {
            if (ctx instanceof TerminalNode) {
                end = start;
            } else {
                end = ctx.stop.tokenIndex;
            }
        } else {
            if (endctx instanceof TerminalNode) {
                end = endctx.symbol.tokenIndex;
            } else {
                end = endctx.stop.tokenIndex;
            }
        }

        const ws = [];

        for (let i = start; i <= end; i++) {
            if (i in this.wslines) {
                ws.push(this.wslines[i]);
                delete this.wslines[i];
            }
        }

        return ws.join('');
    }

    protected defaultResult(): string {
        return '';
    }

    protected aggregateResult(aggregate: string, nextResult: string): string {
        return aggregate + nextResult;
    }

    protected stmtIsBlock(stmt: ast.ProgramStatementContext) {
        return stmt.statement().block() !== undefined;
    }

    protected openStmtIsBlock(ctx, stmt: ast.ProgramStatementContext) {
        if (this.stmtIsBlock(stmt)) return ' ';
        return this.lineEnd(ctx) + this.indent() + this.lineStart();
    }

    protected closeStmtIsBlock(stmt: ast.ProgramStatementContext) {
        if (this.stmtIsBlock(stmt)) return '';
        return this.dedent();
    }

    visitStart(ctx: ast.StartContext) {
        return ctx.program().accept(this).trim();
    }

    visitProgram(ctx: ast.ProgramContext) {
        let s = '';

        if (-1 in this.wslines) {
            s += this.wslines[-1];
            delete this.wslines[-1];
        }

        ctx.programStatement().forEach(stmt => {
            s += this.lineStart() + stmt.accept(this) + this.lineEnd(stmt);
        });

        for (const k of Object.keys(this.wslines).sort()) {
            s += this.wslines[k];
            delete this.wslines[k];
        }

        // FIXME right now all inline templates get pulled to the top of the document
        // instead of staying where they originally were
        return this.templates.map(t => t.text).join('') + s.trim() + this.addWS(ctx);
    }

    visitTypeDeclaration(ctx: ast.TypeDeclarationContext) {
        return 'type ' + ctx.identifier().accept(this) + ' = ' + ctx.type().accept(this) + ';';
    }

    visitStaticVariableDeclaration(ctx: ast.StaticVariableDeclarationContext) {
        return 'static ' + ctx.variableDeclaration().accept(this);
    }

    visitVariableDeclaration(ctx: ast.VariableDeclarationContext) {
        return ctx.forVariableDeclaration().accept(this) + ';';
    }

    visitComponent(ctx: ast.ComponentContext) {
        if (ctx.identifier())
            return ctx.identifier().accept(this) + ': ' + ctx.type().accept(this);
        return ctx.type().accept(this);
    }

    visitEnumBodyDeclaration(ctx: ast.EnumBodyDeclarationContext) {
        return ctx.identifier().accept(this) + ' = ' + ctx.expression().accept(this);
    }

    visitArrayType(ctx: ast.ArrayTypeContext) {
        return 'array of ' + ctx.component().accept(this);
    }

    visitTupleType(ctx: ast.TupleTypeContext) {
        return '{' + this.lineEnd(ctx.LBRACE()) +
            this.indent() +
                ctx.member().map(b => this.lineStart() + b.accept(this) + ',' + this.lineEnd(b)).join('') +
            this.dedent() +
            this.lineStart() + '}';
    }

    visitEnumType(ctx: ast.EnumTypeContext) {
        return 'enum {' + this.lineEnd(ctx.ENUM(), ctx.LBRACE()) +
            this.indent() +
                ctx.enumBodyDeclaration().map(b => this.lineStart() + b.accept(this) + ',' + this.lineEnd(b)).join('') +
            this.dedent() +
            this.lineStart() + '}';
    }

    visitMapType(ctx: ast.MapTypeContext) {
        return 'map[' + ctx.component(0).accept(this) + '] of ' + ctx.component(1).accept(this);
    }

    visitStackType(ctx: ast.StackTypeContext) {
        return 'stack of ' + ctx.component().accept(this);
    }

    visitQueueType(ctx: ast.QueueTypeContext) {
        return 'queue of ' + ctx.component().accept(this);
    }

    visitSetType(ctx: ast.SetTypeContext) {
        return 'set of ' + ctx.component().accept(this);
    }

    visitOutputType(ctx: ast.OutputTypeContext) {
        const id = ctx.SET() ? ctx.SET().text : ctx.identifier().accept(this);

        const hasparen = ctx.expressionList().length > 1 || (ctx.expressionList().length == 1 && ctx.FORMAT() === undefined);
        const paren = !hasparen ? '' : ctx.LPAREN(0).text + ctx.expressionList(0).accept(this) + ctx.RPAREN(0).text;

        let idx = '';
        for (let i = 0; i < ctx.LBRACKET().length; i++) {
            idx += ctx.LBRACKET(i) + ctx.component(i).accept(this) + ctx.RBRACKET(i);
        }

        const weight = !ctx.WEIGHT() ? '' : ' ' + ctx.WEIGHT().text + ' ' + ctx.component(ctx.LBRACKET().length + 1).accept(this);
        const format = !ctx.FORMAT() ? '' : ' ' + ctx.FORMAT() + ctx.LPAREN(hasparen ? 1 : 0) + ctx.expressionList(hasparen ? 1 : 0).accept(this) + ctx.RPAREN(hasparen ? 1 : 0);

        return 'output ' + id + paren + idx + ' of ' + ctx.component(ctx.LBRACKET().length).accept(this) + weight + format;
    }

    visitFunctionType(ctx: ast.FunctionTypeContext) {
        const func = 'function(' + ctx.varDecl().map(v => v.accept(this)).join(', ') + ')';
        return !ctx.type() ? func : func + ': ' + ctx.type().accept(this);
    }

    visitFixpType(ctx: ast.FixpTypeContext) {
        return 'fixp(' + ctx.identifier(0).accept(this) + ', ' + ctx.identifier(1).accept(this) + ': ' + ctx.identifier(2).accept(this) + '): ' + ctx.type().accept(this) + ' ';
    }

    visitVisitorType(ctx: ast.VisitorTypeContext) {
        return 'visitor ';
    }

    visitTraversalType(ctx: ast.TraversalTypeContext) {
        const ret = !ctx.type() ? ' ' : ': ' + ctx.type().accept(this) + ' ';
        return 'traversal(' + ctx.identifier(0).accept(this) + ': ' + ctx.identifier(1).accept(this) + ')' + ret;
    }

    visitEmptyStatement(ctx: ast.EmptyStatementContext) {
        return ';';
    }

    visitAssignmentStatement(ctx: ast.AssignmentStatementContext) {
        if   (ctx.EQUALS()) return ctx.factor().accept(this) + ' ' +   ctx.EQUALS().text + ' ' + ctx.expression().accept(this) + ';';
        if   (ctx.PLUSEQ()) return ctx.factor().accept(this) + ' ' +   ctx.PLUSEQ().text + ' ' + ctx.expression().accept(this) + ';';
        if  (ctx.MINUSEQ()) return ctx.factor().accept(this) + ' ' +  ctx.MINUSEQ().text + ' ' + ctx.expression().accept(this) + ';';
        if   (ctx.STAREQ()) return ctx.factor().accept(this) + ' ' +   ctx.STAREQ().text + ' ' + ctx.expression().accept(this) + ';';
        if    (ctx.DIVEQ()) return ctx.factor().accept(this) + ' ' +    ctx.DIVEQ().text + ' ' + ctx.expression().accept(this) + ';';
        if  (ctx.ONEOREQ()) return ctx.factor().accept(this) + ' ' +  ctx.ONEOREQ().text + ' ' + ctx.expression().accept(this) + ';';
        if    (ctx.XOREQ()) return ctx.factor().accept(this) + ' ' +    ctx.XOREQ().text + ' ' + ctx.expression().accept(this) + ';';
        if    (ctx.MODEQ()) return ctx.factor().accept(this) + ' ' +    ctx.MODEQ().text + ' ' + ctx.expression().accept(this) + ';';
        if (ctx.ONEANDEQ()) return ctx.factor().accept(this) + ' ' + ctx.ONEANDEQ().text + ' ' + ctx.expression().accept(this) + ';';
        if (ctx.RSHIFTEQ()) return ctx.factor().accept(this) + ' ' + ctx.RSHIFTEQ().text + ' ' + ctx.expression().accept(this) + ';';
                            return ctx.factor().accept(this) + ' ' + ctx.LSHIFTEQ().text + ' ' + ctx.expression().accept(this) + ';';
    }

    visitBlock(ctx: ast.BlockContext) {
        return '{' + this.lineEnd(ctx.LBRACE()) +
            this.indent() +
                ctx.programStatement()
                    .map(s => this.lineStart() + s.accept(this) + this.lineEnd(s))
                    .join('') +
            this.dedent() +
            this.lineStart() + '}';
    }

    visitBreakStatement(ctx: ast.BreakStatementContext) {
        return 'break;';
    }

    visitContinueStatement(ctx: ast.ContinueStatementContext) {
        return 'continue;';
    }

    visitDoStatement(ctx: ast.DoStatementContext) {
        return 'do' + this.lineEnd(ctx.DO()) +
            this.indent() +
                this.lineStart() + ctx.statement().accept(this) + this.lineEnd(ctx.statement()) +
            this.dedent() +
            this.lineStart() + 'while(' + ctx.expression().accept(this) + ');';
    }

    visitEmitStatement(ctx: ast.EmitStatementContext) {
        const numExprs = ctx.expression().length;
        let idx = '';
        for (let i = 0; i < ctx.LBRACKET().length; i++) {
            idx += '[' + ctx.expression(i).accept(this) + ']';
        }
        let weight = !ctx.WEIGHT() ? '' : ' weight ' + ctx.expression(numExprs - 1).accept(this);
        return ctx.identifier().accept(this) + idx + ' ' + ctx.EMIT().text + ' ' + ctx.expression(numExprs - (ctx.WEIGHT() ? 2 : 1)).accept(this) + weight + ';';
    }

    visitForStatement(ctx: ast.ForStatementContext) {
        const body = ctx.programStatement();
        // FIXME this does not work - we cant tell which case a single forExpression() is
        return 'for (' + ctx.forExpression()?.accept(this) + '; ' + ctx.expression()?.accept(this) + '; ' + ctx.forExpressionStatement()?.accept(this) + ')' + this.openStmtIsBlock(ctx.RPAREN(), body) +
                body.accept(this) +
            this.closeStmtIsBlock(body);
    }

    visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        let s = ctx.identifier().accept(this);
        if (!ctx.type() && ctx.EQUALS()) s += ' ';
        s += ':';
        if (ctx.type()) s += ' ' + ctx.type().accept(this);
        if (ctx.type() && ctx.EQUALS()) s += ' ';
        if (ctx.EQUALS()) s += '= ' + ctx.expression().accept(this);
        return s;
    }

    visitPostfixStatement(ctx: ast.PostfixStatementContext) {
        if (ctx.INCR()) return ctx.expression().accept(this) + ctx.INCR();
                        return ctx.expression().accept(this) + ctx.DECR();
    }

    visitExpressionStatement(ctx: ast.ExpressionStatementContext) {
        return ctx.forExpressionStatement().accept(this) + ';';
    }

    visitIfStatement(ctx: ast.IfStatementContext) {
        const trueBranch = ctx.programStatement(0);

        let ifs = 'if (' + ctx.expression().accept(this) + ')' + this.openStmtIsBlock(ctx.RPAREN(), trueBranch) +
                trueBranch.accept(this) +
            this.closeStmtIsBlock(trueBranch);

        if (ctx.programStatement().length > 1) {
            const falseBranch = ctx.programStatement(1);

            ifs += (this.stmtIsBlock(trueBranch) ? ' ' : this.lineEnd(trueBranch) + this.lineStart()) + 'else';

            if (falseBranch.statement().ifStatement()) {
                ifs += ' ' + falseBranch.accept(this);
            } else {
                ifs += this.openStmtIsBlock(ctx.ELSE(), falseBranch) +
                    falseBranch.accept(this) +
                this.closeStmtIsBlock(falseBranch);
            }
        }

        return ifs;
    }

    visitReturnStatement(ctx: ast.ReturnStatementContext) {
        if (ctx.expression()) return 'return ' + ctx.expression().accept(this) + ';';
        return 'return;';
    }

    visitSwitchStatement(ctx: ast.SwitchStatementContext) {
        return 'switch (' + ctx.expression().accept(this) + ') {' + this.lineEnd(ctx.SWITCH(), ctx.LBRACE()) +
            ctx.switchCase().map(c => this.lineStart() + c.accept(this)).join('') +
            this.lineStart() + ctx.DEFAULT().text + ctx.COLON().text + this.lineEnd(ctx.DEFAULT(), ctx.COLON()) +
            this.indent() +
                ctx.programStatement().map(s => this.lineStart() + s.accept(this) + this.lineEnd(s)).join('') +
            this.dedent() +
            this.lineStart() + '}';
    }

    visitSwitchCase(ctx: ast.SwitchCaseContext) {
        return 'case ' + ctx.expressionList().accept(this) + ':' + this.lineEnd(ctx.CASE(), ctx.COLON()) +
            this.indent() +
                ctx.programStatement().map(s => this.lineStart() + s.accept(this) + this.lineEnd(s)).join('') +
            this.dedent();
    }

    visitForeachStatement(ctx: ast.ForeachStatementContext) {
        const body = ctx.programStatement();
        return 'foreach (' + ctx.varDecl().accept(this) + '; ' + ctx.expression().accept(this) + ')' + this.openStmtIsBlock(ctx.RPAREN(), body) +
                body.accept(this) +
            this.closeStmtIsBlock(body);
    }

    visitExistsStatement(ctx: ast.ExistsStatementContext) {
        const body = ctx.programStatement();
        return 'exists (' + ctx.varDecl().accept(this) + '; ' + ctx.expression().accept(this) + ')' + this.openStmtIsBlock(ctx.RPAREN(), body) +
                body.accept(this) +
            this.closeStmtIsBlock(body);
    }

    visitIfallStatement(ctx: ast.IfallStatementContext) {
        const body = ctx.programStatement();
        return 'ifall (' + ctx.varDecl().accept(this) + '; ' + ctx.expression().accept(this) + ')' + this.openStmtIsBlock(ctx.RPAREN(), body) +
                body.accept(this) +
            this.closeStmtIsBlock(body);
    }

    visitWhileStatement(ctx: ast.WhileStatementContext) {
        const body = ctx.programStatement();
        return 'while (' + ctx.expression().accept(this) + ')' + this.openStmtIsBlock(ctx.RPAREN(), body) +
                body.accept(this) +
            this.closeStmtIsBlock(body);
    }

    visitVisitStatement(ctx: ast.VisitStatementContext) {
        const start = ctx.BEFORE() ? ctx.BEFORE().text : ctx.AFTER().text;
        let node = '';
        if (ctx.WILDCARD()) node = ctx.WILDCARD().text;
        else if (ctx.varDecl()) node = ctx.varDecl().accept(this);
        else node = ctx.identifier().map(id => id.accept(this)).join(', ');
        return start + ' ' + node + ' ' + ctx.RIGHT_ARROW().text + this.openStmtIsBlock(ctx.RIGHT_ARROW(), ctx.programStatement()) +
                ctx.programStatement().accept(this) +
            this.closeStmtIsBlock(ctx.programStatement()) + this.lineEnd(ctx.programStatement());
    }

    visitStopStatement(ctx: ast.StopStatementContext) {
        return 'stop;';
    }

    visitExpression(ctx: ast.ExpressionContext) {
        let s = ctx.conjunction(0).accept(this);
        for (let i = 1; i < ctx.conjunction().length; i++) {
            if (ctx.tryGetToken(ast.boaParser.OR, i - 1)) s += ' ' + ctx.OR(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.TWOOR, i - 1)) s += ' ' + ctx.TWOOR(i - 1).text + ' ';
            s += ctx.conjunction(i).accept(this);
        }
        return s;
    }

    visitExpressionList(ctx: ast.ExpressionListContext) {
        return ctx.expression().map(e => e.accept(this)).join(', ');
    }

    visitConjunction(ctx: ast.ConjunctionContext) {
        let s = ctx.comparison(0).accept(this);
        for (let i = 1; i < ctx.comparison().length; i++) {
            if (ctx.tryGetToken(ast.boaParser.AND, i - 1)) s += ' ' + ctx.AND(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.TWOAND, i - 1)) s += ' ' + ctx.TWOAND(i - 1).text + ' ';
            s += ctx.comparison(i).accept(this);
        }
        return s;
    }

    visitComparison(ctx: ast.ComparisonContext) {
        let s = ctx.simpleExpression(0).accept(this);
        if (ctx.simpleExpression().length > 1) {
            if (ctx.EQEQ()) s += ' ' + ctx.EQEQ().text + ' ';
            else if (ctx.NEQ()) s += ' ' + ctx.NEQ().text + ' ';
            else if (ctx.LT()) s += ' ' + ctx.LT().text + ' ';
            else if (ctx.LTEQ()) s += ' ' + ctx.LTEQ().text + ' ';
            else if (ctx.GT()) s += ' ' + ctx.GT().text + ' ';
            else if (ctx.GTEQ()) s += ' ' + ctx.GTEQ().text + ' ';
            s += ctx.simpleExpression(1).accept(this);
        }
        return s;
    }

    visitSimpleExpression(ctx: ast.SimpleExpressionContext) {
        let s = ctx.term(0).accept(this);
        for (let i = 1; i < ctx.term().length; i++) {
            if (ctx.tryGetToken(ast.boaParser.PLUS, i - 1)) s += ' ' + ctx.PLUS(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.MINUS, i - 1)) s += ' ' + ctx.MINUS(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.ONEOR, i - 1)) s += ' ' + ctx.ONEOR(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.XOR, i - 1)) s += ' ' + ctx.XOR(i - 1).text + ' ';
            s += ctx.term(i).accept(this);
        }
        return s;
    }

    visitTerm(ctx: ast.TermContext) {
        let s = ctx.factor(0).accept(this);
        for (let i = 1; i < ctx.factor().length; i++) {
            if (ctx.tryGetToken(ast.boaParser.STAR, i - 1)) s += ' ' + ctx.STAR(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.DIV, i - 1)) s += ' ' + ctx.DIV(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.MOD, i - 1)) s += ' ' + ctx.MOD(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.EMIT, i - 1)) s += ' ' + ctx.EMIT(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.RSHIFT, i - 1)) s += ' ' + ctx.RSHIFT(i - 1).text + ' ';
            else if (ctx.tryGetToken(ast.boaParser.ONEAND, i - 1)) s += ' ' + ctx.ONEAND(i - 1).text + ' ';
            s += ctx.factor(i).accept(this);
        }
        return s;
    }

    visitSelector(ctx: ast.SelectorContext) {
        return '.' + ctx.identifier().accept(this);
    }

    visitIndex(ctx: ast.IndexContext) {
        return ctx.LBRACKET().text + ctx.expression().map(e => e.accept(this)).join(':') + ctx.RBRACKET().text;
    }

    visitCall(ctx: ast.CallContext) {
        if (ctx.expressionList() !== undefined) {
            return ctx.LPAREN().text + ctx.expressionList().accept(this) + ctx.RPAREN().text;
        }
        return ctx.LPAREN().text + ctx.RPAREN().text;
    }

    visitUnaryFactor(ctx: ast.UnaryFactorContext) {
        if  (ctx.PLUS()) return  ctx.PLUS().text + ctx.factor().accept(this);
        if (ctx.MINUS()) return ctx.MINUS().text + ctx.factor().accept(this);
        if   (ctx.NEG()) return   ctx.NEG().text + ctx.factor().accept(this);
        if   (ctx.INV()) return   ctx.INV().text + ctx.factor().accept(this);
                         return   ctx.NOT().text + ctx.factor().accept(this);
    }

    visitParenExpression(ctx: ast.ParenExpressionContext) {
        return '(' + ctx.expression().accept(this) + ')';
    }

    visitFunctionExpression(ctx: ast.FunctionExpressionContext) {
        return ctx.functionType().accept(this) + ' ' + ctx.block().accept(this);
    }

    visitFixpExpression(ctx: ast.FixpExpressionContext) {
        return ctx.fixpType().accept(this) + ctx.block().accept(this);
    }

    visitVisitorExpression(ctx: ast.VisitorExpressionContext) {
        return ctx.visitorType().accept(this) + '{' + this.lineEnd(ctx.visitorType(), ctx.LBRACE()) +
            this.indent() +
                ctx.visitStatement().map(s => this.lineStart() + s.accept(this)).join('') +
            this.dedent() +
            this.lineStart() + '}';
    }

    visitTraversalExpression(ctx: ast.TraversalExpressionContext) {
        return ctx.traversalType().accept(this) + ctx.block().accept(this);
    }

    visitVarDecl(ctx: ast.VarDeclContext) {
        return ctx.identifier().accept(this) + ': ' + ctx.type().accept(this);
    }

    visitComposite(ctx: ast.CompositeContext) {
        if (ctx.COLON()) {
            return '{ : }';
        }
        let s = '{' + this.lineEnd(ctx.LBRACE()) + this.indent();
        if (ctx.expressionList()) {
            s += ctx.expressionList().expression().map(e => this.lineStart() + e.accept(this) + ',' + this.lineEnd(e)).join('');
        } else {
            s += ctx.pair().map(p => this.lineStart() + p.accept(this) + ',' + this.lineEnd(p)).join('');
        }
        return s +
            this.dedent() +
            this.lineStart() + '}';
    }

    visitPair(ctx: ast.PairContext) {
        return ctx.expression(0).accept(this) + ': ' + ctx.expression(1).accept(this);
    }

    visitIdentifier(ctx: ast.IdentifierContext) {
        return ctx.text;
    }

    visitIntegerLiteral(ctx: ast.IntegerLiteralContext) {
        return ctx.text;
    }

    visitFloatingPointLiteral(ctx: ast.FloatingPointLiteralContext) {
        return ctx.text;
    }

    visitCharacterLiteral(ctx: ast.CharacterLiteralContext) {
        return ctx.text;
    }

    visitStringLiteral(ctx: ast.StringLiteralContext) {
        return ctx.text;
    }

    visitTimeLiteral(ctx: ast.TimeLiteralContext) {
        return ctx.text;
    }
}