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
export const builtinConsts = {
    true: '',
    false: '',
    PI: 'A floating point approximation of Pi, `3.1415926535897931`',
    Inf: 'IEEE 754 infinity',
    inf: 'IEEE 754 infinity',
    NaN: 'IEEE 754 not a number',
    nan: 'IEEE 754 not a number',
    SECOND: 'One million microseconds',
    SEC: 'Synonym for `SECOND`',
    MINUTE: 'Sixty (60) `SECOND`s',
    MIN: 'Synonym for `MINUTE`',
    HOUR: 'Sixty (60) `MINUTE`s',
    HR: 'Synonym for `HOUR`',
};

interface IVariable {
    type: string,
    doc: string,
}

export const builtinVars: { [name: string]: IVariable } = {
    input: {
        type: 'Project',
        doc: 'Set to each successive input `Project`. Boa programs process a single `Project` at a time, and then emit data to output variables for further aggregation.'
    },
};

interface ITypeAttr {
    name: string,
    var: IVariable,
}

interface IType {
    attrs: ITypeAttr[],
    doc: string,
}

export const builtinTypes: { [name: string]: IType } = {
    Project: {
        attrs: [
			{ name: 'audiences', var: { type: 'array of string', doc: 'A list of the target audiences for the project.', } },
            { name: 'code_repositories', var: { type: 'array of CodeRepository', doc: 'A list of all code repositories associated with this project.', } },
			{ name: 'created_date', var: { type: 'time?', doc: 'The time the project was created.', } },
			{ name: 'databases', var: { type: 'array of string', doc: 'A list of all databases used by the project.', } },
			{ name: 'description', var: { type: 'string?', doc: 'A description of the project.', } },
			{ name: 'developers', var: { type: 'array of Person', doc: 'A list of all software developers currently on the project.', } },
			{ name: 'donations', var: { type: 'bool?', doc: 'If true, this project explicitly states it accepts donations.', } },
			{ name: 'homepage_url', var: { type: 'string?', doc: 'A URL to the project\'s homepage.', } },
			{ name: 'id', var: { type: 'string', doc: 'Unique identifier for the project.', } },
			{ name: 'interfaces', var: { type: 'array of string', doc: 'A list of all interfaces supported by the project.', } },
			{ name: 'licenses', var: { type: 'array of string', doc: 'A list of all licenses used by the project.', } },
			{ name: 'maintainers', var: { type: 'array of Person', doc: 'A list of all people currently maintaining the project.', } },
			{ name: 'name', var: { type: 'string', doc: 'The name of the project.', } },
			{ name: 'operating_systems', var: { type: 'array of string', doc: 'A list of all OSes supported by the project.', } },
			{ name: 'programming_languages', var: { type: 'array of string', doc: 'A list of all programming languages used by the project.', } },
            { name: 'project_url', var: { type: 'string', doc: 'A URL to the project\'s page on the forge.', } },
			{ name: 'topics', var: { type: 'array of string', doc: 'A list of self-categorized topics the project belongs to.', } },
        ],
        doc: 'Top-level type, represents a single project on a forge.',
    },
    CodeRepository: {
        attrs: [
			{ name: 'kind', var: { type: 'RepositoryKind', doc: 'The kind of code repository (SVN, GIT, etc).', } },
			{ name: 'revisions', var: { type: 'array of Revision', doc: 'All of the revisions contained in the code repository.', } },
			{ name: 'url', var: { type: 'string', doc: 'The URL to access the code repository.', } },
        ],
        doc: 'A source code repository (SVN, CVS, Git, etc.).',
    },
    Revision: {
        attrs: [
			{ name: 'author', var: { type: 'Person', doc: 'The person who authored the revision, if known, otherwise the same as committer.', } },
			{ name: 'commit_date', var: { type: 'time', doc: 'The time the revision was committed.', } },
			{ name: 'committer', var: { type: 'Person', doc: 'The person who committed the revision.', } },
			{ name: 'files', var: { type: 'array of ChangedFile', doc: 'A list of all files committed in the revision.', } },
			{ name: 'id', var: { type: 'string', doc: 'A unique identifier for the revision.', } },
			{ name: 'log', var: { type: 'string', doc: 'The log message attached to the revision.', } },
        ],
        doc: 'A single revision inside a `CodeRepository`.',
    },
    ChangedFile: {
        attrs: [
            { name: 'change', var: { type: 'ChangeKind', doc: 'The kind of change for this file.', } },
            { name: 'kind', var: { type: 'FileKind', doc: 'The kind of file.', } },
            { name: 'name', var: { type: 'string', doc: 'The full name and path of the file.', } },
        ],
        doc: 'A file committed in a `Revision`.',
    },
    Person: {
        attrs: [
            { name: 'email', var: { type: 'string', doc: 'The person\'s email address, if known.', } },
            { name: 'real_name', var: { type: 'string', doc: 'The person\'s real name, if known, otherwise the same as username.', } },
            { name: 'username', var: { type: 'string', doc: 'The person\'s username.', } },
        ],
        doc: 'A unique person\'s information.',
    },
};

interface IEnumValue {
    name: string,
    doc: string,
}

interface IEnum {
    attrs: IEnumValue[],
    doc: string,
}

export const builtinEnums: { [name: string]: IEnum } = {
    ForgeKind: {
        attrs: [
            { name: 'APACHE', doc: 'Apache' },
            { name: 'GH', doc: 'GitHub.com.\n\nThis is an alias for `ForgeKind.GITHUB`.' },
            { name: 'GITHUB', doc: 'GitHub.com' },
            { name: 'OTHER', doc: 'Any other kind of forge' },
            { name: 'QUALITAS', doc: 'Qualitas Corpus' },
            { name: 'SF', doc: 'SourceForge.net.\n\nThis is an alias for `ForgeKind.SOURCEFORGE`.' },
            { name: 'SOURCEFORGE', doc: 'SourceForge.net' },
        ],
        doc: 'Describes the kind of forge.',
    },
    RepositoryKind: {
        attrs: [
            { name: 'BAZAAR', doc: 'For Bazaar code repositories.\n\nThis is an alias for `RepositoryKind.BZR`.' },
            { name: 'BZR', doc: 'For Bazaar code repositories.' },
            { name: 'CVS', doc: 'For CVS code repositories.' },
            { name: 'GIT', doc: 'For Git code repositories.' },
            { name: 'HG', doc: 'For Mercurial code repositories.' },
            { name: 'MERCURIAL', doc: 'For Mercurial code repositories.\n\nThis is an alias for `RepositoryKind.HG`.' },
            { name: 'OTHER', doc: 'Any other code repository.' },
            { name: 'SUBVERSION', doc: 'For Subversion code repositories.\n\nThis is an alias for `RepositoryKind.SVN`.' },
            { name: 'SVN', doc: 'For Subversion code repositories.' },
        ],
        doc: 'Describes the kind of code repository.',
    },
    ChangeKind: {
        attrs: [
            { name: 'ADDED', doc: 'The artifact or program entity/element did not already exist and was added.' },
            { name: 'CHANGED', doc: 'The artifact or program entity/element already existed and was modified.\n\nThis is an alias for `ChangeKind.MODIFIED`.' },
            { name: 'COPIED', doc: 'The artifact or program entity/element was copied from another one.' },
            { name: 'DELETED', doc: 'The artifact or program entity/element was deleted.' },
            { name: 'MERGED', doc: 'The artifact or program entity/element was merged .' },
            { name: 'MODIFIED', doc: 'The artifact or program entity/element already existed and was modified.' },
            { name: 'MOVED', doc: 'The artifact or program entity/element was moved to a different parent.' },
            { name: 'REMOVED', doc: 'The artifact or program entity/element was deleted.\n\nThis is an alias for `ChangeKind.DELETED`.' },
            { name: 'RENAMED', doc: 'The label of the artifact or program entity/element was renamed.' },
            { name: 'UNCHANGED', doc: 'The artifact or program entity/element was unchanged.' },
            { name: 'UNKNOWN', doc: 'An unknown change occurred.' },
            { name: 'UNMAPPED', doc: '' },
        ],
        doc: 'Describes the kind of change for the file.',
    },
    FileKind: {
        attrs: [
            { name: 'BINARY', doc: 'The file represents a binary file.' },
            { name: 'JAVA_ERROR', doc: 'The file represents a Java source file that had a parse error.\n\nThis is an alias for `FileKind.SOURCE_JAVA_ERROR`.' },
            { name: 'JLS2', doc: 'The file represents a Java source file that parsed without error as JLS2.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS2`.' },
            { name: 'JLS3', doc: 'The file represents a Java source file that parsed without error as JLS3.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS3`.' },
            { name: 'JLS4', doc: 'The file represents a Java source file that parsed without error as JLS4.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS4`.' },
            { name: 'JLS8', doc: 'The file represents a Java source file that parsed without error as JLS8.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS8`.' },
            { name: 'OTHER', doc: 'The file\'s type was unknown.' },
            { name: 'SOURCE_JAVA_ERROR', doc: 'The file represents a Java source file that had a parse error.' },
            { name: 'SOURCE_JAVA_JLS2', doc: 'The file represents a Java source file that parsed without error as JLS2.' },
            { name: 'SOURCE_JAVA_JLS3', doc: 'The file represents a Java source file that parsed without error as JLS3.' },
            { name: 'SOURCE_JAVA_JLS4', doc: 'The file represents a Java source file that parsed without error as JLS4.' },
            { name: 'SOURCE_JAVA_JLS8', doc: 'The file represents a Java source file that parsed without error as JLS8.' },
            { name: 'SOURCE_KOTLIN_ERROR', doc: 'The file represents a Kotlin source file that had a parse error.' },
            { name: 'SOURCE_KOTLIN_1_0', doc: 'The file represents a Kotlin source file that parsed without error as version 1.0.' },
            { name: 'SOURCE_KOTLIN_1_1', doc: 'The file represents a Kotlin source file that parsed without error as version 1.1.' },
            { name: 'SOURCE_KOTLIN_1_2', doc: 'The file represents a Kotlin source file that parsed without error as version 1.2.' },
            { name: 'SOURCE_KOTLIN_1_3', doc: 'The file represents a Kotlin source file that parsed without error as version 1.3.' },
            { name: 'SOURCE_KOTLIN_1_4', doc: 'The file represents a Kotlin source file that parsed without error as version 1.4.' },
            { name: 'SOURCE_KOTLIN_1_5', doc: 'The file represents a Kotlin source file that parsed without error as version 1.5.' },
            { name: 'SOURCE_PY_ERROR', doc: 'The file represents a Python source file that had a parse error.' },
            { name: 'SOURCE_PY_2', doc: 'The file represents a Python source file that parsed without error as Python 2.x.' },
            { name: 'SOURCE_PY_3', doc: 'The file represents a Python source file that parsed without error as Python 3.x.' },
            { name: 'TEXT', doc: 'The file represents a text file.' },
            { name: 'XML', doc: 'The file represents an XML file.' },
        ],
        doc: 'Describes the kind of the file.',
    },
    StatementKind: {
        attrs: [
			{ name: 'ASSERT', doc: '' },
			{ name: 'BLOCK', doc: '' },
			{ name: 'BREAK', doc: '' },
			{ name: 'CASE', doc: '' },
			{ name: 'CATCH', doc: '' },
			{ name: 'CONTINUE', doc: '' },
			{ name: 'DEBUGGER', doc: '' },
			{ name: 'DECLARE', doc: '' },
			{ name: 'DEFAULT', doc: '' },
			{ name: 'DEL', doc: '' },
			{ name: 'DO', doc: '' },
			{ name: 'ECHO', doc: '' },
			{ name: 'EMPTY', doc: '' },
			{ name: 'EXPRESSION', doc: '' },
			{ name: 'EXPR', doc: 'This is an alias for `StatementKind.EXPRESSION`.' },
			{ name: 'FINALLY', doc: '' },
			{ name: 'FOR', doc: '' },
			{ name: 'FOREACH', doc: '' },
			{ name: 'FORIN', doc: '' },
			{ name: 'GLOBAL', doc: '' },
			{ name: 'GOTO', doc: '' },
			{ name: 'IF', doc: '' },
			{ name: 'INLINE_HTML', doc: '' },
			{ name: 'LABEL', doc: '' },
			{ name: 'OTHER', doc: 'Any other statement' },
			{ name: 'PASS', doc: '' },
			{ name: 'PRINT', doc: '' },
			{ name: 'RAISE', doc: '' },
			{ name: 'RETURN', doc: '' },
			{ name: 'SCOPE', doc: '' },
			{ name: 'STATIC', doc: '' },
			{ name: 'SWITCH', doc: '' },
			{ name: 'SYNCHRONIZED', doc: '' },
			{ name: 'SYNC', doc: 'This is an alias for `StatementKind.SYNCHRONIZED`.' },
			{ name: 'THROW', doc: '' },
			{ name: 'TRAIT_ALIAS', doc: '' },
			{ name: 'TRAIT_PRECEDENCE', doc: '' },
			{ name: 'TRAIT_USE', doc: '' },
			{ name: 'TRY', doc: '' },
			{ name: 'TYPEDECL', doc: '' },
			{ name: 'USE_CONSTANT', doc: '' },
			{ name: 'USE_FUNCTION', doc: '' },
			{ name: 'USE_NAMESPACE', doc: '' },
			{ name: 'WHILE', doc: '' },
			{ name: 'WITH', doc: '' },
        ],
        doc: 'The kind of statement.',
    },
    ExpressionKind: {
        attrs: [
			{ name: 'ANON_METHOD', doc: '' },
			{ name: 'ANNOTATION', doc: '' },
			{ name: 'ARRAYACCESS', doc: '' },
			{ name: 'ARRAYELEMENT', doc: '' },
			{ name: 'ARRAYINDEX', doc: '' },
			{ name: 'ARRAYINIT', doc: '' },
			{ name: 'ARRAYLITERAL', doc: 'This is an alias for `ExpressionKind.ARRAYINIT`.' },
			{ name: 'ARRAY_COMPREHENSION', doc: '' },
			{ name: 'ASSIGN', doc: '' },
			{ name: 'ASSIGN_ADD', doc: '' },
			{ name: 'ASSIGN_BITAND', doc: '' },
			{ name: 'ASSIGN_BITOR', doc: '' },
			{ name: 'ASSIGN_BITXOR', doc: '' },
			{ name: 'ASSIGN_CONCAT', doc: '' },
			{ name: 'ASSIGN_DIV', doc: '' },
			{ name: 'ASSIGN_INT_DIV', doc: '' },
			{ name: 'ASSIGN_LSHIFT', doc: '' },
			{ name: 'ASSIGN_MOD', doc: '' },
			{ name: 'ASSIGN_MULT', doc: '' },
			{ name: 'ASSIGN_POW', doc: '' },
			{ name: 'ASSIGN_RSHIFT', doc: '' },
			{ name: 'ASSIGN_SUB', doc: '' },
			{ name: 'ASSIGN_UNSIGNEDRSHIFT', doc: '' },
			{ name: 'BIT_AND', doc: '' },
			{ name: 'BIT_LSHIFT', doc: '' },
			{ name: 'BIT_NOT', doc: '' },
			{ name: 'BIT_OR', doc: '' },
			{ name: 'BIT_RSHIFT', doc: '' },
			{ name: 'BIT_UNSIGNEDRSHIFT', doc: '' },
			{ name: 'BIT_XOR', doc: '' },
			{ name: 'CALLHOLDER', doc: '' },
			{ name: 'CAST', doc: '' },
			{ name: 'CLONE', doc: '' },
			{ name: 'CONDITIONAL', doc: '' },
			{ name: 'DELETE', doc: '' },
			{ name: 'DICT', doc: '' },
			{ name: 'EMPTY', doc: '' },
			{ name: 'EQ', doc: '' },
			{ name: 'FOR_LIST', doc: '' },
			{ name: 'GENERATOR', doc: '' },
			{ name: 'GT', doc: '' },
			{ name: 'GTEQ', doc: '' },
			{ name: 'HASHTABLEACCESS', doc: '' },
			{ name: 'IDENTICAL', doc: '' },
			{ name: 'IGNORE_ERROR', doc: '' },
			{ name: 'IMPORT', doc: '' },
			{ name: 'IMPORT_FROM', doc: '' },
			{ name: 'IN', doc: '' },
			{ name: 'INCLUDE', doc: '' },
			{ name: 'INCLUDE_ONCE', doc: '' },
			{ name: 'IS', doc: '' },
			{ name: 'IS_NOT', doc: '' },
			{ name: 'LABEL', doc: '' },
			{ name: 'LAMBDA', doc: '' },
			{ name: 'LIST', doc: '' },
			{ name: 'LITERAL', doc: '' },
			{ name: 'LOGICAL_AND', doc: '' },
			{ name: 'LOGICAL_NOT', doc: '' },
			{ name: 'LOGICAL_OR', doc: '' },
			{ name: 'LOOP', doc: '' },
			{ name: 'LT', doc: '' },
			{ name: 'LTEQ', doc: '' },
			{ name: 'METHODCALL', doc: '' },
			{ name: 'METHODDECL', doc: '' },
			{ name: 'METHOD_REFERENCE', doc: '' },
			{ name: 'NAMESPACENAME', doc: '' },
			{ name: 'NEQ', doc: '' },
			{ name: 'NEW', doc: '' },
			{ name: 'NEWARRAY', doc: '' },
			{ name: 'NOTIDENTICAL', doc: '' },
			{ name: 'NOT_IN', doc: '' },
			{ name: 'NULLCOALESCE', doc: '' },
			{ name: 'OBJECT_LITERAL', doc: '' },
			{ name: 'OP_ADD', doc: '' },
			{ name: 'OP_CONCAT', doc: '' },
			{ name: 'OP_DEC', doc: '' },
			{ name: 'OP_DIV', doc: '' },
			{ name: 'OP_ELVIS', doc: '' },
			{ name: 'OP_INC', doc: '' },
			{ name: 'OP_INT_DIV', doc: '' },
			{ name: 'OP_MOD', doc: '' },
			{ name: 'OP_MULT', doc: '' },
			{ name: 'OP_NOTNULL', doc: '' },
			{ name: 'OP_POW', doc: '' },
			{ name: 'OP_SUB', doc: '' },
			{ name: 'OP_THREE_WAY_COMPARE', doc: '' },
			{ name: 'OP_UNPACK', doc: '' },
			{ name: 'OTHER', doc: 'Any other expression' },
			{ name: 'PAREN', doc: '' },
			{ name: 'REFERENCE', doc: '' },
			{ name: 'REFLECTION', doc: '' },
			{ name: 'REGEXPLITERAL', doc: '' },
			{ name: 'REQUIRE', doc: '' },
			{ name: 'REQUIRE_ONCE', doc: '' },
			{ name: 'QUOTE', doc: '' },
			{ name: 'SET', doc: '' },
			{ name: 'SHEQ', doc: '' },
			{ name: 'SHNEQ', doc: '' },
			{ name: 'STATEMENT', doc: '' },
			{ name: 'STRING_AND', doc: '' },
			{ name: 'STRING_OR', doc: '' },
			{ name: 'STRING_XOR', doc: '' },
			{ name: 'TEMPLATE', doc: '' },
			{ name: 'TRAIT_ALIAS', doc: '' },
			{ name: 'TRAIT_PRECEDENCE', doc: '' },
			{ name: 'TUPLE', doc: '' },
			{ name: 'TYPECOMPARE', doc: '' },
			{ name: 'TYPEOF', doc: '' },
			{ name: 'UNARY', doc: '' },
			{ name: 'VARACCESS', doc: '' },
			{ name: 'VARDECL', doc: '' },
			{ name: 'VOID', doc: '' },
			{ name: 'YIELD', doc: '' },
        ],
        doc: 'The kind of expression.',
    },
    ModifierKind: {
        attrs: [
			{ name: 'ABSTRACT', doc: 'An abstract modifier.' },
			{ name: 'ANNOTATION', doc: 'An annotation modifier.' },
			{ name: 'CONSTANT', doc: 'A final modifier.\n\nThis is an alias of `ModifierKind.FINAL`.' },
			{ name: 'GETTER', doc: 'A getter modifier.' },
			{ name: 'NATIVE', doc: 'A native modifier.' },
			{ name: 'OTHER', doc: 'Any other modifier - the value is in the `Modifier.other` attribute.' },
			{ name: 'SCOPE', doc: 'A scope modifier - the value is in the `Modifier.scope` attribute.' },
			{ name: 'SETTER', doc: 'A setter modifier.' },
			{ name: 'STATIC', doc: 'A static modifier.' },
			{ name: 'STRICTFP', doc: 'A stricfp modifier.' },
			{ name: 'SYNCHRONIZED', doc: 'A synchronized modifier.' },
			{ name: 'SYNC', doc: 'A synchronized modifier.\n\nThis is an alias of `ModifierKind.SYNCHRONIZED`.' },
			{ name: 'TRANSIENT', doc: 'A transient modifier.' },
			{ name: 'VISIBILITY', doc: 'A visibility modifier.\n\nThe value is in the `Modifier.visibility` attribute.' },
			{ name: 'VOLATILE', doc: 'A volatile modifier.' },
        ],
        doc: 'The kind of modifier.',
    },
    Visibility: {
        attrs: [
			{ name: 'DEFAULT', doc: 'A default visibility modifier.' },
			{ name: 'NAMESPACE', doc: 'A namespace visibility modifier.' },
			{ name: 'PACKAGE', doc: 'A namespace visibility modifier.\n\nThis is an alias of `Visibility.NAMESPACE`.' },
			{ name: 'PRIVATE', doc: 'A private visibility modifier.' },
			{ name: 'PROTECTED', doc: 'A protected visibility modifier.' },
			{ name: 'PUBLIC', doc: 'A public visibility modifier.' },
        ],
        doc: 'A visibility modifier.',
    },
    Scope: {
        attrs: [
			{ name: 'VAR', doc: 'A global scope modifier for a variable.' },
			{ name: 'LET', doc: 'A block scope modifier for a variable.' },
			{ name: 'CONST', doc: 'A local scope modifier for a constant.' },
        ],
        doc: 'A visibility modifier.',
    },
    TypeKind: {
        attrs: [
			{ name: 'ANNOTATION', doc: 'An annotation type.' },
			{ name: 'ANONYMOUS', doc: 'An anonymous type.' },
			{ name: 'ANON', doc: 'An anonymous type.\n\nThis is an alias for `TypeKind.ANONYMOUS`.' },
			{ name: 'ARRAY', doc: 'An array type.' },
			{ name: 'CLASS', doc: 'A class type.' },
			{ name: 'DELEGATE', doc: 'A delegate type.' },
			{ name: 'ENUM', doc: 'An enumerated type.' },
			{ name: 'ENUMERATION', doc: 'An enumerated type.\n\nThis is an alias for `TypeKind.ENUM`.' },
			{ name: 'GENERIC', doc: 'A generic type.' },
			{ name: 'INTERFACE', doc: 'An interface type.' },
			{ name: 'OTHER', doc: 'Any other kind of Type.' },
			{ name: 'PRIMITIVE', doc: 'A primitive type.' },
			{ name: 'STRUCT', doc: 'A C-style struct.' },
			{ name: 'TRAIT', doc: 'A trait type.' },
        ],
        doc: 'The kinds of types in an AST.',
    },
};

interface IFunctionArg {
    name: string,
    doc: string,
}

interface IReturnType {
    type: string,
    doc: string,
}

interface IFunction {
    args: IFunctionArg[],
    ret: IReturnType,
    doc: string,
}

export const builtinFunctions: { [name: string]: IFunction } = {
    current: {
        args: [
            { name: 'T', doc: 'the domain-specific type to match' },
        ],
        ret: { type: ': T', doc: 'the nearest ancesor of type T' },
        doc: 'Returns the nearest ancesor in the tree whose type is T.',
    },
    visit: {
        args: [
            { name: 'n: T', doc: 'a node to visit' },
            { name: 'v: visitor?', doc: 'the visitor to use' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Visits the tree rooted at `n` with the visitor `v`. If no visitor is given, the current visitor is used.',
    },
    pop: {
        args: [
            { name: 's: stack of val_type', doc: 'the stack to pop' },
        ],
        ret: { type: ': val_type', doc: 'the value from the top of the stack' },
        doc: 'Pops the last value off the stack `s` and returns it.',
    },
    push: {
        args: [
            { name: 's: stack of val_type', doc: 'the stack to pop' },
            { name: 'val: val_type', doc: 'the value to push' },
        ],
        ret: { type: ': ', doc: '' },
        doc: 'Pushes the value `val` onto the stack `s`.',
    },
    bool: {
        args: [
            { name: 'v: basic_type', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Converts the value `v` into a boolean value.',
    },
    time: {
        args: [
            { name: 'v: basic_type', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Converts the value `v` into a time value.',
    },
    string: {
        args: [
            { name: 'v: basic_type', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Converts the value `v` into a string value.',
    },
    int: {
        args: [
            { name: 'v: basic_type', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Converts the value `v` into an int value.',
    },
    float: {
        args: [
            { name: 'v: basic_type', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'Converts the value `v` into a float value.',
    },
    trim: {
        args: [
            { name: 'str: string', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a copy of the given string `str` with all leading and trailing whitespace removed.',
    },
    lowercase: {
        args: [
            { name: 'str: string', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a copy of the given string `str` with all characters lower-cased.',
    },
    uppercase: {
        args: [
            { name: 'str: string', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a copy of the given string `str` with all characters upper-cased.',
    },
    substring: {
        args: [
            { name: 'str: string', doc: '' },
            { name: 'start: int', doc: '' },
            { name: 'end: int?', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a substring of `str` starting at `start` (inclusive) and ending at `end` (exclusive). If `end` is not specified, the length of the string is used.',
    },
    strfind: {
        args: [
            { name: 'needle: string', doc: '' },
            { name: 'haystack: string', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Search for the first occurrence of the `needle` within `haystack` and return the integer index of its first character, or -1 if it does not occur.',
    },
    strrfind: {
        args: [
            { name: 'needle: string', doc: '' },
            { name: 'haystack: string', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Search for the last occurrence of the `needle` within `haystack` and return the integer index of its first character, or -1 if it does not occur.',
    },
    strreplace: {
        args: [
            { name: 'haystack: string', doc: '' },
            { name: 'needle: string', doc: '' },
            { name: 'replacement: string', doc: '' },
            { name: 'replace_all: bool', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Return a copy of string `haystack`, with non-overlapping instances of `needle` replaced by `replacement`. If `replace_all` is false, only the first found instance is replaced.',
    },
    match: {
        args: [
            { name: 'regex: string', doc: '' },
            { name: 'str: string', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Search for a match of the regular expression `regex` within `str` , and return a boolean value indicating whether a match was found.',
    },
    matchposns: {
        args: [
            { name: 'regex: string', doc: '' },
            { name: 'str: string', doc: '' },
        ],
        ret: { type: ': array of int', doc: '' },
        doc: 'Search for a match of the regular expression `regex` within `str`, and return an array consisting of character positions within `str` defined by the match. Positions 0 and 1 of the array report the location of the match of the entire expression, subsequent pairs report the location of matches of successive parenthesized subexpressions.',
    },
    matchstrs: {
        args: [
            { name: 'regex: string', doc: '' },
            { name: 'str: string', doc: '' },
        ],
        ret: { type: ': array of string', doc: '' },
        doc: 'Search for a match of the regular expression `regex` within `str`, and return. The 0th string is the entire match; following elements of the array hold matches of successive parenthesized subexpressions. This function is equivalent to using matchposns to find successive locations of matches and created array slices of `str` with the indices returned.',
    },
    split: {
        args: [
            { name: 's: string', doc: '' },
            { name: 'regex: string', doc: '' },
        ],
        ret: { type: ': array of string', doc: '' },
        doc: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression exactly once.',
    },
    splitn: {
        args: [
            { name: 'n: int', doc: '' },
            { name: 's: string', doc: '' },
            { name: 'regex: string', doc: '' },
        ],
        ret: { type: ': array of string', doc: '' },
        doc: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression at most `n` times.',
    },
    splitall: {
        args: [
            { name: 's: string', doc: '' },
            { name: 'regex: string', doc: '' },
        ],
        ret: { type: ': array of string', doc: '' },
        doc: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression until the input string is exhausted.',
    },
    regex: {
        args: [
            { name: 't: any_type', doc: '' },
            { name: 'base: int', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a `string` holding a regular expression suitable for matching text representing values of the specified type `t`. For example, `regex(int)` generates a `string` to match integer constants (-23, 0x1f, etc.).  At the moment, only `int` and `float` types are supported. When the type is `int`, an optional numerical `base` may be specified for the conversion.',
    },
    format: {
        args: [
            { name: 'format: string', doc: '' },
            { name: 'args: string', doc: '' },
            { name: '...', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Return a string containing the arguments formatted according to the `format` string. The syntax of the format string is essentially that of ANSI C with the following differences:\n* %b prints a boolean, "true" or "false".\n* %c prints a (u)int as a Unicode character in UTF-8.\n* %k like %c with single quotes and backslash escapes for special characters.\n* %s prints a string as UTF-8.\n* %q like %s with double quotes and backslash escapes for special characters.\n* %t prints a time, in the format of the Unix function ctime without a newline.\n* %T prints the type of the argument; %#T expands user-defined types.\n* %d / %i / %o / %u / %x / %X apply to a (u)int and have no \'l\' or \'h\' modifiers.\n* %e / %f / %g / %E / %G apply to a float and have no \'l\' or \'h\' modifiers.\n\nFormat verbs \'n\' and \'*\' are not supported.',
    },
    new: {
        args: [
            { name: 'a: array of basic_type', doc: '' },
            { name: 'n: int', doc: '' },
            { name: 'v: basic_type', doc: '' },
        ],
        ret: { type: ': array of basic_type', doc: '' },
        doc: 'Returns a new array of the same type as `a`, of size `n`, and with all elements initialized to the value `v`.',
    },
    sort: {
        args: [
            { name: 'a: array of basic_type', doc: '' },
        ],
        ret: { type: ': array of basic_type', doc: '' },
        doc: 'Returns the sorted version of an array. Only scalar values can be sorted. Values will be arranged in increasing order.',
    },
    offer: {
        args: [
            { name: 'q: queue of val_type', doc: '' },
            { name: 'val: val_type', doc: '' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Offers the value `val` to the queue `q`.',
    },
    poll: {
        args: [
            { name: 'q: queue of val_type', doc: '' },
        ],
        ret: { type: ': val_type', doc: '' },
        doc: 'Polls the queue `q` and removes the oldest value and returns it.',
    },
    clear: {
        args: [
            { name: 'c: map[key_type] of val_type|set of val_type|stack of val_type|queue of val_type', doc: '' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Clears all values from `c`.',
    },
    peek: {
        args: [
            { name: 'q: queue of val_type|stack of val_type', doc: '' },
        ],
        ret: { type: ': val_type', doc: '' },
        doc: 'Returns the latest value on the queue `q`/stack `s` without removing it.',
    },
    symdiff: {
        args: [
            { name: 's1: set of val_type', doc: '' },
            { name: 's2: set of val_type', doc: '' },
        ],
        ret: { type: ': set of val_type', doc: '' },
        doc: 'Equivalent to `union(difference(s1, s2), difference(s2, s1))`.',
    },
    difference: {
        args: [
            { name: 's1: set of val_type', doc: '' },
            { name: 's2: set of val_type', doc: '' },
        ],
        ret: { type: ': set of val_type', doc: '' },
        doc: 'Returns the set `s1` with all values from `s2` removed.',
    },
    intersect: {
        args: [
            { name: 's1: set of val_type', doc: '' },
            { name: 's2: set of val_type', doc: '' },
        ],
        ret: { type: ': set of val_type', doc: '' },
        doc: 'Returns a set containing all values in both the sets `s1` and `s2`.',
    },
    union: {
        args: [
            { name: 's1: set of val_type', doc: '' },
            { name: 's2: set of val_type', doc: '' },
        ],
        ret: { type: ': set of val_type', doc: '' },
        doc: 'Returns a set containing all values in either the set `s1` or the set `s2`.',
    },
    add: {
        args: [
            { name: 's: set of val_type', doc: '' },
            { name: 'v: val_type', doc: '' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Adds the value `v` to the set.',
    },
    contains: {
        args: [
            { name: 's: set of val_type', doc: '' },
            { name: 'v: val_type', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Returns if the set contains the value `v`.',
    },
    containsall: {
        args: [
            { name: 's1: set of val_type', doc: '' },
            { name: 's2: set of val_type', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Returns if the set `s1` contains all of the values in set `s2`.',
    },
    clone: {
        args: [
            { name: 'c: set of val_type|map[key_type] of val_type', doc: '' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Creates a clone of the collection `c`.',
    },
    haskey: {
        args: [
            { name: 'm: map[key_type] of val_type', doc: '' },
            { name: 'key: key_type', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Return a boolean reporting whether the `key` is present in the map `m`.',
    },
    // TODO fix this
    // remove: {
    //     args: [
    //         { name: 's: set of val_type', doc: '' },
    //         { name: 'v: val_type', doc: '' },
    //     ],
    //     doc: 'Removes the value `v` from the set, if it contains it.',
    // },
    // remove: {
    //     args: [
    //         { name: 'm: map[key_type] of val_type', doc: '' },
    //         { name: 'k: key_type', doc: '' },
    //     ],
    //     doc: 'Removes the entry for the key `k`, if it exists in the map.',
    // },
    keys: {
        args: [
            { name: 'm: map[key_type] of val_type', doc: '' },
        ],
        ret: { type: ': array of key_type', doc: '' },
        doc: 'Return an array holding, in no particular order, the set of keys present in the map `m`.',
    },
    values: {
        args: [
            { name: 'c: stack of val_type|queue of val_type|set of val_type|map[key_type] of val_type', doc: '' },
        ],
        ret: { type: ': array of val_type', doc: '' },
        doc: 'Return an array holding (possibly in no particular order) the values present in `c`.',
    },
    lookup: {
        args: [
            { name: 'm: map[key_type] of val_type', doc: '' },
            { name: 'key: key_type', doc: '' },
            { name: 'value: val_type', doc: '' },
        ],
        ret: { type: ': val_type', doc: '' },
        doc: 'Return the element of the map `m` indexed by the `key` or, if there is no such element, the specified default `value`. Assuming the map, key, and value are defined, equivalent to: `def(m[key]) ? m[key] : value`',
    },
    rand: {
        args: [],
        ret: { type: ': float', doc: '' },
        doc: 'Return a random floating point number `x` in the range 0.0 &lt; `x` &lt; 1.0.',
    },
    nrand: {
        args: [
            { name: 'n: int', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Return a random integer `x` in the range 0 &lt;= `x` &lt; `n`.',
    },
    isnan: {
        args: [
            { name: 'n: float', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Tests if the value `n` is `NaN`.',
    },
    isinf: {
        args: [
            { name: 'n: float', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Tests if the value `n` is `Inf`.',
    },
    isfinite: {
        args: [
            { name: 'n: float', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Tests if the value `n` is not `Inf` and not `NaN`.',
    },
    isnormal: {
        args: [
            { name: 'n: float', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Tests if the value `n` is neither 0, subnormal, `Inf`, or `NaN`.',
    },
    highbit: {
        args: [
            { name: 'n: int', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Return an integer representing the bit position of the highest one bit in `n`. If `n` is zero, the result is 0; if `n` is 1, the result is 1, if `n` is 15, the result is 4, etc.',
    },
    abs: {
        args: [
            { name: 'x: type', doc: '' },
        ],
        ret: { type: ': type', doc: '' },
        doc: 'Return the absolute value of the argument. The type must be one of `int` or `float`.',
    },
    log: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The natural logarithm of `x`.',
    },
    log10: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The logarithm base 10 of `x`.',
    },
    exp: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The exponential, base `e`, of `x`.',
    },
    pow: {
        args: [
            { name: 'x: float', doc: '' },
            { name: 'y: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The exponential, base `x`, of `y`.',
    },
    sqrt: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The square root of `x`.',
    },
    sin: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The sine of `x`.',
    },
    cos: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The cosine of `x`.',
    },
    tan: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The tangent of `x`.',
    },
    asin: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The arc sine of `x`.',
    },
    acos: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The arc cosine of `x`.',
    },
    atan: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The arc tangent of `x`.',
    },
    atan2: {
        args: [
            { name: 'x: float', doc: '' },
            { name: 'y: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The arc tangent of `y`/`x`.',
    },
    sinh: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The hyperbolic sine of `x`.',
    },
    cosh: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The hyperbolic cosine of `x`.',
    },
    tanh: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The hyperbolic tangent of `x`.',
    },
    asinh: {
        args: [
            { name: 'd: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The hyperbolic arc sine function.',
    },
    acosh: {
        args: [
            { name: 'd: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The hyperbolic arc cosine function.',
    },
    atanh: {
        args: [
            { name: 'd: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'The hyperbolic arc tangent function.',
    },
    ceil: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'Round `x` up to the nearest integer.',
    },
    floor: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'Round `x` down to the nearest integer.',
    },
    round: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'Round `x` to the nearest integer, but round halfway cases away from zero.',
    },
    trunc: {
        args: [
            { name: 'x: float', doc: '' },
        ],
        ret: { type: ': float', doc: '' },
        doc: 'Round to the nearest integer not larger in absolute value than `x`.',
    },
    min: {
        args: [
            { name: 'v1: type', doc: '' },
            { name: 'v2: type', doc: '' },
        ],
        ret: { type: ': type', doc: '' },
        doc: 'Return the minimum of `v1` and `v2`. The type must be one of `int`, `time`, `string`, or `float`.',
    },
    max: {
        args: [
            { name: 'v1: type', doc: '' },
            { name: 'v2: type', doc: '' },
        ],
        ret: { type: ': type', doc: '' },
        doc: 'Return the maximum of `v1` and `v2`. The type must be one of `int`, `time`, `string`, or `float`.',
    },
    now: {
        args: [],
        ret: { type: ': time', doc: '' },
        doc: 'Return the current time at the moment of execution. Note that the time value returned does not depend on a timezone.',
    },
    formattime: {
        args: [
            { name: 'format: string', doc: '' },
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Return a string containing the time argument formatted according to the `format` string. The syntax of the format string is the same as in ANSI C strftime. An optional third argument names a `timezone`.',
    },
    addday: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` days after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addweek: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` weeks after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addmonth: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` months after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addyear: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` years after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    dayofmonth: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric day of the month; for January 17, return 17, etc. An optional second argument names a `timezone`.',
    },
    dayofweek: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric day of the week, from Monday=1 to Sunday=7. An optional second argument names a `timezone`.',
    },
    dayofyear: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric day of the year. January 1 is day 1. An optional second argument names a `timezone`.',
    },
    secondof: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric second of the minute, from 0 to 59. An optional second argument names a `timezone`.',
    },
    minuteof: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric minute of the hour, from 0 to 59. An optional second argument names a `timezone`.',
    },
    hourof: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric hour of the day, from 0 to 23. Midnight is 0, 1AM is 1, etc. An optional second argument names a `timezone`.',
    },
    monthof: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric month of the year. January is 1. An optional second argument names a `timezone`.',
    },
    yearof: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The numeric year value, such as 2003. An optional second argument names a `timezone`.',
    },
    trunctosecond: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Truncate `t` to the zeroth microsecond of the second. An optional second argument names a `timezone`.',
    },
    trunctominute: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Truncate `t` to the zeroth microsecond of the minute. An optional second argument names a `timezone`.',
    },
    trunctohour: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Truncate `t` to the zeroth microsecond of the hour. An optional second argument names a `timezone`.',
    },
    trunctoday: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Truncate `t` to the zeroth microsecond of the day. Useful when creating variables indexed to a particular day, since all times in the day truncated with trunctoday will fold to the same value, which is the first time value in that day. An optional second argument names a `timezone`.',
    },
    trunctomonth: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Truncate `t` to the zeroth microsecond of the month. An optional second argument names a `timezone`.',
    },
    trunctoyear: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Truncate `t` to the zeroth microsecond of the year. An optional second argument names a `timezone`.',
    },
    hash: {
        args: [
            { name: 'v: any_type', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'The hash function returns a hash of the argument `v`, which may be of any type.',
    },
    len: {
        args: [
            { name: 'v: any_type', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Return the number of elements in `v`, which must be an `array` or `map` or of type `string`.\n\n* If `string`, the value is the number of Unicode characters in the string.\n* If a `map`, the value is the number of distinct keys present.',
    },
    def: {
        args: [
            { name: 'v: any_type', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Returns a boolean value according to whether `v` has a defined value.',
    },
    dot: {
        args: [
            { name: 'g: graph', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a string representation of the graph `g`, in Graphviz DOT format.',
    },
    getvalue: {
        args: [
            { name: 'n: graph_node', doc: '' },
            { name: 't: traversal?', doc: '' },
        ],
        ret: { type: ': T', doc: '' },
        doc: 'Returns the value associated with the graph node `n` for the current traversal, or the optional traversal `t`. The type of the value returned depends on the return type of the traversal.',
    },
    getcfg: {
        args: [
            { name: 'm: Method', doc: '' },
        ],
        ret: { type: ': CFG', doc: '' },
        doc: 'Returns a control-flow graph (`CFG`) for the given Method `m`.',
    },
    getcdg: {
        args: [
            { name: 'm: Method', doc: '' },
        ],
        ret: { type: ': CDG', doc: '' },
        doc: 'Returns a control-dependence graph (`CDG`) for the given Method `m`.',
    },
    getddg: {
        args: [
            { name: 'm: Method', doc: '' },
        ],
        ret: { type: ': DDG', doc: '' },
        doc: 'Returns a data-dependence graph (`DDG`) for the given Method `m`.',
    },
    getpdg: {
        args: [
            { name: 'm: Method', doc: '' },
        ],
        ret: { type: ': PDG', doc: '' },
        doc: 'Returns a program-dependence graph (`PDG`) for the given Method `m`.',
    },
    getinedge: {
        args: [
            { name: 'node1: graph_node', doc: '' },
            { name: 'node2: graph_node', doc: '' },
        ],
        ret: { type: ': graph_edge', doc: '' },
        doc: 'Returns a graph edge (`CFGEdge`, `CDGEdge`, `DDGEdge`, or `PDGEdge`) from `node2` to `node1`, if such edge exists. If no such edge exists it returns a `NIL` edge. The two nodes `node1` and `node2` must be the same type of node.',
    },
    getoutedge: {
        args: [
            { name: 'node1: graph_node', doc: '' },
            { name: 'node2: graph_node', doc: '' },
        ],
        ret: { type: ': graph_edge', doc: '' },
        doc: 'Returns a graph edge (`CFGEdge`, `CDGEdge`, `DDGEdge`, or `PDGEdge`) from `node1` to `node2`, if such edge exists. If no such edge exists it returns a `NIL` edge. The two nodes `node1` and `node2` must be the same type of node.',
    },
    getast: {
        args: [
            { name: 'file: ChangedFile', doc: '' },
        ],
        ret: { type: ': ASTRoot', doc: '' },
        doc: 'Returns the `ASTRoot` of the specified `file`, if it exists. Otherwise returns an empty `ASTRoot`.',
    },
    getsnapshot: {
        args: [
            { name: 'cr: CodeRepository', doc: '' },
            { name: 't: time?', doc: '' },
            { name: 'filters: string...', doc: '' },
        ],
        ret: { type: ': array of ChangedFile', doc: '' },
        doc: 'Returns a snapshot of `ChangedFile`s.  A snapshot is the last version of a file before a given time `t` (if no time is given, `now()` is used).  If any `filters` are given, they are used to filter out files.  The file kind is checked against each string and must match one or more filters.  Matches are performed by comparing the filter against the start of the file kind.\n\n```boalang\ngetsnapshot := function(cr: CodeRepository, t: time, filters: array of string) : array of ChangedFile {\n\tsnapshot: map[string] of ChangedFile;\n\n\tvisit(cr, visitor {\n\t\tbefore node: Revision ->\n\t\t\tif (node.commit_date > t)\n\t\t\t\tstop;\n\t\tbefore node: ChangedFile -> {\n\t\t\tif (node.change == ChangeKind.DELETED) {\n\t\t\t\tremove(snapshot, node.name);\n\t\t\t} else {\n\t\t\t\tfilter := len(filters) > 0;\n\n\t\t\t\texists (i: int; iskind(filters[i], node.kind))\n\t\t\t\t\tfilter = false;\n\n\t\t\t\tif (!filter)\n\t\t\t\t\tsnapshot[node.name] = node;\n\t\t\t}\n\t\t\tstop;\n\t\t}\n\t});\n\n\treturn values(snapshot);\n};\n```',
    },
    hasfiletype: {
        args: [
            { name: 'data: dsl_type', doc: '' },
            { name: 'extension: string', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Does the `data` contain a file of the specified type? This compares based on the given file `extension`. Valid `dsl_type`s are: `Project`, `CodeRepository`, and `Revision`.\n\n```boalang\nhasfiletype := function(rev: Revision, ext: string) : bool {\n\texists (i: int; match(format(`\\.%s$`, ext), lowercase(rev.files[i].name)))\n\t\treturn true;\n\treturn false;\n};\n```',
    },
    isfixingrevision: {
        args: [
            { name: 'log: string|Revision', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Is the given `log` message indicating it is a fixing revision? A message is considered indicating a bug fix if it matches a set of regular expressions.\n\n```boalang\nisfixingrevision := function(log: string) : bool {\n\tif (match(`\bfix(s|es|ing|ed)?\b`, log)) return true;\n\tif (match(`\b(error|bug|issue)(s)\b`, log)) return true;\n\treturn false;\n};\n```\n\n```boalang\nisfixingrevision := function(rev: Revision) : bool {\n\treturn isfixingrevision(rev.log);\n};\n```',
    },
    // TODO fix this
    // isfixingrevision: {
    //     args: [
    //         { name: 'rev: Revision', doc: '' },
    //     ],
    //     ret: { type: ': bool', doc: '' },
    //     doc: 'Is the given revision `rev`\'s log message indicating it is a fixing revision? A message is considered indicating a bug fix if it matches a set of regular expressions.',
    // },
    iskind: {
        args: [
            { name: 's: string', doc: '' },
            { name: 'k: dsl_type', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Returns `true` if the kind `k` starts with the string `s`. Valid `dsl_type`s are: `FileKind`.\n\n```boalang\niskind := function(s: string, k: FileKind) : bool {\n\treturn match(format(`^%s`, s), string(k));\n};\n```',
    },
    isliteral: {
        args: [
            { name: 'e: Expression', doc: '' },
            { name: 's: string', doc: '' },
        ],
        ret: { type: ': bool', doc: '' },
        doc: 'Returns `true` if the expression `e` is of kind LITERAL and the literal matches the string `s`.\n\n```boalang\nisliteral := function(e: Expression, s: string) : bool {\n\treturn e.kind == ExpressionKind.LITERAL && def(e.literal) && e.literal == s;\n};\n```',
    },
};