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
import { ParserRuleContext, RuleContext } from 'antlr4ts';
import * as ast from '../antlr/boaParser';
import { DefsUsesVisitor, ScopedVisitor } from './defuse';
import { TextEncoder } from 'util';
import { getFileContents, getWorkspaceRoot } from '../utils';
import { parseBoaCode } from './parser';
import PrettyPrinter from './prettyprint';

type nodeType = RuleContext|string;

export interface Graph {
    vertices: string[];
    edges: { [name: string]: { [name: string]: string } };
    kinds: { [name: string]: string };
    getRecord(node: string): string;
}

export class CFGVisitor extends DefsUsesVisitor implements Graph {
    private _vertices: string[] = [];
    private _nodes: { [name: string]: nodeType } = {};
    private _edges: { [name: string]: { [name: string]: string } } = {};
    private _kinds: { [name: string]: string } = {};

    private _blockEntries: nodeType[] = [];
    private _blockExits: nodeType[][] = [ [] ];
    private _blockOuts: nodeType[][] = [ [] ];

    protected readonly programEntry = '<enter:program>';
    protected readonly programExit = '<exit:program>';

    get vertices() {
        return this._vertices;
    }

    get edges() {
        return this._edges;
    }

    get kinds() {
        return this._kinds;
    }

    get entries() {
        return Object.entries(this._kinds)
            .filter(([_, value]) => value == 'ENTRY')
            .map(([key, _]) => key);
    }

    get exits() {
        return Object.entries(this._kinds)
            .filter(([_, value]) => value == 'EXIT')
            .map(([key, _]) => key);
    }

    protected get nodes() {
        return this._nodes;
    }

    private _succs: { [name: string]: Set<string> } = {};
    public succssors(node: string) {
        return this._succs[node];
    }

    private _preds: { [name: string]: Set<string> } = {};
    public predecssors(node: string) {
        return this._preds[node];
    }

    protected defaultResult() {
        return undefined;
    }

    private printer = new PrettyPrinter([], []);
    protected getId(ctx: nodeType) {
        if (typeof ctx === 'string') {
            return ctx;
        }
        // return ctx.sourceInterval;
        // return new PrettyPrinter().visit(ctx) + '[' + (ctx as ParserRuleContext).start.startIndex + '..' + (ctx as ParserRuleContext).stop.stopIndex + ']';
        let newText = this.printer.visit(ctx);
        const idx = newText.indexOf('\n')
        if (idx > -1) {
            newText = newText.substring(0, idx);
        }

        return newText + '[' + (ctx as ParserRuleContext).start.startIndex + '..' + (ctx as ParserRuleContext).stop.stopIndex + ']';
    }

    protected addVertex(ctx: nodeType, kind: string = undefined) {
        const id = this.getId(ctx);
        if (this._vertices.indexOf(id) == -1) {
            this._vertices.push(id);
            this._nodes[id] = ctx;
            if (kind !== undefined) {
                this._kinds[id] = kind;
            }
            this._succs[id] = new Set<string>();
            this._preds[id] = new Set<string>();
        }
        if (this._blockOuts.length > 0) {
            this._blockOuts[this._blockOuts.length - 1].forEach(src => this.addEdge(src, ctx));
        }
    }

    protected addEdge(from: nodeType, to: nodeType, label: string = undefined) {
        const src = this.getId(from);
        const dst = this.getId(to);
        if (!(src in this._edges)) {
            this._edges[src] = {};
        }
        this._edges[src][dst] = label !== undefined ? label : ' ';

        this._succs[src].add(dst);
        this._preds[dst].add(src);
    }

    public visitScopedProgram(ctx: ast.ProgramContext) {
        this.addVertex(this.programEntry, 'ENTRY');
        this._blockOuts[this._blockOuts.length - 1].push(this.programEntry);

        super.visitScopedProgram(ctx);

        this.addVertex(this.programExit, 'EXIT');
    }

    public visitStatement(ctx: ast.StatementContext) {
        if (ctx.assignmentStatement() !== undefined ||
            ctx.emptyStatement() !== undefined ||
            ctx.emitStatement() !== undefined ||
            ctx.expressionStatement() !== undefined) {
                this.addVertex(ctx);
                this._blockOuts.pop();
                this._blockOuts.push([ctx]);
        }
        this.visitChildren(ctx);
    }

    protected stmtOrBlock(stmt: ast.StatementContext) {
        if (stmt.block() !== undefined) {
            return stmt.block().programStatement(0);
        }
        return stmt;
    }

    public visitIfStatement(ctx: ast.IfStatementContext) {
        ctx.expression().accept(this);

        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();

        const outs: nodeType[] = [];
        const trueBranch = ctx.programStatement(0);
        const falseBranch = ctx.programStatement().length == 2 ? ctx.programStatement(1) : undefined;

        this._blockOuts.push([]);
        trueBranch.accept(this);
        this.addEdge(ctx, this.stmtOrBlock(trueBranch.statement()), 'T');
        outs.push(...this._blockOuts.pop());

        if (falseBranch === undefined) {
            outs.push(ctx);
        } else {
            this._blockOuts.push([]);
            falseBranch.accept(this);
            this.addEdge(ctx, this.stmtOrBlock(falseBranch.statement()), 'F');
            outs.push(...this._blockOuts.pop());
        }

        this._blockOuts.push(outs);
    }

    public visitScopedForeachStatement(ctx: ast.ForeachStatementContext) {
        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();

        this._blockEntries.push(ctx);
        this._blockExits.push([]);

        const stmt = ctx.programStatement();
        this._blockOuts.push([ctx]);
        super.visitScopedForeachStatement(ctx);
        this.addEdge(ctx, this.stmtOrBlock(ctx.programStatement().statement()), 'T');
        this._blockOuts.pop().forEach(src => this.addEdge(src, ctx, 'B'));

        this._blockEntries.pop();

        this._blockOuts.push([ctx, ...this._blockExits.pop()]);
    }

    public visitScopedExistsStatement(ctx: ast.ExistsStatementContext) {
        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();

        this._blockEntries.push(ctx);
        this._blockExits.push([]);

        const stmt = ctx.programStatement();
        this._blockOuts.push([ctx]);
        super.visitScopedExistsStatement(ctx);
        this.addEdge(ctx, this.stmtOrBlock(ctx.programStatement().statement()), 'T');
        this._blockOuts.pop().forEach(src => this.addEdge(src, ctx, 'B'));

        this._blockEntries.pop();

        this._blockOuts.push([ctx, ...this._blockExits.pop()]);
    }

    public visitScopedIfallStatement(ctx: ast.IfallStatementContext) {
        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();

        this._blockEntries.push(ctx);
        this._blockExits.push([]);

        const stmt = ctx.programStatement();
        this._blockOuts.push([ctx]);
        super.visitScopedIfallStatement(ctx);
        this.addEdge(ctx, this.stmtOrBlock(ctx.programStatement().statement()), 'T');
        this._blockOuts.pop().forEach(src => this.addEdge(src, ctx, 'B'));

        this._blockEntries.pop();

        this._blockOuts.push([ctx, ...this._blockExits.pop()]);
    }

    public visitScopedDoStatement(ctx: ast.DoStatementContext) {
        this._blockOuts.push([]);
        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();

        this._blockEntries.push(ctx);
        this._blockExits.push([]);

        super.visitScopedDoStatement(ctx);
        this.addEdge(ctx, this.stmtOrBlock(ctx.statement()), 'T');
        this._blockOuts.pop().forEach(src => this.addEdge(src, ctx));

        this._blockEntries.pop();

        this._blockOuts.push([ctx, ...this._blockExits.pop()]);
    }

    public visitScopedWhileStatement(ctx: ast.WhileStatementContext) {
        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();

        this._blockEntries.push(ctx);
        this._blockExits.push([]);

        this._blockOuts.push([ctx]);
        super.visitScopedWhileStatement(ctx);
        this.addEdge(ctx, this.stmtOrBlock(ctx.programStatement().statement()), 'T');
        this._blockOuts.pop().forEach(src => this.addEdge(src, ctx, 'B'));

        this._blockEntries.pop();

        this._blockOuts.push([ctx, ...this._blockExits.pop()]);
    }

    public visitScopedForStatement(ctx: ast.ForStatementContext) {
        // handle init
        if (ctx.forExpression()) {
            const init = ctx.forExpression();
            init.accept(this);
            this.addVertex(init);
            this._blockOuts.pop();
            this._blockOuts.push([init]);
        }

        // handle condition
        const cond = ctx.expression() ? ctx.expression() : ctx;
        if (ctx.expression()) {
            ctx.expression().accept(this);
        }
        this.addVertex(cond, 'CONTROL');
        this._blockOuts.pop();

        this._blockEntries.push(cond);
        this._blockExits.push([]);

        // handle body
        this._blockOuts.push([cond]);
        ctx.programStatement().accept(this);
        this.addEdge(cond, this.stmtOrBlock(ctx.programStatement().statement()), 'T');

        // handle update expr
        if (ctx.forExpressionStatement()) {
            const update = ctx.forExpressionStatement();
            update.accept(this);
            this.addVertex(update);
            this._blockOuts.pop().forEach(src => this.addEdge(src, update));
            this.addEdge(update, cond, 'B');
        } else {
            this._blockOuts.pop().forEach(src => this.addEdge(src, cond, 'B'));
        }

        this._blockEntries.pop();

        this._blockOuts.push([cond, ...this._blockExits.pop()]);
    }

    public visitSwitchStatement(ctx: ast.SwitchStatementContext) {
        ctx.expression().accept(this);

        this.addVertex(ctx, 'CONTROL');
        this._blockOuts.pop();
        this._blockExits.push([]);

        const outs: nodeType[] = [];
        let fallthrough = false;
        ctx.switchCase().forEach(switchCase => {
            if (!fallthrough) {
                this._blockOuts.push([ctx]);
            } else {
                this._blockOuts[this._blockOuts.length - 1].push(ctx);
            }
            switchCase.accept(this);
            fallthrough = switchCase.programStatement(switchCase.programStatement().length - 1).text != 'break;';
            if (!fallthrough) {
                outs.push(...this._blockOuts.pop());
            }
        });

        if (!fallthrough) {
            this._blockOuts.push([ctx]);
        } else {
            this._blockOuts[this._blockOuts.length - 1].push(ctx);
        }
        ctx.programStatement().forEach(stmt => {
            stmt.accept(this);
        });
        outs.push(...this._blockOuts.pop());

        this.addEdge(ctx, ctx.programStatement(0), 'default');

        outs.push(...this._blockExits.pop());
        this._blockOuts.push(outs);
    }

    public visitScopedSwitchCase(ctx: ast.SwitchCaseContext) {
        const outs = this._blockOuts.pop();
        super.visitScopedSwitchCase(ctx);
        outs.forEach(o => this.addEdge(o, ctx.programStatement(0), ctx.expressionList().text));
    }

    public visitContinueStatement(ctx: ast.ContinueStatementContext) {
        this.addVertex(ctx);
        this.addEdge(ctx, this._blockEntries[this._blockEntries.length - 1], 'B');
        this._blockOuts.pop();
        this._blockOuts.push([]);
        this.visitChildren(ctx);
    }

    public visitBreakStatement(ctx: ast.BreakStatementContext) {
        this.addVertex(ctx);
        this._blockOuts.pop();
        this._blockExits[this._blockExits.length - 1].push(ctx);
        this._blockOuts.push([]);
        this.visitChildren(ctx);
    }

    public visitStopStatement(ctx: ast.StopStatementContext) {
        this.addVertex(ctx);
        this.addEdge(ctx, this._blockEntries[this._blockEntries.length - 1], 'B');
        this._blockOuts.pop();
        this._blockOuts.push([]);
        this.visitChildren(ctx);
    }

    public visitReturnStatement(ctx: ast.ReturnStatementContext) {
        this.addVertex(ctx);
        this._blockOuts.pop();
        this._blockExits[this._blockExits.length - 1].push(ctx);
        this._blockOuts.push([]);
        this.visitChildren(ctx);
    }

    public visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        super.visitForVariableDeclaration(ctx);

        // FIXME handle function/visitor/traversal/fixp decls?
    }

    public visitScopedFunctionExpression(ctx: ast.FunctionExpressionContext) {
        this._blockOuts.push([]);
        this.addVertex(`<enter:${this.getId(ctx)}>`, 'ENTRY');
        this._blockOuts.pop();

        this._blockOuts.push([`<enter:${this.getId(ctx)}>`]);
        this.addVertex(ctx);
        this._blockOuts.pop();

        this._blockExits.push([]);

        this._blockOuts.push([ctx]);
        super.visitScopedFunctionExpression(ctx);
        this._blockOuts.pop();

        const exit = '<exit:' + this.getId(ctx) + '>';
        this._blockOuts.push([]);
        this.addVertex(exit, 'EXIT');
        this._blockExits.pop().forEach(src => this.addEdge(src, exit));
        this._blockOuts.pop();

        // TODO store function entry/exit somewhere?
    }

    public visitScopedFixpExpression(ctx: ast.FixpExpressionContext) {
        this._blockOuts.push([]);
        this.addVertex(`<enter:${this.getId(ctx)}>`, 'ENTRY');
        this._blockOuts.pop();

        this._blockOuts.push([`<enter:${this.getId(ctx)}>`]);
        this.addVertex(ctx);
        this._blockOuts.pop();

        this._blockExits.push([]);

        this._blockOuts.push([ctx]);
        super.visitScopedFixpExpression(ctx);
        this._blockOuts.pop();

        const exit = '<exit:' + this.getId(ctx) + '>';
        this._blockOuts.push([]);
        this.addVertex(exit, 'EXIT');
        this._blockExits.pop().forEach(src => this.addEdge(src, exit));
        this._blockOuts.pop();

        // TODO store function entry/exit somewhere?
    }

    public visitScopedTraversalExpression(ctx: ast.TraversalExpressionContext) {
        this._blockOuts.push([]);
        this.addVertex(`<enter:${this.getId(ctx)}>`, 'ENTRY');
        this._blockOuts.pop();

        this._blockOuts.push([`<enter:${this.getId(ctx)}>`]);
        this.addVertex(ctx);
        this._blockOuts.pop();

        this._blockExits.push([]);

        this._blockOuts.push([ctx]);
        super.visitScopedTraversalExpression(ctx);
        this._blockOuts.pop();

        const exit = '<exit:' + this.getId(ctx) + '>';
        this._blockOuts.push([]);
        this.addVertex(exit, 'EXIT');
        this._blockExits.pop().forEach(src => this.addEdge(src, exit));
        this._blockOuts.pop();

        // TODO store function entry/exit somewhere?
    }

    public visitVisitorExpression(ctx: ast.VisitorExpressionContext) {
        this._blockOuts.push([]);
        this.addVertex(`<enter:${this.getId(ctx)}>`, 'ENTRY');
        this._blockOuts.pop();

        this._blockOuts.push([`<enter:${this.getId(ctx)}>`]);
        this.addVertex(ctx);
        this._blockOuts.pop();

        const exit = '<exit:' + this.getId(ctx) + '>';
        this._blockOuts.push([ctx]);
        this.addVertex(exit, 'EXIT');
        this._blockOuts.pop();

        this._blockEntries.push(ctx);

        ctx.visitStatement().forEach(stmt => {
            this._blockOuts.push([ctx]);
            stmt.accept(this);
            this._blockOuts.pop().forEach(src => this.addEdge(src, ctx, 'B'));
        });

        this._blockEntries.pop();
        // TODO store function entry/exit somewhere?
    }

    public visitScopedVisitStatement(ctx: ast.VisitStatementContext) {
        this.addVertex(ctx);
        this._blockOuts.pop();

        this._blockOuts.push([ctx]);
        super.visitScopedVisitStatement(ctx);
    }

    public visitFactor(ctx: ast.FactorContext) {
        if (ctx.call().length != 1) {
            this.visitChildren(ctx);
            return;
        }

        const expr = ctx.parent.parent.parent.parent.parent;
        if (expr.parent instanceof ast.ExprStatementContext) {
            this._kinds[this.getId(expr.parent.parent.parent)] = 'CALL';
        } else {
            // console.log('type: ' + typeof expr.parent);
            // this._kinds[this.getId(expr.parent.parent.parent)] = 'CALL';
        }

        const call = ctx.call(0).expressionList();
        if (call == undefined) {
            this.visitChildren(ctx);
            return;
        }

        const funcName = ctx.operand().text;

        // let targets = [];

        // if (funcName == 'visit' && call.expression().length >= 1 && call.expression().length <= 2) {
        //     if (call.expression().length == 2) {
        //         targets.push(this.exprToId(call.expression(1)));
        //     } else {
        //         // TODO target = current visitor
        //     }
        // } else if (funcName == 'traverse' && call.expression().length >= 4 && call.expression().length <= 5) {
        //     targets.push(this.exprToId(call.expression(3)));
        //     if (call.expression().length == 5) {
        //         targets.push(this.exprToId(call.expression(4)));
        //     }
        // } else {
        //     targets.push(ctx.operand().identifier());
        // }

        // TODO handle patching function calls
        this.visitChildren(ctx);

        // targets.forEach(id => {
        //     const def = this.defs[this.usedefs[id?.start?.startIndex]];
        //     if (def !== undefined) {
        //         console.log('id: ' + id);
        //         console.log('def: ' + def);
        //     }
        // });
    }

    public visitDeclaration(ctx: ast.DeclarationContext) {
        this.addVertex(ctx);
        this._blockOuts.pop();
        this._blockOuts.push([ctx]);
        this.visitChildren(ctx);
    }
}

type nodeRange = { start: number, end: number };

function getNodeRange(s: string): nodeRange {
    const match = s.match(/\[(\d+)\.\.(\d+)\]$/);
    if (match === null) {
        return undefined;
    }
    return { start: parseInt(match[1]), end : parseInt(match[2]) };
}

async function graphToDot(g: Graph, document: vscode.TextDocument = undefined, sel: vscode.Selection = undefined, zoomed = false) {
    const nodeInSelection = function(s: string) {
        if (sel !== undefined) {
            const range = getNodeRange(s);
            if (range !== undefined) {
                const start = document.positionAt(range.start);
                const end = document.positionAt(range.end);
                if (zoomed)
                    return sel.start.line <= start.line &&
                        sel.end.line >= end.line &&
                        (start.line > sel.start.line || sel.start.character <= start.character) &&
                        (end.line < sel.end.line || sel.end.character >= end.character);
                return sel.intersection(new vscode.Range(start, end)) !== undefined;
            }
        }
        return undefined;
    };

    const verts = new Set<string>();

    let s = 'digraph G {\n\tbgcolor=white;\n\n';
    for (const src of Object.keys(g.edges)) {
        for (const dst of Object.keys(g.edges[src])) {
            const edge = g.edges[src][dst];
            if (edge !== undefined) {
                if (zoomed && sel && !nodeInSelection(src) && !nodeInSelection(dst)) {
                    continue;
                }
                verts.add(src);
                verts.add(dst);
                const attrs = {};
                s += `\t"${ScopedVisitor.dotEscape(src)}" -> "${ScopedVisitor.dotEscape(dst)}"`;
                if (edge.trim().length > 0) {
                    attrs['label'] = `"&nbsp;${edge}&nbsp;"`;
                }
                if (nodeInSelection(src)) {
                    attrs['color'] = '"#ff6666"';
                }
                if (Object.keys(attrs).length > 0) {
                    s += ' [' + Object.keys(attrs).map(k => `${k}=${attrs[k]}`).join(' ') + ']';
                }
                s += '\n';
            }
        }
    }
    s += '\n';
    for (const v of g.vertices) {
        if (zoomed && !verts.has(v)) {
            continue;
        }
        if (g.kinds[v] == 'ENTRY') {
            s += '\t{\n\t\trank=source\n\t';
        } else if (g.kinds[v] == 'EXIT') {
            s += '\t{\n\t\trank=sink\n\t';
        }
        s += `\t"${ScopedVisitor.dotEscape(v)}"`;
        const attrs = {};
        attrs['label'] = `"${g.getRecord(v)}"`;
        if (v in g.kinds) {
            switch (g.kinds[v]) {
                case 'CONTROL':
                    attrs['shape'] = 'diamond';
                    attrs['width'] = 0;
                    attrs['height'] = 0;
                    attrs['margin'] = 0;
                    break;
                case 'CALL':
                    attrs['shape'] = 'polygon';
                    attrs['skew'] = '0.1';
                    attrs['width'] = 0;
                    attrs['height'] = 0;
                    attrs['margin'] = 0;
                    break;
                case 'EXIT':
                case 'ENTRY':
                    attrs['shape'] = 'point';
                    attrs['width'] = '0.2';
                    attrs['xlabel'] = `<${ScopedVisitor.dotHTMLEscape(v)}>`;
                    break;
                default:
                    attrs['shape'] = 'ellipse';
                    attrs['width'] = 0;
                    attrs['height'] = 0;
                    attrs['margin'] = 0;
                    break;
            }
        }
        if (nodeInSelection(v)) {
            attrs['style'] = 'filled';
            attrs['fillcolor'] = '"#ccccff"';
        }
        if (Object.keys(attrs).length > 0) {
            s += ' [' + Object.keys(attrs).map(k => `${k}=${attrs[k]}`).join(' ') + ']';
        }
        s += '\n';
        if (g.kinds[v] == 'ENTRY' || g.kinds[v] == 'EXIT') {
            s += '\t}\n';
        }
    }
    s += '}';

    await vscode.workspace.fs.writeFile(vscode.Uri.file(getWorkspaceRoot() + '/cfg.dot'), new TextEncoder().encode(s));
}

export async function generateCFG(uri: vscode.Uri|undefined, zoomed = false) {
    let document: vscode.TextDocument;
    let sel: vscode.Selection;

    if (uri === undefined) {
        document = vscode.window.activeTextEditor.document;
        sel = vscode.window.activeTextEditor.selection;
        if (sel.isReversed) {
            sel = new vscode.Selection(sel.end, sel.start);
        }
        if (sel.isEmpty) {
            sel = undefined;
        } else if (document.offsetAt(sel.end) > 0) {
            sel = new vscode.Selection(sel.start, document.positionAt(document.offsetAt(sel.end) - 1));
        }
    } else {
        document = vscode.workspace.textDocuments.filter((doc) => doc.uri.toString() == uri.toString())[0];
    }

    let txt: string;
    if (document !== undefined) {
        txt = document.getText();
    } else {
        if (uri === undefined) return;
        txt = await getFileContents(uri.fsPath);
    }

    const v = new CFGVisitor();
    v.visit(parseBoaCode(txt));
    graphToDot(v, document, sel, zoomed);
}