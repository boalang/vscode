// Generated from src/antlr/boa.g4 by ANTLR 4.9.0-SNAPSHOT




import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PostfixStatementContext } from "./boaParser";
import { ExprStatementContext } from "./boaParser";
import { StartContext } from "./boaParser";
import { ProgramContext } from "./boaParser";
import { ProgramStatementContext } from "./boaParser";
import { DeclarationContext } from "./boaParser";
import { TypeDeclarationContext } from "./boaParser";
import { StaticVariableDeclarationContext } from "./boaParser";
import { VariableDeclarationContext } from "./boaParser";
import { TypeContext } from "./boaParser";
import { ComponentContext } from "./boaParser";
import { EnumBodyDeclarationContext } from "./boaParser";
import { ArrayTypeContext } from "./boaParser";
import { TupleTypeContext } from "./boaParser";
import { EnumTypeContext } from "./boaParser";
import { MemberContext } from "./boaParser";
import { MapTypeContext } from "./boaParser";
import { StackTypeContext } from "./boaParser";
import { QueueTypeContext } from "./boaParser";
import { SetTypeContext } from "./boaParser";
import { OutputTypeContext } from "./boaParser";
import { FunctionTypeContext } from "./boaParser";
import { FixpTypeContext } from "./boaParser";
import { VisitorTypeContext } from "./boaParser";
import { TraversalTypeContext } from "./boaParser";
import { StatementContext } from "./boaParser";
import { EmptyStatementContext } from "./boaParser";
import { AssignmentStatementContext } from "./boaParser";
import { BlockContext } from "./boaParser";
import { BreakStatementContext } from "./boaParser";
import { ContinueStatementContext } from "./boaParser";
import { DoStatementContext } from "./boaParser";
import { EmitStatementContext } from "./boaParser";
import { ForStatementContext } from "./boaParser";
import { ForExpressionContext } from "./boaParser";
import { ForVariableDeclarationContext } from "./boaParser";
import { ForExpressionStatementContext } from "./boaParser";
import { ExpressionStatementContext } from "./boaParser";
import { IfStatementContext } from "./boaParser";
import { ReturnStatementContext } from "./boaParser";
import { SwitchStatementContext } from "./boaParser";
import { SwitchCaseContext } from "./boaParser";
import { ForeachStatementContext } from "./boaParser";
import { ExistsStatementContext } from "./boaParser";
import { IfallStatementContext } from "./boaParser";
import { WhileStatementContext } from "./boaParser";
import { VisitStatementContext } from "./boaParser";
import { TraverseStatementContext } from "./boaParser";
import { FixpStatementContext } from "./boaParser";
import { StopStatementContext } from "./boaParser";
import { ExpressionContext } from "./boaParser";
import { ExpressionListContext } from "./boaParser";
import { ConjunctionContext } from "./boaParser";
import { ComparisonContext } from "./boaParser";
import { SimpleExpressionContext } from "./boaParser";
import { TermContext } from "./boaParser";
import { FactorContext } from "./boaParser";
import { SelectorContext } from "./boaParser";
import { IndexContext } from "./boaParser";
import { CallContext } from "./boaParser";
import { OperandContext } from "./boaParser";
import { UnaryFactorContext } from "./boaParser";
import { ParenExpressionContext } from "./boaParser";
import { FunctionExpressionContext } from "./boaParser";
import { FixpExpressionContext } from "./boaParser";
import { VisitorExpressionContext } from "./boaParser";
import { TraversalExpressionContext } from "./boaParser";
import { CompositeContext } from "./boaParser";
import { PairContext } from "./boaParser";
import { IdentifierContext } from "./boaParser";
import { IntegerLiteralContext } from "./boaParser";
import { FloatingPointLiteralContext } from "./boaParser";
import { CharacterLiteralContext } from "./boaParser";
import { StringLiteralContext } from "./boaParser";
import { TimeLiteralContext } from "./boaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `boaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface boaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `postfixStatement`
	 * labeled alternative in `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixStatement?: (ctx: PostfixStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprStatement`
	 * labeled alternative in `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprStatement?: (ctx: ExprStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.programStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramStatement?: (ctx: ProgramStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.staticVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticVariableDeclaration?: (ctx: StaticVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.enumBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclaration?: (ctx: EnumBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.enumType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumType?: (ctx: EnumTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.stackType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStackType?: (ctx: StackTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.queueType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueueType?: (ctx: QueueTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.setType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetType?: (ctx: SetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.outputType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputType?: (ctx: OutputTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.fixpType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixpType?: (ctx: FixpTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.visitorType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisitorType?: (ctx: VisitorTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.traversalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraversalType?: (ctx: TraversalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.emitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmitStatement?: (ctx: EmitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.forExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpression?: (ctx: ForExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.forVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForVariableDeclaration?: (ctx: ForVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpressionStatement?: (ctx: ForExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.switchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCase?: (ctx: SwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.foreachStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeachStatement?: (ctx: ForeachStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.existsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsStatement?: (ctx: ExistsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.ifallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfallStatement?: (ctx: IfallStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.visitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisitStatement?: (ctx: VisitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.traverseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraverseStatement?: (ctx: TraverseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.fixpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixpStatement?: (ctx: FixpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.stopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopStatement?: (ctx: StopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.conjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.simpleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpression?: (ctx: SimpleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.unaryFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryFactor?: (ctx: UnaryFactorContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.parenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpression?: (ctx: ParenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.functionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpression?: (ctx: FunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.fixpExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixpExpression?: (ctx: FixpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.visitorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisitorExpression?: (ctx: VisitorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.traversalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTraversalExpression?: (ctx: TraversalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.composite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComposite?: (ctx: CompositeContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointLiteral?: (ctx: FloatingPointLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.characterLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterLiteral?: (ctx: CharacterLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `boaParser.timeLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeLiteral?: (ctx: TimeLiteralContext) => Result;
}

