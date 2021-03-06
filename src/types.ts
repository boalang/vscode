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
    type: string,
    doc: string,
}

interface IType {
    attrs: ITypeAttr[],
    doc: string,
}

export const builtinTypes: { [name: string]: IType } = {
    Project: {
        attrs: [
            { name: 'audiences', type: 'array of string', doc: 'A list of the target audiences for the project.', },
            { name: 'code_repositories', type: 'array of CodeRepository', doc: 'A list of all code repositories associated with this project.', },
            { name: 'created_date', type: 'time?', doc: 'The time the project was created.', },
            { name: 'databases', type: 'array of string', doc: 'A list of all databases used by the project.', },
            { name: 'description', type: 'string?', doc: 'A description of the project.', },
            { name: 'developers', type: 'array of Person', doc: 'A list of all software developers currently on the project.', },
            { name: 'donations', type: 'bool?', doc: 'If true, this project explicitly states it accepts donations.', },
            { name: 'homepage_url', type: 'string?', doc: 'A URL to the project\'s homepage.', },
            { name: 'id', type: 'string', doc: 'Unique identifier for the project.', },
            { name: 'interfaces', type: 'array of string', doc: 'A list of all interfaces supported by the project.', },
            { name: 'licenses', type: 'array of string', doc: 'A list of all licenses used by the project.', },
            { name: 'maintainers', type: 'array of Person', doc: 'A list of all people currently maintaining the project.', },
            { name: 'name', type: 'string', doc: 'The name of the project.', },
            { name: 'operating_systems', type: 'array of string', doc: 'A list of all OSes supported by the project.', },
            { name: 'programming_languages', type: 'array of string', doc: 'A list of all programming languages used by the project.', },
            { name: 'project_url', type: 'string', doc: 'A URL to the project\'s page on the forge.', },
            { name: 'topics', type: 'array of string', doc: 'A list of self-categorized topics the project belongs to.', },
        ],
        doc: 'Top-level type, represents a single project on a forge.',
    },
    CodeRepository: {
        attrs: [
            { name: 'kind', type: 'RepositoryKind', doc: 'The kind of code repository (SVN, GIT, etc).', },
            { name: 'revisions', type: 'array of Revision', doc: 'All of the revisions contained in the code repository.', },
            { name: 'url', type: 'string', doc: 'The URL to access the code repository.', },
        ],
        doc: 'A source code repository (SVN, CVS, Git, etc.).',
    },
    Revision: {
        attrs: [
            { name: 'author', type: 'Person', doc: 'The person who authored the revision, if known, otherwise the same as committer.', },
            { name: 'commit_date', type: 'time', doc: 'The time the revision was committed.', },
            { name: 'committer', type: 'Person', doc: 'The person who committed the revision.', },
            { name: 'files', type: 'array of ChangedFile', doc: 'A list of all files committed in the revision.', },
            { name: 'id', type: 'string', doc: 'A unique identifier for the revision.', },
            { name: 'log', type: 'string', doc: 'The log message attached to the revision.', },
        ],
        doc: 'A single revision inside a `CodeRepository`.',
    },
    ChangedFile: {
        attrs: [
            { name: 'change', type: 'ChangeKind', doc: 'The kind of change for this file.', },
            { name: 'kind', type: 'FileKind', doc: 'The kind of file.', },
            { name: 'name', type: 'string', doc: 'The full name and path of the file.', },
        ],
        doc: 'A file committed in a `Revision`.',
    },
    Person: {
        attrs: [
            { name: 'email', type: 'string', doc: 'The person\'s email address, if known.', },
            { name: 'real_name', type: 'string', doc: 'The person\'s real name, if known, otherwise the same as username.', },
            { name: 'username', type: 'string', doc: 'The person\'s username.', },
        ],
        doc: 'A unique person\'s information.',
    },
    ASTRoot: {
        attrs: [
            { name: 'imports', type: 'array of string', doc: 'The imported namespaces and types', },
            { name: 'namespaces', type: 'array of Namespace', doc: 'The top-level namespaces in the file', },
        ],
        doc: 'Container class that holds a file\'s parsed AST',
    },
    Namespace: {
        attrs: [
            { name: 'declarations', type: 'array of Declaration', doc: 'Declarations contained in this namespace', },
            { name: 'modifiers', type: 'array of Modifier', doc: 'Any modifiers/annotations on the namespace', },
            { name: 'name', type: 'string', doc: 'The name of the namespace', },
        ],
        doc: 'A namespace (aka, package) in a source file',
    },
    Declaration: {
        attrs: [
            { name: 'fields', type: 'array of Variable', doc: 'The fields in the declaration', },
            { name: 'generic_parameters', type: 'array of Type', doc: 'Any generic parameters to this declaration', },
            { name: 'kind', type: 'TypeKind', doc: 'The kind of this declaration', },
            { name: 'methods', type: 'array of Method', doc: 'The methods in the declaration', },
            { name: 'modifiers', type: 'array of Modifier', doc: 'The modifiers/annotations on this declaration', },
            { name: 'name', type: 'string', doc: 'The name of this declaration', },
            { name: 'nested_declarations', type: 'array of Declaration', doc: 'Any nested declarations', },
            { name: 'parents', type: 'array of Type', doc: 'The explicitly named parent type(s) of this declaration', },
        ],
        doc: 'A type declaration, such as a class or interface',
    },
    Type: {
        attrs: [
            { name: 'kind', type: 'TypeKind', doc: 'The kind of the type', },
            { name: 'name', type: 'string', doc: 'The name of the type', },
        ],
        doc: 'A type in an AST',
    },
    Method: {
        attrs: [
            { name: 'arguments', type: 'array of Variable', doc: 'The arguments the method takes', },
            { name: 'exception_types', type: 'array of Type', doc: 'The list of exceptions thrown by this method', },
            { name: 'generic_parameters', type: 'array of Type', doc: 'The list of generic parameters for this method', },
            { name: 'modifiers', type: 'array of Modifier', doc: 'A list of all modifiers on the variable', },
            { name: 'name', type: 'string?', doc: 'The name of the method', },
            { name: 'return_type', type: 'Type', doc: 'The type returned from the method; if the method returns nothing, this type will be void', },
            { name: 'statements', type: 'array of Statement', doc: 'The statements in the method body. Note that most methods (in C-like languages, such as Java) contain a single statement of type BLOCK, which contains the list of statements within it!', },
        ],
        doc: 'A method declaration',
    },
    Variable: {
        attrs: [
            { name: 'initializer', type: 'Expression?', doc: 'If the variable has an initial assignment, the expression is stored here', },
            { name: 'modifiers', type: 'array of Modifier', doc: 'A list of all modifiers on the variable', },
            { name: 'name', type: 'string', doc: 'The name of the variable', },
            { name: 'variable_type', type: 'Type', doc: 'The type of the variable', },
        ],
        doc: 'A variable declaration - can be a field, local, parameter, etc',
    },
    Statement: {
        attrs: [
            { name: 'condition', type: 'Expression?', doc: '', },
            { name: 'expression', type: 'Expression?', doc: '', },
            { name: 'initializations', type: 'array of Expression', doc: '', },
            { name: 'kind', type: 'StatementKind', doc: 'The kind of statement', },
            { name: 'statements', type: 'array of Statement', doc: '', },
            { name: 'type_declaration', type: 'Declaration?', doc: '', },
            { name: 'updates', type: 'array of Expression', doc: '', },
            { name: 'variable_declaration', type: 'Variable?', doc: '', },
        ],
        doc: 'A single statement',
    },
    Expression: {
        attrs: [
            { name: 'annotation', type: 'Modifier?', doc: '', },
            { name: 'anon_declaration', type: 'Declaration?', doc: '', },
            { name: 'expressions', type: 'array of Expression', doc: '', },
            { name: 'generic_parameters', type: 'array of Type', doc: '', },
            { name: 'is_postfix', type: 'bool?', doc: '', },
            { name: 'kind', type: 'ExpressionKind', doc: 'The kind of expression', },
            { name: 'literal', type: 'string?', doc: '', },
            { name: 'method', type: 'string?', doc: '', },
            { name: 'method_args', type: 'array of Expression', doc: '', },
            { name: 'new_type', type: 'Type?', doc: '', },
            { name: 'variable', type: 'string?', doc: '', },
            { name: 'variable_decls', type: 'array of Variable', doc: '', },
        ],
        doc: 'A single expression',
    },
    Modifier: {
        attrs: [
            { name: 'annotation_members', type: 'array of string', doc: 'If the `kind` is `ANNOTATION`, then a list of all members explicitly assigned values', },
            { name: 'annotation_name', type: 'string?', doc: 'If the `kind` is `ANNOTATION`, then the name of the annotation', },
            { name: 'annotation_values', type: 'array of Expression', doc: 'If the `kind` is `ANNOTATION`, then a list of all values that were assigned to members', },
            { name: 'kind', type: 'ModifierKind', doc: 'The kind of modifier', },
            { name: 'other', type: 'string?', doc: 'If the `kind` is `OTHER`, the modifier string from the source code', },
            { name: 'visibility', type: 'Visibility?', doc: 'A kind of visibility modifier', },
        ],
        doc: 'A single modifier',
    },
    CFG: {
        attrs: [
            { name: 'nodes', type: 'set of CFGNode', doc: 'The set of nodes in the graph' },
        ],
        doc: 'A control-flow graph.',
    },
    CDG: {
        attrs: [
            { name: 'nodes', type: 'set of CDGNode', doc: 'The set of nodes in the graph' },
        ],
        doc: 'A control-dependence graph.',
    },
    DDG: {
        attrs: [
            { name: 'nodes', type: 'set of DDGNode', doc: 'The set of nodes in the graph' },
        ],
        doc: 'A data-dependence graph.',
    },
    PDG: {
        attrs: [
            { name: 'nodes', type: 'set of PDGNode', doc: 'The set of nodes in the graph' },
        ],
        doc: 'A program-dependence graph.',
    },
    CFGNode: {
        attrs: [
            { name: 'kind', type: 'NodeType', doc: 'The kind of node' },
            { name: 'id', type: 'int', doc: 'The node\'s unique ID in the graph' },
            { name: 'name', type: 'string', doc: 'A name for the node, derived from the statement/expression it represents' },
            { name: 'stmt', type: 'Statement?', doc: 'The statement, if any, this ndoe is associated with in the original AST.' },
            { name: 'expr', type: 'Expression?', doc: 'The expression, if any, this ndoe is associated with in the original AST.' },
            { name: 'predecessors', type: 'array of CFGNode', doc: 'A list of all predecessor nodes - nodes with an out edge to the curernt node' },
            { name: 'successors', type: 'arary of CFGNode', doc: 'A list of all successor nodes - nodes with an in edge from the current node' },
            { name: 'useVariables', type: 'set of string', doc: 'The set of all variables used by this node' },
            { name: 'defVariables', type: 'string', doc: 'The variables defined by this node' },
        ],
        doc: 'A single node in a control-flow graph.',
    },
    CDGNode: {
        attrs: [
            { name: 'kind', type: 'NodeType', doc: 'The kind of node' },
            { name: 'id', type: 'int', doc: 'The node\'s unique ID in the graph' },
            { name: 'stmt', type: 'Statement?', doc: 'The statement, if any, this ndoe is associated with in the original AST.' },
            { name: 'expr', type: 'Expression?', doc: 'The expression, if any, this ndoe is associated with in the original AST.' },
            { name: 'predecessors', type: 'array of CDGNode', doc: 'A list of all predecessor nodes - nodes with an out edge to the curernt node' },
            { name: 'successors', type: 'arary of CDGNode', doc: 'A list of all successor nodes - nodes with an in edge from the current node' },
            { name: 'cfg_node', type: 'CFGNode?', doc: 'The CFGNode related to this CDGNode, if any' },
        ],
        doc: 'A single node in a control-dependence graph.',
    },
    DDGNode: {
        attrs: [
            { name: 'kind', type: 'NodeType', doc: 'The kind of node' },
            { name: 'id', type: 'int', doc: 'The node\'s unique ID in the graph' },
            { name: 'stmt', type: 'Statement?', doc: 'The statement, if any, this ndoe is associated with in the original AST.' },
            { name: 'expr', type: 'Expression?', doc: 'The expression, if any, this ndoe is associated with in the original AST.' },
            { name: 'predecessors', type: 'array of DDGNode', doc: 'A list of all predecessor nodes - nodes with an out edge to the curernt node' },
            { name: 'successors', type: 'arary of DDGNode', doc: 'A list of all successor nodes - nodes with an in edge from the current node' },
        ],
        doc: 'A single node in a data-dependence graph.',
    },
    PDGNode: {
        attrs: [
            { name: 'kind', type: 'NodeType', doc: 'The kind of node' },
            { name: 'id', type: 'int', doc: 'The node\'s unique ID in the graph' },
            { name: 'stmt', type: 'Statement?', doc: 'The statement, if any, this ndoe is associated with in the original AST.' },
            { name: 'expr', type: 'Expression?', doc: 'The expression, if any, this ndoe is associated with in the original AST.' },
            { name: 'predecessors', type: 'array of PDGNode', doc: 'A list of all predecessor nodes - nodes with an out edge to the curernt node' },
            { name: 'successors', type: 'arary of PDGNode', doc: 'A list of all successor nodes - nodes with an in edge from the current node' },
        ],
        doc: 'A single node in a program-dependence graph.',
    },
    CFGEdge: {
        attrs: [
            { name: 'label', type: 'EdgeLabel', doc: 'The edge\'s label, indicating what kind of edge it is' },
            { name: 'src', type: 'CFGNode', doc: 'The edge\'s source node' },
            { name: 'dest', type: 'CFGNode', doc: 'The edge\'s destination node' },
        ],
        doc: 'A single edge in a control-flow graph.',
    },
    CDGEdge: {
        attrs: [
            { name: 'label', type: 'EdgeLabel', doc: 'The edge\'s label, indicating what kind of edge it is' },
            { name: 'src', type: 'CDGNode', doc: 'The edge\'s source node' },
            { name: 'dest', type: 'CDGNode', doc: 'The edge\'s destination node' },
        ],
        doc: 'A single edge in a control-dependence graph.',
    },
    DDGEdge: {
        attrs: [
            { name: 'label', type: 'EdgeLabel', doc: 'The edge\'s label, indicating what kind of edge it is' },
            { name: 'src', type: 'DDGNode', doc: 'The edge\'s source node' },
            { name: 'dest', type: 'DDGNode', doc: 'The edge\'s destination node' },
        ],
        doc: 'A single edge in a data-dependence graph.',
    },
    PDGEdge: {
        attrs: [
            { name: 'label', type: 'EdgeLabel', doc: 'The edge\'s label, indicating what kind of edge it is' },
            { name: 'src', type: 'PDGNode', doc: 'The edge\'s source node' },
            { name: 'dest', type: 'PDGNode', doc: 'The edge\'s destination node' },
        ],
        doc: 'A single edge in a program-dependence graph.',
    },
};

interface IEnumValue {
    name: string,
    doc: string,
}

interface IEnum {
    attrs: { [name: string]: string },
    doc: string,
}

export const builtinEnums: { [name: string]: IEnum } = {
    ForgeKind: {
        attrs: {
            APACHE: 'Apache',
            GH: 'GitHub.com.\n\nThis is an alias for `ForgeKind.GITHUB`.',
            GITHUB: 'GitHub.com',
            OTHER: 'Any other kind of forge',
            QUALITAS: 'Qualitas Corpus',
            SF: 'SourceForge.net.\n\nThis is an alias for `ForgeKind.SOURCEFORGE`.',
            SOURCEFORGE: 'SourceForge.net',
        },
        doc: 'Describes the kind of forge.',
    },
    RepositoryKind: {
        attrs: {
            BAZAAR: 'For Bazaar code repositories.\n\nThis is an alias for `RepositoryKind.BZR`.',
            BZR: 'For Bazaar code repositories.',
            CVS: 'For CVS code repositories.',
            GIT: 'For Git code repositories.',
            HG: 'For Mercurial code repositories.',
            MERCURIAL: 'For Mercurial code repositories.\n\nThis is an alias for `RepositoryKind.HG`.',
            OTHER: 'Any other code repository.',
            SUBVERSION: 'For Subversion code repositories.\n\nThis is an alias for `RepositoryKind.SVN`.',
            SVN: 'For Subversion code repositories.',
        },
        doc: 'Describes the kind of code repository.',
    },
    ChangeKind: {
        attrs: {
            ADDED: 'The artifact or program entity/element did not already exist and was added.',
            CHANGED: 'The artifact or program entity/element already existed and was modified.\n\nThis is an alias for `ChangeKind.MODIFIED`.',
            COPIED: 'The artifact or program entity/element was copied from another one.',
            DELETED: 'The artifact or program entity/element was deleted.',
            MERGED: 'The artifact or program entity/element was merged .',
            MODIFIED: 'The artifact or program entity/element already existed and was modified.',
            MOVED: 'The artifact or program entity/element was moved to a different parent.',
            REMOVED: 'The artifact or program entity/element was deleted.\n\nThis is an alias for `ChangeKind.DELETED`.',
            RENAMED: 'The label of the artifact or program entity/element was renamed.',
            UNCHANGED: 'The artifact or program entity/element was unchanged.',
            UNKNOWN: 'An unknown change occurred.',
            UNMAPPED: '',
        },
        doc: 'Describes the kind of change for the file.',
    },
    FileKind: {
        attrs: {
            BINARY: 'The file represents a binary file.',
            JAVA_ERROR: 'The file represents a Java source file that had a parse error.\n\nThis is an alias for `FileKind.SOURCE_JAVA_ERROR`.',
            JLS2: 'The file represents a Java source file that parsed without error as JLS2.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS2`.',
            JLS3: 'The file represents a Java source file that parsed without error as JLS3.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS3`.',
            JLS4: 'The file represents a Java source file that parsed without error as JLS4.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS4`.',
            JLS8: 'The file represents a Java source file that parsed without error as JLS8.\n\nThis is an alias for `FileKind.SOURCE_JAVA_JLS8`.',
            OTHER: 'The file\'s type was unknown.',
            SOURCE_JAVA_ERROR: 'The file represents a Java source file that had a parse error.',
            SOURCE_JAVA_JLS2: 'The file represents a Java source file that parsed without error as JLS2.',
            SOURCE_JAVA_JLS3: 'The file represents a Java source file that parsed without error as JLS3.',
            SOURCE_JAVA_JLS4: 'The file represents a Java source file that parsed without error as JLS4.',
            SOURCE_JAVA_JLS8: 'The file represents a Java source file that parsed without error as JLS8.',
            SOURCE_KOTLIN_ERROR: 'The file represents a Kotlin source file that had a parse error.',
            SOURCE_KOTLIN_1_0: 'The file represents a Kotlin source file that parsed without error as version 1.0.',
            SOURCE_KOTLIN_1_1: 'The file represents a Kotlin source file that parsed without error as version 1.1.',
            SOURCE_KOTLIN_1_2: 'The file represents a Kotlin source file that parsed without error as version 1.2.',
            SOURCE_KOTLIN_1_3: 'The file represents a Kotlin source file that parsed without error as version 1.3.',
            SOURCE_KOTLIN_1_4: 'The file represents a Kotlin source file that parsed without error as version 1.4.',
            SOURCE_KOTLIN_1_5: 'The file represents a Kotlin source file that parsed without error as version 1.5.',
            SOURCE_PY_ERROR: 'The file represents a Python source file that had a parse error.',
            SOURCE_PY_2: 'The file represents a Python source file that parsed without error as Python 2.x.',
            SOURCE_PY_3: 'The file represents a Python source file that parsed without error as Python 3.x.',
            TEXT: 'The file represents a text file.',
            XML: 'The file represents an XML file.',
        },
        doc: 'Describes the kind of the file.',
    },
    StatementKind: {
        attrs: {
            ASSERT: '',
            BLOCK: '',
            BREAK: '',
            CASE: '',
            CATCH: '',
            CONTINUE: '',
            DEBUGGER: '',
            DECLARE: '',
            DEFAULT: '',
            DEL: '',
            DO: '',
            ECHO: '',
            EMPTY: '',
            EXPRESSION: '',
            EXPR: 'This is an alias for `StatementKind.EXPRESSION`.',
            FINALLY: '',
            FOR: '',
            FOREACH: '',
            FORIN: '',
            GLOBAL: '',
            GOTO: '',
            IF: '',
            INLINE_HTML: '',
            LABEL: '',
            OTHER: 'Any other statement',
            PASS: '',
            PRINT: '',
            RAISE: '',
            RETURN: '',
            SCOPE: '',
            STATIC: '',
            SWITCH: '',
            SYNCHRONIZED: '',
            SYNC: 'This is an alias for `StatementKind.SYNCHRONIZED`.',
            THROW: '',
            TRAIT_ALIAS: '',
            TRAIT_PRECEDENCE: '',
            TRAIT_USE: '',
            TRY: '',
            TYPEDECL: '',
            USE_CONSTANT: '',
            USE_FUNCTION: '',
            USE_NAMESPACE: '',
            WHILE: '',
            WITH: '',
        },
        doc: 'The kind of statement.',
    },
    ExpressionKind: {
        attrs: {
            ANON_METHOD: '',
            ANNOTATION: '',
            ARRAYACCESS: '',
            ARRAYELEMENT: '',
            ARRAYINDEX: '',
            ARRAYINIT: '',
            ARRAYLITERAL: 'This is an alias for `ExpressionKind.ARRAYINIT`.',
            ARRAY_COMPREHENSION: '',
            ASSIGN: '',
            ASSIGN_ADD: '',
            ASSIGN_BITAND: '',
            ASSIGN_BITOR: '',
            ASSIGN_BITXOR: '',
            ASSIGN_CONCAT: '',
            ASSIGN_DIV: '',
            ASSIGN_INT_DIV: '',
            ASSIGN_LSHIFT: '',
            ASSIGN_MOD: '',
            ASSIGN_MULT: '',
            ASSIGN_POW: '',
            ASSIGN_RSHIFT: '',
            ASSIGN_SUB: '',
            ASSIGN_UNSIGNEDRSHIFT: '',
            BIT_AND: '',
            BIT_LSHIFT: '',
            BIT_NOT: '',
            BIT_OR: '',
            BIT_RSHIFT: '',
            BIT_UNSIGNEDRSHIFT: '',
            BIT_XOR: '',
            CALLHOLDER: '',
            CAST: '',
            CLONE: '',
            CONDITIONAL: '',
            DELETE: '',
            DICT: '',
            EMPTY: '',
            EQ: '',
            FOR_LIST: '',
            GENERATOR: '',
            GT: '',
            GTEQ: '',
            HASHTABLEACCESS: '',
            IDENTICAL: '',
            IGNORE_ERROR: '',
            IMPORT: '',
            IMPORT_FROM: '',
            IN: '',
            INCLUDE: '',
            INCLUDE_ONCE: '',
            IS: '',
            IS_NOT: '',
            LABEL: '',
            LAMBDA: '',
            LIST: '',
            LITERAL: '',
            LOGICAL_AND: '',
            LOGICAL_NOT: '',
            LOGICAL_OR: '',
            LOOP: '',
            LT: '',
            LTEQ: '',
            METHODCALL: '',
            METHODDECL: '',
            METHOD_REFERENCE: '',
            NAMESPACENAME: '',
            NEQ: '',
            NEW: '',
            NEWARRAY: '',
            NOTIDENTICAL: '',
            NOT_IN: '',
            NULLCOALESCE: '',
            OBJECT_LITERAL: '',
            OP_ADD: '',
            OP_CONCAT: '',
            OP_DEC: '',
            OP_DIV: '',
            OP_ELVIS: '',
            OP_INC: '',
            OP_INT_DIV: '',
            OP_MOD: '',
            OP_MULT: '',
            OP_NOTNULL: '',
            OP_POW: '',
            OP_SUB: '',
            OP_THREE_WAY_COMPARE: '',
            OP_UNPACK: '',
            OTHER: 'Any other expression',
            PAREN: '',
            REFERENCE: '',
            REFLECTION: '',
            REGEXPLITERAL: '',
            REQUIRE: '',
            REQUIRE_ONCE: '',
            QUOTE: '',
            SET: '',
            SHEQ: '',
            SHNEQ: '',
            STATEMENT: '',
            STRING_AND: '',
            STRING_OR: '',
            STRING_XOR: '',
            TEMPLATE: '',
            TRAIT_ALIAS: '',
            TRAIT_PRECEDENCE: '',
            TUPLE: '',
            TYPECOMPARE: '',
            TYPEOF: '',
            UNARY: '',
            VARACCESS: '',
            VARDECL: '',
            VOID: '',
            YIELD: '',
        },
        doc: 'The kind of expression.',
    },
    ModifierKind: {
        attrs: {
            ABSTRACT: 'An abstract modifier.',
            ANNOTATION: 'An annotation modifier.',
            CONSTANT: 'A final modifier.\n\nThis is an alias of `ModifierKind.FINAL`.',
            GETTER: 'A getter modifier.',
            NATIVE: 'A native modifier.',
            OTHER: 'Any other modifier - the value is in the `Modifier.other` attribute.',
            SCOPE: 'A scope modifier - the value is in the `Modifier.scope` attribute.',
            SETTER: 'A setter modifier.',
            STATIC: 'A static modifier.',
            STRICTFP: 'A stricfp modifier.',
            SYNCHRONIZED: 'A synchronized modifier.',
            SYNC: 'A synchronized modifier.\n\nThis is an alias of `ModifierKind.SYNCHRONIZED`.',
            TRANSIENT: 'A transient modifier.',
            VISIBILITY: 'A visibility modifier.\n\nThe value is in the `Modifier.visibility` attribute.',
            VOLATILE: 'A volatile modifier.',
        },
        doc: 'The kind of modifier.',
    },
    Visibility: {
        attrs: {
            DEFAULT: 'A default visibility modifier.',
            NAMESPACE: 'A namespace visibility modifier.',
            PACKAGE: 'A namespace visibility modifier.\n\nThis is an alias of `Visibility.NAMESPACE`.',
            PRIVATE: 'A private visibility modifier.',
            PROTECTED: 'A protected visibility modifier.',
            PUBLIC: 'A public visibility modifier.',
        },
        doc: 'A visibility modifier.',
    },
    Scope: {
        attrs: {
            VAR: 'A global scope modifier for a variable.',
            LET: 'A block scope modifier for a variable.',
            CONST: 'A local scope modifier for a constant.',
        },
        doc: 'A visibility modifier.',
    },
    TypeKind: {
        attrs: {
            ANNOTATION: 'An annotation type.',
            ANONYMOUS: 'An anonymous type.',
            ANON: 'An anonymous type.\n\nThis is an alias for `TypeKind.ANONYMOUS`.',
            ARRAY: 'An array type.',
            CLASS: 'A class type.',
            DELEGATE: 'A delegate type.',
            ENUM: 'An enumerated type.',
            ENUMERATION: 'An enumerated type.\n\nThis is an alias for `TypeKind.ENUM`.',
            GENERIC: 'A generic type.',
            INTERFACE: 'An interface type.',
            OTHER: 'Any other kind of Type.',
            PRIMITIVE: 'A primitive type.',
            STRUCT: 'A C-style struct.',
            TRAIT: 'A trait type.',
        },
        doc: 'The kinds of types in an AST.',
    },
    TraversalKind: {
        attrs: {
            DFS: '',
            POSTORDER: '',
            REVERSEPOSTORDER: '',
            WORKLIST_POSTORDER: '',
            WORKLIST_REVERSEPOSTORDER: '',
            ITERATIVE: '',
            RANDOM: '',
            HYBRID: '',
        },
        doc: 'The kind of graph traversal to perform.',
    },
    TraversalDirection: {
        attrs: {
            FORWARD: 'Data flows forwards in the graph',
            BACKWARD: 'Data flows backwards in the graph',
        },
        doc: 'The direction data flows in a program analysis traversal.',
    },
    NodeType: {
        attrs: {
            CONTROL: 'A node with a control statement (such as if or loops)',
            ENTRY: 'Nodes added to the graph to indicate entry or exit',
            METHOD: 'Includes a method call (may lead to external graphs)',
            OTHER: 'A normal/sequential node',
        },
        doc: 'The type of a graph node.',
    },
    EdgeType: {
        attrs: {
            CONTROL: 'A control dependency edge',
            DATA: 'A data dependency edge',
        },
        doc: 'The type of a graph edge.',
    },
    EdgeLabel: {
        attrs: {
            NIL: 'No label - a normal edge',
            DEFAULT: 'A normal, sequential edge',
            TRUE: 'Indicates a true branch from a control node',
            FALSE: 'Indicates a false branch from a control node',
            BACKEDGE: 'A loop back-edge',
            EXITEDGE: 'An exit edge from a loop',
            VARDEF: 'A variable definition edge',
        },
        doc: 'The label added to a graph edge.',
    },
};

export interface IFunctionArg {
    name: string,
    doc: string,
}

export interface IReturnType {
    type: string,
    doc: string,
}

export interface IFunction {
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
    traverse: {
        args: [
            { name: 'g: graph', doc: 'a graph to traverse' },
            { name: 'dir: TraversalDirection', doc: 'the traversal direction' },
            { name: 'k: TraversalKind', doc: 'the traversal kind' },
            { name: 't: traversal', doc: 'the `traversal` function' },
            { name: 'fp: fixp?', doc: 'a `fixp` function to compute if at a fixed point' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Traverses the graph rooted at `g` with the traversal `t`. It computes dataflow in the direction `dir` by traversing the nodes using the `k` traversal strategy. If a `fp` is given, it uses that function to compute if at a fixed point.',
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
    join: {
        args: [
            { name: 's: string', doc: '' },
            { name: 'strs: array of string|stack of string', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Joins all the strings in `strs` together with the string `s` in between each.',
    },
    split: {
        args: [
            { name: 's: string', doc: '' },
            { name: 'regex: string', doc: '' },
        ],
        ret: { type: ': array of string', doc: '' },
        doc: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression until the input string is exhausted.',
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
    regex: {
        args: [
            { name: 't: any_type', doc: '' },
            { name: 'base: int', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a `string` holding a regular expression suitable for matching text representing values of the specified type `t`. For example, `regex(int)` generates a `string` to match integer constants (-23, 0x1f, etc.). At the moment, only `int` and `float` types are supported. When the type is `int`, an optional numerical `base` may be specified for the conversion.',
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
    remove: {
        args: [
            { name: 's|m: set of val_type|map[key_type] of val_type', doc: '' },
            { name: 'v|k: val_type|key_type', doc: '' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Removes the value `v` from the set `s`, if it contains it.\nRemoves the entry for the key `k`, if it exists in the map `m`.',
    },
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
            { name: 'n: int?', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` days after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addweek: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int?', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` weeks after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addmonth: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int?', doc: '' },
            { name: 'timezone: string?', doc: '' },
        ],
        ret: { type: ': time', doc: '' },
        doc: 'Return the time, `n` months after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addyear: {
        args: [
            { name: 't: time', doc: '' },
            { name: 'n: int?', doc: '' },
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
            { name: 'v: bool|string', doc: '' },
        ],
        ret: { type: ': string', doc: '' },
        doc: 'Returns a string representation of the graph `g`, in Graphviz DOT format. The optional second parameter is a string label for the root node, or if `true`, the method pretty printed.',
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
            { name: 'm: Method|CFG', doc: '' },
        ],
        ret: { type: ': CDG', doc: '' },
        doc: 'Returns a control-dependence graph (`CDG`) for the given Method `m`, or the CFG of a method.',
    },
    getddg: {
        args: [
            { name: 'm: Method', doc: '' },
        ],
        ret: { type: ': DDG', doc: '' },
        doc: 'Returns a data-dependence graph (`DDG`) for the given Method `m`, or the CFG of a method.',
    },
    getpdg: {
        args: [
            { name: 'm: Method', doc: '' },
            { name: 'b: bool?', doc: '' },
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
    getastcount: {
        args: [
            { name: 'file: ChangedFile', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Returns the number of AST nodes in the specified `file`.',
    },
    ast_len: {
        args: [
            { name: 'ast: dsl_type', doc: '' },
        ],
        ret: { type: ': int', doc: '' },
        doc: 'Returns the number of AST nodes in the specified `ast`.',
    },
    getsnapshot: {
        args: [
            { name: 'cr: CodeRepository', doc: '' },
            { name: 'before: time?|Revision?', doc: '' },
            { name: 'filters: string...', doc: '' },
        ],
        ret: { type: ': array of ChangedFile', doc: '' },
        doc: 'Returns a snapshot of `ChangedFile`s. A snapshot is the last version of a file `before` a given time/Revision (if no time is given, `now()` is used). If any `filters` are given, they are used to filter out files. The file kind is checked against each string and must match one or more filters. Matches are performed by comparing the filter against the start of the file kind.',
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
        doc: 'Is the given (revision `rev`\'s) `log` message indicating it is a fixing revision? A message is considered indicating a bug fix if it matches a set of regular expressions.\n\n```boalang\nisfixingrevision := function(log: string) : bool {\n\tif (match(`\bfix(s|es|ing|ed)?\b`, log)) return true;\n\tif (match(`\b(error|bug|issue)(s)\b`, log)) return true;\n\treturn false;\n};\n```\n\n```boalang\nisfixingrevision := function(rev: Revision) : bool {\n\treturn isfixingrevision(rev.log);\n};\n```',
    },
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
    getnoargsvariables: {
        args: [
            { name: 'e: Expression', doc: 'the expression in symbolic form' },
        ],
        ret: { type: 'array of Expression', doc: 'array of variables which are not arg0, arg1, arg2, ...' },
        doc: 'Gives list of non-argument variables present in a predicate expression.',
    },
    converttosymbolicname: {
        args: [
            { name: 'e: Expression', doc: 'predicate expression' },
            { name: 'rcvr: Expression', doc: 'API receiver' },
            { name: 'args: array of Expression', doc: 'API arguments' },
        ],
        ret: { type: 'array of Expression', doc: 'the expression in symbolic form' },
        doc: 'Replaces API arguments in the given expression with symbolic names.',
    },
    assignlatestvalue: {
        args: [
            { name: 'e: Expression', doc: 'the predicate expression with symbolic_name' },
            { name: 'replace: map[Expression] of Expression', doc: 'the map of literal values of non-argument variables' },
        ],
        ret: { type: 'Expression', doc: 'the replaced expression' },
        doc: 'Assigns literal values to non-argument variables in a precondition expression.',
    },
    normalize: {
        args: [
            { name: 'e: Expression', doc: 'the expression to be normalized' },
        ],
        ret: { type: 'Expression', doc: 'the normalized expression' },
        doc: 'Normalizes a given expression according to this algorithm:\n\nNormalizing expression -> (arg0 + 3 + arg3 -1 <= arg1 + 1 + 5)\n\nIteration 1:\nReduce step: arg0 + arg3 + 2 <= arg1 + 6\nMove step: arg0 + arg3 - arg1 <= 6 - 2\nMove Step == Reduce Step, False\n\nIteration 2:\nReduce step: arg0 + arg3 - arg1 <= 4\nMove step: arg0 + arg3 - arg1 <= 4\nMove Step == Reduce Step, True, therefore break\n\nSort Left side:\narg0 - arg1 + arg3 <= 4',
    },
    reduce: {
        args: [
            { name: 'e: Expression', doc: 'the expression to reduce' },
        ],
        ret: { type: 'Expression', doc: 'the reduced form of the expression' },
        doc: 'Attempts to reduce an expression, simplifying wherever possible.',
    },
    nnf: {
        args: [
            { name: 'e: Expression', doc: 'the expression to compute NNF on' },
        ],
        ret: { type: 'Expression', doc: 'the negated normal form of e, simplified' },
        doc: 'Computes the negated normal form of an expression and then simplifies the result.',
    },
    simplify: {
        args: [
            { name: 'e: Expression', doc: 'the expression to simplify' },
        ],
        ret: { type: 'Expression', doc: 'a simplified version of the expression' },
        doc: 'Simplifies an expression.',
    },
    cnf: {
        args: [
            { name: 'e: Expression', doc: 'the expression to compute CNF on' },
        ],
        ret: { type: 'Expression', doc: 'the conjunctive normal form of e, simplified' },
        doc: 'Computes the conjunctive normal form of an expression and then simplifies the result.',
    },
    dnf: {
        args: [
            { name: 'e: Expression', doc: 'the expression to compute DNF on' },
        ],
        ret: { type: 'Expression', doc: 'the disjunctive normal form of e, simplified' },
        doc: 'Computes the disjunctive normal form of an expression and then simplifies the result.',
    },
    prettyprint: {
        args: [
            { name: 'ast: dsl_type ', doc: 'the AST to pretty print' },
        ],
        ret: { type: 'string', doc: 'the AST, pretty printed back to source code' },
        doc: 'Pretty prints an `ast` back into source form. Depends on the current lang mode (see: setlang()).\n\nNote: that this process is approximate, so going from source -> AST -> source often produces difference strings, and sometimes may not even produce valid code. This is especially true if the lang mode that generated the AST does not match the current lang mode!',
    },
    has_visibility: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
            { name: 'v: Visibility ', doc: 'the Visibility modifier to test for' },
        ],
        ret: { type: 'bool', doc: 'if `v` is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a visiblity modifier `v` or not.',
    },
    has_modifier: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
            { name: 'm: ModifierKind ', doc: 'the modifier to test for' },
        ],
        ret: { type: 'bool', doc: 'if `m` is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a modifier `m` or not.',
    },
    has_modifier_final: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if FINAL is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a FINAL modifier or not.',
    },
    has_modifier_namespace: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if NAMESPACE is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a NAMESPACE modifier or not.',
    },
    has_modifier_private: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if PRIVATE is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a PRIVATE modifier or not.',
    },
    has_modifier_protected: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if PROTECTED is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a PROTECTED modifier or not.',
    },
    has_modifier_public: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if PUBLIC is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a PUBLIC modifier or not.',
    },
    has_modifier_static: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if STATIC is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a STATIC modifier or not.',
    },
    has_modifier_synchronized: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
        ],
        ret: { type: 'bool', doc: 'if SYNCHRONIZED is a modifier of the `ast`' },
        doc: 'Tests if an `ast` node has a SYNCHRONIZED modifier or not.',
    },
    has_annotation: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
            { name: 's: string?', doc: 'the annotation name' },
        ],
        ret: { type: 'bool', doc: 'if the `ast` has an annotation (with the name)' },
        doc: 'Tests if an `ast` node has an annotation. If a name is given, it must have an annotation with that name.',
    },
    get_annotation: {
        args: [
            { name: 'ast: Declaration|Method|Namespace|Variable', doc: 'the AST node to test' },
            { name: 's: string', doc: 'the annotation name' },
        ],
        ret: { type: 'Modifier', doc: 'the matching annotation, if any' },
        doc: 'Returns the annotation with that name, if any.',
    },
    getrevisionscount: {
        args: [
            { name: 'cr: CodeRepository', doc: '' },
        ],
        ret: { type: 'int', doc: '' },
        doc: 'Returns the total number of Revisions in `cr`, across all branches.',
    },
    getrevision: {
        args: [
            { name: 'cr: CodeRepository', doc: '' },
            { name: 'idx: int', doc: 'index into `cr`\'s revisions array' },
        ],
        ret: { type: 'Revision', doc: '' },
        doc: 'Returns a Revision from the CodeRepository `cr` at the given revision index `idx`.',
    },
    isboollit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a boolean literal.',
    },
    ischarlit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a char literal.',
    },
    isfloatlit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a float literal.',
    },
    isintlit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a int literal.',
    },
    isnulllit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a null literal.',
    },
    isstringlit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a string literal.',
    },
    istypelit: {
        args: [
            { name: 'e: Expression', doc: '' },
        ],
        ret: { type: 'bool', doc: '' },
        doc: 'Returns if the expression `e` is a type literal.',
    },
    type_name: {
        args: [
            { name: 's: string', doc: '' },
        ],
        ret: { type: 'string', doc: '' },
        doc: 'Returns the name of the type in a simplified form, without package/path qualifiers. If there are generics, they are also simplified.',
    },
    parse: {
        args: [
            { name: 's: string', doc: '' },
        ],
        ret: { type: 'ASTRoot', doc: '' },
        doc: 'Parses the string `s` and returns the parsed AST. On failure, an empty ASTRoot is returned. Depends on the current lang mode (see: setlang()).',
    },
    parseexpression: {
        args: [
            { name: 's: string', doc: '' },
        ],
        ret: { type: 'Expression', doc: '' },
        doc: 'Parses the expression string `s` and returns the parsed Expression. On failure, an empty Expression with kind OTHER is returned. Depends on the current lang mode (see: setlang()).',
    },
    getlang: {
        args: [
        ],
        ret: { type: 'FileKind', doc: '' },
        doc: 'Returns the current lang mode.',
    },
    setlang: {
        args: [
            { name: 'k: FileKind', doc: '' },
        ],
        ret: { type: '', doc: '' },
        doc: 'Sets the current lang mode. Language modes are set via a `FileKind`. The language mode will match whatever the particular file kind `k` would parse as. A language mode in Boa controls how various functions operate, including what language to attempt parsing raw strings as, what language to pretty print a tree back into, how helpers that determine kinds of literals match the literal string, etc.',
    },
};