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
import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as ast from '../antlr/boaParser';
import { boaVisitor } from '../antlr/boaVisitor';
import { parseBoaCode } from './parser';
import { getFileContents, getOperand, getWorkspaceRoot } from '../utils';
import * as consts from '../consts';
import { RuleNode } from 'antlr4ts/tree/RuleNode';

export class BoaDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
        const tree = parseBoaCode(document.getText(), document.uri);
        const syms = new SymbolsVisitor(document.uri).visit(tree);
        return Promise.resolve(syms);
    }
}

export class BoaWorkspaceSymbolProvider implements vscode.WorkspaceSymbolProvider {
    public async provideWorkspaceSymbols(query: string, token: vscode.CancellationToken): Promise<vscode.SymbolInformation[]> {
        let items = [];

        for (const uri of await getAllFiles(getWorkspaceRoot() + '/' + consts.scriptPath)) {
            const tree = parseBoaCode(await getFileContents(uri.fsPath), uri);
            const syms = new SymbolsVisitor(uri).visit(tree);
            items = items.concat(syms.filter(s => s.name.startsWith(query)));
        }

        return Promise.resolve(items);
    }
}

async function getAllFiles(path: string) {
    const items = await vscode.workspace.fs.readDirectory(vscode.Uri.file(path));

    let files = items.filter(item => item[1] == vscode.FileType.File && item[0].endsWith('.boa')).map(item => vscode.Uri.file(path + '/' + item[0]));

    const subdirs = items.filter(item => item[1] == vscode.FileType.Directory).map(dir => dir[0]);
    for (const dir of subdirs) {
        files = files.concat((await getAllFiles(path + '/' + dir)));
    }

    return files;
}

export function getLoc(rule: ParserRuleContext, uri: vscode.Uri) {
    return new vscode.Location(uri, getRange(rule));
}

export function getRange(rule: ParserRuleContext) {
    const stop = rule.start == rule.stop ?
        rule.start.charPositionInLine + rule.text.length :
        rule.stop.charPositionInLine;
    return new vscode.Range(
        new vscode.Position(rule.start.line - 1, rule.start.charPositionInLine),
        new vscode.Position(rule.stop.line - 1, stop)
    );
}

export class SymbolsVisitor extends AbstractParseTreeVisitor<vscode.SymbolInformation[]> implements boaVisitor<vscode.SymbolInformation[]> {
    constructor(private uri: vscode.Uri, private offset: number = undefined) {
        super();
    }

    defaultResult() {
        return [];
    }

    protected shouldVisitNextChild(node: RuleNode, currentResult: vscode.SymbolInformation[]): boolean {
        return this.offset === undefined || (node.ruleContext as ParserRuleContext).start.startIndex <= this.offset;
    }

    protected aggregateResult(aggregate: vscode.SymbolInformation[], nextResult: vscode.SymbolInformation[]): vscode.SymbolInformation[] {
        return aggregate.concat(nextResult);
    }

    visitVisitorExpression(ctx: ast.VisitorExpressionContext) {
        return [new vscode.SymbolInformation('visitor', vscode.SymbolKind.Class, undefined, getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitVisitStatement(ctx: ast.VisitStatementContext) {
        let str = ctx.BEFORE() ? 'before ' : 'after ';
        if (ctx.WILDCARD() !== undefined)
            str += '_';
        else if (ctx.varDecl() !== undefined)
            str += ctx.varDecl().identifier().text + ': ' + ctx.varDecl().type().text;
        else
            str += ctx.identifier().map(id => id.text).join(', ');
        return [new vscode.SymbolInformation(str, vscode.SymbolKind.Property, undefined, getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    private typenames = [];

    visitTypeDeclaration(ctx: ast.TypeDeclarationContext) {
        this.typenames.push(ctx.identifier().text);
        const items = [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Struct, undefined, getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
        this.typenames.pop();
        return items;
    }

    visitComponent(ctx: ast.ComponentContext) {
        if (this.typenames.length == 0 || ctx.identifier() === undefined) {
            return this.visitChildren(ctx);
        }

        return [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Field, this.typenames[this.typenames.length - 1], getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitEnumBodyDeclaration(ctx: ast.EnumBodyDeclarationContext) {
        return [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Field, this.typenames[this.typenames.length - 1], getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        const isfunc = ctx.expression() ? getOperand(ctx.expression()).functionExpression() : false;
        return [new vscode.SymbolInformation(ctx.identifier().text, isfunc ? vscode.SymbolKind.Function : vscode.SymbolKind.Variable, undefined, getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitVarDecl(ctx: ast.VarDeclContext) {
        return [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Variable, undefined, getLoc(ctx.identifier(), this.uri))]
            .concat(this.visitChildren(ctx));
    }
}