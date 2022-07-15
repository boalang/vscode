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

import { boaListener } from "./boaListener";
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
	public static readonly LINE_COMMENT = 96;
	public static readonly TemplateIdentifier = 97;
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
	public static readonly RULE_traverseStatement = 45;
	public static readonly RULE_fixpStatement = 46;
	public static readonly RULE_stopStatement = 47;
	public static readonly RULE_expression = 48;
	public static readonly RULE_expressionList = 49;
	public static readonly RULE_conjunction = 50;
	public static readonly RULE_comparison = 51;
	public static readonly RULE_simpleExpression = 52;
	public static readonly RULE_term = 53;
	public static readonly RULE_factor = 54;
	public static readonly RULE_selector = 55;
	public static readonly RULE_index = 56;
	public static readonly RULE_call = 57;
	public static readonly RULE_operand = 58;
	public static readonly RULE_unaryFactor = 59;
	public static readonly RULE_parenExpression = 60;
	public static readonly RULE_functionExpression = 61;
	public static readonly RULE_fixpExpression = 62;
	public static readonly RULE_visitorExpression = 63;
	public static readonly RULE_traversalExpression = 64;
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
		"ifallStatement", "whileStatement", "visitStatement", "traverseStatement", 
		"fixpStatement", "stopStatement", "expression", "expressionList", "conjunction", 
		"comparison", "simpleExpression", "term", "factor", "selector", "index", 
		"call", "operand", "unaryFactor", "parenExpression", "functionExpression", 
		"fixpExpression", "visitorExpression", "traversalExpression", "composite", 
		"pair", "identifier", "integerLiteral", "floatingPointLiteral", "characterLiteral", 
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
		"StringLiteral", "TimeLiteral", "Identifier", "WS", "LINE_COMMENT", "TemplateIdentifier",
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
				_localctx._fixp = this.fixpType();
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
				_localctx._tr = this.traversalType();
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
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.match(boaParser.FUNCTION);
				this.state = 296;
				this.match(boaParser.LPAREN);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || _la === boaParser.AFTER || _la === boaParser.STOP || _la === boaParser.Identifier) {
					{
					this.state = 297;
					this.identifier();
					this.state = 298;
					this.match(boaParser.COLON);
					this.state = 299;
					this.type();
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === boaParser.COMMA) {
						{
						{
						this.state = 300;
						this.match(boaParser.COMMA);
						this.state = 301;
						this.identifier();
						this.state = 302;
						this.match(boaParser.COLON);
						this.state = 303;
						this.type();
						}
						}
						this.state = 309;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 312;
				this.match(boaParser.RPAREN);
				this.state = 315;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 313;
					this.match(boaParser.COLON);
					this.state = 314;
					this.type();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 317;
				this.match(boaParser.FUNCTION);
				this.state = 318;
				this.match(boaParser.LPAREN);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || _la === boaParser.AFTER || _la === boaParser.STOP || _la === boaParser.Identifier) {
					{
					this.state = 326;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						this.state = 319;
						this.identifier();
						this.state = 320;
						this.match(boaParser.COLON);
						this.state = 321;
						this.type();
						}
						break;

					case 2:
						{
						this.state = 323;
						this.identifier();
						 this.notifyErrorListeners("function arguments require an identifier and type"); 
						}
						break;
					}
					this.state = 339;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === boaParser.COMMA) {
						{
						this.state = 337;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
						case 1:
							{
							this.state = 328;
							this.match(boaParser.COMMA);
							this.state = 329;
							this.identifier();
							this.state = 330;
							this.match(boaParser.COLON);
							this.state = 331;
							this.type();
							}
							break;

						case 2:
							{
							this.state = 333;
							this.match(boaParser.COMMA);
							this.state = 334;
							this.identifier();
							 this.notifyErrorListeners("function arguments require an identifier and type"); 
							}
							break;
						}
						}
						this.state = 341;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 344;
				this.match(boaParser.RPAREN);
				this.state = 347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 345;
					this.match(boaParser.COLON);
					this.state = 346;
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
			this.state = 351;
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
			this.state = 353;
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
			this.state = 355;
			this.match(boaParser.TRAVERSAL);
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
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 358;
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 359;
				this.breakStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 360;
				this.continueStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 361;
				this.stopStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 362;
				this.doStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 363;
				this.forStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 364;
				this.ifStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 365;
				this.returnStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 366;
				this.switchStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 367;
				this.foreachStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 368;
				this.existsStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 369;
				this.ifallStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 370;
				this.whileStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 371;
				this.emptyStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 372;
				this.emitStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 373;
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
			this.state = 376;
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
			this.state = 378;
			this.factor();
			this.state = 379;
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
			this.state = 380;
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
			this.state = 383;
			this.match(boaParser.LBRACE);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				{
				this.state = 384;
				this.programStatement();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 390;
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
			this.state = 392;
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
			this.state = 395;
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
			this.state = 398;
			this.match(boaParser.DO);
			this.state = 399;
			this.statement();
			this.state = 400;
			this.match(boaParser.WHILE);
			this.state = 401;
			this.match(boaParser.LPAREN);
			this.state = 402;
			this.expression();
			this.state = 403;
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
			this.state = 440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.identifier();
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === boaParser.LBRACKET) {
					{
					{
					this.state = 407;
					this.match(boaParser.LBRACKET);
					this.state = 408;
					this.expression();
					this.state = 409;
					this.match(boaParser.RBRACKET);
					}
					}
					this.state = 415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 416;
				this.match(boaParser.EMIT);
				 this.notifyErrorListeners("error: expected 'expression' before keyword 'weight'"); 
				this.state = 418;
				this.match(boaParser.WEIGHT);
				this.state = 419;
				this.expression();
				 this.isSemicolon(); 
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.identifier();
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === boaParser.LBRACKET) {
					{
					{
					this.state = 423;
					this.match(boaParser.LBRACKET);
					this.state = 424;
					this.expression();
					this.state = 425;
					this.match(boaParser.RBRACKET);
					}
					}
					this.state = 431;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 432;
				this.match(boaParser.EMIT);
				this.state = 433;
				this.expression();
				this.state = 436;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 434;
					this.match(boaParser.WEIGHT);
					this.state = 435;
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
			this.state = 442;
			this.match(boaParser.FOR);
			this.state = 443;
			this.match(boaParser.LPAREN);
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 444;
				this.forExpression();
				}
			}

			this.state = 447;
			this.match(boaParser.SEMICOLON);
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 448;
				this.expression();
				}
			}

			this.state = 451;
			this.match(boaParser.SEMICOLON);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 452;
				this.forExpression();
				}
			}

			this.state = 455;
			this.match(boaParser.RPAREN);
			this.state = 456;
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
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.forVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
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
			this.state = 462;
			this.identifier();
			this.state = 463;
			this.match(boaParser.COLON);
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 464;
				this.type();
				}
				break;
			}
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 467;
				this.match(boaParser.EQUALS);
				this.state = 471;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					 this.notifyErrorListeners("error: output variable declarations should not include '='"); 
					this.state = 469;
					this.outputType();
					}
					break;

				case 2:
					{
					this.state = 470;
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
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				_localctx = new PostfixStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.expression();
				this.state = 476;
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
				this.state = 478;
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
			this.state = 481;
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
			this.state = 484;
			this.match(boaParser.IF);
			this.state = 485;
			this.match(boaParser.LPAREN);
			this.state = 486;
			this.expression();
			this.state = 487;
			this.match(boaParser.RPAREN);
			this.state = 488;
			this.programStatement();
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 489;
				this.match(boaParser.ELSE);
				this.state = 490;
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
			this.state = 493;
			this.match(boaParser.RETURN);
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 494;
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
			this.state = 499;
			this.match(boaParser.SWITCH);
			this.state = 500;
			this.match(boaParser.LPAREN);
			this.state = 501;
			this.expression();
			this.state = 502;
			this.match(boaParser.RPAREN);
			this.state = 503;
			this.match(boaParser.LBRACE);
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === boaParser.CASE) {
				{
				{
				this.state = 504;
				this.switchCase();
				}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 510;
			this.match(boaParser.DEFAULT);
			this.state = 511;
			this.match(boaParser.COLON);
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 512;
				this.statement();
				}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0));
			this.state = 517;
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
			this.state = 519;
			this.match(boaParser.CASE);
			this.state = 520;
			this.expressionList();
			this.state = 521;
			this.match(boaParser.COLON);
			this.state = 523;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 522;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 525;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
			this.state = 527;
			this.match(boaParser.FOREACH);
			this.state = 528;
			this.match(boaParser.LPAREN);
			this.state = 529;
			this.identifier();
			this.state = 530;
			this.match(boaParser.COLON);
			this.state = 531;
			this.type();
			this.state = 532;
			this.match(boaParser.SEMICOLON);
			this.state = 533;
			this.expression();
			this.state = 534;
			this.match(boaParser.RPAREN);
			this.state = 535;
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
			this.state = 537;
			this.match(boaParser.EXISTS);
			this.state = 538;
			this.match(boaParser.LPAREN);
			this.state = 539;
			this.identifier();
			this.state = 540;
			this.match(boaParser.COLON);
			this.state = 541;
			this.type();
			this.state = 542;
			this.match(boaParser.SEMICOLON);
			this.state = 543;
			this.expression();
			this.state = 544;
			this.match(boaParser.RPAREN);
			this.state = 545;
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
			this.state = 547;
			this.match(boaParser.IFALL);
			this.state = 548;
			this.match(boaParser.LPAREN);
			this.state = 549;
			this.identifier();
			this.state = 550;
			this.match(boaParser.COLON);
			this.state = 551;
			this.type();
			this.state = 552;
			this.match(boaParser.SEMICOLON);
			this.state = 553;
			this.expression();
			this.state = 554;
			this.match(boaParser.RPAREN);
			this.state = 555;
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
			this.state = 557;
			this.match(boaParser.WHILE);
			this.state = 558;
			this.match(boaParser.LPAREN);
			this.state = 559;
			this.expression();
			this.state = 560;
			this.match(boaParser.RPAREN);
			this.state = 561;
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
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 563;
				this.match(boaParser.BEFORE);
				}
				break;

			case 2:
				{
				this.state = 564;
				this.match(boaParser.AFTER);
				}
				break;

			case 3:
				{
				 this.notifyErrorListeners("error: visit statements must start with 'before' or 'after'"); 
				}
				break;
			}
			this.state = 581;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 568;
				this.match(boaParser.WILDCARD);
				}
				break;

			case 2:
				{
				this.state = 569;
				this.identifier();
				this.state = 570;
				this.match(boaParser.COLON);
				this.state = 571;
				this.identifier();
				}
				break;

			case 3:
				{
				this.state = 573;
				this.identifier();
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === boaParser.COMMA) {
					{
					{
					this.state = 574;
					this.match(boaParser.COMMA);
					this.state = 575;
					this.identifier();
					}
					}
					this.state = 580;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 583;
			this.match(boaParser.RIGHT_ARROW);
			this.state = 584;
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
	public traverseStatement(): TraverseStatementContext {
		let _localctx: TraverseStatementContext = new TraverseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, boaParser.RULE_traverseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 586;
			this.match(boaParser.LPAREN);
			this.state = 587;
			this.identifier();
			this.state = 588;
			this.match(boaParser.COLON);
			this.state = 589;
			this.identifier();
			this.state = 590;
			this.match(boaParser.RPAREN);
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === boaParser.COLON) {
				{
				this.state = 591;
				this.match(boaParser.COLON);
				this.state = 592;
				this.type();
				}
			}

			{
			this.state = 595;
			this.programStatement();
			}
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
	public fixpStatement(): FixpStatementContext {
		let _localctx: FixpStatementContext = new FixpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, boaParser.RULE_fixpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 597;
			this.match(boaParser.LPAREN);
			this.state = 598;
			this.identifier();
			this.state = 599;
			this.match(boaParser.COMMA);
			this.state = 600;
			this.identifier();
			this.state = 601;
			this.match(boaParser.COLON);
			this.state = 602;
			this.identifier();
			this.state = 603;
			this.match(boaParser.RPAREN);
			{
			this.state = 604;
			this.match(boaParser.COLON);
			this.state = 605;
			this.type();
			}
			{
			this.state = 607;
			this.programStatement();
			}
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
	public stopStatement(): StopStatementContext {
		let _localctx: StopStatementContext = new StopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, boaParser.RULE_stopStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
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
		this.enterRule(_localctx, 96, boaParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.conjunction();
			this.state = 617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 613;
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
					this.state = 614;
					this.conjunction();
					}
					}
				}
				this.state = 619;
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
		this.enterRule(_localctx, 98, boaParser.RULE_expressionList);
		try {
			let _alt: number;
			this.state = 641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.expression();
				this.state = 625;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 621;
						this.match(boaParser.COMMA);
						this.state = 622;
						this.expression();
						}
						}
					}
					this.state = 627;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 628;
				this.expression();
				this.state = 638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 636;
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
							this.state = 630;
							this.expression();
							}
							break;
						case boaParser.COMMA:
							{
							this.state = 631;
							this.match(boaParser.COMMA);
							this.state = 634;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
							case 1:
								{
								this.state = 632;
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
					this.state = 640;
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
		this.enterRule(_localctx, 100, boaParser.RULE_conjunction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.comparison();
			this.state = 648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 644;
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
					this.state = 645;
					this.comparison();
					}
					}
				}
				this.state = 650;
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
		this.enterRule(_localctx, 102, boaParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.simpleExpression();
			this.state = 654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 652;
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
				this.state = 653;
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
		this.enterRule(_localctx, 104, boaParser.RULE_simpleExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.term();
			this.state = 661;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 657;
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
					this.state = 658;
					this.term();
					}
					}
				}
				this.state = 663;
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
		this.enterRule(_localctx, 106, boaParser.RULE_term);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.factor();
			this.state = 669;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 665;
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
					this.state = 666;
					this.factor();
					}
					}
				}
				this.state = 671;
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
		this.enterRule(_localctx, 108, boaParser.RULE_factor);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.operand();
			this.state = 678;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 676;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case boaParser.DOT:
						{
						this.state = 673;
						this.selector();
						}
						break;
					case boaParser.LBRACKET:
						{
						this.state = 674;
						this.index();
						}
						break;
					case boaParser.LPAREN:
						{
						this.state = 675;
						this.call();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 680;
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
		this.enterRule(_localctx, 110, boaParser.RULE_selector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(boaParser.DOT);
			this.state = 682;
			this.identifier();
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
		this.enterRule(_localctx, 112, boaParser.RULE_index);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(boaParser.LBRACKET);
			this.state = 685;
			this.expression();
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === boaParser.COLON) {
				{
				this.state = 686;
				this.match(boaParser.COLON);
				this.state = 687;
				this.expression();
				}
			}

			this.state = 690;
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
		this.enterRule(_localctx, 114, boaParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(boaParser.LPAREN);
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0)) {
				{
				this.state = 693;
				this.expressionList();
				}
			}

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
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, boaParser.RULE_operand);
		try {
			this.state = 712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 698;
				this.stringLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 699;
				this.characterLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 700;
				this.timeLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 701;
				this.integerLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 702;
				this.floatingPointLiteral();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 703;
				this.composite();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 704;
				this.functionExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 705;
				this.fixpExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 706;
				this.visitorExpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 707;
				this.traversalExpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 708;
				this.unaryFactor();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 709;
				this.match(boaParser.DOLLAR);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 710;
				this.parenExpression();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 711;
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
		this.enterRule(_localctx, 118, boaParser.RULE_unaryFactor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
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
			this.state = 715;
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
		this.enterRule(_localctx, 120, boaParser.RULE_parenExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(boaParser.LPAREN);
			this.state = 718;
			this.expression();
			this.state = 719;
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
		this.enterRule(_localctx, 122, boaParser.RULE_functionExpression);
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 721;
				this.functionType();
				this.state = 722;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 724;
				this.identifier();
				this.state = 725;
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
		this.enterRule(_localctx, 124, boaParser.RULE_fixpExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.fixpType();
			this.state = 733;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 730;
				this.fixpStatement();
				}
				break;

			case 2:
				{
				 this.notifyErrorListeners("error: only fixpoint statement allowed inside fixpoint expression"); 
				this.state = 732;
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
		this.enterRule(_localctx, 126, boaParser.RULE_visitorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.visitorType();
			this.state = 736;
			this.match(boaParser.LBRACE);
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 740;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 737;
					this.visitStatement();
					}
					break;

				case 2:
					{
					 this.notifyErrorListeners("error: only 'before' and 'after' visit statements allowed inside visitor bodies"); 
					this.state = 739;
					this.programStatement();
					}
					break;
				}
				}
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << boaParser.OF) | (1 << boaParser.IF) | (1 << boaParser.DO) | (1 << boaParser.MAP) | (1 << boaParser.STACK) | (1 << boaParser.QUEUE) | (1 << boaParser.SET) | (1 << boaParser.FOR) | (1 << boaParser.FOREACH) | (1 << boaParser.IFALL) | (1 << boaParser.EXISTS) | (1 << boaParser.NOT) | (1 << boaParser.TYPE) | (1 << boaParser.ELSE) | (1 << boaParser.CASE) | (1 << boaParser.OUTPUT) | (1 << boaParser.FORMAT) | (1 << boaParser.WHILE) | (1 << boaParser.BREAK) | (1 << boaParser.ARRAY) | (1 << boaParser.STATIC) | (1 << boaParser.SWITCH) | (1 << boaParser.RETURN) | (1 << boaParser.WEIGHT) | (1 << boaParser.DEFAULT) | (1 << boaParser.CONTINUE) | (1 << boaParser.FUNCTION) | (1 << boaParser.FIXP) | (1 << boaParser.VISITOR) | (1 << boaParser.TRAVERSAL) | (1 << boaParser.BEFORE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (boaParser.AFTER - 32)) | (1 << (boaParser.STOP - 32)) | (1 << (boaParser.SEMICOLON - 32)) | (1 << (boaParser.LBRACE - 32)) | (1 << (boaParser.LPAREN - 32)) | (1 << (boaParser.PLUS - 32)) | (1 << (boaParser.MINUS - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (boaParser.NEG - 68)) | (1 << (boaParser.INV - 68)) | (1 << (boaParser.WILDCARD - 68)) | (1 << (boaParser.DOLLAR - 68)) | (1 << (boaParser.IntegerLiteral - 68)) | (1 << (boaParser.FloatingPointLiteral - 68)) | (1 << (boaParser.CharacterLiteral - 68)) | (1 << (boaParser.RegexLiteral - 68)) | (1 << (boaParser.MultilineStringLiteral - 68)) | (1 << (boaParser.StringLiteral - 68)) | (1 << (boaParser.TimeLiteral - 68)) | (1 << (boaParser.Identifier - 68)))) !== 0));
			this.state = 744;
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
		this.enterRule(_localctx, 128, boaParser.RULE_traversalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.traversalType();
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 747;
				this.traverseStatement();
				}
				break;

			case 2:
				{
				 this.notifyErrorListeners("error: only traverse statements allowed inside traversal bodies"); 
				this.state = 749;
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
	public composite(): CompositeContext {
		let _localctx: CompositeContext = new CompositeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, boaParser.RULE_composite);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.match(boaParser.LBRACE);
			this.state = 769;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 753;
				this.expressionList();
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === boaParser.COMMA) {
					{
					this.state = 754;
					this.match(boaParser.COMMA);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 757;
				this.pair();
				this.state = 762;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 758;
						this.match(boaParser.COMMA);
						this.state = 759;
						this.pair();
						}
						}
					}
					this.state = 764;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				}
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === boaParser.COMMA) {
					{
					this.state = 765;
					this.match(boaParser.COMMA);
					}
				}

				}
				break;

			case 3:
				{
				this.state = 768;
				this.match(boaParser.COLON);
				}
				break;
			}
			this.state = 771;
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
			this.state = 773;
			this.expression();
			this.state = 774;
			this.match(boaParser.COLON);
			this.state = 775;
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
			this.state = 843;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case boaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 777;
				this.match(boaParser.Identifier);
				}
				break;
			case boaParser.FORMAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 778;
				this.match(boaParser.FORMAT);
				}
				break;
			case boaParser.OF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 779;
				_localctx._lit = this.match(boaParser.OF);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.IF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 781;
				_localctx._lit = this.match(boaParser.IF);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.DO:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 783;
				_localctx._lit = this.match(boaParser.DO);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.MAP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 785;
				_localctx._lit = this.match(boaParser.MAP);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.STACK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 787;
				_localctx._lit = this.match(boaParser.STACK);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.QUEUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 789;
				_localctx._lit = this.match(boaParser.QUEUE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.SET:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 791;
				_localctx._lit = this.match(boaParser.SET);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FOR:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 793;
				_localctx._lit = this.match(boaParser.FOR);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FOREACH:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 795;
				_localctx._lit = this.match(boaParser.FOREACH);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.IFALL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 797;
				_localctx._lit = this.match(boaParser.IFALL);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.EXISTS:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 799;
				_localctx._lit = this.match(boaParser.EXISTS);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.NOT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 801;
				_localctx._lit = this.match(boaParser.NOT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.TYPE:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 803;
				_localctx._lit = this.match(boaParser.TYPE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.ELSE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 805;
				_localctx._lit = this.match(boaParser.ELSE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.CASE:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 807;
				_localctx._lit = this.match(boaParser.CASE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.OUTPUT:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 809;
				_localctx._lit = this.match(boaParser.OUTPUT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.WHILE:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 811;
				_localctx._lit = this.match(boaParser.WHILE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.BREAK:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 813;
				_localctx._lit = this.match(boaParser.BREAK);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.ARRAY:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 815;
				_localctx._lit = this.match(boaParser.ARRAY);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.STATIC:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 817;
				_localctx._lit = this.match(boaParser.STATIC);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.SWITCH:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 819;
				_localctx._lit = this.match(boaParser.SWITCH);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.RETURN:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 821;
				_localctx._lit = this.match(boaParser.RETURN);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.WEIGHT:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 823;
				_localctx._lit = this.match(boaParser.WEIGHT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.DEFAULT:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 825;
				_localctx._lit = this.match(boaParser.DEFAULT);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.CONTINUE:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 827;
				_localctx._lit = this.match(boaParser.CONTINUE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FUNCTION:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 829;
				_localctx._lit = this.match(boaParser.FUNCTION);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.FIXP:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 831;
				_localctx._lit = this.match(boaParser.FIXP);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.VISITOR:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 833;
				_localctx._lit = this.match(boaParser.VISITOR);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.TRAVERSAL:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 835;
				_localctx._lit = this.match(boaParser.TRAVERSAL);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.BEFORE:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 837;
				_localctx._lit = this.match(boaParser.BEFORE);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.AFTER:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 839;
				_localctx._lit = this.match(boaParser.AFTER);
				 this.notifyErrorListeners("keyword '" + (_localctx._lit != null ? _localctx._lit.text : undefined) + "' can not be used as an identifier"); 
				}
				break;
			case boaParser.STOP:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 841;
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
			this.state = 845;
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
			this.state = 847;
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
			this.state = 849;
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
			this.state = 851;
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
			this.state = 853;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03c\u035A\x04\x02" +
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
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0134\n\x15" +
		"\f\x15\x0E\x15\u0137\v\x15\x05\x15\u0139\n\x15\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u013E\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0149\n\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0154\n\x15\f\x15\x0E" +
		"\x15\u0157\v\x15\x05\x15\u0159\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u015E" +
		"\n\x15\x05\x15\u0160\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u0179\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x07\x1C\u0184\n\x1C\f\x1C\x0E\x1C\u0187\v\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x07 \u019E\n \f \x0E \u01A1\v \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x07 \u01AE\n \f \x0E \u01B1\v \x03 \x03 \x03 \x03 \x05" +
		" \u01B7\n \x03 \x03 \x05 \u01BB\n \x03!\x03!\x03!\x05!\u01C0\n!\x03!\x03" +
		"!\x05!\u01C4\n!\x03!\x03!\x05!\u01C8\n!\x03!\x03!\x03!\x03\"\x03\"\x05" +
		"\"\u01CF\n\"\x03#\x03#\x03#\x05#\u01D4\n#\x03#\x03#\x03#\x03#\x05#\u01DA" +
		"\n#\x05#\u01DC\n#\x03$\x03$\x03$\x03$\x05$\u01E2\n$\x03%\x03%\x03%\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u01EE\n&\x03\'\x03\'\x05\'\u01F2" +
		"\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u01FC\n(\f(\x0E(\u01FF" +
		"\v(\x03(\x03(\x03(\x06(\u0204\n(\r(\x0E(\u0205\x03(\x03(\x03)\x03)\x03" +
		")\x03)\x06)\u020E\n)\r)\x0E)\u020F\x03*\x03*\x03*\x03*\x03*\x03*\x03*" +
		"\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03.\x03.\x03.\x05.\u0239\n.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x07.\u0243\n.\f.\x0E.\u0246\v.\x05.\u0248\n.\x03.\x03.\x03.\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0254\n/\x03/\x03/\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x032\x03" +
		"2\x032\x072\u026A\n2\f2\x0E2\u026D\v2\x033\x033\x033\x073\u0272\n3\f3" +
		"\x0E3\u0275\v3\x033\x033\x033\x033\x033\x033\x053\u027D\n3\x073\u027F" +
		"\n3\f3\x0E3\u0282\v3\x053\u0284\n3\x034\x034\x034\x074\u0289\n4\f4\x0E" +
		"4\u028C\v4\x035\x035\x035\x055\u0291\n5\x036\x036\x036\x076\u0296\n6\f" +
		"6\x0E6\u0299\v6\x037\x037\x037\x077\u029E\n7\f7\x0E7\u02A1\v7\x038\x03" +
		"8\x038\x038\x078\u02A7\n8\f8\x0E8\u02AA\v8\x039\x039\x039\x03:\x03:\x03" +
		":\x03:\x05:\u02B3\n:\x03:\x03:\x03;\x03;\x05;\u02B9\n;\x03;\x03;\x03<" +
		"\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05" +
		"<\u02CB\n<\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x05?\u02DA\n?\x03@\x03@\x03@\x03@\x05@\u02E0\n@\x03A\x03A\x03A" +
		"\x03A\x03A\x06A\u02E7\nA\rA\x0EA\u02E8\x03A\x03A\x03B\x03B\x03B\x03B\x05" +
		"B\u02F1\nB\x03C\x03C\x03C\x05C\u02F6\nC\x03C\x03C\x03C\x07C\u02FB\nC\f" +
		"C\x0EC\u02FE\vC\x03C\x05C\u0301\nC\x03C\x05C\u0304\nC\x03C\x03C\x03D\x03" +
		"D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u034E" +
		"\nE\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03J\x02\x02\x02" +
		"K\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x02\v\x04\x02HQUU\x03\x0278\x04\x021133\x04\x024466\x03" +
		"\x029>\x04\x0222?A\x05\x0255BEVV\x05\x02\x0E\x0E?@FG\x03\x02\\^\x02\u03A7" +
		"\x02\x94\x03\x02\x02\x02\x04\x98\x03\x02\x02\x02\x06\x9E\x03\x02\x02\x02" +
		"\b\xA3\x03\x02\x02\x02\n\xA5\x03\x02\x02\x02\f\xAB\x03\x02\x02\x02\x0E" +
		"\xAE\x03\x02\x02\x02\x10\xBE\x03\x02\x02\x02\x12\xC3\x03\x02\x02\x02\x14" +
		"\xC7\x03\x02\x02\x02\x16\xCB\x03\x02\x02\x02\x18\xCF\x03\x02\x02\x02\x1A" +
		"\xDF\x03\x02\x02\x02\x1C\xF3\x03\x02\x02\x02\x1E\xF5\x03\x02\x02\x02 " +
		"\xFC\x03\x02\x02\x02\"\u0100\x03\x02\x02\x02$\u0104\x03\x02\x02\x02&\u0108" +
		"\x03\x02\x02\x02(\u015F\x03\x02\x02\x02*\u0161\x03\x02\x02\x02,\u0163" +
		"\x03\x02\x02\x02.\u0165\x03\x02\x02\x020\u0178\x03\x02\x02\x022\u017A" +
		"\x03\x02\x02\x024\u017C\x03\x02\x02\x026\u0181\x03\x02\x02\x028\u018A" +
		"\x03\x02\x02\x02:\u018D\x03\x02\x02\x02<\u0190\x03\x02\x02\x02>\u01BA" +
		"\x03\x02\x02\x02@\u01BC\x03\x02\x02\x02B\u01CE\x03\x02\x02\x02D\u01D0" +
		"\x03\x02\x02\x02F\u01E1\x03\x02\x02\x02H\u01E3\x03\x02\x02\x02J\u01E6" +
		"\x03\x02\x02\x02L\u01EF\x03\x02\x02\x02N\u01F5\x03\x02\x02\x02P\u0209" +
		"\x03\x02\x02\x02R\u0211\x03\x02\x02\x02T\u021B\x03\x02\x02\x02V\u0225" +
		"\x03\x02\x02\x02X\u022F\x03\x02\x02\x02Z\u0238\x03\x02\x02\x02\\\u024C" +
		"\x03\x02\x02\x02^\u0257\x03\x02\x02\x02`\u0263\x03\x02\x02\x02b\u0266" +
		"\x03\x02\x02\x02d\u0283\x03\x02\x02\x02f\u0285\x03\x02\x02\x02h\u028D" +
		"\x03\x02\x02\x02j\u0292\x03\x02\x02\x02l\u029A\x03\x02\x02\x02n\u02A2" +
		"\x03\x02\x02\x02p\u02AB\x03\x02\x02\x02r\u02AE\x03\x02\x02\x02t\u02B6" +
		"\x03\x02\x02\x02v\u02CA\x03\x02\x02\x02x\u02CC\x03\x02\x02\x02z\u02CF" +
		"\x03\x02\x02\x02|\u02D9\x03\x02\x02\x02~\u02DB\x03\x02\x02\x02\x80\u02E1" +
		"\x03\x02\x02\x02\x82\u02EC\x03\x02\x02\x02\x84\u02F2\x03\x02\x02\x02\x86" +
		"\u0307\x03\x02\x02\x02\x88\u034D\x03\x02\x02\x02\x8A\u034F\x03\x02\x02" +
		"\x02\x8C\u0351\x03\x02\x02\x02\x8E\u0353\x03\x02\x02\x02\x90\u0355\x03" +
		"\x02\x02\x02\x92\u0357\x03\x02\x02\x02\x94\x95\x05\x04\x03\x02\x95\x96" +
		"\x07\x02\x02\x03\x96\x03\x03\x02\x02\x02\x97\x99\x05\x06\x04\x02\x98\x97" +
		"\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B" +
		"\x03\x02\x02\x02\x9B\x05\x03\x02\x02\x02\x9C\x9F\x05\b\x05\x02\x9D\x9F" +
		"\x050\x19\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\x07" +
		"\x03\x02\x02\x02\xA0\xA4\x05\n\x06\x02\xA1\xA4\x05\f\x07\x02\xA2\xA4\x05" +
		"\x0E\b\x02\xA3\xA0\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03" +
		"\x02\x02\x02\xA4\t\x03\x02\x02\x02\xA5\xA6\x07\x0F\x02\x02\xA6\xA7\x05" +
		"\x88E\x02\xA7\xA8\x07U\x02\x02\xA8\xA9\x05\x10\t\x02\xA9\xAA\b\x06\x01" +
		"\x02\xAA\v\x03\x02\x02\x02\xAB\xAC\x07\x17\x02\x02\xAC\xAD\x05\x0E\b\x02" +
		"\xAD\r\x03\x02\x02\x02\xAE\xAF\x05D#\x02\xAF\xB0\b\b\x01\x02\xB0\x0F\x03" +
		"\x02\x02\x02\xB1\xBF\x05\x16\f\x02\xB2\xBF\x05\x1E\x10\x02\xB3\xBF\x05" +
		"\x18\r\x02\xB4\xBF\x05&\x14\x02\xB5\xBF\x05(\x15\x02\xB6\xBF\x05*\x16" +
		"\x02\xB7\xBF\x05,\x17\x02\xB8\xBF\x05.\x18\x02\xB9\xBF\x05 \x11\x02\xBA" +
		"\xBF\x05\"\x12\x02\xBB\xBF\x05$\x13\x02\xBC\xBF\x05\x1A\x0E\x02\xBD\xBF" +
		"\x05\x88E\x02\xBE\xB1\x03\x02\x02\x02\xBE\xB2\x03\x02\x02\x02\xBE\xB3" +
		"\x03\x02\x02\x02\xBE\xB4\x03\x02\x02\x02\xBE\xB5\x03\x02\x02\x02\xBE\xB6" +
		"\x03\x02\x02\x02\xBE\xB7\x03\x02\x02\x02\xBE\xB8\x03\x02\x02\x02\xBE\xB9" +
		"\x03\x02\x02\x02\xBE\xBA\x03\x02\x02\x02\xBE\xBB\x03\x02\x02\x02\xBE\xBC" +
		"\x03\x02\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\x11\x03\x02\x02\x02\xC0\xC1" +
		"\x05\x88E\x02\xC1\xC2\x07&\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC0\x03" +
		"\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x05" +
		"\x10\t\x02\xC6\x13\x03\x02\x02\x02\xC7\xC8\x05\x88E\x02\xC8\xC9\x07U\x02" +
		"\x02\xC9\xCA\x05b2\x02\xCA\x15\x03\x02\x02\x02\xCB\xCC\x07\x16\x02\x02" +
		"\xCC\xCD\x07\x03\x02\x02\xCD\xCE\x05\x12\n\x02\xCE\x17\x03\x02\x02\x02" +
		"\xCF\xDB\x07)\x02\x02\xD0\xD5\x05\x1C\x0F\x02\xD1\xD2\x07\'\x02\x02\xD2" +
		"\xD4\x05\x1C\x0F\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5" +
		"\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD8\xDA\x07\'\x02\x02\xD9\xD8\x03\x02\x02\x02\xD9" +
		"\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB\xD0\x03\x02\x02\x02\xDB" +
		"\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x07*\x02\x02\xDE" +
		"\x19\x03\x02\x02\x02\xDF\xE0\x07$\x02\x02\xE0\xEC\x07)\x02\x02\xE1\xE6" +
		"\x05\x14\v\x02\xE2\xE3\x07\'\x02\x02\xE3\xE5\x05\x14\v\x02\xE4\xE2\x03" +
		"\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEB\x07" +
		"\'\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03" +
		"\x02\x02\x02\xEC\xE1\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03" +
		"\x02\x02\x02\xEE\xEF\x07*\x02\x02\xEF\x1B\x03\x02\x02\x02\xF0\xF4\x05" +
		"\n\x06\x02\xF1\xF4\x05\f\x07\x02\xF2\xF4\x05\x12\n\x02\xF3\xF0\x03\x02" +
		"\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\x1D\x03\x02" +
		"\x02\x02\xF5\xF6\x07\x06\x02\x02\xF6\xF7\x07-\x02\x02\xF7\xF8\x05\x12" +
		"\n\x02\xF8\xF9\x07.\x02\x02\xF9\xFA\x07\x03\x02\x02\xFA\xFB\x05\x12\n" +
		"\x02\xFB\x1F\x03\x02\x02\x02\xFC\xFD\x07\x07\x02\x02\xFD\xFE\x07\x03\x02" +
		"\x02\xFE\xFF\x05\x12\n\x02\xFF!\x03\x02\x02\x02\u0100\u0101\x07\b\x02" +
		"\x02\u0101\u0102\x07\x03\x02\x02\u0102\u0103\x05\x12\n\x02\u0103#\x03" +
		"\x02\x02\x02\u0104\u0105\x07\t\x02\x02\u0105\u0106\x07\x03\x02\x02\u0106" +
		"\u0107\x05\x12\n\x02\u0107%\x03\x02\x02\x02\u0108\u010B\x07\x12\x02\x02" +
		"\u0109\u010C\x07\t\x02\x02\u010A\u010C\x05\x88E\x02\u010B\u0109\x03\x02" +
		"\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u0111\x03\x02\x02\x02\u010D" +
		"\u010E\x07+\x02\x02\u010E\u010F\x05d3\x02\u010F\u0110\x07,\x02\x02\u0110" +
		"\u0112\x03\x02\x02\x02\u0111\u010D\x03\x02\x02\x02\u0111\u0112\x03\x02" +
		"\x02\x02\u0112\u0119\x03\x02\x02\x02\u0113\u0114\x07-\x02\x02\u0114\u0115" +
		"\x05\x12\n\x02\u0115\u0116\x07.\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117" +
		"\u0113\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02" +
		"\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B" +
		"\u0119\x03\x02\x02\x02\u011C\u011D\x07\x03\x02\x02\u011D\u0120\x05\x12" +
		"\n\x02\u011E\u011F\x07\x1A\x02\x02\u011F\u0121\x05\x12\n\x02\u0120\u011E" +
		"\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0127\x03\x02\x02\x02" +
		"\u0122\u0123\x07\x13\x02\x02\u0123\u0124\x07+\x02\x02\u0124\u0125\x05" +
		"d3\x02\u0125\u0126\x07,\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0122" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\'\x03\x02\x02\x02\u0129" +
		"\u012A\x07\x1D\x02\x02\u012A\u0138\x07+\x02\x02\u012B\u012C\x05\x88E\x02" +
		"\u012C\u012D\x07&\x02\x02\u012D\u0135\x05\x10\t\x02\u012E\u012F\x07\'" +
		"\x02\x02\u012F\u0130\x05\x88E\x02\u0130\u0131\x07&\x02\x02\u0131\u0132" +
		"\x05\x10\t\x02\u0132\u0134\x03\x02\x02\x02\u0133\u012E\x03\x02\x02\x02" +
		"\u0134\u0137\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03" +
		"\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138" +
		"\u012B\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02" +
		"\x02\x02\u013A\u013D\x07,\x02\x02\u013B\u013C\x07&\x02\x02\u013C\u013E" +
		"\x05\x10\t\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
		"\u013E\u0160\x03\x02\x02\x02\u013F\u0140\x07\x1D\x02\x02\u0140\u0158\x07" +
		"+\x02\x02\u0141\u0142\x05\x88E\x02\u0142\u0143\x07&\x02\x02\u0143\u0144" +
		"\x05\x10\t\x02\u0144\u0149\x03\x02\x02\x02\u0145\u0146\x05\x88E\x02\u0146" +
		"\u0147\b\x15\x01\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0141\x03\x02\x02" +
		"\x02\u0148\u0145\x03\x02\x02\x02\u0149\u0155\x03\x02\x02\x02\u014A\u014B" +
		"\x07\'\x02\x02\u014B\u014C\x05\x88E\x02\u014C\u014D\x07&\x02\x02\u014D" +
		"\u014E\x05\x10\t\x02\u014E\u0154\x03\x02\x02\x02\u014F\u0150\x07\'\x02" +
		"\x02\u0150\u0151\x05\x88E\x02\u0151\u0152\b\x15\x01\x02\u0152\u0154\x03" +
		"\x02\x02\x02\u0153\u014A\x03\x02\x02\x02\u0153\u014F\x03\x02\x02\x02\u0154" +
		"\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02" +
		"\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158" +
		"\u0148\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x03\x02" +
		"\x02\x02\u015A\u015D\x07,\x02\x02\u015B\u015C\x07&\x02\x02\u015C\u015E" +
		"\x05\x10\t\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02" +
		"\u015E\u0160\x03\x02\x02\x02\u015F\u0129\x03\x02\x02\x02\u015F\u013F\x03" +
		"\x02\x02\x02\u0160)\x03\x02\x02\x02\u0161\u0162\x07\x1E\x02\x02\u0162" +
		"+\x03\x02\x02\x02\u0163\u0164\x07\x1F\x02\x02\u0164-\x03\x02\x02\x02\u0165" +
		"\u0166\x07 \x02\x02\u0166/\x03\x02\x02\x02\u0167\u0179\x056\x1C\x02\u0168" +
		"\u0179\x054\x1B\x02\u0169\u0179\x058\x1D\x02\u016A\u0179\x05:\x1E\x02" +
		"\u016B\u0179\x05`1\x02\u016C\u0179\x05<\x1F\x02\u016D\u0179\x05@!\x02" +
		"\u016E\u0179\x05J&\x02\u016F\u0179\x05L\'\x02\u0170\u0179\x05N(\x02\u0171" +
		"\u0179\x05R*\x02\u0172\u0179\x05T+\x02\u0173\u0179\x05V,\x02\u0174\u0179" +
		"\x05X-\x02\u0175\u0179\x052\x1A\x02\u0176\u0179\x05> \x02\u0177\u0179" +
		"\x05H%\x02\u0178\u0167\x03\x02\x02\x02\u0178\u0168\x03\x02\x02\x02\u0178" +
		"\u0169\x03\x02\x02\x02\u0178\u016A\x03\x02\x02\x02\u0178\u016B\x03\x02" +
		"\x02\x02\u0178\u016C\x03\x02\x02\x02\u0178\u016D\x03\x02\x02\x02\u0178" +
		"\u016E\x03\x02\x02\x02\u0178\u016F\x03\x02\x02\x02\u0178\u0170\x03\x02" +
		"\x02\x02\u0178\u0171\x03\x02\x02\x02\u0178\u0172\x03\x02\x02\x02\u0178" +
		"\u0173\x03\x02\x02\x02\u0178\u0174\x03\x02\x02\x02\u0178\u0175\x03\x02" +
		"\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179" +
		"1\x03\x02\x02\x02\u017A\u017B\x07%\x02\x02\u017B3\x03\x02\x02\x02\u017C" +
		"\u017D\x05n8\x02\u017D\u017E\t\x02\x02\x02\u017E\u017F\x05b2\x02\u017F" +
		"\u0180\b\x1B\x01\x02\u01805\x03\x02\x02\x02\u0181\u0185\x07)\x02\x02\u0182" +
		"\u0184\x05\x06\x04\x02\u0183\u0182\x03\x02\x02\x02\u0184\u0187\x03\x02" +
		"\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186" +
		"\u0188\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07*\x02" +
		"\x02\u01897\x03\x02\x02\x02\u018A\u018B\x07\x15\x02\x02\u018B\u018C\b" +
		"\x1D\x01\x02\u018C9\x03\x02\x02\x02\u018D\u018E\x07\x1C\x02\x02\u018E" +
		"\u018F\b\x1E\x01\x02\u018F;\x03\x02\x02\x02\u0190\u0191\x07\x05\x02\x02" +
		"\u0191\u0192\x050\x19\x02\u0192\u0193\x07\x14\x02\x02\u0193\u0194\x07" +
		"+\x02\x02\u0194\u0195\x05b2\x02\u0195\u0196\x07,\x02\x02\u0196\u0197\b" +
		"\x1F\x01\x02\u0197=\x03\x02\x02\x02\u0198\u019F\x05\x88E\x02\u0199\u019A" +
		"\x07-\x02\x02\u019A\u019B\x05b2\x02\u019B\u019C\x07.\x02\x02\u019C\u019E" +
		"\x03\x02\x02\x02\u019D\u0199\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02" +
		"\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03" +
		"\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A3\x07V\x02\x02\u01A3" +
		"\u01A4\b \x01\x02\u01A4\u01A5\x07\x1A\x02\x02\u01A5\u01A6\x05b2\x02\u01A6" +
		"\u01A7\b \x01\x02\u01A7\u01BB\x03\x02\x02\x02\u01A8\u01AF\x05\x88E\x02" +
		"\u01A9\u01AA\x07-\x02\x02\u01AA\u01AB\x05b2\x02\u01AB\u01AC\x07.\x02\x02" +
		"\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01A9\x03\x02\x02\x02\u01AE\u01B1\x03" +
		"\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
		"\u01B2\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B3\x07V\x02" +
		"\x02\u01B3\u01B6\x05b2\x02\u01B4\u01B5\x07\x1A\x02\x02\u01B5\u01B7\x05" +
		"b2\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8" +
		"\x03\x02\x02\x02\u01B8\u01B9\b \x01\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA" +
		"\u0198\x03\x02\x02\x02\u01BA\u01A8\x03\x02\x02\x02\u01BB?\x03\x02\x02" +
		"\x02\u01BC\u01BD\x07\n\x02\x02\u01BD\u01BF\x07+\x02\x02\u01BE\u01C0\x05" +
		"B\"\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0" +
		"\u01C1\x03\x02\x02\x02\u01C1\u01C3\x07%\x02\x02\u01C2\u01C4\x05b2\x02" +
		"\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03" +
		"\x02\x02\x02\u01C5\u01C7\x07%\x02\x02\u01C6\u01C8\x05B\"\x02\u01C7\u01C6" +
		"\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02" +
		"\u01C9\u01CA\x07,\x02\x02\u01CA\u01CB\x05\x06\x04\x02\u01CBA\x03\x02\x02" +
		"\x02\u01CC\u01CF\x05D#\x02\u01CD\u01CF\x05F$\x02\u01CE\u01CC\x03\x02\x02" +
		"\x02\u01CE\u01CD\x03\x02\x02\x02\u01CFC\x03\x02\x02\x02\u01D0\u01D1\x05" +
		"\x88E\x02\u01D1\u01D3\x07&\x02\x02\u01D2\u01D4\x05\x10\t\x02\u01D3\u01D2" +
		"\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01DB\x03\x02\x02\x02" +
		"\u01D5\u01D9\x07U\x02\x02\u01D6\u01D7\b#\x01\x02\u01D7\u01DA\x05&\x14" +
		"\x02\u01D8\u01DA\x05b2\x02\u01D9\u01D6\x03\x02\x02\x02\u01D9\u01D8\x03" +
		"\x02\x02\x02\u01DA\u01DC\x03\x02\x02\x02\u01DB\u01D5\x03\x02\x02\x02\u01DB" +
		"\u01DC\x03\x02\x02\x02\u01DCE\x03\x02\x02\x02\u01DD\u01DE\x05b2\x02\u01DE" +
		"\u01DF\t\x03\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01E2\x05b2\x02" +
		"\u01E1\u01DD\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2G\x03\x02" +
		"\x02\x02\u01E3\u01E4\x05F$\x02\u01E4\u01E5\b%\x01\x02\u01E5I\x03\x02\x02" +
		"\x02\u01E6\u01E7\x07\x04\x02\x02\u01E7\u01E8\x07+\x02\x02\u01E8\u01E9" +
		"\x05b2\x02\u01E9\u01EA\x07,\x02\x02\u01EA\u01ED\x05\x06\x04\x02\u01EB" +
		"\u01EC\x07\x10\x02\x02\u01EC\u01EE\x05\x06\x04\x02\u01ED\u01EB\x03\x02" +
		"\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EEK\x03\x02\x02\x02\u01EF\u01F1" +
		"\x07\x19\x02\x02\u01F0\u01F2\x05b2\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1" +
		"\u01F2\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\b\'\x01" +
		"\x02\u01F4M\x03\x02\x02\x02\u01F5\u01F6";
	private static readonly _serializedATNSegment1: string =
		"\x07\x18\x02\x02\u01F6\u01F7\x07+\x02\x02\u01F7\u01F8\x05b2\x02\u01F8" +
		"\u01F9\x07,\x02\x02\u01F9\u01FD\x07)\x02\x02\u01FA\u01FC\x05P)\x02\u01FB" +
		"\u01FA\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02" +
		"\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u0200\x03\x02\x02\x02\u01FF" +
		"\u01FD\x03\x02\x02\x02\u0200\u0201\x07\x1B\x02\x02\u0201\u0203\x07&\x02" +
		"\x02\u0202\u0204\x050\x19\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0205" +
		"\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x07*\x02\x02\u0208O\x03\x02\x02" +
		"\x02\u0209\u020A\x07\x11\x02\x02\u020A\u020B\x05d3\x02\u020B\u020D\x07" +
		"&\x02\x02\u020C\u020E\x050\x19\x02\u020D\u020C\x03\x02\x02\x02\u020E\u020F" +
		"\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02" +
		"\u0210Q\x03\x02\x02\x02\u0211\u0212\x07\v\x02\x02\u0212\u0213\x07+\x02" +
		"\x02\u0213\u0214\x05\x88E\x02\u0214\u0215\x07&\x02\x02\u0215\u0216\x05" +
		"\x10\t\x02\u0216\u0217\x07%\x02\x02\u0217\u0218\x05b2\x02\u0218\u0219" +
		"\x07,\x02\x02\u0219\u021A\x05\x06\x04\x02\u021AS\x03\x02\x02\x02\u021B" +
		"\u021C\x07\r\x02\x02\u021C\u021D\x07+\x02\x02\u021D\u021E\x05\x88E\x02" +
		"\u021E\u021F\x07&\x02\x02\u021F\u0220\x05\x10\t\x02\u0220\u0221\x07%\x02" +
		"\x02\u0221\u0222\x05b2\x02\u0222\u0223\x07,\x02\x02\u0223\u0224\x05\x06" +
		"\x04\x02\u0224U\x03\x02\x02\x02\u0225\u0226\x07\f\x02\x02\u0226\u0227" +
		"\x07+\x02\x02\u0227\u0228\x05\x88E\x02\u0228\u0229\x07&\x02\x02\u0229" +
		"\u022A\x05\x10\t\x02\u022A\u022B\x07%\x02\x02\u022B\u022C\x05b2\x02\u022C" +
		"\u022D\x07,\x02\x02\u022D\u022E\x05\x06\x04\x02\u022EW\x03\x02\x02\x02" +
		"\u022F\u0230\x07\x14\x02\x02\u0230\u0231\x07+\x02\x02\u0231\u0232\x05" +
		"b2\x02\u0232\u0233\x07,\x02\x02\u0233\u0234\x05\x06\x04\x02\u0234Y\x03" +
		"\x02\x02\x02\u0235\u0239\x07!\x02\x02\u0236\u0239\x07\"\x02\x02\u0237" +
		"\u0239\b.\x01\x02\u0238\u0235\x03\x02\x02\x02\u0238\u0236\x03\x02\x02" +
		"\x02\u0238\u0237\x03\x02\x02\x02\u0239\u0247\x03\x02\x02\x02\u023A\u0248" +
		"\x07R\x02\x02\u023B\u023C\x05\x88E\x02\u023C\u023D\x07&\x02\x02\u023D" +
		"\u023E\x05\x88E\x02\u023E\u0248\x03\x02\x02\x02\u023F\u0244\x05\x88E\x02" +
		"\u0240\u0241\x07\'\x02\x02\u0241\u0243\x05\x88E\x02\u0242\u0240\x03\x02" +
		"\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244" +
		"\u0245\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02" +
		"\x02\x02\u0247\u023A\x03\x02\x02\x02\u0247\u023B\x03\x02\x02\x02\u0247" +
		"\u023F\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024A\x07W\x02" +
		"\x02\u024A\u024B\x05\x06\x04\x02\u024B[\x03\x02\x02\x02\u024C\u024D\x07" +
		"+\x02\x02\u024D\u024E\x05\x88E\x02\u024E\u024F\x07&\x02\x02\u024F\u0250" +
		"\x05\x88E\x02\u0250\u0253\x07,\x02\x02\u0251\u0252\x07&\x02\x02\u0252" +
		"\u0254\x05\x10\t\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02" +
		"\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0256\x05\x06\x04\x02\u0256]\x03" +
		"\x02\x02\x02\u0257\u0258\x07+\x02\x02\u0258\u0259\x05\x88E\x02\u0259\u025A" +
		"\x07\'\x02\x02\u025A\u025B\x05\x88E\x02\u025B\u025C\x07&\x02\x02\u025C" +
		"\u025D\x05\x88E\x02\u025D\u025E\x07,\x02\x02\u025E\u025F\x07&\x02\x02" +
		"\u025F\u0260\x05\x10\t\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x05" +
		"\x06\x04\x02\u0262_\x03\x02\x02\x02\u0263\u0264\x07#\x02\x02\u0264\u0265" +
		"\b1\x01\x02\u0265a\x03\x02\x02\x02\u0266\u026B\x05f4\x02\u0267\u0268\t" +
		"\x04\x02\x02\u0268\u026A\x05f4\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026D" +
		"\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02" +
		"\u026Cc\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u0273\x05b2" +
		"\x02\u026F\u0270\x07\'\x02\x02\u0270\u0272\x05b2\x02\u0271\u026F\x03\x02" +
		"\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0273" +
		"\u0274\x03\x02\x02\x02\u0274\u0284\x03\x02\x02\x02\u0275\u0273\x03\x02" +
		"\x02\x02\u0276\u0280\x05b2\x02\u0277\u0278\b3\x01\x02\u0278\u027F\x05" +
		"b2\x02\u0279\u027C\x07\'\x02\x02\u027A\u027D\x05b2\x02\u027B\u027D\b3" +
		"\x01\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027B\x03\x02\x02\x02\u027D" +
		"\u027F\x03\x02\x02\x02\u027E\u0277\x03\x02\x02\x02\u027E\u0279\x03\x02" +
		"\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280" +
		"\u0281\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280\x03\x02" +
		"\x02\x02\u0283\u026E\x03\x02\x02\x02\u0283\u0276\x03\x02\x02\x02\u0284" +
		"e\x03\x02\x02\x02\u0285\u028A\x05h5\x02\u0286\u0287\t\x05\x02\x02\u0287" +
		"\u0289\x05h5\x02\u0288\u0286\x03\x02\x02\x02\u0289\u028C\x03\x02\x02\x02" +
		"\u028A\u0288\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028Bg\x03\x02" +
		"\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D\u0290\x05j6\x02\u028E\u028F" +
		"\t\x06\x02\x02\u028F\u0291\x05j6\x02\u0290\u028E\x03\x02\x02\x02\u0290" +
		"\u0291\x03\x02\x02\x02\u0291i\x03\x02\x02\x02\u0292\u0297\x05l7\x02\u0293" +
		"\u0294\t\x07\x02\x02\u0294\u0296\x05l7\x02\u0295\u0293\x03\x02\x02\x02" +
		"\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03" +
		"\x02\x02\x02\u0298k\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u029A" +
		"\u029F\x05n8\x02\u029B\u029C\t\b\x02\x02\u029C\u029E\x05n8\x02\u029D\u029B" +
		"\x03\x02\x02\x02\u029E\u02A1\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02" +
		"\u029F\u02A0\x03\x02\x02\x02\u02A0m\x03\x02\x02\x02\u02A1\u029F\x03\x02" +
		"\x02\x02\u02A2\u02A8\x05v<\x02\u02A3\u02A7\x05p9\x02\u02A4\u02A7\x05r" +
		":\x02\u02A5\u02A7\x05t;\x02\u02A6\u02A3\x03\x02\x02\x02\u02A6\u02A4\x03" +
		"\x02\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8" +
		"\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9o\x03\x02\x02" +
		"\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02AC\x07(\x02\x02\u02AC\u02AD" +
		"\x05\x88E\x02\u02ADq\x03\x02\x02\x02\u02AE\u02AF\x07-\x02\x02\u02AF\u02B2" +
		"\x05b2\x02\u02B0\u02B1\x07&\x02\x02\u02B1\u02B3\x05b2\x02\u02B2\u02B0" +
		"\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02" +
		"\u02B4\u02B5\x07.\x02\x02\u02B5s\x03\x02\x02\x02\u02B6\u02B8\x07+\x02" +
		"\x02\u02B7\u02B9\x05d3\x02\u02B8\u02B7\x03\x02\x02\x02\u02B8\u02B9\x03" +
		"\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BB\x07,\x02\x02\u02BB" +
		"u\x03\x02\x02\x02\u02BC\u02CB\x05\x90I\x02\u02BD\u02CB\x05\x8EH\x02\u02BE" +
		"\u02CB\x05\x92J\x02\u02BF\u02CB\x05\x8AF\x02\u02C0\u02CB\x05\x8CG\x02" +
		"\u02C1\u02CB\x05\x84C\x02\u02C2\u02CB\x05|?\x02\u02C3\u02CB\x05~@\x02" +
		"\u02C4\u02CB\x05\x80A\x02\u02C5\u02CB\x05\x82B\x02\u02C6\u02CB\x05x=\x02" +
		"\u02C7\u02CB\x07T\x02\x02\u02C8\u02CB\x05z>\x02\u02C9\u02CB\x05\x88E\x02" +
		"\u02CA\u02BC\x03\x02\x02\x02\u02CA\u02BD\x03\x02\x02\x02\u02CA\u02BE\x03" +
		"\x02\x02\x02\u02CA\u02BF\x03\x02\x02\x02\u02CA\u02C0\x03\x02\x02\x02\u02CA" +
		"\u02C1\x03\x02\x02\x02\u02CA\u02C2\x03\x02\x02\x02\u02CA\u02C3\x03\x02" +
		"\x02\x02\u02CA\u02C4\x03\x02\x02\x02\u02CA\u02C5\x03\x02\x02\x02\u02CA" +
		"\u02C6\x03\x02\x02\x02\u02CA\u02C7\x03\x02\x02\x02\u02CA\u02C8\x03\x02" +
		"\x02\x02\u02CA\u02C9\x03\x02\x02\x02\u02CBw\x03\x02\x02\x02\u02CC\u02CD" +
		"\t\t\x02\x02\u02CD\u02CE\x05n8\x02\u02CEy\x03\x02\x02\x02\u02CF\u02D0" +
		"\x07+\x02\x02\u02D0\u02D1\x05b2\x02\u02D1\u02D2\x07,\x02\x02\u02D2{\x03" +
		"\x02\x02\x02\u02D3\u02D4\x05(\x15\x02\u02D4\u02D5\x056\x1C\x02\u02D5\u02DA" +
		"\x03\x02\x02\x02\u02D6\u02D7\x05\x88E\x02\u02D7\u02D8\x056\x1C\x02\u02D8" +
		"\u02DA\x03\x02\x02\x02\u02D9\u02D3\x03\x02\x02\x02\u02D9\u02D6\x03\x02" +
		"\x02\x02\u02DA}\x03\x02\x02\x02\u02DB\u02DF\x05*\x16\x02\u02DC\u02E0\x05" +
		"^0\x02\u02DD\u02DE\b@\x01\x02\u02DE\u02E0\x05\x06\x04\x02\u02DF\u02DC" +
		"\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\x7F\x03\x02\x02\x02" +
		"\u02E1\u02E2\x05,\x17\x02\u02E2\u02E6\x07)\x02\x02\u02E3\u02E7\x05Z.\x02" +
		"\u02E4\u02E5\bA\x01\x02\u02E5\u02E7\x05\x06\x04\x02\u02E6\u02E3\x03\x02" +
		"\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
		"\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA\x03\x02" +
		"\x02\x02\u02EA\u02EB\x07*\x02\x02\u02EB\x81\x03\x02\x02\x02\u02EC\u02F0" +
		"\x05.\x18\x02\u02ED\u02F1\x05\\/\x02\u02EE\u02EF\bB\x01\x02\u02EF\u02F1" +
		"\x05\x06\x04\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02" +
		"\u02F1\x83\x03\x02\x02\x02\u02F2\u0303\x07)\x02\x02\u02F3\u02F5\x05d3" +
		"\x02\u02F4\u02F6\x07\'\x02\x02\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6" +
		"\x03\x02\x02\x02\u02F6\u0304\x03\x02\x02\x02\u02F7\u02FC\x05\x86D\x02" +
		"\u02F8\u02F9\x07\'\x02\x02\u02F9\u02FB\x05\x86D\x02\u02FA\u02F8\x03\x02" +
		"\x02\x02\u02FB\u02FE\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC" +
		"\u02FD\x03\x02\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02" +
		"\x02\x02\u02FF\u0301\x07\'\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0300\u0301" +
		"\x03\x02\x02\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0304\x07&\x02\x02" +
		"\u0303\u02F3\x03\x02\x02\x02\u0303\u02F7\x03\x02\x02\x02\u0303\u0302\x03" +
		"\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305" +
		"\u0306\x07*\x02\x02\u0306\x85\x03\x02\x02\x02\u0307\u0308\x05b2\x02\u0308" +
		"\u0309\x07&\x02\x02\u0309\u030A\x05b2\x02\u030A\x87\x03\x02\x02\x02\u030B" +
		"\u034E\x07`\x02\x02\u030C\u034E\x07\x13\x02\x02\u030D\u030E\x07\x03\x02" +
		"\x02\u030E\u034E\bE\x01\x02\u030F\u0310\x07\x04\x02\x02\u0310\u034E\b" +
		"E\x01\x02\u0311\u0312\x07\x05\x02\x02\u0312\u034E\bE\x01\x02\u0313\u0314" +
		"\x07\x06\x02\x02\u0314\u034E\bE\x01\x02\u0315\u0316\x07\x07\x02\x02\u0316" +
		"\u034E\bE\x01\x02\u0317\u0318\x07\b\x02\x02\u0318\u034E\bE\x01\x02\u0319" +
		"\u031A\x07\t\x02\x02\u031A\u034E\bE\x01\x02\u031B\u031C\x07\n\x02\x02" +
		"\u031C\u034E\bE\x01\x02\u031D\u031E\x07\v\x02\x02\u031E\u034E\bE\x01\x02" +
		"\u031F\u0320\x07\f\x02\x02\u0320\u034E\bE\x01\x02\u0321\u0322\x07\r\x02" +
		"\x02\u0322\u034E\bE\x01\x02\u0323\u0324\x07\x0E\x02\x02\u0324\u034E\b" +
		"E\x01\x02\u0325\u0326\x07\x0F\x02\x02\u0326\u034E\bE\x01\x02\u0327\u0328" +
		"\x07\x10\x02\x02\u0328\u034E\bE\x01\x02\u0329\u032A\x07\x11\x02\x02\u032A" +
		"\u034E\bE\x01\x02\u032B\u032C\x07\x12\x02\x02\u032C\u034E\bE\x01\x02\u032D" +
		"\u032E\x07\x14\x02\x02\u032E\u034E\bE\x01\x02\u032F\u0330\x07\x15\x02" +
		"\x02\u0330\u034E\bE\x01\x02\u0331\u0332\x07\x16\x02\x02\u0332\u034E\b" +
		"E\x01\x02\u0333\u0334\x07\x17\x02\x02\u0334\u034E\bE\x01\x02\u0335\u0336" +
		"\x07\x18\x02\x02\u0336\u034E\bE\x01\x02\u0337\u0338\x07\x19\x02\x02\u0338" +
		"\u034E\bE\x01\x02\u0339\u033A\x07\x1A\x02\x02\u033A\u034E\bE\x01\x02\u033B" +
		"\u033C\x07\x1B\x02\x02\u033C\u034E\bE\x01\x02\u033D\u033E\x07\x1C\x02" +
		"\x02\u033E\u034E\bE\x01\x02\u033F\u0340\x07\x1D\x02\x02\u0340\u034E\b" +
		"E\x01\x02\u0341\u0342\x07\x1E\x02\x02\u0342\u034E\bE\x01\x02\u0343\u0344" +
		"\x07\x1F\x02\x02\u0344\u034E\bE\x01\x02\u0345\u0346\x07 \x02\x02\u0346" +
		"\u034E\bE\x01\x02\u0347\u0348\x07!\x02\x02\u0348\u034E\bE\x01\x02\u0349" +
		"\u034A\x07\"\x02\x02\u034A\u034E\bE\x01\x02\u034B\u034C\x07#\x02\x02\u034C" +
		"\u034E\bE\x01\x02\u034D\u030B\x03\x02\x02\x02\u034D\u030C\x03\x02\x02" +
		"\x02\u034D\u030D\x03\x02\x02\x02\u034D\u030F\x03\x02\x02\x02\u034D\u0311" +
		"\x03\x02\x02\x02\u034D\u0313\x03\x02\x02\x02\u034D\u0315\x03\x02\x02\x02" +
		"\u034D\u0317\x03\x02\x02\x02\u034D\u0319\x03\x02\x02\x02\u034D\u031B\x03" +
		"\x02\x02\x02\u034D\u031D\x03\x02\x02\x02\u034D\u031F\x03\x02\x02\x02\u034D" +
		"\u0321\x03\x02\x02\x02\u034D\u0323\x03\x02\x02\x02\u034D\u0325\x03\x02" +
		"\x02\x02\u034D\u0327\x03\x02\x02\x02\u034D\u0329\x03\x02\x02\x02\u034D" +
		"\u032B\x03\x02\x02\x02\u034D\u032D\x03\x02\x02\x02\u034D\u032F\x03\x02" +
		"\x02\x02\u034D\u0331\x03\x02\x02\x02\u034D\u0333\x03\x02\x02\x02\u034D" +
		"\u0335\x03\x02\x02\x02\u034D\u0337\x03\x02\x02\x02\u034D\u0339\x03\x02" +
		"\x02\x02\u034D\u033B\x03\x02\x02\x02\u034D\u033D\x03\x02\x02\x02\u034D" +
		"\u033F\x03\x02\x02\x02\u034D\u0341\x03\x02\x02\x02\u034D\u0343\x03\x02" +
		"\x02\x02\u034D\u0345\x03\x02\x02\x02\u034D\u0347\x03\x02\x02\x02\u034D" +
		"\u0349\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E\x89\x03\x02\x02" +
		"\x02\u034F\u0350\x07Y\x02\x02\u0350\x8B\x03\x02\x02\x02\u0351\u0352\x07" +
		"Z\x02\x02\u0352\x8D\x03\x02\x02\x02\u0353\u0354\x07[\x02\x02\u0354\x8F" +
		"\x03\x02\x02\x02\u0355\u0356\t\n\x02\x02\u0356\x91\x03\x02\x02\x02\u0357" +
		"\u0358\x07_\x02\x02\u0358\x93\x03\x02\x02\x02L\x9A\x9E\xA3\xBE\xC3\xD5" +
		"\xD9\xDB\xE6\xEA\xEC\xF3\u010B\u0111\u0119\u0120\u0127\u0135\u0138\u013D" +
		"\u0148\u0153\u0155\u0158\u015D\u015F\u0178\u0185\u019F\u01AF\u01B6\u01BA" +
		"\u01BF\u01C3\u01C7\u01CE\u01D3\u01D9\u01DB\u01E1\u01ED\u01F1\u01FD\u0205" +
		"\u020F\u0238\u0244\u0247\u0253\u026B\u0273\u027C\u027E\u0280\u0283\u028A" +
		"\u0290\u0297\u029F\u02A6\u02A8\u02B2\u02B8\u02CA\u02D9\u02DF\u02E6\u02E8" +
		"\u02F0\u02F5\u02FC\u0300\u0303\u034D";
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
	public enterRule(listener: boaListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterProgramStatement) {
			listener.enterProgramStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitProgramStatement) {
			listener.exitProgramStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterStaticVariableDeclaration) {
			listener.enterStaticVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitStaticVariableDeclaration) {
			listener.exitStaticVariableDeclaration(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
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
	public _fixp!: FixpTypeContext;
	public _tr!: TraversalTypeContext;
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
	public enterRule(listener: boaListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterEnumBodyDeclaration) {
			listener.enterEnumBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitEnumBodyDeclaration) {
			listener.exitEnumBodyDeclaration(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterEnumType) {
			listener.enterEnumType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitEnumType) {
			listener.exitEnumType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterMember) {
			listener.enterMember(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitMember) {
			listener.exitMember(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterMapType) {
			listener.enterMapType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitMapType) {
			listener.exitMapType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterStackType) {
			listener.enterStackType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitStackType) {
			listener.exitStackType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterQueueType) {
			listener.enterQueueType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitQueueType) {
			listener.exitQueueType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterSetType) {
			listener.enterSetType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitSetType) {
			listener.exitSetType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterOutputType) {
			listener.enterOutputType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitOutputType) {
			listener.exitOutputType(this);
		}
	}
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
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
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
	public get ruleIndex(): number { return boaParser.RULE_functionType; }
	// @Override
	public enterRule(listener: boaListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterFixpType) {
			listener.enterFixpType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFixpType) {
			listener.exitFixpType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterVisitorType) {
			listener.enterVisitorType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitVisitorType) {
			listener.exitVisitorType(this);
		}
	}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_traversalType; }
	// @Override
	public enterRule(listener: boaListener): void {
		if (listener.enterTraversalType) {
			listener.enterTraversalType(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTraversalType) {
			listener.exitTraversalType(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterForVariableDeclaration) {
			listener.enterForVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitForVariableDeclaration) {
			listener.exitForVariableDeclaration(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterPostfixStatement) {
			listener.enterPostfixStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitPostfixStatement) {
			listener.exitPostfixStatement(this);
		}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterExprStatement) {
			listener.enterExprStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitExprStatement) {
			listener.exitExprStatement(this);
		}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterSwitchCase) {
			listener.enterSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitSwitchCase) {
			listener.exitSwitchCase(this);
		}
	}
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
	public enterRule(listener: boaListener): void {
		if (listener.enterForeachStatement) {
			listener.enterForeachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitForeachStatement) {
			listener.exitForeachStatement(this);
		}
	}
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
	public enterRule(listener: boaListener): void {
		if (listener.enterExistsStatement) {
			listener.enterExistsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitExistsStatement) {
			listener.exitExistsStatement(this);
		}
	}
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(boaParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
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
	public enterRule(listener: boaListener): void {
		if (listener.enterIfallStatement) {
			listener.enterIfallStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitIfallStatement) {
			listener.exitIfallStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
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
	public get ruleIndex(): number { return boaParser.RULE_visitStatement; }
	// @Override
	public enterRule(listener: boaListener): void {
		if (listener.enterVisitStatement) {
			listener.enterVisitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitVisitStatement) {
			listener.exitVisitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitVisitStatement) {
			return visitor.visitVisitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TraverseStatementContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(boaParser.LPAREN, 0); }
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
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(boaParser.RPAREN, 0); }
	public programStatement(): ProgramStatementContext | undefined {
		return this.tryGetRuleContext(0, ProgramStatementContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_traverseStatement; }
	// @Override
	public enterRule(listener: boaListener): void {
		if (listener.enterTraverseStatement) {
			listener.enterTraverseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTraverseStatement) {
			listener.exitTraverseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTraverseStatement) {
			return visitor.visitTraverseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FixpStatementContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(boaParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(boaParser.COMMA, 0); }
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(boaParser.COLON);
		} else {
			return this.getToken(boaParser.COLON, i);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(boaParser.RPAREN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public programStatement(): ProgramStatementContext | undefined {
		return this.tryGetRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_fixpStatement; }
	// @Override
	public enterRule(listener: boaListener): void {
		if (listener.enterFixpStatement) {
			listener.enterFixpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFixpStatement) {
			listener.exitFixpStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterStopStatement) {
			listener.enterStopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitStopStatement) {
			listener.exitStopStatement(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterConjunction) {
			listener.enterConjunction(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitConjunction) {
			listener.exitConjunction(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterSimpleExpression) {
			listener.enterSimpleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitSimpleExpression) {
			listener.exitSimpleExpression(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return boaParser.RULE_selector; }
	// @Override
	public enterRule(listener: boaListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterIndex) {
			listener.enterIndex(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitIndex) {
			listener.exitIndex(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterUnaryFactor) {
			listener.enterUnaryFactor(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitUnaryFactor) {
			listener.exitUnaryFactor(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterParenExpression) {
			listener.enterParenExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitParenExpression) {
			listener.exitParenExpression(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterFixpExpression) {
			listener.enterFixpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFixpExpression) {
			listener.exitFixpExpression(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterVisitorExpression) {
			listener.enterVisitorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitVisitorExpression) {
			listener.exitVisitorExpression(this);
		}
	}
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
	public traverseStatement(): TraverseStatementContext | undefined {
		return this.tryGetRuleContext(0, TraverseStatementContext);
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
	public enterRule(listener: boaListener): void {
		if (listener.enterTraversalExpression) {
			listener.enterTraversalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTraversalExpression) {
			listener.exitTraversalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTraversalExpression) {
			return visitor.visitTraversalExpression(this);
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
	public enterRule(listener: boaListener): void {
		if (listener.enterComposite) {
			listener.enterComposite(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitComposite) {
			listener.exitComposite(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterFloatingPointLiteral) {
			listener.enterFloatingPointLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitFloatingPointLiteral) {
			listener.exitFloatingPointLiteral(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterCharacterLiteral) {
			listener.enterCharacterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitCharacterLiteral) {
			listener.exitCharacterLiteral(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
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
	public enterRule(listener: boaListener): void {
		if (listener.enterTimeLiteral) {
			listener.enterTimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: boaListener): void {
		if (listener.exitTimeLiteral) {
			listener.exitTimeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: boaVisitor<Result>): Result {
		if (visitor.visitTimeLiteral) {
			return visitor.visitTimeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


