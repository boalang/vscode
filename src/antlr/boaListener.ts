// Generated from src/antlr/boa.g4 by ANTLR 4.9.0-SNAPSHOT




import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `boaParser`.
 */
export interface boaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `postfixStatement`
	 * labeled alternative in `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 */
	enterPostfixStatement?: (ctx: PostfixStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `postfixStatement`
	 * labeled alternative in `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 */
	exitPostfixStatement?: (ctx: PostfixStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `exprStatement`
	 * labeled alternative in `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExprStatement?: (ctx: ExprStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `exprStatement`
	 * labeled alternative in `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExprStatement?: (ctx: ExprStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.programStatement`.
	 * @param ctx the parse tree
	 */
	enterProgramStatement?: (ctx: ProgramStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.programStatement`.
	 * @param ctx the parse tree
	 */
	exitProgramStatement?: (ctx: ProgramStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.staticVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticVariableDeclaration?: (ctx: StaticVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.staticVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticVariableDeclaration?: (ctx: StaticVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.enumBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclaration?: (ctx: EnumBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.enumBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclaration?: (ctx: EnumBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.enumType`.
	 * @param ctx the parse tree
	 */
	enterEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.enumType`.
	 * @param ctx the parse tree
	 */
	exitEnumType?: (ctx: EnumTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterMapType?: (ctx: MapTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitMapType?: (ctx: MapTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.stackType`.
	 * @param ctx the parse tree
	 */
	enterStackType?: (ctx: StackTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.stackType`.
	 * @param ctx the parse tree
	 */
	exitStackType?: (ctx: StackTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.queueType`.
	 * @param ctx the parse tree
	 */
	enterQueueType?: (ctx: QueueTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.queueType`.
	 * @param ctx the parse tree
	 */
	exitQueueType?: (ctx: QueueTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.setType`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.setType`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.outputType`.
	 * @param ctx the parse tree
	 */
	enterOutputType?: (ctx: OutputTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.outputType`.
	 * @param ctx the parse tree
	 */
	exitOutputType?: (ctx: OutputTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.fixpType`.
	 * @param ctx the parse tree
	 */
	enterFixpType?: (ctx: FixpTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.fixpType`.
	 * @param ctx the parse tree
	 */
	exitFixpType?: (ctx: FixpTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.visitorType`.
	 * @param ctx the parse tree
	 */
	enterVisitorType?: (ctx: VisitorTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.visitorType`.
	 * @param ctx the parse tree
	 */
	exitVisitorType?: (ctx: VisitorTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.traversalType`.
	 * @param ctx the parse tree
	 */
	enterTraversalType?: (ctx: TraversalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.traversalType`.
	 * @param ctx the parse tree
	 */
	exitTraversalType?: (ctx: TraversalTypeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.emitStatement`.
	 * @param ctx the parse tree
	 */
	enterEmitStatement?: (ctx: EmitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.emitStatement`.
	 * @param ctx the parse tree
	 */
	exitEmitStatement?: (ctx: EmitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.forExpression`.
	 * @param ctx the parse tree
	 */
	enterForExpression?: (ctx: ForExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.forExpression`.
	 * @param ctx the parse tree
	 */
	exitForExpression?: (ctx: ForExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.forVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterForVariableDeclaration?: (ctx: ForVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.forVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitForVariableDeclaration?: (ctx: ForVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 */
	enterForExpressionStatement?: (ctx: ForExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.forExpressionStatement`.
	 * @param ctx the parse tree
	 */
	exitForExpressionStatement?: (ctx: ForExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.switchCase`.
	 * @param ctx the parse tree
	 */
	enterSwitchCase?: (ctx: SwitchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.switchCase`.
	 * @param ctx the parse tree
	 */
	exitSwitchCase?: (ctx: SwitchCaseContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.foreachStatement`.
	 * @param ctx the parse tree
	 */
	enterForeachStatement?: (ctx: ForeachStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.foreachStatement`.
	 * @param ctx the parse tree
	 */
	exitForeachStatement?: (ctx: ForeachStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.existsStatement`.
	 * @param ctx the parse tree
	 */
	enterExistsStatement?: (ctx: ExistsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.existsStatement`.
	 * @param ctx the parse tree
	 */
	exitExistsStatement?: (ctx: ExistsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.ifallStatement`.
	 * @param ctx the parse tree
	 */
	enterIfallStatement?: (ctx: IfallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.ifallStatement`.
	 * @param ctx the parse tree
	 */
	exitIfallStatement?: (ctx: IfallStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.visitStatement`.
	 * @param ctx the parse tree
	 */
	enterVisitStatement?: (ctx: VisitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.visitStatement`.
	 * @param ctx the parse tree
	 */
	exitVisitStatement?: (ctx: VisitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.traverseStatement`.
	 * @param ctx the parse tree
	 */
	enterTraverseStatement?: (ctx: TraverseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.traverseStatement`.
	 * @param ctx the parse tree
	 */
	exitTraverseStatement?: (ctx: TraverseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.fixpStatement`.
	 * @param ctx the parse tree
	 */
	enterFixpStatement?: (ctx: FixpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.fixpStatement`.
	 * @param ctx the parse tree
	 */
	exitFixpStatement?: (ctx: FixpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.stopStatement`.
	 * @param ctx the parse tree
	 */
	enterStopStatement?: (ctx: StopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.stopStatement`.
	 * @param ctx the parse tree
	 */
	exitStopStatement?: (ctx: StopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.conjunction`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.conjunction`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpression?: (ctx: SimpleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpression?: (ctx: SimpleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.index`.
	 * @param ctx the parse tree
	 */
	enterIndex?: (ctx: IndexContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.index`.
	 * @param ctx the parse tree
	 */
	exitIndex?: (ctx: IndexContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.unaryFactor`.
	 * @param ctx the parse tree
	 */
	enterUnaryFactor?: (ctx: UnaryFactorContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.unaryFactor`.
	 * @param ctx the parse tree
	 */
	exitUnaryFactor?: (ctx: UnaryFactorContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.parenExpression`.
	 * @param ctx the parse tree
	 */
	enterParenExpression?: (ctx: ParenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.parenExpression`.
	 * @param ctx the parse tree
	 */
	exitParenExpression?: (ctx: ParenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpression?: (ctx: FunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.functionExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpression?: (ctx: FunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.fixpExpression`.
	 * @param ctx the parse tree
	 */
	enterFixpExpression?: (ctx: FixpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.fixpExpression`.
	 * @param ctx the parse tree
	 */
	exitFixpExpression?: (ctx: FixpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.visitorExpression`.
	 * @param ctx the parse tree
	 */
	enterVisitorExpression?: (ctx: VisitorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.visitorExpression`.
	 * @param ctx the parse tree
	 */
	exitVisitorExpression?: (ctx: VisitorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.traversalExpression`.
	 * @param ctx the parse tree
	 */
	enterTraversalExpression?: (ctx: TraversalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.traversalExpression`.
	 * @param ctx the parse tree
	 */
	exitTraversalExpression?: (ctx: TraversalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.composite`.
	 * @param ctx the parse tree
	 */
	enterComposite?: (ctx: CompositeContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.composite`.
	 * @param ctx the parse tree
	 */
	exitComposite?: (ctx: CompositeContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 */
	enterFloatingPointLiteral?: (ctx: FloatingPointLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.floatingPointLiteral`.
	 * @param ctx the parse tree
	 */
	exitFloatingPointLiteral?: (ctx: FloatingPointLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.characterLiteral`.
	 * @param ctx the parse tree
	 */
	enterCharacterLiteral?: (ctx: CharacterLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.characterLiteral`.
	 * @param ctx the parse tree
	 */
	exitCharacterLiteral?: (ctx: CharacterLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `boaParser.timeLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimeLiteral?: (ctx: TimeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `boaParser.timeLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimeLiteral?: (ctx: TimeLiteralContext) => void;
}

