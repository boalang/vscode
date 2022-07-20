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
import { getFileContents, getWorkspaceRoot } from '../utils';
import * as consts from '../consts';

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
    constructor(private uri: vscode.Uri) {
        super();
    }

    defaultResult() {
        return [];
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
        else if (ctx.COLON() !== undefined)
            str += ctx.identifier(0).text + ': ' + ctx.identifier(1).text;
        else
            str += ctx.identifier().map(id => id.text).join(', ');
        return [new vscode.SymbolInformation(str, vscode.SymbolKind.Property, undefined, getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitForVariableDeclaration(ctx: ast.ForVariableDeclarationContext) {
        const isfunc = ctx.expression() ?
            ctx.expression().conjunction(0).comparison(0).simpleExpression(0).term(0).factor(0).operand().functionExpression() :
            false;

        return [new vscode.SymbolInformation(ctx.identifier().text, isfunc ? vscode.SymbolKind.Function : vscode.SymbolKind.Variable, undefined, getLoc(ctx, this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitForeachStatement(ctx: ast.ForeachStatementContext) {
        return [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Variable, undefined, getLoc(ctx.identifier(), this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitExistsStatement(ctx: ast.ExistsStatementContext) {
        return [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Variable, undefined, getLoc(ctx.identifier(), this.uri))]
            .concat(this.visitChildren(ctx));
    }

    visitIfAllStatement(ctx: ast.IfallStatementContext) {
        return [new vscode.SymbolInformation(ctx.identifier().text, vscode.SymbolKind.Variable, undefined, getLoc(ctx.identifier(), this.uri))]
            .concat(this.visitChildren(ctx));
    }
}