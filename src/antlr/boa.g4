grammar boa;

@header {
}

@parser::members {
public isSemicolon() {
	if (this.currentToken.text != ";") {
		this.notifyErrorListeners("error: ';' expected");
		return;
	}
	this.state = this.state + 1;
	this.match(boaParser.SEMICOLON);
}
}

start
	: program EOF
	;

program
	: programStatement+
	;

programStatement
	: declaration
	| statement
	;

declaration
	: typeDeclaration
	| staticVariableDeclaration
	| variableDeclaration
	;

typeDeclaration
	: TYPE identifier EQUALS type { this.isSemicolon(); }
	;

staticVariableDeclaration
	: STATIC variableDeclaration
	;

variableDeclaration
	: forVariableDeclaration { this.isSemicolon(); }
	;

type 
	: arrayType
	| mapType
	| tupleType
	| outputType
	| functionType
	| fixpType
	| visitorType
	| traversalType
	| stackType
	| queueType
	| setType
	| enumType
	| identifier
	;

component
	: (identifier COLON)? type
	;
	
enumBodyDeclaration
	: identifier EQUALS expression
	;

arrayType
	: ARRAY OF component
	;

tupleType
	: LBRACE (member (COMMA member)* COMMA?)? RBRACE
	;

enumType
	: ENUM LBRACE (enumBodyDeclaration (COMMA enumBodyDeclaration)* COMMA?)? RBRACE
	;

member
	: typeDeclaration
	| staticVariableDeclaration
	| component
	;

mapType
	: MAP LBRACKET component RBRACKET OF component
	;

stackType
	: STACK OF component
	;

queueType
	: QUEUE OF component
	;

setType
	: SET OF component
	;

outputType
	: OUTPUT (SET | identifier) (LPAREN expressionList RPAREN)? (LBRACKET component RBRACKET)* OF component (WEIGHT component)? (FORMAT LPAREN expressionList RPAREN)?
	;

functionType
	: FUNCTION LPAREN (varDecl (COMMA varDecl)*)? RPAREN (COLON type)?
	| FUNCTION LPAREN ((varDecl | identifier { this.notifyErrorListeners("function arguments require an identifier and type"); }) (COMMA varDecl | COMMA identifier { this.notifyErrorListeners("function arguments require an identifier and type"); })*)? RPAREN (COLON type)?
	;

fixpType
	: FIXP
	;

visitorType
	: VISITOR
	;

traversalType
	: TRAVERSAL
	;

statement
	: block
	| assignmentStatement
	| breakStatement
	| continueStatement
	| stopStatement
	| doStatement
	| forStatement
	| ifStatement
	| returnStatement
	| switchStatement
	| foreachStatement
	| existsStatement
	| ifallStatement
	| whileStatement
	| emptyStatement
	| emitStatement
	| expressionStatement
	;

emptyStatement
	: SEMICOLON
	;

assignmentStatement
	: factor (EQUALS | PLUSEQ | MINUSEQ | STAREQ | DIVEQ | ONEOREQ | XOREQ | MODEQ | ONEANDEQ | RSHIFTEQ | LSHIFTEQ) expression { this.isSemicolon(); }
	;

block
	: LBRACE programStatement* RBRACE
	;

breakStatement
	: BREAK { this.isSemicolon(); }
	;

continueStatement
	: CONTINUE { this.isSemicolon(); }
	;

doStatement
	: DO statement WHILE LPAREN expression RPAREN { this.isSemicolon(); }
	;

emitStatement
	: identifier (LBRACKET expression RBRACKET)* EMIT { this.notifyErrorListeners("error: expected 'expression' before keyword 'weight'"); } WEIGHT expression { this.isSemicolon(); }
	| identifier (LBRACKET expression RBRACKET)* EMIT expression                                                                       (WEIGHT expression)? { this.isSemicolon(); }
	;

forStatement
	: FOR LPAREN (forExpression)? SEMICOLON (expression)? SEMICOLON (forExpression)? RPAREN programStatement
	;

forExpression
	: forVariableDeclaration
	| forExpressionStatement
	;

forVariableDeclaration
	: identifier COLON (type)? (EQUALS ({ this.notifyErrorListeners("error: output variable declarations should not include '='"); } outputType | expression))?
	;

forExpressionStatement
	: expression (INCR | DECR) # postfixStatement
	| expression               # exprStatement
	;

expressionStatement
	: forExpressionStatement { this.isSemicolon(); }
	;

ifStatement
	: IF LPAREN expression RPAREN programStatement (ELSE programStatement)?
	;

returnStatement
	: RETURN expression? { this.isSemicolon(); }
	;

switchStatement
	: SWITCH LPAREN expression RPAREN LBRACE
		(switchCase)*
		DEFAULT COLON
		(statement)+
		RBRACE
	;

switchCase
	: CASE expressionList COLON (statement)+
	;

foreachStatement
	: FOREACH LPAREN varDecl SEMICOLON expression RPAREN programStatement
	;

existsStatement
	: EXISTS LPAREN varDecl SEMICOLON expression RPAREN programStatement
	;

ifallStatement
	: IFALL LPAREN varDecl SEMICOLON expression RPAREN programStatement
	;

whileStatement
	: WHILE LPAREN expression RPAREN programStatement
	;

visitStatement
	: (BEFORE | AFTER | { this.notifyErrorListeners("error: visit statements must start with 'before' or 'after'"); })
		(
			  WILDCARD
			| varDecl
			| identifier (COMMA identifier)*
		)
		RIGHT_ARROW programStatement
	;

traverseStatement
	: (LPAREN identifier COLON identifier RPAREN (COLON type)? (programStatement))
	;

fixpStatement
	: (LPAREN identifier COMMA identifier COLON identifier RPAREN (COLON type) (programStatement))
	;

stopStatement
	: STOP { this.isSemicolon(); }
	;

expression
	: conjunction ((TWOOR | OR) conjunction)*
	;

expressionList
	: expression (COMMA expression)*
	| expression ({ this.notifyErrorListeners("error: ',' expected"); } expression | COMMA (expression | { this.notifyErrorListeners("error: expression expected"); }))*
	;

conjunction
	: comparison ((TWOAND | AND) comparison)*
	;

comparison
	: simpleExpression ((EQEQ | NEQ | LT | LTEQ | GT | GTEQ) simpleExpression)?
	;

simpleExpression
	: term ((PLUS | MINUS | ONEOR | XOR) term)*
	;

term
	: factor ((STAR | DIV | MOD | EMIT | RSHIFT | ONEAND) factor)*
	;

factor
	: operand (selector | index | call)*
	;

selector
	: DOT identifier
	;

index
	: LBRACKET expression (COLON expression)? RBRACKET
	;

call
	: LPAREN (expressionList)? RPAREN
	;

operand
	: stringLiteral
	| characterLiteral
	| timeLiteral
	| integerLiteral
	| floatingPointLiteral
	| composite
	| functionExpression
	| fixpExpression
	| visitorExpression
	| traversalExpression
	| unaryFactor
	| DOLLAR
	| parenExpression
	| identifier
	;

unaryFactor
	: (PLUS | MINUS | NEG | INV | NOT) factor
	;

parenExpression
	: LPAREN expression RPAREN
	;

functionExpression
	: functionType block
	| identifier   block
	;

fixpExpression
	: fixpType (fixpStatement | { this.notifyErrorListeners("error: only fixpoint statement allowed inside fixpoint expression"); } programStatement)
	;

visitorExpression
	: visitorType LBRACE (visitStatement | { this.notifyErrorListeners("error: only 'before' and 'after' visit statements allowed inside visitor bodies"); } programStatement)+ RBRACE
	;

traversalExpression
	: traversalType (traverseStatement | { this.notifyErrorListeners("error: only traverse statements allowed inside traversal bodies"); } programStatement)
	;

varDecl
	: identifier COLON type
	;

composite
	: LBRACE (expressionList COMMA? | pair (COMMA pair)* COMMA? | COLON)? RBRACE
// FIXME this would be nice, but seems to make a ton of extra error messages
//	| LBRACE (expressionList COMMA? | pair (COMMA pair)* COMMA? | COLON)? { this.notifyErrorListeners("error: '}' expected"); }
	;

pair
	: expression COLON expression
	;

identifier
	: Identifier
	| FORMAT
	| lit=OF       { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=IF       { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=DO       { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=MAP      { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=STACK    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=QUEUE    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=SET      { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=FOR      { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=FOREACH  { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=IFALL    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=EXISTS   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=NOT      { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=TYPE     { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=ELSE     { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=CASE     { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=OUTPUT   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=WHILE    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=BREAK    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=ARRAY    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=STATIC   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=SWITCH   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=RETURN   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=WEIGHT   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=DEFAULT  { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=CONTINUE { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=FUNCTION { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=FIXP     { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=VISITOR  { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=TRAVERSAL{ this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=BEFORE   { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=AFTER    { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	| lit=STOP     { this.notifyErrorListeners("keyword '" + $lit.text + "' can not be used as an identifier"); }
	;

integerLiteral
	: IntegerLiteral
	;

floatingPointLiteral
	: FloatingPointLiteral
	;

characterLiteral
	: CharacterLiteral
	;

stringLiteral
	: MultilineStringLiteral
	| StringLiteral
	| RegexLiteral
	;

timeLiteral
	: TimeLiteral
	;


////////////
// LEXING //
////////////

//
// keywords
//

OF        : 'of';
IF        : 'if';
DO        : 'do';
MAP       : 'map';
STACK     : 'stack';
QUEUE     : 'queue';
SET       : 'set';
FOR       : 'for';
FOREACH   : 'foreach';
IFALL     : 'ifall';
EXISTS    : 'exists';
NOT       : 'not';
TYPE      : 'type';
ELSE      : 'else';
CASE      : 'case';
OUTPUT    : 'output';
FORMAT    : 'format';
WHILE     : 'while';
BREAK     : 'break';
ARRAY     : 'array';
STATIC    : 'static';
SWITCH    : 'switch';
RETURN    : 'return';
WEIGHT    : 'weight';
DEFAULT   : 'default';
CONTINUE  : 'continue';
FUNCTION  : 'function';
FIXP      : 'fixp';
VISITOR   : 'visitor';
TRAVERSAL : 'traversal';
BEFORE    : 'before';
AFTER     : 'after';
STOP      : 'stop';
ENUM	  : 'enum';

//
// separators
//

SEMICOLON : ';';
COLON     : ':';
COMMA     : ',';
DOT       : '.';
LBRACE    : '{';
RBRACE    : '}';
LPAREN    : '(';
RPAREN    : ')';
LBRACKET  : '[';
RBRACKET  : ']';
TEMPLATEL : '{@';
TEMPLATER : '@}';

//
// operators
//

OR       : 'or';
ONEOR    : '|';
TWOOR    : '||';
AND      : 'and';
ONEAND   : '&';
TWOAND   : '&&';
INCR     : '++';
DECR     : '--';
EQEQ     : '==';
NEQ      : '!=';
LT       : '<';
LTEQ     : '<=';
GT       : '>';
GTEQ     : '>=';
PLUS     : '+';
MINUS    : '-';
XOR      : '^';
STAR     : '*';
DIV      : '/';
MOD      : '%';
RSHIFT   : '>>';
NEG      : '~';
INV      : '!';
PLUSEQ   : '+=';
MINUSEQ  : '-=';
STAREQ   : '*=';
DIVEQ    : '/=';
ONEOREQ  : '|=';
XOREQ    : '^=';
MODEQ    : '%=';
ONEANDEQ : '&=';
RSHIFTEQ : '>>=';
LSHIFTEQ : '<<=';

//
// other
//

WILDCARD    : '_';
QUESTION    : '?';
DOLLAR      : '$';
EQUALS      : '=';
EMIT        : '<<';
RIGHT_ARROW : '->';
ML_STRING   : '"""';

//
// literals
//

IntegerLiteral
	: DecimalNumeral
	| HexNumeral 
	| OctalNumeral 
	| BinaryNumeral 
	;

fragment
DecimalNumeral
	: NonZeroDigit Digit* 
	;

fragment
Digit
	: [0]
	| NonZeroDigit
	;

fragment
NonZeroDigit
	: [1-9]
	;

fragment
HexNumeral
	: [0] [xX] [0-9a-fA-F]+
	;

fragment
OctalNumeral
	: [0] [0-7]*
	;

fragment
BinaryNumeral
	: [0] [bB] [01]+
	;

FloatingPointLiteral
	: Digit+ DOT Digit* ExponentPart?
	| DOT Digit+ ExponentPart?
	| Digit+ ExponentPart
	;

fragment
ExponentPart
	: [eE] [+-]? Digit+
	;

CharacterLiteral
	: ['] SingleCharacter [']
	| ['] EscapeSequence [']
	;

fragment
SingleCharacter
	: ~['\\\n\r]
	;

RegexLiteral
	: [`] RegexCharacter* [`]
	;

fragment
RegexCharacter
	: ~[`\n\r]
	;

MultilineStringLiteral
	: ML_STRING (StringCharacter | ["\n\r])*? ML_STRING
	;

StringLiteral
	: ["] StringCharacter* ["]
	;

fragment
StringCharacter
	: ~["\\\n\r]
	| EscapeSequence
	;

fragment
EscapeSequence
	: [\\] [btnfr"'\\]
	| OctalEscape
	;

fragment
OctalEscape
	: [\\] [0-7]
	| [\\] [0-7] [0-7]
	| [\\] [0-3] [0-7] [0-7]
	;

TimeLiteral
	: IntegerLiteral [tT]?
	| [T] StringLiteral
	;

//
// identifiers
//

Identifier
	: [a-zA-Z] [a-zA-Z0-9_]*
	;

//
// whitespace and comments
//

WS
	: [ \t\r\n\f]+ -> skip
	;

LINE_COMMENT
	: [#] ~[\r\n]* -> skip
	;

// templates are treated as whitespace for parsing in vscode helpers
TemplateIdentifier
	: TEMPLATEL ([-a-zA-Z0-9_.:]+ | .+?) TEMPLATER? -> skip
	;
