// Generated from src/antlr/boa.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { boaVisitor } from "./boaVisitor";


export class boaParser extends Parser {
	public static readonly OF = 1;
	public static readonly IF = 2;
	public static readonly DO = 3;
	public static readonly MAP = 4;
	public static readonly STACK = 5;
	public static readonly QUEUE = 6;
	public static readonly SET = 7;
	public static readonly FOR = 8;
	public static readonly FOREACH = 9;
	public static readonly IFALL = 10;
	public static readonly EXISTS = 11;
	public static readonly NOT = 12;
	public static readonly TYPE = 13;
	public static readonly ELSE = 14;
	public static readonly CASE = 15;
	public static readonly OUTPUT = 16;
	public static readonly FORMAT = 17;
	public static readonly WHILE = 18;
	public static readonly BREAK = 19;
	public static readonly ARRAY = 20;
	public static readonly STATIC = 21;
	public static readonly SWITCH = 22;
	public static readonly RETURN = 23;
	public static readonly WEIGHT = 24;
	public static readonly DEFAULT = 25;
	public static readonly CONTINUE = 26;
	public static readonly FUNCTION = 27;
	public static readonly FIXP = 28;
	public static readonly VISITOR = 29;
	public static readonly TRAVERSAL = 30;
	public static readonly BEFORE = 31;
	public static readonly AFTER = 32;
	public static readonly STOP = 33;
	public static readonly ENUM = 34;
	public static readonly SEMICOLON = 35;
	public static readonly COLON = 36;
	public static readonly COMMA = 37;
	public static readonly DOT = 38;
	public static readonly LBRACE = 39;
	public static readonly RBRACE = 40;
	public static readonly LPAREN = 41;
	public static readonly RPAREN = 42;
	public static readonly LBRACKET = 43;
	public static readonly RBRACKET = 44;
	public static readonly TEMPLATEL = 45;
	public static readonly TEMPLATER = 46;
	public static readonly OR = 47;
	public static readonly ONEOR = 48;
	public static readonly TWOOR = 49;
	public static readonly AND = 50;
	public static readonly ONEAND = 51;
	public static readonly TWOAND = 52;
	public static readonly INCR = 53;
	public static readonly DECR = 54;
	public static readonly EQEQ = 55;
	public static readonly NEQ = 56;
	public static readonly LT = 57;
	public static readonly LTEQ = 58;
	public static readonly GT = 59;
	public static readonly GTEQ = 60;
	public static readonly PLUS = 61;
	public static readonly MINUS = 62;
	public static readonly XOR = 63;
	public static readonly STAR = 64;
	public static readonly DIV = 65;
	public static readonly MOD = 66;
	public static readonly RSHIFT = 67;
	public static readonly NEG = 68;
	public static readonly INV = 69;
	public static readonly PLUSEQ = 70;
	public static readonly MINUSEQ = 71;
	public static readonly STAREQ = 72;
	public static readonly DIVEQ = 73;
	public static readonly ONEOREQ = 74;
	public static readonly XOREQ = 75;
	public static readonly MODEQ = 76;
	public static readonly ONEANDEQ = 77;
	public static readonly RSHIFTEQ = 78;
	public static readonly LSHIFTEQ = 79;
	public static readonly WILDCARD = 80;
	public static readonly QUESTION = 81;
	public static readonly DOLLAR = 82;
	public static readonly EQUALS = 83;
	public static readonly EMIT = 84;
	public static readonly RIGHT_ARROW = 85;
	public static readonly ML_STRING = 86;
	public static readonly IntegerLiteral = 87;
	public static readonly FloatingPointLiteral = 88;
	public static readonly CharacterLiteral = 89;
	public static readonly RegexLiteral = 90;
	public static readonly MultilineStringLiteral = 91;
	public static readonly StringLiteral = 92;
	public static readonly TimeLiteral = 93;
	public static readonly Identifier = 94;
	public static readonly WS = 95;
	public static readonly LineComment = 96;
	public static readonly NewLine = 97;
	public static readonly KeepWhitespace = 98;
	public static readonly InlineTemplateIdentifier = 99;
	public static readonly RULE_start = 0;
	public static readonly RULE_program = 1;
	public static readonly RULE_programStatement = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_typeDeclaration = 4;
	public static readonly RULE_staticVariableDeclaration = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_type = 7;
	public static readonly RULE_component = 8;
	public static readonly RULE_enumBodyDeclaration = 9;
	public static readonly RULE_arrayType = 10;
	public static readonly RULE_tupleType = 11;
	public static readonly RULE_enumType = 12;
	public static readonly RULE_member = 13;
	public static readonly RULE_mapType = 14;
	public static readonly RULE_stackType = 15;
	public static readonly RULE_queueType = 16;
	public static readonly RULE_setType = 17;
	public static readonly RULE_outputType = 18;
	public static readonly RULE_functionType = 19;
	public static readonly RULE_fixpType = 20;
	public static readonly RULE_visitorType = 21;
	public static readonly RULE_traversalType = 22;
	public static readonly RULE_statement = 23;
	public static readonly RULE_emptyStatement = 24;
	public static readonly RULE_assignmentStatement = 25;
	public static readonly RULE_block = 26;
	public static readonly RULE_breakStatement = 27;
	public static readonly RULE_continueStatement = 28;
	public static readonly RULE_doStatement = 29;
	public static readonly RULE_emitStatement = 30;
	public static readonly RULE_forStatement = 31;
	public static readonly RULE_forExpression = 32;
	public static readonly RULE_forVariableDeclaration = 33;
	public static readonly RULE_forExpressionStatement = 34;
	public static readonly RULE_expressionStatement = 35;
	public static readonly RULE_ifStatement = 36;
	public static readonly RULE_returnStatement = 37;
	public static readonly RULE_switchStatement = 38;
	public static readonly RULE_switchCase = 39;
	public static readonly RULE_foreachStatement = 40;
	public static readonly RULE_existsStatement = 41;
	public static readonly RULE_ifallStatement = 42;
	public static readonly RULE_whileStatement = 43;
	public static readonly RULE_visitStatement = 44;
	public static readonly RULE_fixpStatement = 45;
	public static readonly RULE_stopStatement = 46;
	public static readonly RULE_expression = 47;
	public static readonly RULE_expressionList = 48;
	public static readonly RULE_conjunction = 49;
	public static readonly RULE_comparison = 50;
	public static readonly RULE_simpleExpression = 51;
	public static readonly RULE_term = 52;
	public static readonly RULE_factor = 53;
	public static readonly RULE_selector = 54;
	public static readonly RULE_index = 55;
	public static readonly RULE_call = 56;
	public static readonly RULE_operand = 57;
	public static readonly RULE_unaryFactor = 58;
	public static readonly RULE_parenExpression = 59;
	public static readonly RULE_functionExpression = 60;
	public static readonly RULE_fixpExpression = 61;
	public static readonly RULE_visitorExpression = 62;
	public static readonly RULE_traversalExpression = 63;
	public static readonly RULE_varDecl = 64;
	public static readonly RULE_composite = 65;
	public static readonly RULE_pair = 66;
	public static readonly RULE_identifier = 67;
	public static readonly RULE_integerLiteral = 68;
	public static readonly RULE_floatingPointLiteral = 69;
	public static readonly RULE_characterLiteral = 70;
	public static readonly RULE_stringLiteral = 71;
	public static readonly RULE_timeLiteral = 72;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "program", "programStatement", "declaration", "typeDeclaration", 
		"staticVariableDeclaration", "variableDeclaration", "type", "component", 
		"enumBodyDeclaration", "arrayType", "tupleType", "enumType", "member", 
		"mapType", "stackType", "queueType", "setType", "outputType", "functionType", 
		"fixpType", "visitorType", "traversalType", "statement", "emptyStatement", 
		"assignmentStatement", "block", "breakStatement", "continueStatement", 
		"doStatement", "emitStatement", "forStatement", "forExpression", "forVariableDeclaration", 
		"forExpressionStatement", "expressionStatement", "ifStatement", "returnStatement", 
		"switchStatement", "switchCase", "foreachStatement", "existsStatement", 
		"ifallStatement", "whileStatement", "visitStatement", "fixpStatement", 
		"stopStatement", "expression", "expressionList", "conjunction", "comparison", 
		"simpleExpression", "term", "factor", "selector", "index", "call", "operand", 
		"unaryFactor", "parenExpression", "functionExpression", "fixpExpression", 
		"visitorExpression", "traversalExpression", "varDecl", "composite", "pair", 
		"identifier", "integerLiteral", "floatingPointLiteral", "characterLiteral", 
		"stringLiteral", "timeLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'of'", "'if'", "'do'", "'map'", "'stack'", "'queue'", "'set'", 
		"'for'", "'foreach'", "'ifall'", "'exists'", "'not'", "'type'", "'else'", 
		"'case'", "'output'", "'format'", "'while'", "'break'", "'array'", "'static'", 
		"'switch'", "'return'", "'weight'", "'default'", "'continue'", "'function'", 
		"'fixp'", "'visitor'", "'traversal'", "'before'", "'after'", "'stop'", 
		"'enum'", "';'", "':'", "','", "'.'", "'{'", "'}'", "'('", "')'", "'['", 
		"']'", "'{@'", "'@}'", "'or'", "'|'", "'||'", "'and'", "'&'", "'&&'", 
		"'++'", "'--'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", 
		"'^'", "'*'", "'/'", "'%'", "'>>'", "'~'", "'!'", "'+='", "'-='", "'*='", 
		"'/='", "'|='", "'^='", "'%='", "'&='", "'>>='", "'<<='", "'_'", "'?'", 
		"'$'", "'='", "'<<'", "'->'", "'\"\"\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OF", "IF", "DO", "MAP", "STACK", "QUEUE", "SET", "FOR", "FOREACH", 
		"IFALL", "EXISTS", "NOT", "TYPE", "ELSE", "CASE", "OUTPUT", "FORMAT", 
		"WHILE", "BREAK", "ARRAY", "STATIC", "SWITCH", "RETURN", "WEIGHT", "DEFAULT", 
		"CONTINUE", "FUNCTION", "FIXP", "VISITOR", "TRAVERSAL", "BEFORE", "AFTER", 
		"STOP", "ENUM", "SEMICOLON", "COLON", "COMMA", "DOT", "LBRACE", "RBRACE", 
		"LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "TEMPLATEL", "TEMPLATER", 
		"OR", "ONEOR", "TWOOR", "AND", "ONEAND", "TWOAND", "INCR", "DECR", "EQEQ", 
		"NEQ", "LT", "LTEQ", "GT", "GTEQ", "PLUS", "MINUS", "XOR", "STAR", "DIV", 
		"MOD", "RSHIFT", "NEG", "INV", "PLUSEQ", "MINUSEQ", "STAREQ", "DIVEQ", 
		"ONEOREQ", "XOREQ", "MODEQ", "ONEANDEQ", "RSHIFTEQ", "LSHIFTEQ", "WILDCARD", 
		"QUESTION", "DOLLAR", "EQUALS", "EMIT", "RIGHT_ARROW", "ML_STRING", "IntegerLiteral", 
		"FloatingPointLiteral", "CharacterLiteral", "RegexLiteral", "MultilineStringLiteral", 
		"StringLiteral", "TimeLiteral", "Identifier", "WS", "LineComment", "NewLine", 
		"KeepWhitespace", "InlineTemplateIdentifier",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(boaParser._LITERAL_NAMES, boaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return boaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "boa.g4"; }

	// @Override
	public get ruleNames(): string[] { return boaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return boaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}


	public isSemicolon() {
		if (this.currentToken.text != ";") {
			this.notifyErrorListeners("error: ';' expected");
			return;
		}
		this.state = this.state + 1;
		this.match(boaParser.SEMICOLON);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(boaParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, boaParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.program();
			this.state = 147;
			this.match(boaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, boaParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 149;
				this.programStatement();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public programStatement(): ProgramStatementContext {
		let _localctx: ProgramStatementContext = new ProgramStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, boaParser.RULE_programStatement);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, boaParser.RULE_declaration);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.typeDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.staticVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 160;
				this.variableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, boaParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(boaParser.TYPE);
			this.state = 164;
			this.identifier();
			this.state = 165;
			this.match(boaParser.EQUALS);
			this.state = 166;
			this.type();
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticVariableDeclaration(): StaticVariableDeclarationContext {
		let _localctx: StaticVariableDeclarationContext = new StaticVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, boaParser.RULE_staticVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(boaParser.STATIC);
			this.state = 170;
			this.variableDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, boaParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.forVariableDeclaration();
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, boaParser.RULE_type);
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.arrayType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
				this.mapType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this.tupleType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 178;
				this.outputType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 179;
				this.functionType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 180;
				this.fixpType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 181;
				this.visitorType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 182;
				this.traversalType();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 183;
				this.stackType();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 184;
				this.queueType();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 185;
				this.setType();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 186;
				this.enumType();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 187;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, boaParser.RULE_component);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 190;
				this.identifier();
				this.state = 191;
				this.match(boaParser.COLON);
				}
				break;
			}
			this.state = 195;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclaration(): EnumBodyDeclarationContext {
		let _localctx: EnumBodyDeclarationContext = new EnumBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, boaParser.RULE_enumBodyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.identifier();
			this.state = 198;
			this.match(boaParser.EQUALS);
			this.state = 199;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, boaParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(boaParser.ARRAY);
			this.state = 202;
			this.match(boaParser.OF);
			this.state = 203;
			this.component();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, boaParser.RULE_tupleType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(boaParser.LBRACE);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.ENUM - 32)) | (1 << (boaParser.LBRACE - 32)))) !== 0) || _la === boaParser.Identifier) {
				{
				this.state = 206;
				this.member();
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 207;
						this.match(boaParser.COMMA);
						this.state = 208;
						this.member();
						}
						}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === boaParser.COMMA) {
					{
					this.state = 214;
					this.match(boaParser.COMMA);
					}
				}

				}
			}

			this.state = 219;
			this.match(boaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumType(): EnumTypeContext {
		let _localctx: EnumTypeContext = new EnumTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, boaParser.RULE_enumType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(boaParser.ENUM);
			this.state = 222;
			this.match(boaParser.LBRACE);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || _la === boaParser.AFTER || _la === boaParser.STOP || _la === boaParser.Identifier) {
				{
				this.state = 223;
				this.enumBodyDeclaration();
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 224;
						this.match(boaParser.COMMA);
						this.state = 225;
						this.enumBodyDeclaration();
						}
						}
					}
					this.state = 230;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === boaParser.COMMA) {
					{
					this.state = 231;
					this.match(boaParser.COMMA);
					}
				}

				}
			}

			this.state = 236;
			this.match(boaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, boaParser.RULE_member);
		try {
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 238;
				this.typeDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.staticVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 240;
				this.component();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapType(): MapTypeContext {
		let _localctx: MapTypeContext = new MapTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, boaParser.RULE_mapType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(boaParser.MAP);
			this.state = 244;
			this.match(boaParser.LBRACKET);
			this.state = 245;
			this.component();
			this.state = 246;
			this.match(boaParser.RBRACKET);
			this.state = 247;
			this.match(boaParser.OF);
			this.state = 248;
			this.component();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stackType(): StackTypeContext {
		let _localctx: StackTypeContext = new StackTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, boaParser.RULE_stackType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(boaParser.STACK);
			this.state = 251;
			this.match(boaParser.OF);
			this.state = 252;
			this.component();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queueType(): QueueTypeContext {
		let _localctx: QueueTypeContext = new QueueTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, boaParser.RULE_queueType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(boaParser.QUEUE);
			this.state = 255;
			this.match(boaParser.OF);
			this.state = 256;
			this.component();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setType(): SetTypeContext {
		let _localctx: SetTypeContext = new SetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, boaParser.RULE_setType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(boaParser.SET);
			this.state = 259;
			this.match(boaParser.OF);
			this.state = 260;
			this.component();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputType(): OutputTypeContext {
		let _localctx: OutputTypeContext = new OutputTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, boaParser.RULE_outputType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(boaParser.OUTPUT);
			this.state = 265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 263;
				this.match(boaParser.SET);
				}
				break;

			case 2:
				{
				this.state = 264;
				this.identifier();
				}
				break;
			}
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === boaParser.LPAREN) {
				{
				this.state = 267;
				this.match(boaParser.LPAREN);
				this.state = 268;
				this.expressionList();
				this.state = 269;
				this.match(boaParser.RPAREN);
				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === boaParser.LBRACKET) {
				{
				{
				this.state = 273;
				this.match(boaParser.LBRACKET);
				this.state = 274;
				this.component();
				this.state = 275;
				this.match(boaParser.RBRACKET);
				}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 282;
			this.match(boaParser.OF);
			this.state = 283;
			this.component();
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this.match(boaParser.WEIGHT);
				this.state = 285;
				this.component();
				}
				break;
			}
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 288;
				this.match(boaParser.FORMAT);
				this.state = 289;
				this.match(boaParser.LPAREN);
				this.state = 290;
				this.expressionList();
				this.state = 291;
				this.match(boaParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, boaParser.RULE_functionType);
		let _la: number;
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.match(boaParser.FUNCTION);
				this.state = 296;
				this.match(boaParser.LPAREN);
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || _la === boaParser.AFTER || _la === boaParser.STOP || _la === boaParser.Identifier) {
					{
					this.state = 297;
					this.varDecl();
					this.state = 302;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === boaParser.COMMA) {
						{
						{
						this.state = 298;
						this.match(boaParser.COMMA);
						this.state = 299;
						this.varDecl();
						}
						}
						this.state = 304;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 307;
				this.match(boaParser.RPAREN);
				this.state = 310;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 308;
					this.match(boaParser.COLON);
					this.state = 309;
					this.type();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this.match(boaParser.FUNCTION);
				this.state = 313;
				this.match(boaParser.LPAREN);
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || _la === boaParser.AFTER || _la === boaParser.STOP || _la === boaParser.Identifier) {
					{
					this.state = 318;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						this.state = 314;
						this.varDecl();
						}
						break;

					case 2:
						{
						this.state = 315;
						this.identifier();
						 this.notifyErrorListeners("function arguments require an identifier and type"); 
						}
						break;
					}
					this.state = 328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === boaParser.COMMA) {
						{
						this.state = 326;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
						case 1:
							{
							this.state = 320;
							this.match(boaParser.COMMA);
							this.state = 321;
							this.varDecl();
							}
							break;

						case 2:
							{
							this.state = 322;
							this.match(boaParser.COMMA);
							this.state = 323;
							this.identifier();
							 this.notifyErrorListeners("function arguments require an identifier and type"); 
							}
							break;
						}
						}
						this.state = 330;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 333;
				this.match(boaParser.RPAREN);
				this.state = 336;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 334;
					this.match(boaParser.COLON);
					this.state = 335;
					this.type();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixpType(): FixpTypeContext {
		let _localctx: FixpTypeContext = new FixpTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, boaParser.RULE_fixpType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(boaParser.FIXP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visitorType(): VisitorTypeContext {
		let _localctx: VisitorTypeContext = new VisitorTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, boaParser.RULE_visitorType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(boaParser.VISITOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public traversalType(): TraversalTypeContext {
		let _localctx: TraversalTypeContext = new TraversalTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, boaParser.RULE_traversalType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(boaParser.TRAVERSAL);
			this.state = 345;
			this.match(boaParser.LPAREN);
			this.state = 346;
			this.identifier();
			this.state = 347;
			this.match(boaParser.COLON);
			this.state = 348;
			this.identifier();
			this.state = 349;
			this.match(boaParser.RPAREN);
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 350;
				this.match(boaParser.COLON);
				this.state = 351;
				this.type();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, boaParser.RULE_statement);
		try {
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.breakStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 357;
				this.continueStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 358;
				this.stopStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 359;
				this.doStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 360;
				this.forStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 361;
				this.ifStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 362;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 363;
				this.switchStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 364;
				this.foreachStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 365;
				this.existsStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 366;
				this.ifallStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 367;
				this.whileStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 368;
				this.emptyStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 369;
				this.emitStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 370;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, boaParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(boaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, boaParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.factor();
			this.state = 376;
			_la = this._input.LA(1);
			if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (boaParser.PLUSEQ - 70)) | (1 << (boaParser.MINUSEQ - 70)) | (1 << (boaParser.STAREQ - 70)) | (1 << (boaParser.DIVEQ - 70)) | (1 << (boaParser.ONEOREQ - 70)) | (1 << (boaParser.XOREQ - 70)) | (1 << (boaParser.MODEQ - 70)) | (1 << (boaParser.ONEANDEQ - 70)) | (1 << (boaParser.RSHIFTEQ - 70)) | (1 << (boaParser.LSHIFTEQ - 70)) | (1 << (boaParser.EQUALS - 70)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 377;
			this.expression();
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, boaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(boaParser.LBRACE);
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				{
				this.state = 381;
				this.programStatement();
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 387;
			this.match(boaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, boaParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(boaParser.BREAK);
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, boaParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(boaParser.CONTINUE);
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, boaParser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(boaParser.DO);
			this.state = 396;
			this.statement();
			this.state = 397;
			this.match(boaParser.WHILE);
			this.state = 398;
			this.match(boaParser.LPAREN);
			this.state = 399;
			this.expression();
			this.state = 400;
			this.match(boaParser.RPAREN);
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emitStatement(): EmitStatementContext {
		let _localctx: EmitStatementContext = new EmitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, boaParser.RULE_emitStatement);
		let _la: number;
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.identifier();
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === boaParser.LBRACKET) {
					{
					{
					this.state = 404;
					this.match(boaParser.LBRACKET);
					this.state = 405;
					this.expression();
					this.state = 406;
					this.match(boaParser.RBRACKET);
					}
					}
					this.state = 412;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 413;
				this.match(boaParser.EMIT);
				 this.notifyErrorListeners("error: expected 'expression' before keyword 'weight'"); 
				this.state = 415;
				this.match(boaParser.WEIGHT);
				this.state = 416;
				this.expression();
				 this.isSemicolon(); 
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 419;
				this.identifier();
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === boaParser.LBRACKET) {
					{
					{
					this.state = 420;
					this.match(boaParser.LBRACKET);
					this.state = 421;
					this.expression();
					this.state = 422;
					this.match(boaParser.RBRACKET);
					}
					}
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 429;
				this.match(boaParser.EMIT);
				this.state = 430;
				this.expression();
				this.state = 433;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 431;
					this.match(boaParser.WEIGHT);
					this.state = 432;
					this.expression();
					}
					break;
				}
				 this.isSemicolon(); 
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, boaParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(boaParser.FOR);
			this.state = 440;
			this.match(boaParser.LPAREN);
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 441;
				this.forExpression();
				}
			}

			this.state = 444;
			this.match(boaParser.SEMICOLON);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 445;
				this.expression();
				}
			}

			this.state = 448;
			this.match(boaParser.SEMICOLON);
			this.state = 450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 449;
				this.forExpression();
				}
			}

			this.state = 452;
			this.match(boaParser.RPAREN);
			this.state = 453;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, boaParser.RULE_forExpression);
		try {
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.forVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 456;
				this.forExpressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forVariableDeclaration(): ForVariableDeclarationContext {
		let _localctx: ForVariableDeclarationContext = new ForVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, boaParser.RULE_forVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.identifier();
			this.state = 460;
			this.match(boaParser.COLON);
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 461;
				this.type();
				}
				break;
			}
			this.state = 470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 464;
				this.match(boaParser.EQUALS);
				this.state = 468;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					 this.notifyErrorListeners("error: output variable declarations should not include '='"); 
					this.state = 466;
					this.outputType();
					}
					break;

				case 2:
					{
					this.state = 467;
					this.expression();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpressionStatement(): ForExpressionStatementContext {
		let _localctx: ForExpressionStatementContext = new ForExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, boaParser.RULE_forExpressionStatement);
		let _la: number;
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				_localctx = new PostfixStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this.expression();
				this.state = 473;
				_la = this._input.LA(1);
				if (!(_la === boaParser.INCR || _la === boaParser.DECR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				_localctx = new ExprStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, boaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.forExpressionStatement();
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, boaParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(boaParser.IF);
			this.state = 482;
			this.match(boaParser.LPAREN);
			this.state = 483;
			this.expression();
			this.state = 484;
			this.match(boaParser.RPAREN);
			this.state = 485;
			this.programStatement();
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this.match(boaParser.ELSE);
				this.state = 487;
				this.programStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, boaParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(boaParser.RETURN);
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 491;
				this.expression();
				}
				break;
			}
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, boaParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(boaParser.SWITCH);
			this.state = 497;
			this.match(boaParser.LPAREN);
			this.state = 498;
			this.expression();
			this.state = 499;
			this.match(boaParser.RPAREN);
			this.state = 500;
			this.match(boaParser.LBRACE);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === boaParser.CASE) {
				{
				{
				this.state = 501;
				this.switchCase();
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 507;
			this.match(boaParser.DEFAULT);
			this.state = 508;
			this.match(boaParser.COLON);
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 509;
				this.statement();
				}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0));
			this.state = 514;
			this.match(boaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, boaParser.RULE_switchCase);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.match(boaParser.CASE);
			this.state = 517;
			this.expressionList();
			this.state = 518;
			this.match(boaParser.COLON);
			this.state = 520;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 519;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 522;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreachStatement(): ForeachStatementContext {
		let _localctx: ForeachStatementContext = new ForeachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, boaParser.RULE_foreachStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(boaParser.FOREACH);
			this.state = 525;
			this.match(boaParser.LPAREN);
			this.state = 526;
			this.varDecl();
			this.state = 527;
			this.match(boaParser.SEMICOLON);
			this.state = 528;
			this.expression();
			this.state = 529;
			this.match(boaParser.RPAREN);
			this.state = 530;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public existsStatement(): ExistsStatementContext {
		let _localctx: ExistsStatementContext = new ExistsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, boaParser.RULE_existsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(boaParser.EXISTS);
			this.state = 533;
			this.match(boaParser.LPAREN);
			this.state = 534;
			this.varDecl();
			this.state = 535;
			this.match(boaParser.SEMICOLON);
			this.state = 536;
			this.expression();
			this.state = 537;
			this.match(boaParser.RPAREN);
			this.state = 538;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifallStatement(): IfallStatementContext {
		let _localctx: IfallStatementContext = new IfallStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, boaParser.RULE_ifallStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(boaParser.IFALL);
			this.state = 541;
			this.match(boaParser.LPAREN);
			this.state = 542;
			this.varDecl();
			this.state = 543;
			this.match(boaParser.SEMICOLON);
			this.state = 544;
			this.expression();
			this.state = 545;
			this.match(boaParser.RPAREN);
			this.state = 546;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, boaParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(boaParser.WHILE);
			this.state = 549;
			this.match(boaParser.LPAREN);
			this.state = 550;
			this.expression();
			this.state = 551;
			this.match(boaParser.RPAREN);
			this.state = 552;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visitStatement(): VisitStatementContext {
		let _localctx: VisitStatementContext = new VisitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, boaParser.RULE_visitStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 554;
				this.match(boaParser.BEFORE);
				}
				break;

			case 2:
				{
				this.state = 555;
				this.match(boaParser.AFTER);
				}
				break;

			case 3:
				{
				 this.notifyErrorListeners("error: visit statements must start with 'before' or 'after'"); 
				}
				break;
			}
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.match(boaParser.WILDCARD);
				}
				break;

			case 2:
				{
				this.state = 560;
				this.varDecl();
				}
				break;

			case 3:
				{
				this.state = 561;
				this.identifier();
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === boaParser.COMMA) {
					{
					{
					this.state = 562;
					this.match(boaParser.COMMA);
					this.state = 563;
					this.identifier();
					}
					}
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 571;
			this.match(boaParser.RIGHT_ARROW);
			this.state = 572;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixpStatement(): FixpStatementContext {
		let _localctx: FixpStatementContext = new FixpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, boaParser.RULE_fixpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(boaParser.LPAREN);
			this.state = 575;
			this.identifier();
			this.state = 576;
			this.match(boaParser.COMMA);
			this.state = 577;
			this.identifier();
			this.state = 578;
			this.match(boaParser.COLON);
			this.state = 579;
			this.identifier();
			this.state = 580;
			this.match(boaParser.RPAREN);
			this.state = 581;
			this.match(boaParser.COLON);
			this.state = 582;
			this.type();
			this.state = 583;
			this.programStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stopStatement(): StopStatementContext {
		let _localctx: StopStatementContext = new StopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, boaParser.RULE_stopStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(boaParser.STOP);
			 this.isSemicolon(); 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, boaParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.conjunction();
			this.state = 593;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 589;
					_la = this._input.LA(1);
					if (!(_la === boaParser.OR || _la === boaParser.TWOOR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 590;
					this.conjunction();
					}
					}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, boaParser.RULE_expressionList);
		try {
			let _alt: number;
			this.state = 617;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.expression();
				this.state = 601;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 597;
						this.match(boaParser.COMMA);
						this.state = 598;
						this.expression();
						}
						}
					}
					this.state = 603;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.expression();
				this.state = 614;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 612;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case boaParser.OF:
						case boaParser.IF:
						case boaParser.DO:
						case boaParser.MAP:
						case boaParser.STACK:
						case boaParser.QUEUE:
						case boaParser.SET:
						case boaParser.FOR:
						case boaParser.FOREACH:
						case boaParser.IFALL:
						case boaParser.EXISTS:
						case boaParser.NOT:
						case boaParser.TYPE:
						case boaParser.ELSE:
						case boaParser.CASE:
						case boaParser.OUTPUT:
						case boaParser.FORMAT:
						case boaParser.WHILE:
						case boaParser.BREAK:
						case boaParser.ARRAY:
						case boaParser.STATIC:
						case boaParser.SWITCH:
						case boaParser.RETURN:
						case boaParser.WEIGHT:
						case boaParser.DEFAULT:
						case boaParser.CONTINUE:
						case boaParser.FUNCTION:
						case boaParser.FIXP:
						case boaParser.VISITOR:
						case boaParser.TRAVERSAL:
						case boaParser.BEFORE:
						case boaParser.AFTER:
						case boaParser.STOP:
						case boaParser.LBRACE:
						case boaParser.LPAREN:
						case boaParser.PLUS:
						case boaParser.MINUS:
						case boaParser.NEG:
						case boaParser.INV:
						case boaParser.DOLLAR:
						case boaParser.IntegerLiteral:
						case boaParser.FloatingPointLiteral:
						case boaParser.CharacterLiteral:
						case boaParser.RegexLiteral:
						case boaParser.MultilineStringLiteral:
						case boaParser.StringLiteral:
						case boaParser.TimeLiteral:
						case boaParser.Identifier:
							{
							 this.notifyErrorListeners("error: ',' expected"); 
							this.state = 606;
							this.expression();
							}
							break;
						case boaParser.COMMA:
							{
							this.state = 607;
							this.match(boaParser.COMMA);
							this.state = 610;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
							case 1:
								{
								this.state = 608;
								this.expression();
								}
								break;

							case 2:
								{
								 this.notifyErrorListeners("error: expression expected"); 
								}
								break;
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 616;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjunction(): ConjunctionContext {
		let _localctx: ConjunctionContext = new ConjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, boaParser.RULE_conjunction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.comparison();
			this.state = 624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 620;
					_la = this._input.LA(1);
					if (!(_la === boaParser.AND || _la === boaParser.TWOAND)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 621;
					this.comparison();
					}
					}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, boaParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 627;
			this.simpleExpression();
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 628;
				_la = this._input.LA(1);
				if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (boaParser.EQEQ - 55)) | (1 << (boaParser.NEQ - 55)) | (1 << (boaParser.LT - 55)) | (1 << (boaParser.LTEQ - 55)) | (1 << (boaParser.GT - 55)) | (1 << (boaParser.GTEQ - 55)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 629;
				this.simpleExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, boaParser.RULE_simpleExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.term();
			this.state = 637;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 633;
					_la = this._input.LA(1);
					if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (boaParser.ONEOR - 48)) | (1 << (boaParser.PLUS - 48)) | (1 << (boaParser.MINUS - 48)) | (1 << (boaParser.XOR - 48)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 634;
					this.term();
					}
					}
				}
				this.state = 639;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, boaParser.RULE_term);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.factor();
			this.state = 645;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 641;
					_la = this._input.LA(1);
					if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (boaParser.ONEAND - 51)) | (1 << (boaParser.STAR - 51)) | (1 << (boaParser.DIV - 51)) | (1 << (boaParser.MOD - 51)) | (1 << (boaParser.RSHIFT - 51)))) !== 0) || _la === boaParser.EMIT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 642;
					this.factor();
					}
					}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, boaParser.RULE_factor);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.operand();
			this.state = 654;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 652;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case boaParser.DOT:
						{
						this.state = 649;
						this.selector();
						}
						break;
					case boaParser.LBRACKET:
						{
						this.state = 650;
						this.index();
						}
						break;
					case boaParser.LPAREN:
						{
						this.state = 651;
						this.call();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 656;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, boaParser.RULE_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(boaParser.DOT);
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 658;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let _localctx: IndexContext = new IndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, boaParser.RULE_index);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(boaParser.LBRACKET);
			this.state = 662;
			this.expression();
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === boaParser.COLON) {
				{
				this.state = 663;
				this.match(boaParser.COLON);
				this.state = 664;
				this.expression();
				}
			}

			this.state = 667;
			this.match(boaParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, boaParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(boaParser.LPAREN);
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 670;
				this.expressionList();
				}
			}

			this.state = 673;
			this.match(boaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, boaParser.RULE_operand);
		try {
			this.state = 689;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 675;
				this.stringLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 676;
				this.characterLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 677;
				this.timeLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 678;
				this.integerLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 679;
				this.floatingPointLiteral();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 680;
				this.composite();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 681;
				this.functionExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 682;
				this.fixpExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 683;
				this.visitorExpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 684;
				this.traversalExpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 685;
				this.unaryFactor();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 686;
				this.match(boaParser.DOLLAR);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 687;
				this.parenExpression();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 688;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryFactor(): UnaryFactorContext {
		let _localctx: UnaryFactorContext = new UnaryFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, boaParser.RULE_unaryFactor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			_la = this._input.LA(1);
			if (!(_la === boaParser.NOT || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (boaParser.PLUS - 61)) | (1 << (boaParser.MINUS - 61)) | (1 << (boaParser.NEG - 61)) | (1 << (boaParser.INV - 61)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 692;
			this.factor();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenExpression(): ParenExpressionContext {
		let _localctx: ParenExpressionContext = new ParenExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, boaParser.RULE_parenExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(boaParser.LPAREN);
			this.state = 695;
			this.expression();
			this.state = 696;
			this.match(boaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, boaParser.RULE_functionExpression);
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 698;
				this.functionType();
				this.state = 699;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 701;
				this.identifier();
				this.state = 702;
				this.block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixpExpression(): FixpExpressionContext {
		let _localctx: FixpExpressionContext = new FixpExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, boaParser.RULE_fixpExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.fixpType();
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 707;
				this.fixpStatement();
				}
				break;

			case 2:
				{
				 this.notifyErrorListeners("error: only fixpoint statement allowed inside fixpoint expression"); 
				this.state = 709;
				this.programStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visitorExpression(): VisitorExpressionContext {
		let _localctx: VisitorExpressionContext = new VisitorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, boaParser.RULE_visitorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.visitorType();
			this.state = 713;
			this.match(boaParser.LBRACE);
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 717;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 714;
					this.visitStatement();
					}
					break;

				case 2:
					{
					 this.notifyErrorListeners("error: only 'before' and 'after' visit statements allowed inside visitor bodies"); 
					this.state = 716;
					this.programStatement();
					}
					break;
				}
				}
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.WILDCARD - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0));
			this.state = 721;
			this.match(boaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public traversalExpression(): TraversalExpressionContext {
		let _localctx: TraversalExpressionContext = new TraversalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, boaParser.RULE_traversalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.traversalType();
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 724;
				this.programStatement();
				}
				break;

			case 2:
				{
				 this.notifyErrorListeners("error: only traverse statements allowed inside traversal bodies"); 
				this.state = 726;
				this.programStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, boaParser.RULE_varDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.identifier();
			this.state = 730;
			this.match(boaParser.COLON);
			this.state = 731;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public composite(): CompositeContext {
		let _localctx: CompositeContext = new CompositeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, boaParser.RULE_composite);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.match(boaParser.LBRACE);
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 734;
				this.expressionList();
				this.state = 736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === boaParser.COMMA) {
					{
					this.state = 735;
					this.match(boaParser.COMMA);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 738;
				this.pair();
				this.state = 743;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 739;
						this.match(boaParser.COMMA);
						this.state = 740;
						this.pair();
						}
						}
					}
					this.state = 745;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === boaParser.COMMA) {
					{
					this.state = 746;
					this.match(boaParser.COMMA);
					}
				}

				}
				break;

			case 3:
				{
				this.state = 749;
				this.match(boaParser.COLON);
				}
				break;
			}
			this.state = 752;
			this.match(boaParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, boaParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.expression();
			this.state = 755;
			this.match(boaParser.COLON);
			this.state = 756;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, boaParser.RULE_identifier);
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case boaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 758;
				this.match(boaParser.Identifier);
				}
				break;
			case boaParser.FORMAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 759;
				this.match(boaParser.FORMAT);
				}
				break;
			case boaParser.OF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 760;
				_localctx._lit = this.match(boaParser.OF);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.IF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 762;
				_localctx._lit = this.match(boaParser.IF);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.DO:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 764;
				_localctx._lit = this.match(boaParser.DO);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.MAP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 766;
				_localctx._lit = this.match(boaParser.MAP);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.STACK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 768;
				_localctx._lit = this.match(boaParser.STACK);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.QUEUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 770;
				_localctx._lit = this.match(boaParser.QUEUE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.SET:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 772;
				_localctx._lit = this.match(boaParser.SET);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FOR:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 774;
				_localctx._lit = this.match(boaParser.FOR);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FOREACH:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 776;
				_localctx._lit = this.match(boaParser.FOREACH);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.IFALL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 778;
				_localctx._lit = this.match(boaParser.IFALL);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.EXISTS:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 780;
				_localctx._lit = this.match(boaParser.EXISTS);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.NOT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 782;
				_localctx._lit = this.match(boaParser.NOT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.TYPE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 784;
				_localctx._lit = this.match(boaParser.TYPE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.ELSE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 786;
				_localctx._lit = this.match(boaParser.ELSE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.CASE:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 788;
				_localctx._lit = this.match(boaParser.CASE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.OUTPUT:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 790;
				_localctx._lit = this.match(boaParser.OUTPUT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.WHILE:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 792;
				_localctx._lit = this.match(boaParser.WHILE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.BREAK:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 794;
				_localctx._lit = this.match(boaParser.BREAK);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.ARRAY:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 796;
				_localctx._lit = this.match(boaParser.ARRAY);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.STATIC:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 798;
				_localctx._lit = this.match(boaParser.STATIC);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.SWITCH:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 800;
				_localctx._lit = this.match(boaParser.SWITCH);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.RETURN:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 802;
				_localctx._lit = this.match(boaParser.RETURN);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.WEIGHT:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 804;
				_localctx._lit = this.match(boaParser.WEIGHT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 806;
				_localctx._lit = this.match(boaParser.DEFAULT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.CONTINUE:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 808;
				_localctx._lit = this.match(boaParser.CONTINUE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FUNCTION:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 810;
				_localctx._lit = this.match(boaParser.FUNCTION);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FIXP:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 812;
				_localctx._lit = this.match(boaParser.FIXP);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.VISITOR:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 814;
				_localctx._lit = this.match(boaParser.VISITOR);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.TRAVERSAL:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 816;
				_localctx._lit = this.match(boaParser.TRAVERSAL);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.BEFORE:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 818;
				_localctx._lit = this.match(boaParser.BEFORE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.AFTER:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 820;
				_localctx._lit = this.match(boaParser.AFTER);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.STOP:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 822;
				_localctx._lit = this.match(boaParser.STOP);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, boaParser.RULE_integerLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this.match(boaParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatingPointLiteral(): FloatingPointLiteralContext {
		let _localctx: FloatingPointLiteralContext = new FloatingPointLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, boaParser.RULE_floatingPointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(boaParser.FloatingPointLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public characterLiteral(): CharacterLiteralContext {
		let _localctx: CharacterLiteralContext = new CharacterLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, boaParser.RULE_characterLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(boaParser.CharacterLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, boaParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (boaParser.RegexLiteral - 90)) | (1 << (boaParser.MultilineStringLiteral - 90)) | (1 << (boaParser.StringLiteral - 90)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeLiteral(): TimeLiteralContext {
		let _localctx: TimeLiteralContext = new TimeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, boaParser.RULE_timeLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(boaParser.TimeLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u0347\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x03\x02\x03\x02\x03\x02\x03\x03\x06" +
		"\x03\x99\n\x03\r\x03\x0E\x03\x9A\x03\x04\x03\x04\x05\x04\x9F\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\xA4\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\xBF\n\t\x03\n\x03\n\x03\n\x05\n\xC4\n\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xD4\n\r" +
		"\f\r\x0E\r\xD7\v\r\x03\r\x05\r\xDA\n\r\x05\r\xDC\n\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xE5\n\x0E\f\x0E\x0E\x0E\xE8\v" +
		"\x0E\x03\x0E\x05\x0E\xEB\n\x0E\x05\x0E\xED\n\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xF4\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u010C\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0112\n\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0118\n\x14\f\x14\x0E\x14\u011B\v" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0121\n\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u0128\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u012F\n\x15\f\x15\x0E\x15\u0132\v\x15\x05\x15\u0134" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0139\n\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0141\n\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\u0149\n\x15\f\x15\x0E\x15\u014C\v\x15" +
		"\x05\x15\u014E\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0153\n\x15\x05\x15" +
		"\u0155\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0163\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0176\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07" +
		"\x1C\u0181\n\x1C\f\x1C\x0E\x1C\u0184\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x07 \u019B\n \f" +
		" \x0E \u019E\v \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x07 \u01AB\n \f \x0E \u01AE\v \x03 \x03 \x03 \x03 \x05 \u01B4\n \x03" +
		" \x03 \x05 \u01B8\n \x03!\x03!\x03!\x05!\u01BD\n!\x03!\x03!\x05!\u01C1" +
		"\n!\x03!\x03!\x05!\u01C5\n!\x03!\x03!\x03!\x03\"\x03\"\x05\"\u01CC\n\"" +
		"\x03#\x03#\x03#\x05#\u01D1\n#\x03#\x03#\x03#\x03#\x05#\u01D7\n#\x05#\u01D9" +
		"\n#\x03$\x03$\x03$\x03$\x05$\u01DF\n$\x03%\x03%\x03%\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x05&\u01EB\n&\x03\'\x03\'\x05\'\u01EF\n\'\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u01F9\n(\f(\x0E(\u01FC\v(\x03(\x03" +
		"(\x03(\x06(\u0201\n(\r(\x0E(\u0202\x03(\x03(\x03)\x03)\x03)\x03)\x06)" +
		"\u020B\n)\r)\x0E)\u020C\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x05.\u0230\n.\x03.\x03" +
		".\x03.\x03.\x03.\x07.\u0237\n.\f.\x0E.\u023A\v.\x05.\u023C\n.\x03.\x03" +
		".\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x03" +
		"0\x030\x031\x031\x031\x071\u0252\n1\f1\x0E1\u0255\v1\x032\x032\x032\x07" +
		"2\u025A\n2\f2\x0E2\u025D\v2\x032\x032\x032\x032\x032\x032\x052\u0265\n" +
		"2\x072\u0267\n2\f2\x0E2\u026A\v2\x052\u026C\n2\x033\x033\x033\x073\u0271" +
		"\n3\f3\x0E3\u0274\v3\x034\x034\x034\x054\u0279\n4\x035\x035\x035\x075" +
		"\u027E\n5\f5\x0E5\u0281\v5\x036\x036\x036\x076\u0286\n6\f6\x0E6\u0289" +
		"\v6\x037\x037\x037\x037\x077\u028F\n7\f7\x0E7\u0292\v7\x038\x038\x058" +
		"\u0296\n8\x039\x039\x039\x039\x059\u029C\n9\x039\x039\x03:\x03:\x05:\u02A2" +
		"\n:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x05;\u02B4\n;\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x05>\u02C3\n>\x03?\x03?\x03?\x03?\x05?\u02C9\n?" +
		"\x03@\x03@\x03@\x03@\x03@\x06@\u02D0\n@\r@\x0E@\u02D1\x03@\x03@\x03A\x03" +
		"A\x03A\x03A\x05A\u02DA\nA\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x05C\u02E3" +
		"\nC\x03C\x03C\x03C\x07C\u02E8\nC\fC\x0EC\u02EB\vC\x03C\x05C\u02EE\nC\x03" +
		"C\x05C\u02F1\nC\x03C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x05E\u033B\nE\x03F\x03F\x03G\x03G\x03H\x03" +
		"H\x03I\x03I\x03J\x03J\x03J\x02\x02\x02K\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x02\v\x04\x02" +
		"HQUU\x03\x0278\x04\x021133\x04\x024466\x03\x029>\x04\x0222?A\x05\x025" +
		"5BEVV\x05\x02\x0E\x0E?@FG\x03\x02\\^\x02\u0395\x02\x94\x03\x02\x02\x02" +
		"\x04\x98\x03\x02\x02\x02\x06\x9E\x03\x02\x02\x02\b\xA3\x03\x02\x02\x02" +
		"\n\xA5\x03\x02\x02\x02\f\xAB\x03\x02\x02\x02\x0E\xAE\x03\x02\x02\x02\x10" +
		"\xBE\x03\x02\x02\x02\x12\xC3\x03\x02\x02\x02\x14\xC7\x03\x02\x02\x02\x16" +
		"\xCB\x03\x02\x02\x02\x18\xCF\x03\x02\x02\x02\x1A\xDF\x03\x02\x02\x02\x1C" +
		"\xF3\x03\x02\x02\x02\x1E\xF5\x03\x02\x02\x02 \xFC\x03\x02\x02\x02\"\u0100" +
		"\x03\x02\x02\x02$\u0104\x03\x02\x02\x02&\u0108\x03\x02\x02\x02(\u0154" +
		"\x03\x02\x02\x02*\u0156\x03\x02\x02\x02,\u0158\x03\x02\x02\x02.\u015A" +
		"\x03\x02\x02\x020\u0175\x03\x02\x02\x022\u0177\x03\x02\x02\x024\u0179" +
		"\x03\x02\x02\x026\u017E\x03\x02\x02\x028\u0187\x03\x02\x02\x02:\u018A" +
		"\x03\x02\x02\x02<\u018D\x03\x02\x02\x02>\u01B7\x03\x02\x02\x02@\u01B9" +
		"\x03\x02\x02\x02B\u01CB\x03\x02\x02\x02D\u01CD\x03\x02\x02\x02F\u01DE" +
		"\x03\x02\x02\x02H\u01E0\x03\x02\x02\x02J\u01E3\x03\x02\x02\x02L\u01EC" +
		"\x03\x02\x02\x02N\u01F2\x03\x02\x02\x02P\u0206\x03\x02\x02\x02R\u020E" +
		"\x03\x02\x02\x02T\u0216\x03\x02\x02\x02V\u021E\x03\x02\x02\x02X\u0226" +
		"\x03\x02\x02\x02Z\u022F\x03\x02\x02\x02\\\u0240\x03\x02\x02\x02^\u024B" +
		"\x03\x02\x02\x02`\u024E\x03\x02\x02\x02b\u026B\x03\x02\x02\x02d\u026D" +
		"\x03\x02\x02\x02f\u0275\x03\x02\x02\x02h\u027A\x03\x02\x02\x02j\u0282" +
		"\x03\x02\x02\x02l\u028A\x03\x02\x02\x02n\u0293\x03\x02\x02\x02p\u0297" +
		"\x03\x02\x02\x02r\u029F\x03\x02\x02\x02t\u02B3\x03\x02\x02\x02v\u02B5" +
		"\x03\x02\x02\x02x\u02B8\x03\x02\x02\x02z\u02C2\x03\x02\x02\x02|\u02C4" +
		"\x03\x02\x02\x02~\u02CA\x03\x02\x02\x02\x80\u02D5\x03\x02\x02\x02\x82" +
		"\u02DB\x03\x02\x02\x02\x84\u02DF\x03\x02\x02\x02\x86\u02F4\x03\x02\x02" +
		"\x02\x88\u033A\x03\x02\x02\x02\x8A\u033C\x03\x02\x02\x02\x8C\u033E\x03" +
		"\x02\x02\x02\x8E\u0340\x03\x02\x02\x02\x90\u0342\x03\x02\x02\x02\x92\u0344" +
		"\x03\x02\x02\x02\x94\x95\x05\x04\x03\x02\x95\x96\x07\x02\x02\x03\x96\x03" +
		"\x03\x02\x02\x02\x97\x99\x05\x06\x04\x02\x98\x97\x03\x02\x02\x02\x99\x9A" +
		"\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x05" +
		"\x03\x02\x02\x02\x9C\x9F\x05\b\x05\x02\x9D\x9F\x050\x19\x02\x9E\x9C\x03" +
		"\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\x07\x03\x02\x02\x02\xA0\xA4\x05" +
		"\n\x06\x02\xA1\xA4\x05\f\x07\x02\xA2\xA4\x05\x0E\b\x02\xA3\xA0\x03\x02" +
		"\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4\t\x03\x02" +
		"\x02\x02\xA5\xA6\x07\x0F\x02\x02\xA6\xA7\x05\x88E\x02\xA7\xA8\x07U\x02" +
		"\x02\xA8\xA9\x05\x10\t\x02\xA9\xAA\b\x06\x01\x02\xAA\v\x03\x02\x02\x02" +
		"\xAB\xAC\x07\x17\x02\x02\xAC\xAD\x05\x0E\b\x02\xAD\r\x03\x02\x02\x02\xAE" +
		"\xAF\x05D#\x02\xAF\xB0\b\b\x01\x02\xB0\x0F\x03\x02\x02\x02\xB1\xBF\x05" +
		"\x16\f\x02\xB2\xBF\x05\x1E\x10\x02\xB3\xBF\x05\x18\r\x02\xB4\xBF\x05&" +
		"\x14\x02\xB5\xBF\x05(\x15\x02\xB6\xBF\x05*\x16\x02\xB7\xBF\x05,\x17\x02" +
		"\xB8\xBF\x05.\x18\x02\xB9\xBF\x05 \x11\x02\xBA\xBF\x05\"\x12\x02\xBB\xBF" +
		"\x05$\x13\x02\xBC\xBF\x05\x1A\x0E\x02\xBD\xBF\x05\x88E\x02\xBE\xB1\x03" +
		"\x02\x02\x02\xBE\xB2\x03\x02\x02\x02\xBE\xB3\x03\x02\x02\x02\xBE\xB4\x03" +
		"\x02\x02\x02\xBE\xB5\x03\x02\x02\x02\xBE\xB6\x03\x02\x02\x02\xBE\xB7\x03" +
		"\x02\x02\x02\xBE\xB8\x03\x02\x02\x02\xBE\xB9\x03\x02\x02\x02\xBE\xBA\x03" +
		"\x02\x02\x02\xBE\xBB\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBD\x03" +
		"\x02\x02\x02\xBF\x11\x03\x02\x02\x02\xC0\xC1\x05\x88E\x02\xC1\xC2\x07" +
		"&\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC0\x03\x02\x02\x02\xC3\xC4\x03" +
		"\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x05\x10\t\x02\xC6\x13\x03" +
		"\x02\x02\x02\xC7\xC8\x05\x88E\x02\xC8\xC9\x07U\x02\x02\xC9\xCA\x05`1\x02" +
		"\xCA\x15\x03\x02\x02\x02\xCB\xCC\x07\x16\x02\x02\xCC\xCD\x07\x03\x02\x02" +
		"\xCD\xCE\x05\x12\n\x02\xCE\x17\x03\x02\x02\x02\xCF\xDB\x07)\x02\x02\xD0" +
		"\xD5\x05\x1C\x0F\x02\xD1\xD2\x07\'\x02\x02\xD2\xD4\x05\x1C\x0F\x02\xD3" +
		"\xD1\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5" +
		"\xD6\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8" +
		"\xDA\x07\'\x02\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA" +
		"\xDC\x03\x02\x02\x02\xDB\xD0\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC" +
		"\xDD\x03\x02\x02\x02\xDD\xDE\x07*\x02\x02\xDE\x19\x03\x02\x02\x02\xDF" +
		"\xE0\x07$\x02\x02\xE0\xEC\x07)\x02\x02\xE1\xE6\x05\x14\v\x02\xE2\xE3\x07" +
		"\'\x02\x02\xE3\xE5\x05\x14\v\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03\x02" +
		"\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03\x02" +
		"\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEB\x07\'\x02\x02\xEA\xE9\x03\x02" +
		"\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xE1\x03\x02" +
		"\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x07*" +
		"\x02\x02\xEF\x1B\x03\x02\x02\x02\xF0\xF4\x05\n\x06\x02\xF1\xF4\x05\f\x07" +
		"\x02\xF2\xF4\x05\x12\n\x02\xF3\xF0\x03\x02\x02\x02\xF3\xF1\x03\x02\x02" +
		"\x02\xF3\xF2\x03\x02\x02\x02\xF4\x1D\x03\x02\x02\x02\xF5\xF6\x07\x06\x02" +
		"\x02\xF6\xF7\x07-\x02\x02\xF7\xF8\x05\x12\n\x02\xF8\xF9\x07.\x02\x02\xF9" +
		"\xFA\x07\x03\x02\x02\xFA\xFB\x05\x12\n\x02\xFB\x1F\x03\x02\x02\x02\xFC" +
		"\xFD\x07\x07\x02\x02\xFD\xFE\x07\x03\x02\x02\xFE\xFF\x05\x12\n\x02\xFF" +
		"!\x03\x02\x02\x02\u0100\u0101\x07\b\x02\x02\u0101\u0102\x07\x03\x02\x02" +
		"\u0102\u0103\x05\x12\n\x02\u0103#\x03\x02\x02\x02\u0104\u0105\x07\t\x02" +
		"\x02\u0105\u0106\x07\x03\x02\x02\u0106\u0107\x05\x12\n\x02\u0107%\x03" +
		"\x02\x02\x02\u0108\u010B\x07\x12\x02\x02\u0109\u010C\x07\t\x02\x02\u010A" +
		"\u010C\x05\x88E\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02" +
		"\x02\u010C\u0111\x03\x02\x02\x02\u010D\u010E\x07+\x02\x02\u010E\u010F" +
		"\x05b2\x02\u010F\u0110\x07,\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111" +
		"\u010D\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0119\x03\x02" +
		"\x02\x02\u0113\u0114\x07-\x02\x02\u0114\u0115\x05\x12\n\x02\u0115\u0116" +
		"\x07.\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0113\x03\x02\x02\x02" +
		"\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C" +
		"\u011D\x07\x03\x02\x02\u011D\u0120\x05\x12\n\x02\u011E\u011F\x07\x1A\x02" +
		"\x02\u011F\u0121\x05\x12\n\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121" +
		"\x03\x02\x02\x02\u0121\u0127\x03\x02\x02\x02\u0122\u0123\x07\x13\x02\x02" +
		"\u0123\u0124\x07+\x02\x02\u0124\u0125\x05b2\x02\u0125\u0126\x07,\x02\x02" +
		"\u0126\u0128\x03\x02\x02\x02\u0127\u0122\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u0128\'\x03\x02\x02\x02\u0129\u012A\x07\x1D\x02\x02\u012A" +
		"\u0133\x07+\x02\x02\u012B\u0130\x05\x82B\x02\u012C\u012D\x07\'\x02\x02" +
		"\u012D\u012F\x05\x82B\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0132\x03" +
		"\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u012B\x03\x02" +
		"\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u0138\x07,\x02\x02\u0136\u0137\x07&\x02\x02\u0137\u0139\x05\x10\t\x02" +
		"\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u0155\x03" +
		"\x02\x02\x02\u013A\u013B\x07\x1D\x02\x02\u013B\u014D\x07+\x02\x02\u013C" +
		"\u0141\x05\x82B\x02\u013D\u013E\x05\x88E\x02\u013E\u013F\b\x15\x01\x02" +
		"\u013F\u0141\x03\x02\x02\x02\u0140\u013C\x03\x02\x02\x02\u0140\u013D\x03" +
		"\x02\x02\x02\u0141\u014A\x03\x02\x02\x02\u0142\u0143\x07\'\x02\x02\u0143" +
		"\u0149\x05\x82B\x02\u0144\u0145\x07\'\x02\x02\u0145\u0146\x05\x88E\x02" +
		"\u0146\u0147\b\x15\x01\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0142\x03" +
		"\x02\x02\x02\u0148\u0144\x03\x02\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A" +
		"\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014E\x03\x02" +
		"\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u0140\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0152\x07,\x02" +
		"\x02\u0150\u0151\x07&\x02\x02\u0151\u0153\x05\x10\t\x02\u0152\u0150\x03" +
		"\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154" +
		"\u0129\x03\x02\x02\x02\u0154\u013A\x03\x02\x02\x02\u0155)\x03\x02\x02" +
		"\x02\u0156\u0157\x07\x1E\x02\x02\u0157+\x03\x02\x02\x02\u0158\u0159\x07" +
		"\x1F\x02\x02\u0159-\x03\x02\x02\x02\u015A\u015B\x07 \x02\x02\u015B\u015C" +
		"\x07+\x02\x02\u015C\u015D\x05\x88E\x02\u015D\u015E\x07&\x02\x02\u015E" +
		"\u015F\x05\x88E\x02\u015F\u0162\x07,\x02\x02\u0160\u0161\x07&\x02\x02" +
		"\u0161\u0163\x05\x10\t\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03" +
		"\x02\x02\x02\u0163/\x03\x02\x02\x02\u0164\u0176\x056\x1C\x02\u0165\u0176" +
		"\x054\x1B\x02\u0166\u0176\x058\x1D\x02\u0167\u0176\x05:\x1E\x02\u0168" +
		"\u0176\x05^0\x02\u0169\u0176\x05<\x1F\x02\u016A\u0176\x05@!\x02\u016B" +
		"\u0176\x05J&\x02\u016C\u0176\x05L\'\x02\u016D\u0176\x05N(\x02\u016E\u0176" +
		"\x05R*\x02\u016F\u0176\x05T+\x02\u0170\u0176\x05V,\x02\u0171\u0176\x05" +
		"X-\x02\u0172\u0176\x052\x1A\x02\u0173\u0176\x05> \x02\u0174\u0176\x05" +
		"H%\x02\u0175\u0164\x03\x02\x02\x02\u0175\u0165\x03\x02\x02\x02\u0175\u0166" +
		"\x03\x02\x02\x02\u0175\u0167\x03\x02\x02\x02\u0175\u0168\x03\x02\x02\x02" +
		"\u0175\u0169\x03\x02\x02\x02\u0175\u016A\x03\x02\x02\x02\u0175\u016B\x03" +
		"\x02\x02\x02\u0175\u016C\x03\x02\x02\x02\u0175\u016D\x03\x02\x02\x02\u0175" +
		"\u016E\x03\x02\x02\x02\u0175\u016F\x03\x02\x02\x02\u0175\u0170\x03\x02" +
		"\x02\x02\u0175\u0171\x03\x02\x02\x02\u0175\u0172\x03\x02\x02\x02\u0175" +
		"\u0173\x03\x02\x02\x02\u0175\u0174\x03\x02\x02\x02\u01761\x03\x02\x02" +
		"\x02\u0177\u0178\x07%\x02\x02\u01783\x03\x02\x02\x02\u0179\u017A\x05l" +
		"7\x02\u017A\u017B\t\x02\x02\x02\u017B\u017C\x05`1\x02\u017C\u017D\b\x1B" +
		"\x01\x02\u017D5\x03\x02\x02\x02\u017E\u0182\x07)\x02\x02\u017F\u0181\x05" +
		"\x06\x04\x02\u0180\u017F\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
		"\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0185\x03\x02" +
		"\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0186\x07*\x02\x02\u01867\x03" +
		"\x02\x02\x02\u0187\u0188\x07\x15\x02\x02\u0188\u0189\b\x1D\x01\x02\u0189" +
		"9\x03\x02\x02\x02\u018A\u018B\x07\x1C\x02\x02\u018B\u018C\b\x1E\x01\x02" +
		"\u018C;\x03\x02\x02\x02\u018D\u018E\x07\x05\x02\x02\u018E\u018F\x050\x19" +
		"\x02\u018F\u0190\x07\x14\x02\x02\u0190\u0191\x07+\x02\x02\u0191\u0192" +
		"\x05`1\x02\u0192\u0193\x07,\x02\x02\u0193\u0194\b\x1F\x01\x02\u0194=\x03" +
		"\x02\x02\x02\u0195\u019C\x05\x88E\x02\u0196\u0197\x07-\x02\x02\u0197\u0198" +
		"\x05`1\x02\u0198\u0199\x07.\x02\x02\u0199\u019B\x03\x02\x02\x02\u019A" +
		"\u0196\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02" +
		"\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E" +
		"\u019C\x03\x02\x02\x02\u019F\u01A0\x07V\x02\x02\u01A0\u01A1\b \x01\x02" +
		"\u01A1\u01A2\x07\x1A\x02\x02\u01A2\u01A3\x05`1\x02\u01A3\u01A4\b \x01" +
		"\x02\u01A4\u01B8\x03\x02\x02\x02\u01A5\u01AC\x05\x88E\x02\u01A6\u01A7" +
		"\x07-\x02\x02\u01A7\u01A8\x05`1\x02\u01A8\u01A9\x07.\x02\x02\u01A9\u01AB" +
		"\x03\x02\x02\x02\u01AA\u01A6\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02" +
		"\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03" +
		"\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\x07V\x02\x02\u01B0" +
		"\u01B3\x05`1\x02\u01B1\u01B2\x07\x1A\x02\x02\u01B2\u01B4\x05`1\x02\u01B3" +
		"\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02" +
		"\x02\x02\u01B5\u01B6\b \x01\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u0195" +
		"\x03\x02\x02\x02\u01B7\u01A5\x03\x02\x02\x02\u01B8?\x03\x02\x02\x02\u01B9" +
		"\u01BA\x07\n\x02\x02\u01BA\u01BC\x07+\x02\x02\u01BB\u01BD\x05B\"\x02\u01BC" +
		"\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BE\u01C0\x07%\x02\x02\u01BF\u01C1\x05`1\x02\u01C0\u01BF\x03" +
		"\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C4\x07%\x02\x02\u01C3\u01C5\x05B\"\x02\u01C4\u01C3\x03\x02\x02\x02" +
		"\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x07" +
		",\x02\x02\u01C7\u01C8\x05\x06\x04\x02\u01C8A\x03\x02\x02\x02\u01C9\u01CC" +
		"\x05D#\x02\u01CA\u01CC\x05F$\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CA" +
		"\x03\x02\x02\x02\u01CCC\x03\x02\x02\x02\u01CD\u01CE\x05\x88E\x02\u01CE" +
		"\u01D0\x07&\x02\x02\u01CF\u01D1\x05\x10\t\x02\u01D0\u01CF\x03\x02\x02" +
		"\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D8\x03\x02\x02\x02\u01D2\u01D6" +
		"\x07U\x02\x02\u01D3\u01D4\b#\x01\x02\u01D4\u01D7\x05&\x14\x02\u01D5\u01D7" +
		"\x05`1\x02\u01D6\u01D3\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7" +
		"\u01D9\x03\x02\x02\x02\u01D8\u01D2\x03\x02\x02\x02\u01D8\u01D9\x03\x02" +
		"\x02\x02\u01D9E\x03\x02\x02\x02\u01DA\u01DB\x05`1\x02\u01DB\u01DC\t\x03" +
		"\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DF\x05`1\x02\u01DE\u01DA" +
		"\x03\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DFG\x03\x02\x02\x02\u01E0" +
		"\u01E1\x05F$\x02\u01E1\u01E2\b%\x01\x02\u01E2I\x03\x02\x02\x02\u01E3\u01E4" +
		"\x07\x04\x02\x02\u01E4\u01E5\x07+\x02\x02\u01E5\u01E6\x05`1\x02\u01E6" +
		"\u01E7\x07,\x02\x02\u01E7\u01EA\x05\x06\x04\x02\u01E8\u01E9\x07\x10\x02" +
		"\x02\u01E9\u01EB\x05\x06\x04\x02\u01EA\u01E8\x03\x02\x02\x02\u01EA\u01EB" +
		"\x03\x02\x02\x02\u01EBK\x03\x02\x02\x02\u01EC\u01EE\x07\x19\x02\x02\u01ED" +
		"\u01EF\x05`1\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02" +
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\b\'\x01\x02\u01F1M\x03\x02\x02" +
		"\x02\u01F2\u01F3\x07\x18\x02\x02\u01F3\u01F4\x07+\x02\x02\u01F4\u01F5" +
		"\x05`1\x02\u01F5\u01F6\x07,\x02\x02\u01F6\u01FA\x07)\x02\x02\u01F7\u01F9" +
		"\x05P)\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA" +
		"\u01F8\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC" +
		"\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07\x1B\x02\x02\u01FE\u0200\x07&\x02" +
		"\x02\u01FF\u0201\x050\x19\x02\u0200\u01FF\x03\x02\x02\x02\u0201\u0202" +
		"\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
		"\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07*\x02\x02\u0205O\x03\x02\x02" +
		"\x02\u0206\u0207\x07\x11\x02\x02\u0207\u0208\x05b2\x02\u0208\u020A\x07" +
		"&\x02\x02\u0209\u020B\x050\x19\x02\u020A\u0209\x03\x02\x02\x02\u020B\u020C" +
		"\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02" +
		"\u020DQ\x03\x02\x02\x02\u020E\u020F\x07\v\x02\x02\u020F\u0210\x07+\x02" +
		"\x02\u0210\u0211\x05\x82B\x02\u0211\u0212\x07%\x02\x02\u0212\u0213\x05" +
		"`1\x02\u0213\u0214\x07,\x02\x02\u0214\u0215\x05\x06\x04\x02\u0215S\x03" +
		"\x02\x02\x02\u0216\u0217\x07\r\x02\x02\u0217\u0218\x07+\x02\x02\u0218" +
		"\u0219\x05\x82B\x02\u0219\u021A\x07%\x02\x02\u021A\u021B\x05`1\x02\u021B" +
		"\u021C\x07,\x02\x02\u021C\u021D\x05\x06\x04\x02\u021DU\x03\x02\x02\x02" +
		"\u021E\u021F\x07\f\x02\x02\u021F\u0220\x07+\x02\x02\u0220\u0221\x05\x82" +
		"B\x02\u0221\u0222\x07%\x02\x02\u0222\u0223\x05`1\x02\u0223\u0224\x07," +
		"\x02\x02\u0224\u0225\x05\x06\x04\x02\u0225W\x03\x02\x02\x02\u0226\u0227" +
		"\x07\x14\x02\x02\u0227\u0228\x07+\x02\x02\u0228\u0229\x05`1\x02\u0229" +
		"\u022A\x07,\x02\x02\u022A\u022B\x05\x06\x04\x02\u022BY\x03\x02\x02\x02" +
		"\u022C\u0230\x07!\x02\x02\u022D\u0230\x07\"\x02\x02\u022E\u0230\b.\x01" +
		"\x02\u022F\u022C\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u022E" +
		"\x03\x02\x02\x02\u0230\u023B\x03\x02\x02\x02\u0231\u023C\x07R\x02\x02" +
		"\u0232\u023C\x05\x82B\x02\u0233\u0238\x05\x88E\x02\u0234\u0235\x07\'\x02" +
		"\x02\u0235\u0237\x05\x88E\x02\u0236\u0234\x03\x02\x02\x02\u0237\u023A" +
		"\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02" +
		"\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B\u0231\x03" +
		"\x02\x02\x02\u023B\u0232\x03\x02\x02\x02\u023B\u0233\x03\x02\x02\x02\u023C" +
		"\u023D\x03\x02\x02\x02\u023D\u023E\x07W\x02\x02\u023E\u023F\x05\x06\x04" +
		"\x02\u023F[\x03\x02\x02\x02\u0240\u0241\x07+\x02\x02\u0241\u0242\x05\x88" +
		"E\x02\u0242\u0243\x07\'\x02\x02\u0243\u0244\x05\x88E\x02\u0244\u0245\x07" +
		"&\x02\x02\u0245\u0246\x05\x88E\x02\u0246\u0247\x07,\x02\x02\u0247\u0248" +
		"\x07&\x02\x02\u0248\u0249\x05\x10\t\x02\u0249\u024A\x05\x06\x04\x02\u024A" +
		"]\x03\x02\x02\x02\u024B\u024C\x07#\x02\x02\u024C\u024D\b0\x01\x02\u024D" +
		"_\x03\x02\x02\x02\u024E\u0253\x05d3\x02\u024F\u0250\t\x04\x02\x02\u0250" +
		"\u0252\x05d3\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02" +
		"\u0253\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254a\x03\x02" +
		"\x02\x02\u0255\u0253\x03\x02\x02\x02\u0256\u025B\x05`1\x02\u0257\u0258" +
		"\x07\'\x02\x02\u0258\u025A\x05`1\x02\u0259\u0257\x03\x02\x02\x02\u025A" +
		"\u025D\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02" +
		"\x02\x02\u025C\u026C\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025E" +
		"\u0268\x05`1\x02\u025F\u0260\b2\x01\x02\u0260\u0267\x05`1\x02\u0261\u0264" +
		"\x07\'\x02\x02\u0262\u0265\x05`1\x02\u0263\u0265\b2\x01\x02\u0264\u0262" +
		"\x03\x02\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02" +
		"\u0266\u025F\x03\x02\x02\x02\u0266\u0261\x03\x02\x02\x02\u0267\u026A\x03" +
		"\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269" +
		"\u026C\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026B\u0256\x03\x02" +
		"\x02\x02\u026B\u025E\x03\x02\x02\x02\u026Cc\x03\x02\x02\x02\u026D\u0272" +
		"\x05f4\x02\u026E\u026F\t\x05\x02\x02\u026F\u0271\x05f4\x02\u0270\u026E" +
		"\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02" +
		"\u0272\u0273\x03\x02\x02\x02\u0273e\x03\x02\x02\x02\u0274\u0272\x03\x02" +
		"\x02\x02\u0275\u0278\x05h5\x02\u0276\u0277\t\x06\x02\x02\u0277\u0279\x05" +
		"h5\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279g" +
		"\x03\x02\x02\x02\u027A\u027F\x05j6\x02\u027B\u027C\t\x07\x02\x02\u027C" +
		"\u027E\x05j6\x02\u027D\u027B\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02" +
		"\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280i\x03\x02" +
		"\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0287\x05l7\x02\u0283\u0284" +
		"\t\b\x02\x02\u0284\u0286\x05l7\x02\u0285\u0283\x03\x02\x02\x02\u0286\u0289" +
		"\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02" +
		"\u0288k\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u028A\u0290\x05t;" +
		"\x02\u028B\u028F\x05n8\x02\u028C\u028F\x05p9\x02\u028D\u028F\x05r:\x02" +
		"\u028E\u028B\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028D\x03" +
		"\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0290" +
		"\u0291\x03\x02\x02\x02\u0291m\x03\x02\x02\x02\u0292\u0290\x03\x02\x02" +
		"\x02\u0293\u0295\x07(\x02\x02\u0294\u0296\x05\x88E\x02\u0295\u0294\x03" +
		"\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296o\x03\x02\x02\x02\u0297" +
		"\u0298\x07-\x02\x02\u0298\u029B\x05`1\x02\u0299\u029A\x07&\x02\x02\u029A" +
		"\u029C\x05`1\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02" +
		"\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x07.\x02\x02\u029Eq\x03\x02\x02" +
		"\x02\u029F\u02A1\x07+\x02\x02\u02A0\u02A2\x05b2\x02\u02A1\u02A0\x03\x02" +
		"\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3" +
		"\u02A4\x07,\x02\x02\u02A4s\x03\x02\x02\x02\u02A5\u02B4\x05\x90I\x02\u02A6" +
		"\u02B4\x05\x8EH\x02\u02A7\u02B4\x05\x92J\x02\u02A8\u02B4\x05\x8AF\x02" +
		"\u02A9\u02B4\x05\x8CG\x02\u02AA\u02B4\x05\x84C\x02\u02AB\u02B4\x05z>\x02" +
		"\u02AC\u02B4\x05|?\x02\u02AD\u02B4\x05~@\x02\u02AE\u02B4\x05\x80A\x02" +
		"\u02AF\u02B4\x05v<\x02\u02B0\u02B4\x07T\x02\x02\u02B1\u02B4\x05x=\x02" +
		"\u02B2\u02B4\x05\x88E\x02\u02B3\u02A5\x03\x02\x02\x02\u02B3\u02A6\x03" +
		"\x02\x02\x02\u02B3\u02A7\x03\x02\x02\x02\u02B3\u02A8\x03\x02\x02\x02\u02B3" +
		"\u02A9\x03\x02\x02\x02\u02B3\u02AA\x03\x02\x02\x02\u02B3\u02AB\x03\x02" +
		"\x02\x02\u02B3\u02AC\x03\x02\x02\x02\u02B3\u02AD\x03\x02\x02\x02\u02B3" +
		"\u02AE\x03\x02\x02\x02\u02B3\u02AF\x03\x02\x02\x02\u02B3\u02B0\x03\x02" +
		"\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4" +
		"u\x03\x02\x02\x02\u02B5\u02B6\t\t\x02\x02\u02B6\u02B7\x05l7\x02\u02B7" +
		"w\x03\x02\x02\x02\u02B8\u02B9\x07+\x02\x02\u02B9\u02BA\x05`1\x02\u02BA" +
		"\u02BB\x07,\x02\x02\u02BBy\x03\x02\x02\x02\u02BC\u02BD\x05(\x15\x02\u02BD" +
		"\u02BE\x056\x1C\x02\u02BE\u02C3\x03\x02\x02\x02\u02BF\u02C0\x05\x88E\x02" +
		"\u02C0\u02C1\x056\x1C\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02BC\x03" +
		"\x02\x02\x02\u02C2\u02BF\x03\x02\x02\x02\u02C3{\x03\x02\x02\x02\u02C4" +
		"\u02C8\x05*\x16\x02\u02C5\u02C9\x05\\/\x02\u02C6\u02C7\b?\x01\x02\u02C7" +
		"\u02C9\x05\x06\x04\x02\u02C8\u02C5\x03\x02\x02\x02\u02C8\u02C6\x03\x02" +
		"\x02\x02\u02C9}\x03\x02\x02\x02\u02CA\u02CB\x05,\x17\x02\u02CB\u02CF\x07" +
		")\x02\x02\u02CC\u02D0\x05Z.\x02\u02CD\u02CE\b@\x01\x02\u02CE\u02D0\x05" +
		"\x06\x04\x02\u02CF\u02CC\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0" +
		"\u02D1\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02" +
		"\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D4\x07*\x02\x02\u02D4\x7F" +
		"\x03\x02\x02\x02\u02D5\u02D9\x05.\x18\x02\u02D6\u02DA\x05\x06\x04\x02" +
		"\u02D7\u02D8\bA\x01\x02\u02D8\u02DA\x05\x06\x04\x02\u02D9\u02D6\x03\x02" +
		"\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\x81\x03\x02\x02\x02\u02DB\u02DC" +
		"\x05\x88E\x02\u02DC\u02DD\x07&\x02\x02\u02DD\u02DE\x05\x10\t\x02\u02DE" +
		"\x83\x03\x02\x02\x02\u02DF\u02F0\x07)\x02\x02\u02E0\u02E2\x05b2\x02\u02E1" +
		"\u02E3\x07\'\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02" +
		"\x02\u02E3\u02F1\x03\x02\x02\x02\u02E4\u02E9\x05\x86D\x02\u02E5\u02E6" +
		"\x07\'\x02\x02\u02E6\u02E8\x05\x86D\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8" +
		"\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02EA\x03\x02" +
		"\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC" +
		"\u02EE\x07\'\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02" +
		"\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF\u02F1\x07&\x02\x02\u02F0\u02E0" +
		"\x03\x02\x02\x02\u02F0\u02E4\x03\x02\x02\x02\u02F0\u02EF\x03\x02\x02\x02" +
		"\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x07" +
		"*\x02\x02\u02F3\x85\x03\x02\x02\x02\u02F4\u02F5\x05`1\x02\u02F5\u02F6" +
		"\x07&\x02\x02\u02F6\u02F7\x05`1\x02\u02F7\x87\x03\x02\x02\x02\u02F8\u033B" +
		"\x07`\x02\x02\u02F9\u033B\x07\x13\x02\x02\u02FA\u02FB\x07\x03\x02\x02" +
		"\u02FB\u033B\bE\x01\x02\u02FC\u02FD\x07\x04\x02\x02\u02FD\u033B\bE\x01" +
		"\x02\u02FE\u02FF\x07\x05\x02\x02\u02FF\u033B\bE\x01\x02\u0300\u0301\x07" +
		"\x06\x02\x02\u0301\u033B\bE\x01\x02\u0302\u0303\x07\x07\x02\x02\u0303" +
		"\u033B\bE\x01\x02\u0304\u0305\x07\b\x02\x02\u0305\u033B\bE\x01\x02\u0306" +
		"\u0307\x07\t\x02\x02\u0307\u033B\bE\x01\x02\u0308\u0309\x07\n\x02\x02" +
		"\u0309\u033B\bE\x01\x02\u030A\u030B\x07\v\x02\x02\u030B\u033B\bE\x01\x02" +
		"\u030C\u030D\x07\f\x02\x02\u030D\u033B\bE\x01\x02\u030E\u030F\x07\r\x02" +
		"\x02\u030F\u033B\bE\x01\x02\u0310\u0311\x07\x0E\x02\x02\u0311\u033B\b" +
		"E\x01\x02\u0312\u0313\x07\x0F\x02\x02\u0313\u033B\bE\x01\x02\u0314\u0315" +
		"\x07\x10\x02\x02\u0315\u033B\bE\x01\x02\u0316\u0317\x07\x11\x02\x02\u0317" +
		"\u033B\bE\x01\x02\u0318\u0319\x07\x12\x02\x02\u0319\u033B\bE\x01\x02\u031A" +
		"\u031B\x07\x14\x02\x02\u031B\u033B\bE\x01\x02\u031C\u031D\x07\x15\x02" +
		"\x02\u031D\u033B\bE\x01\x02\u031E\u031F\x07\x16\x02\x02\u031F\u033B\b" +
		"E\x01\x02\u0320\u0321\x07\x17\x02\x02\u0321\u033B\bE\x01\x02\u0322\u0323" +
		"\x07\x18\x02\x02\u0323\u033B\bE\x01\x02\u0324\u0325\x07\x19\x02\x02\u0325" +
		"\u033B\bE\x01\x02\u0326\u0327\x07\x1A\x02\x02\u0327\u033B\bE\x01\x02\u0328" +
		"\u0329\x07\x1B\x02\x02\u0329\u033B\bE\x01\x02\u032A\u032B\x07\x1C\x02" +
		"\x02\u032B\u033B\bE\x01\x02\u032C\u032D\x07\x1D\x02\x02\u032D\u033B\b" +
		"E\x01\x02\u032E\u032F\x07\x1E\x02\x02\u032F\u033B\bE\x01\x02\u0330\u0331" +
		"\x07\x1F\x02\x02\u0331\u033B\bE\x01\x02\u0332\u0333\x07 \x02\x02\u0333" +
		"\u033B\bE\x01\x02\u0334\u0335\x07!\x02\x02\u0335\u033B\bE\x01\x02\u0336" +
		"\u0337\x07\"\x02\x02\u0337\u033B\bE\x01\x02\u0338\u0339\x07#\x02\x02\u0339" +
		"\u033B\bE\x01\x02\u033A\u02F8\x03\x02\x02\x02\u033A\u02F9\x03\x02\x02" +
		"\x02\u033A\u02FA\x03\x02\x02\x02\u033A\u02FC\x03\x02\x02\x02\u033A\u02FE" +
		"\x03\x02\x02\x02\u033A\u0300\x03\x02\x02\x02\u033A\u0302\x03\x02\x02\x02" +
		"\u033A\u0304\x03\x02\x02\x02\u033A\u0306\x03\x02\x02\x02\u033A\u0308\x03" +
		"\x02\x02\x02\u033A\u030A\x03\x02\x02\x02\u033A\u030C\x03\x02\x02\x02\u033A" +
		"\u030E\x03\x02\x02\x02\u033A\u0310\x03\x02\x02\x02\u033A\u0312\x03\x02" +
		"\x02\x02\u033A\u0314\x03\x02\x02\x02\u033A\u0316\x03\x02\x02\x02\u033A" +
		"\u0318\x03\x02\x02\x02\u033A\u031A\x03\x02\x02\x02\u033A\u031C\x03\x02" +
		"\x02\x02\u033A\u031E\x03\x02\x02\x02\u033A\u0320\x03\x02\x02\x02\u033A" +
		"\u0322\x03\x02\x02\x02\u033A\u0324\x03\x02\x02\x02\u033A\u0326\x03\x02" +
		"\x02\x02\u033A\u0328\x03\x02\x02\x02\u033A\u032A\x03\x02\x02\x02\u033A" +
		"\u032C\x03\x02\x02\x02\u033A\u032E\x03\x02\x02\x02\u033A\u0330\x03\x02" +
		"\x02\x02\u033A\u0332\x03\x02\x02\x02\u033A\u0334\x03\x02\x02\x02\u033A" +
		"\u0336\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B\x89\x03\x02\x02" +
		"\x02\u033C\u033D\x07Y\x02\x02\u033D\x8B\x03\x02\x02\x02\u033E\u033F\x07" +
		"Z\x02\x02\u033F\x8D\x03\x02\x02\x02\u0340\u0341\x07[\x02\x02\u0341\x8F" +
		"\x03\x02\x02\x02\u0342\u0343\t\n\x02\x02\u0343\x91\x03\x02\x02\x02\u0344" +
		"\u0345\x07_\x02\x02\u0345\x93\x03\x02\x02\x02M\x9A\x9E\xA3\xBE\xC3\xD5" +
		"\xD9\xDB\xE6\xEA\xEC\xF3\u010B\u0111\u0119\u0120\u0127\u0130\u0133\u0138" +
		"\u0140\u0148\u014A\u014D\u0152\u0154\u0162\u0175\u0182\u019C\u01AC\u01B3" +
		"\u01B7\u01BC\u01C0\u01C4\u01CB\u01D0\u01D6\u01D8\u01DE\u01EA\u01EE\u01FA" +
		"\u0202\u020C\u022F\u0238\u023B\u0253\u025B\u0264\u0266\u0268\u026B\u0272" +
		"\u0278\u027F\u0287\u028E\u0290\u0295\u029B\u02A1\u02B3\u02C2\u02C8\u02CF" +
		"\u02D1\u02D9\u02E2\u02E9\u02ED\u02F0\u033A";
	public static readonly _serializedATN: string = Utils.join(
		[
			boaParser._serializedATNSegment0,
			boaParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!boaParser.__ATN) {
			boaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(boaParser._serializedATN));
		}

		return boaParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public program(): ProgramContext {
		return this.getRuleContext(0, ProgramContext);
	}
	public EOF(): TerminalNode { return this.getToken(boaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_start; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public programStatement(): ProgramStatementContext[];
	public programStatement(i: number): ProgramStatementContext;
	public programStatement(i?: number): ProgramStatementContext | ProgramStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramStatementContext);
		} else {
			return this.getRuleContext(i, ProgramStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramStatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_programStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitProgramStatement) {
			return visitor.visitProgramStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public staticVariableDeclaration(): StaticVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticVariableDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_declaration; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(boaParser.TYPE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(boaParser.EQUALS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_typeDeclaration; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticVariableDeclarationContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(boaParser.STATIC, 0); }
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_staticVariableDeclaration; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitStaticVariableDeclaration) {
			return visitor.visitStaticVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public forVariableDeclaration(): ForVariableDeclarationContext {
		return this.getRuleContext(0, ForVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_variableDeclaration; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public mapType(): MapTypeContext | undefined {
		return this.tryGetRuleContext(0, MapTypeContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	public outputType(): OutputTypeContext | undefined {
		return this.tryGetRuleContext(0, OutputTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public fixpType(): FixpTypeContext | undefined {
		return this.tryGetRuleContext(0, FixpTypeContext);
	}
	public visitorType(): VisitorTypeContext | undefined {
		return this.tryGetRuleContext(0, VisitorTypeContext);
	}
	public traversalType(): TraversalTypeContext | undefined {
		return this.tryGetRuleContext(0, TraversalTypeContext);
	}
	public stackType(): StackTypeContext | undefined {
		return this.tryGetRuleContext(0, StackTypeContext);
	}
	public queueType(): QueueTypeContext | undefined {
		return this.tryGetRuleContext(0, QueueTypeContext);
	}
	public setType(): SetTypeContext | undefined {
		return this.tryGetRuleContext(0, SetTypeContext);
	}
	public enumType(): EnumTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_type; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(boaParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_component; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(boaParser.EQUALS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_enumBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclaration) {
			return visitor.visitEnumBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(boaParser.ARRAY, 0); }
	public OF(): TerminalNode { return this.getToken(boaParser.OF, 0); }
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_arrayType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(boaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(boaParser.RBRACE, 0); }
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COMMA);
		} else {
			return this.getToken(boaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_tupleType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(boaParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(boaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(boaParser.RBRACE, 0); }
	public enumBodyDeclaration(): EnumBodyDeclarationContext[];
	public enumBodyDeclaration(i: number): EnumBodyDeclarationContext;
	public enumBodyDeclaration(i?: number): EnumBodyDeclarationContext | EnumBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, EnumBodyDeclarationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COMMA);
		} else {
			return this.getToken(boaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_enumType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public staticVariableDeclaration(): StaticVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticVariableDeclarationContext);
	}
	public component(): ComponentContext | undefined {
		return this.tryGetRuleContext(0, ComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_member; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeContext extends ParserRuleContext {
	public MAP(): TerminalNode { return this.getToken(boaParser.MAP, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(boaParser.LBRACKET, 0); }
	public component(): ComponentContext[];
	public component(i: number): ComponentContext;
	public component(i?: number): ComponentContext | ComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentContext);
		} else {
			return this.getRuleContext(i, ComponentContext);
		}
	}
	public RBRACKET(): TerminalNode { return this.getToken(boaParser.RBRACKET, 0); }
	public OF(): TerminalNode { return this.getToken(boaParser.OF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_mapType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitMapType) {
			return visitor.visitMapType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StackTypeContext extends ParserRuleContext {
	public STACK(): TerminalNode { return this.getToken(boaParser.STACK, 0); }
	public OF(): TerminalNode { return this.getToken(boaParser.OF, 0); }
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_stackType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitStackType) {
			return visitor.visitStackType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueueTypeContext extends ParserRuleContext {
	public QUEUE(): TerminalNode { return this.getToken(boaParser.QUEUE, 0); }
	public OF(): TerminalNode { return this.getToken(boaParser.OF, 0); }
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_queueType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitQueueType) {
			return visitor.visitQueueType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(boaParser.SET, 0); }
	public OF(): TerminalNode { return this.getToken(boaParser.OF, 0); }
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_setType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitSetType) {
			return visitor.visitSetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputTypeContext extends ParserRuleContext {
	public OUTPUT(): TerminalNode { return this.getToken(boaParser.OUTPUT, 0); }
	public OF(): TerminalNode { return this.getToken(boaParser.OF, 0); }
	public component(): ComponentContext[];
	public component(i: number): ComponentContext;
	public component(i?: number): ComponentContext | ComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentContext);
		} else {
			return this.getRuleContext(i, ComponentContext);
		}
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(boaParser.SET, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.LPAREN);
		} else {
			return this.getToken(boaParser.LPAREN, i);
		}
	}
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.RPAREN);
		} else {
			return this.getToken(boaParser.RPAREN, i);
		}
	}
	public LBRACKET(): TerminalNode[];
	public LBRACKET(i: number): TerminalNode;
	public LBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.LBRACKET);
		} else {
			return this.getToken(boaParser.LBRACKET, i);
		}
	}
	public RBRACKET(): TerminalNode[];
	public RBRACKET(i: number): TerminalNode;
	public RBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.RBRACKET);
		} else {
			return this.getToken(boaParser.RBRACKET, i);
		}
	}
	public WEIGHT(): TerminalNode | undefined { return this.tryGetToken(boaParser.WEIGHT, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(boaParser.FORMAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_outputType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitOutputType) {
			return visitor.visitOutputType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(boaParser.FUNCTION, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public varDecl(): VarDeclContext[];
	public varDecl(i: number): VarDeclContext;
	public varDecl(i?: number): VarDeclContext | VarDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDeclContext);
		} else {
			return this.getRuleContext(i, VarDeclContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(boaParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COMMA);
		} else {
			return this.getToken(boaParser.COMMA, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_functionType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixpTypeContext extends ParserRuleContext {
	public FIXP(): TerminalNode { return this.getToken(boaParser.FIXP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_fixpType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFixpType) {
			return visitor.visitFixpType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisitorTypeContext extends ParserRuleContext {
	public VISITOR(): TerminalNode { return this.getToken(boaParser.VISITOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_visitorType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitVisitorType) {
			return visitor.visitVisitorType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraversalTypeContext extends ParserRuleContext {
	public TRAVERSAL(): TerminalNode { return this.getToken(boaParser.TRAVERSAL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COLON);
		} else {
			return this.getToken(boaParser.COLON, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_traversalType; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTraversalType) {
			return visitor.visitTraversalType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public stopStatement(): StopStatementContext | undefined {
		return this.tryGetRuleContext(0, StopStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public foreachStatement(): ForeachStatementContext | undefined {
		return this.tryGetRuleContext(0, ForeachStatementContext);
	}
	public existsStatement(): ExistsStatementContext | undefined {
		return this.tryGetRuleContext(0, ExistsStatementContext);
	}
	public ifallStatement(): IfallStatementContext | undefined {
		return this.tryGetRuleContext(0, IfallStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(boaParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_emptyStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(boaParser.EQUALS, 0); }
	public PLUSEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.PLUSEQ, 0); }
	public MINUSEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.MINUSEQ, 0); }
	public STAREQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.STAREQ, 0); }
	public DIVEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.DIVEQ, 0); }
	public ONEOREQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.ONEOREQ, 0); }
	public XOREQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.XOREQ, 0); }
	public MODEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.MODEQ, 0); }
	public ONEANDEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.ONEANDEQ, 0); }
	public RSHIFTEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.RSHIFTEQ, 0); }
	public LSHIFTEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.LSHIFTEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_assignmentStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(boaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(boaParser.RBRACE, 0); }
	public programStatement(): ProgramStatementContext[];
	public programStatement(i: number): ProgramStatementContext;
	public programStatement(i?: number): ProgramStatementContext | ProgramStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramStatementContext);
		} else {
			return this.getRuleContext(i, ProgramStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_block; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(boaParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_breakStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(boaParser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_continueStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(boaParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(boaParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_doStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EMIT(): TerminalNode { return this.getToken(boaParser.EMIT, 0); }
	public WEIGHT(): TerminalNode | undefined { return this.tryGetToken(boaParser.WEIGHT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACKET(): TerminalNode[];
	public LBRACKET(i: number): TerminalNode;
	public LBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.LBRACKET);
		} else {
			return this.getToken(boaParser.LBRACKET, i);
		}
	}
	public RBRACKET(): TerminalNode[];
	public RBRACKET(i: number): TerminalNode;
	public RBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.RBRACKET);
		} else {
			return this.getToken(boaParser.RBRACKET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_emitStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(boaParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.SEMICOLON);
		} else {
			return this.getToken(boaParser.SEMICOLON, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	public forExpression(): ForExpressionContext[];
	public forExpression(i: number): ForExpressionContext;
	public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForExpressionContext);
		} else {
			return this.getRuleContext(i, ForExpressionContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_forStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForExpressionContext extends ParserRuleContext {
	public forVariableDeclaration(): ForVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForVariableDeclarationContext);
	}
	public forExpressionStatement(): ForExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ForExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_forExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForVariableDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(boaParser.EQUALS, 0); }
	public outputType(): OutputTypeContext | undefined {
		return this.tryGetRuleContext(0, OutputTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_forVariableDeclaration; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitForVariableDeclaration) {
			return visitor.visitForVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForExpressionStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_forExpressionStatement; }
	public copyFrom(ctx: ForExpressionStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class PostfixStatementContext extends ForExpressionStatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INCR(): TerminalNode | undefined { return this.tryGetToken(boaParser.INCR, 0); }
	public DECR(): TerminalNode | undefined { return this.tryGetToken(boaParser.DECR, 0); }
	constructor(ctx: ForExpressionStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitPostfixStatement) {
			return visitor.visitPostfixStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprStatementContext extends ForExpressionStatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ForExpressionStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitExprStatement) {
			return visitor.visitExprStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public forExpressionStatement(): ForExpressionStatementContext {
		return this.getRuleContext(0, ForExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_expressionStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(boaParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext[];
	public programStatement(i: number): ProgramStatementContext;
	public programStatement(i?: number): ProgramStatementContext | ProgramStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramStatementContext);
		} else {
			return this.getRuleContext(i, ProgramStatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(boaParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_ifStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(boaParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_returnStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(boaParser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(boaParser.LBRACE, 0); }
	public DEFAULT(): TerminalNode { return this.getToken(boaParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public RBRACE(): TerminalNode { return this.getToken(boaParser.RBRACE, 0); }
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_switchStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(boaParser.CASE, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_switchCase; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitSwitchCase) {
			return visitor.visitSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForeachStatementContext extends ParserRuleContext {
	public FOREACH(): TerminalNode { return this.getToken(boaParser.FOREACH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public varDecl(): VarDeclContext {
		return this.getRuleContext(0, VarDeclContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(boaParser.SEMICOLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_foreachStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitForeachStatement) {
			return visitor.visitForeachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExistsStatementContext extends ParserRuleContext {
	public EXISTS(): TerminalNode { return this.getToken(boaParser.EXISTS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public varDecl(): VarDeclContext {
		return this.getRuleContext(0, VarDeclContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(boaParser.SEMICOLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_existsStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitExistsStatement) {
			return visitor.visitExistsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfallStatementContext extends ParserRuleContext {
	public IFALL(): TerminalNode { return this.getToken(boaParser.IFALL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public varDecl(): VarDeclContext {
		return this.getRuleContext(0, VarDeclContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(boaParser.SEMICOLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_ifallStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitIfallStatement) {
			return visitor.visitIfallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(boaParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_whileStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisitStatementContext extends ParserRuleContext {
	public RIGHT_ARROW(): TerminalNode { return this.getToken(boaParser.RIGHT_ARROW, 0); }
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(boaParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(boaParser.AFTER, 0); }
	public WILDCARD(): TerminalNode | undefined { return this.tryGetToken(boaParser.WILDCARD, 0); }
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COMMA);
		} else {
			return this.getToken(boaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_visitStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitVisitStatement) {
			return visitor.visitVisitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixpStatementContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(boaParser.COMMA, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COLON);
		} else {
			return this.getToken(boaParser.COLON, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public programStatement(): ProgramStatementContext {
		return this.getRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_fixpStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFixpStatement) {
			return visitor.visitFixpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StopStatementContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(boaParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_stopStatement; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitStopStatement) {
			return visitor.visitStopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public conjunction(): ConjunctionContext[];
	public conjunction(i: number): ConjunctionContext;
	public conjunction(i?: number): ConjunctionContext | ConjunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConjunctionContext);
		} else {
			return this.getRuleContext(i, ConjunctionContext);
		}
	}
	public TWOOR(): TerminalNode[];
	public TWOOR(i: number): TerminalNode;
	public TWOOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.TWOOR);
		} else {
			return this.getToken(boaParser.TWOOR, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.OR);
		} else {
			return this.getToken(boaParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COMMA);
		} else {
			return this.getToken(boaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_expressionList; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConjunctionContext extends ParserRuleContext {
	public comparison(): ComparisonContext[];
	public comparison(i: number): ComparisonContext;
	public comparison(i?: number): ComparisonContext | ComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonContext);
		} else {
			return this.getRuleContext(i, ComparisonContext);
		}
	}
	public TWOAND(): TerminalNode[];
	public TWOAND(i: number): TerminalNode;
	public TWOAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.TWOAND);
		} else {
			return this.getToken(boaParser.TWOAND, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.AND);
		} else {
			return this.getToken(boaParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_conjunction; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext[];
	public simpleExpression(i: number): SimpleExpressionContext;
	public simpleExpression(i?: number): SimpleExpressionContext | SimpleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleExpressionContext);
		} else {
			return this.getRuleContext(i, SimpleExpressionContext);
		}
	}
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.EQEQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(boaParser.LT, 0); }
	public LTEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.LTEQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(boaParser.GT, 0); }
	public GTEQ(): TerminalNode | undefined { return this.tryGetToken(boaParser.GTEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_comparison; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.PLUS);
		} else {
			return this.getToken(boaParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.MINUS);
		} else {
			return this.getToken(boaParser.MINUS, i);
		}
	}
	public ONEOR(): TerminalNode[];
	public ONEOR(i: number): TerminalNode;
	public ONEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.ONEOR);
		} else {
			return this.getToken(boaParser.ONEOR, i);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.XOR);
		} else {
			return this.getToken(boaParser.XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_simpleExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitSimpleExpression) {
			return visitor.visitSimpleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.STAR);
		} else {
			return this.getToken(boaParser.STAR, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.DIV);
		} else {
			return this.getToken(boaParser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.MOD);
		} else {
			return this.getToken(boaParser.MOD, i);
		}
	}
	public EMIT(): TerminalNode[];
	public EMIT(i: number): TerminalNode;
	public EMIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.EMIT);
		} else {
			return this.getToken(boaParser.EMIT, i);
		}
	}
	public RSHIFT(): TerminalNode[];
	public RSHIFT(i: number): TerminalNode;
	public RSHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.RSHIFT);
		} else {
			return this.getToken(boaParser.RSHIFT, i);
		}
	}
	public ONEAND(): TerminalNode[];
	public ONEAND(i: number): TerminalNode;
	public ONEAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.ONEAND);
		} else {
			return this.getToken(boaParser.ONEAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_term; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public operand(): OperandContext {
		return this.getRuleContext(0, OperandContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	public index(): IndexContext[];
	public index(i: number): IndexContext;
	public index(i?: number): IndexContext | IndexContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndexContext);
		} else {
			return this.getRuleContext(i, IndexContext);
		}
	}
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_factor; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(boaParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_selector; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(boaParser.LBRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACKET(): TerminalNode { return this.getToken(boaParser.RBRACKET, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(boaParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_index; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_call; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public characterLiteral(): CharacterLiteralContext | undefined {
		return this.tryGetRuleContext(0, CharacterLiteralContext);
	}
	public timeLiteral(): TimeLiteralContext | undefined {
		return this.tryGetRuleContext(0, TimeLiteralContext);
	}
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public floatingPointLiteral(): FloatingPointLiteralContext | undefined {
		return this.tryGetRuleContext(0, FloatingPointLiteralContext);
	}
	public composite(): CompositeContext | undefined {
		return this.tryGetRuleContext(0, CompositeContext);
	}
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	public fixpExpression(): FixpExpressionContext | undefined {
		return this.tryGetRuleContext(0, FixpExpressionContext);
	}
	public visitorExpression(): VisitorExpressionContext | undefined {
		return this.tryGetRuleContext(0, VisitorExpressionContext);
	}
	public traversalExpression(): TraversalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TraversalExpressionContext);
	}
	public unaryFactor(): UnaryFactorContext | undefined {
		return this.tryGetRuleContext(0, UnaryFactorContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(boaParser.DOLLAR, 0); }
	public parenExpression(): ParenExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_operand; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryFactorContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(boaParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(boaParser.MINUS, 0); }
	public NEG(): TerminalNode | undefined { return this.tryGetToken(boaParser.NEG, 0); }
	public INV(): TerminalNode | undefined { return this.tryGetToken(boaParser.INV, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(boaParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_unaryFactor; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitUnaryFactor) {
			return visitor.visitUnaryFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(boaParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(boaParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_parenExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitParenExpression) {
			return visitor.visitParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_functionExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixpExpressionContext extends ParserRuleContext {
	public fixpType(): FixpTypeContext {
		return this.getRuleContext(0, FixpTypeContext);
	}
	public fixpStatement(): FixpStatementContext | undefined {
		return this.tryGetRuleContext(0, FixpStatementContext);
	}
	public programStatement(): ProgramStatementContext | undefined {
		return this.tryGetRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_fixpExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFixpExpression) {
			return visitor.visitFixpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisitorExpressionContext extends ParserRuleContext {
	public visitorType(): VisitorTypeContext {
		return this.getRuleContext(0, VisitorTypeContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(boaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(boaParser.RBRACE, 0); }
	public visitStatement(): VisitStatementContext[];
	public visitStatement(i: number): VisitStatementContext;
	public visitStatement(i?: number): VisitStatementContext | VisitStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VisitStatementContext);
		} else {
			return this.getRuleContext(i, VisitStatementContext);
		}
	}
	public programStatement(): ProgramStatementContext[];
	public programStatement(i: number): ProgramStatementContext;
	public programStatement(i?: number): ProgramStatementContext | ProgramStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramStatementContext);
		} else {
			return this.getRuleContext(i, ProgramStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_visitorExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitVisitorExpression) {
			return visitor.visitVisitorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraversalExpressionContext extends ParserRuleContext {
	public traversalType(): TraversalTypeContext {
		return this.getRuleContext(0, TraversalTypeContext);
	}
	public programStatement(): ProgramStatementContext | undefined {
		return this.tryGetRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_traversalExpression; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTraversalExpression) {
			return visitor.visitTraversalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_varDecl; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompositeContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(boaParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(boaParser.RBRACE, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(boaParser.COLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COMMA);
		} else {
			return this.getToken(boaParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_composite; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitComposite) {
			return visitor.visitComposite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_pair; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitPair) {
			return visitor.visitPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public _lit!: Token;
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(boaParser.Identifier, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(boaParser.FORMAT, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(boaParser.OF, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(boaParser.IF, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(boaParser.DO, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(boaParser.MAP, 0); }
	public STACK(): TerminalNode | undefined { return this.tryGetToken(boaParser.STACK, 0); }
	public QUEUE(): TerminalNode | undefined { return this.tryGetToken(boaParser.QUEUE, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(boaParser.SET, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(boaParser.FOR, 0); }
	public FOREACH(): TerminalNode | undefined { return this.tryGetToken(boaParser.FOREACH, 0); }
	public IFALL(): TerminalNode | undefined { return this.tryGetToken(boaParser.IFALL, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(boaParser.EXISTS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(boaParser.NOT, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(boaParser.TYPE, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(boaParser.ELSE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(boaParser.CASE, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(boaParser.OUTPUT, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(boaParser.WHILE, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(boaParser.BREAK, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(boaParser.ARRAY, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(boaParser.STATIC, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(boaParser.SWITCH, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(boaParser.RETURN, 0); }
	public WEIGHT(): TerminalNode | undefined { return this.tryGetToken(boaParser.WEIGHT, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(boaParser.DEFAULT, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(boaParser.CONTINUE, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(boaParser.FUNCTION, 0); }
	public FIXP(): TerminalNode | undefined { return this.tryGetToken(boaParser.FIXP, 0); }
	public VISITOR(): TerminalNode | undefined { return this.tryGetToken(boaParser.VISITOR, 0); }
	public TRAVERSAL(): TerminalNode | undefined { return this.tryGetToken(boaParser.TRAVERSAL, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(boaParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(boaParser.AFTER, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(boaParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_identifier; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(boaParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_integerLiteral; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointLiteralContext extends ParserRuleContext {
	public FloatingPointLiteral(): TerminalNode { return this.getToken(boaParser.FloatingPointLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_floatingPointLiteral; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitFloatingPointLiteral) {
			return visitor.visitFloatingPointLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacterLiteralContext extends ParserRuleContext {
	public CharacterLiteral(): TerminalNode { return this.getToken(boaParser.CharacterLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_characterLiteral; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitCharacterLiteral) {
			return visitor.visitCharacterLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public MultilineStringLiteral(): TerminalNode | undefined { return this.tryGetToken(boaParser.MultilineStringLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(boaParser.StringLiteral, 0); }
	public RegexLiteral(): TerminalNode | undefined { return this.tryGetToken(boaParser.RegexLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_stringLiteral; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeLiteralContext extends ParserRuleContext {
	public TimeLiteral(): TerminalNode { return this.getToken(boaParser.TimeLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_timeLiteral; }
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTimeLiteral) {
			return visitor.visitTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


