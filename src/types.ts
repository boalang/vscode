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

export const builtinVars = {
    input: { type: 'Project', help: 'Set to each successive input `Project`. Boa programs process a single `Project` at a time, and then emit data to output variables for further aggregation.' }
};

interface IFunctionArg {
    name: string,
    help: string,
}

interface IReturnType {
    type: string,
    help: string,
}

interface IFunction {
    args: IFunctionArg[],
    ret: IReturnType,
    help: string,
}

export const builtinFunctions: { [name: string]: IFunction } = {
    current: {
        args: [
            { name: 'T', help: 'the domain-specific type to match' },
        ],
        ret: { type: ': T', help: 'the nearest ancesor of type T' },
        help: 'Returns the nearest ancesor in the tree whose type is T.',
    },
    visit: {
        args: [
            { name: 'n: T', help: 'a node to visit' },
            { name: 'v: visitor?', help: 'the visitor to use' },
        ],
        ret: { type: '', help: '' },
        help: 'Visits the tree rooted at `n` with the visitor `v`. If no visitor is given, the current visitor is used.',
    },
    pop: {
        args: [
            { name: 's: stack of val_type', help: 'the stack to pop' },
        ],
        ret: { type: ': val_type', help: 'the value from the top of the stack' },
        help: 'Pops the last value off the stack `s` and returns it.',
    },
    push: {
        args: [
            { name: 's: stack of val_type', help: 'the stack to pop' },
            { name: 'val: val_type', help: 'the value to push' },
        ],
        ret: { type: ': ', help: '' },
        help: 'Pushes the value `val` onto the stack `s`.',
    },
    bool: {
        args: [
            { name: 'v: basic_type', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Converts the value `v` into a boolean value.',
    },
    time: {
        args: [
            { name: 'v: basic_type', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Converts the value `v` into a time value.',
    },
    string: {
        args: [
            { name: 'v: basic_type', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Converts the value `v` into a string value.',
    },
    int: {
        args: [
            { name: 'v: basic_type', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'Converts the value `v` into an int value.',
    },
    float: {
        args: [
            { name: 'v: basic_type', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'Converts the value `v` into a float value.',
    },
    trim: {
        args: [
            { name: 'str: string', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Returns a copy of the given string `str` with all leading and trailing whitespace removed.',
    },
    lowercase: {
        args: [
            { name: 'str: string', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Returns a copy of the given string `str` with all characters lower-cased.',
    },
    uppercase: {
        args: [
            { name: 'str: string', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Returns a copy of the given string `str` with all characters upper-cased.',
    },
    substring: {
        args: [
            { name: 'str: string', help: '' },
            { name: 'start: int', help: '' },
            { name: 'end: int?', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Returns a substring of `str` starting at `start` (inclusive) and ending at `end` (exclusive). If `end` is not specified, the length of the string is used.',
    },
    strfind: {
        args: [
            { name: 'needle: string', help: '' },
            { name: 'haystack: string', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'Search for the first occurrence of the `needle` within `haystack` and return the integer index of its first character, or -1 if it does not occur.',
    },
    strrfind: {
        args: [
            { name: 'needle: string', help: '' },
            { name: 'haystack: string', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'Search for the last occurrence of the `needle` within `haystack` and return the integer index of its first character, or -1 if it does not occur.',
    },
    strreplace: {
        args: [
            { name: 'haystack: string', help: '' },
            { name: 'needle: string', help: '' },
            { name: 'replacement: string', help: '' },
            { name: 'replace_all: bool', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Return a copy of string `haystack`, with non-overlapping instances of `needle` replaced by `replacement`. If `replace_all` is false, only the first found instance is replaced.',
    },
    match: {
        args: [
            { name: 'regex: string', help: '' },
            { name: 'str: string', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Search for a match of the regular expression `regex` within `str` , and return a boolean value indicating whether a match was found.',
    },
    matchposns: {
        args: [
            { name: 'regex: string', help: '' },
            { name: 'str: string', help: '' },
        ],
        ret: { type: ': array of int', help: '' },
        help: 'Search for a match of the regular expression `regex` within `str`, and return an array consisting of character positions within `str` defined by the match. Positions 0 and 1 of the array report the location of the match of the entire expression, subsequent pairs report the location of matches of successive parenthesized subexpressions.',
    },
    matchstrs: {
        args: [
            { name: 'regex: string', help: '' },
            { name: 'str: string', help: '' },
        ],
        ret: { type: ': array of string', help: '' },
        help: 'Search for a match of the regular expression `regex` within `str`, and return. The 0th string is the entire match; following elements of the array hold matches of successive parenthesized subexpressions. This function is equivalent to using matchposns to find successive locations of matches and created array slices of `str` with the indices returned.',
    },
    split: {
        args: [
            { name: 's: string', help: '' },
            { name: 'regex: string', help: '' },
        ],
        ret: { type: ': array of string', help: '' },
        help: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression exactly once.',
    },
    splitn: {
        args: [
            { name: 'n: int', help: '' },
            { name: 's: string', help: '' },
            { name: 'regex: string', help: '' },
        ],
        ret: { type: ': array of string', help: '' },
        help: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression at most `n` times.',
    },
    splitall: {
        args: [
            { name: 's: string', help: '' },
            { name: 'regex: string', help: '' },
        ],
        ret: { type: ': array of string', help: '' },
        help: 'Slice string `s` into pieces according to subsequent matches of the regular expression `regex`. Runs along the regular expression until the input string is exhausted.',
    },
    regex: {
        args: [
            { name: 't: any_type', help: '' },
            { name: 'base: int', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Returns a `string` holding a regular expression suitable for matching text representing values of the specified type `t`. For example, `regex(int)` generates a `string` to match integer constants (-23, 0x1f, etc.).  At the moment, only `int` and `float` types are supported. When the type is `int`, an optional numerical `base` may be specified for the conversion.',
    },
    format: {
        args: [
            { name: 'format: string', help: '' },
            { name: 'args: string', help: '' },
            { name: '...', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Return a string containing the arguments formatted according to the `format` string. The syntax of the format string is essentially that of ANSI C with the following differences:\n* %b prints a boolean, "true" or "false".\n* %c prints a (u)int as a Unicode character in UTF-8.\n* %k like %c with single quotes and backslash escapes for special characters.\n* %s prints a string as UTF-8.\n* %q like %s with double quotes and backslash escapes for special characters.\n* %t prints a time, in the format of the Unix function ctime without a newline.\n* %T prints the type of the argument; %#T expands user-defined types.\n* %d / %i / %o / %u / %x / %X apply to a (u)int and have no \'l\' or \'h\' modifiers.\n* %e / %f / %g / %E / %G apply to a float and have no \'l\' or \'h\' modifiers.\n\nFormat verbs \'n\' and \'*\' are not supported.',
    },
    new: {
        args: [
            { name: 'a: array of basic_type', help: '' },
            { name: 'n: int', help: '' },
            { name: 'v: basic_type', help: '' },
        ],
        ret: { type: ': array of basic_type', help: '' },
        help: 'Returns a new array of the same type as `a`, of size `n`, and with all elements initialized to the value `v`.',
    },
    sort: {
        args: [
            { name: 'a: array of basic_type', help: '' },
        ],
        ret: { type: ': array of basic_type', help: '' },
        help: 'Returns the sorted version of an array. Only scalar values can be sorted. Values will be arranged in increasing order.',
    },
    offer: {
        args: [
            { name: 'q: queue of val_type', help: '' },
            { name: 'val: val_type', help: '' },
        ],
        ret: { type: '', help: '' },
        help: 'Offers the value `val` to the queue `q`.',
    },
    poll: {
        args: [
            { name: 'q: queue of val_type', help: '' },
        ],
        ret: { type: ': val_type', help: '' },
        help: 'Polls the queue `q` and removes the oldest value and returns it.',
    },
    clear: {
        args: [
            { name: 'c: map[key_type] of val_type|set of val_type|stack of val_type|queue of val_type', help: '' },
        ],
        ret: { type: '', help: '' },
        help: 'Clears all values from `c`.',
    },
    peek: {
        args: [
            { name: 'q: queue of val_type|stack of val_type', help: '' },
        ],
        ret: { type: ': val_type', help: '' },
        help: 'Returns the latest value on the queue `q`/stack `s` without removing it.',
    },
    symdiff: {
        args: [
            { name: 's1: set of val_type', help: '' },
            { name: 's2: set of val_type', help: '' },
        ],
        ret: { type: ': set of val_type', help: '' },
        help: 'Equivalent to `union(difference(s1, s2), difference(s2, s1))`.',
    },
    difference: {
        args: [
            { name: 's1: set of val_type', help: '' },
            { name: 's2: set of val_type', help: '' },
        ],
        ret: { type: ': set of val_type', help: '' },
        help: 'Returns the set `s1` with all values from `s2` removed.',
    },
    intersect: {
        args: [
            { name: 's1: set of val_type', help: '' },
            { name: 's2: set of val_type', help: '' },
        ],
        ret: { type: ': set of val_type', help: '' },
        help: 'Returns a set containing all values in both the sets `s1` and `s2`.',
    },
    union: {
        args: [
            { name: 's1: set of val_type', help: '' },
            { name: 's2: set of val_type', help: '' },
        ],
        ret: { type: ': set of val_type', help: '' },
        help: 'Returns a set containing all values in either the set `s1` or the set `s2`.',
    },
    add: {
        args: [
            { name: 's: set of val_type', help: '' },
            { name: 'v: val_type', help: '' },
        ],
        ret: { type: '', help: '' },
        help: 'Adds the value `v` to the set.',
    },
    contains: {
        args: [
            { name: 's: set of val_type', help: '' },
            { name: 'v: val_type', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Returns if the set contains the value `v`.',
    },
    containsall: {
        args: [
            { name: 's1: set of val_type', help: '' },
            { name: 's2: set of val_type', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Returns if the set `s1` contains all of the values in set `s2`.',
    },
    clone: {
        args: [
            { name: 'c: set of val_type|map[key_type] of val_type', help: '' },
        ],
        ret: { type: '', help: '' },
        help: 'Creates a clone of the collection `c`.',
    },
    haskey: {
        args: [
            { name: 'm: map[key_type] of val_type', help: '' },
            { name: 'key: key_type', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Return a boolean reporting whether the `key` is present in the map `m`.',
    },
    // TODO fix this
    // remove: {
    //     args: [
    //         { name: 's: set of val_type', help: '' },
    //         { name: 'v: val_type', help: '' },
    //     ],
    //     help: 'Removes the value `v` from the set, if it contains it.',
    // },
    // remove: {
    //     args: [
    //         { name: 'm: map[key_type] of val_type', help: '' },
    //         { name: 'k: key_type', help: '' },
    //     ],
    //     help: 'Removes the entry for the key `k`, if it exists in the map.',
    // },
    keys: {
        args: [
            { name: 'm: map[key_type] of val_type', help: '' },
        ],
        ret: { type: ': array of key_type', help: '' },
        help: 'Return an array holding, in no particular order, the set of keys present in the map `m`.',
    },
    values: {
        args: [
            { name: 'c: stack of val_type|queue of val_type|set of val_type|map[key_type] of val_type', help: '' },
        ],
        ret: { type: ': array of val_type', help: '' },
        help: 'Return an array holding (possibly in no particular order) the values present in `c`.',
    },
    lookup: {
        args: [
            { name: 'm: map[key_type] of val_type', help: '' },
            { name: 'key: key_type', help: '' },
            { name: 'value: val_type', help: '' },
        ],
        ret: { type: ': val_type', help: '' },
        help: 'Return the element of the map `m` indexed by the `key` or, if there is no such element, the specified default `value`. Assuming the map, key, and value are defined, equivalent to: `def(m[key]) ? m[key] : value`',
    },
    rand: {
        args: [],
        ret: { type: ': float', help: '' },
        help: 'Return a random floating point number `x` in the range 0.0 &lt; `x` &lt; 1.0.',
    },
    nrand: {
        args: [
            { name: 'n: int', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'Return a random integer `x` in the range 0 &lt;= `x` &lt; `n`.',
    },
    isnan: {
        args: [
            { name: 'n: float', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Tests if the value `n` is `NaN`.',
    },
    isinf: {
        args: [
            { name: 'n: float', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Tests if the value `n` is `Inf`.',
    },
    isfinite: {
        args: [
            { name: 'n: float', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Tests if the value `n` is not `Inf` and not `NaN`.',
    },
    isnormal: {
        args: [
            { name: 'n: float', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Tests if the value `n` is neither 0, subnormal, `Inf`, or `NaN`.',
    },
    highbit: {
        args: [
            { name: 'n: int', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'Return an integer representing the bit position of the highest one bit in `n`. If `n` is zero, the result is 0; if `n` is 1, the result is 1, if `n` is 15, the result is 4, etc.',
    },
    abs: {
        args: [
            { name: 'x: type', help: '' },
        ],
        ret: { type: ': type', help: '' },
        help: 'Return the absolute value of the argument. The type must be one of `int` or `float`.',
    },
    log: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The natural logarithm of `x`.',
    },
    log10: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The logarithm base 10 of `x`.',
    },
    exp: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The exponential, base `e`, of `x`.',
    },
    pow: {
        args: [
            { name: 'x: float', help: '' },
            { name: 'y: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The exponential, base `x`, of `y`.',
    },
    sqrt: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The square root of `x`.',
    },
    sin: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The sine of `x`.',
    },
    cos: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The cosine of `x`.',
    },
    tan: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The tangent of `x`.',
    },
    asin: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The arc sine of `x`.',
    },
    acos: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The arc cosine of `x`.',
    },
    atan: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The arc tangent of `x`.',
    },
    atan2: {
        args: [
            { name: 'x: float', help: '' },
            { name: 'y: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The arc tangent of `y`/`x`.',
    },
    sinh: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The hyperbolic sine of `x`.',
    },
    cosh: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The hyperbolic cosine of `x`.',
    },
    tanh: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The hyperbolic tangent of `x`.',
    },
    asinh: {
        args: [
            { name: 'd: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The hyperbolic arc sine function.',
    },
    acosh: {
        args: [
            { name: 'd: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The hyperbolic arc cosine function.',
    },
    atanh: {
        args: [
            { name: 'd: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'The hyperbolic arc tangent function.',
    },
    ceil: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'Round `x` up to the nearest integer.',
    },
    floor: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'Round `x` down to the nearest integer.',
    },
    round: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'Round `x` to the nearest integer, but round halfway cases away from zero.',
    },
    trunc: {
        args: [
            { name: 'x: float', help: '' },
        ],
        ret: { type: ': float', help: '' },
        help: 'Round to the nearest integer not larger in absolute value than `x`.',
    },
    min: {
        args: [
            { name: 'v1: type', help: '' },
            { name: 'v2: type', help: '' },
        ],
        ret: { type: ': type', help: '' },
        help: 'Return the minimum of `v1` and `v2`. The type must be one of `int`, `time`, `string`, or `float`.',
    },
    max: {
        args: [
            { name: 'v1: type', help: '' },
            { name: 'v2: type', help: '' },
        ],
        ret: { type: ': type', help: '' },
        help: 'Return the maximum of `v1` and `v2`. The type must be one of `int`, `time`, `string`, or `float`.',
    },
    now: {
        args: [],
        ret: { type: ': time', help: '' },
        help: 'Return the current time at the moment of execution. Note that the time value returned does not depend on a timezone.',
    },
    formattime: {
        args: [
            { name: 'format: string', help: '' },
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Return a string containing the time argument formatted according to the `format` string. The syntax of the format string is the same as in ANSI C strftime. An optional third argument names a `timezone`.',
    },
    addday: {
        args: [
            { name: 't: time', help: '' },
            { name: 'n: int', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Return the time, `n` days after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addweek: {
        args: [
            { name: 't: time', help: '' },
            { name: 'n: int', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Return the time, `n` weeks after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addmonth: {
        args: [
            { name: 't: time', help: '' },
            { name: 'n: int', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Return the time, `n` months after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    addyear: {
        args: [
            { name: 't: time', help: '' },
            { name: 'n: int', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Return the time, `n` years after the given time `t`. The value of `n` may be negative, or `n` may be absent altogether, in which case `n` defaults to 1. An optional third argument gives the `timezone`.',
    },
    dayofmonth: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric day of the month; for January 17, return 17, etc. An optional second argument names a `timezone`.',
    },
    dayofweek: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric day of the week, from Monday=1 to Sunday=7. An optional second argument names a `timezone`.',
    },
    dayofyear: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric day of the year. January 1 is day 1. An optional second argument names a `timezone`.',
    },
    secondof: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric second of the minute, from 0 to 59. An optional second argument names a `timezone`.',
    },
    minuteof: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric minute of the hour, from 0 to 59. An optional second argument names a `timezone`.',
    },
    hourof: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric hour of the day, from 0 to 23. Midnight is 0, 1AM is 1, etc. An optional second argument names a `timezone`.',
    },
    monthof: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric month of the year. January is 1. An optional second argument names a `timezone`.',
    },
    yearof: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The numeric year value, such as 2003. An optional second argument names a `timezone`.',
    },
    trunctosecond: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Truncate `t` to the zeroth microsecond of the second. An optional second argument names a `timezone`.',
    },
    trunctominute: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Truncate `t` to the zeroth microsecond of the minute. An optional second argument names a `timezone`.',
    },
    trunctohour: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Truncate `t` to the zeroth microsecond of the hour. An optional second argument names a `timezone`.',
    },
    trunctoday: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Truncate `t` to the zeroth microsecond of the day. Useful when creating variables indexed to a particular day, since all times in the day truncated with trunctoday will fold to the same value, which is the first time value in that day. An optional second argument names a `timezone`.',
    },
    trunctomonth: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Truncate `t` to the zeroth microsecond of the month. An optional second argument names a `timezone`.',
    },
    trunctoyear: {
        args: [
            { name: 't: time', help: '' },
            { name: 'timezone: string?', help: '' },
        ],
        ret: { type: ': time', help: '' },
        help: 'Truncate `t` to the zeroth microsecond of the year. An optional second argument names a `timezone`.',
    },
    hash: {
        args: [
            { name: 'v: any_type', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'The hash function returns a hash of the argument `v`, which may be of any type.',
    },
    len: {
        args: [
            { name: 'v: any_type', help: '' },
        ],
        ret: { type: ': int', help: '' },
        help: 'Return the number of elements in `v`, which must be an `array` or `map` or of type `string`.\n\n* If `string`, the value is the number of Unicode characters in the string.\n* If a `map`, the value is the number of distinct keys present.',
    },
    def: {
        args: [
            { name: 'v: any_type', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Returns a boolean value according to whether `v` has a defined value.',
    },
    dot: {
        args: [
            { name: 'g: graph', help: '' },
        ],
        ret: { type: ': string', help: '' },
        help: 'Returns a string representation of the graph `g`, in Graphviz DOT format.',
    },
    getvalue: {
        args: [
            { name: 'n: graph_node', help: '' },
            { name: 't: traversal?', help: '' },
        ],
        ret: { type: ': T', help: '' },
        help: 'Returns the value associated with the graph node `n` for the current traversal, or the optional traversal `t`. The type of the value returned depends on the return type of the traversal.',
    },
    getcfg: {
        args: [
            { name: 'm: Method', help: '' },
        ],
        ret: { type: ': CFG', help: '' },
        help: 'Returns a control-flow graph (`CFG`) for the given Method `m`.',
    },
    getcdg: {
        args: [
            { name: 'm: Method', help: '' },
        ],
        ret: { type: ': CDG', help: '' },
        help: 'Returns a control-dependence graph (`CDG`) for the given Method `m`.',
    },
    getddg: {
        args: [
            { name: 'm: Method', help: '' },
        ],
        ret: { type: ': DDG', help: '' },
        help: 'Returns a data-dependence graph (`DDG`) for the given Method `m`.',
    },
    getpdg: {
        args: [
            { name: 'm: Method', help: '' },
        ],
        ret: { type: ': PDG', help: '' },
        help: 'Returns a program-dependence graph (`PDG`) for the given Method `m`.',
    },
    getinedge: {
        args: [
            { name: 'node1: graph_node', help: '' },
            { name: 'node2: graph_node', help: '' },
        ],
        ret: { type: ': graph_edge', help: '' },
        help: 'Returns a graph edge (`CFGEdge`, `CDGEdge`, `DDGEdge`, or `PDGEdge`) from `node2` to `node1`, if such edge exists. If no such edge exists it returns a `NIL` edge. The two nodes `node1` and `node2` must be the same type of node.',
    },
    getoutedge: {
        args: [
            { name: 'node1: graph_node', help: '' },
            { name: 'node2: graph_node', help: '' },
        ],
        ret: { type: ': graph_edge', help: '' },
        help: 'Returns a graph edge (`CFGEdge`, `CDGEdge`, `DDGEdge`, or `PDGEdge`) from `node1` to `node2`, if such edge exists. If no such edge exists it returns a `NIL` edge. The two nodes `node1` and `node2` must be the same type of node.',
    },
    getast: {
        args: [
            { name: 'file: ChangedFile', help: '' },
        ],
        ret: { type: ': ASTRoot', help: '' },
        help: 'Returns the `ASTRoot` of the specified `file`, if it exists. Otherwise returns an empty `ASTRoot`.',
    },
    getsnapshot: {
        args: [
            { name: 'cr: CodeRepository', help: '' },
            { name: 't: time?', help: '' },
            { name: 'filters: string...', help: '' },
        ],
        ret: { type: ': array of ChangedFile', help: '' },
        help: 'Returns a snapshot of `ChangedFile`s.  A snapshot is the last version of a file before a given time `t` (if no time is given, `now()` is used).  If any `filters` are given, they are used to filter out files.  The file kind is checked against each string and must match one or more filters.  Matches are performed by comparing the filter against the start of the file kind.\n\n```boalang\ngetsnapshot := function(cr: CodeRepository, t: time, filters: array of string) : array of ChangedFile {\n\tsnapshot: map[string] of ChangedFile;\n\n\tvisit(cr, visitor {\n\t\tbefore node: Revision ->\n\t\t\tif (node.commit_date > t)\n\t\t\t\tstop;\n\t\tbefore node: ChangedFile -> {\n\t\t\tif (node.change == ChangeKind.DELETED) {\n\t\t\t\tremove(snapshot, node.name);\n\t\t\t} else {\n\t\t\t\tfilter := len(filters) > 0;\n\n\t\t\t\texists (i: int; iskind(filters[i], node.kind))\n\t\t\t\t\tfilter = false;\n\n\t\t\t\tif (!filter)\n\t\t\t\t\tsnapshot[node.name] = node;\n\t\t\t}\n\t\t\tstop;\n\t\t}\n\t});\n\n\treturn values(snapshot);\n};\n```',
    },
    hasfiletype: {
        args: [
            { name: 'data: dsl_type', help: '' },
            { name: 'extension: string', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Does the `data` contain a file of the specified type? This compares based on the given file `extension`. Valid `dsl_type`s are: `Project`, `CodeRepository`, and `Revision`.\n\n```boalang\nhasfiletype := function(rev: Revision, ext: string) : bool {\n\texists (i: int; match(format(`\\.%s$`, ext), lowercase(rev.files[i].name)))\n\t\treturn true;\n\treturn false;\n};\n```',
    },
    isfixingrevision: {
        args: [
            { name: 'log: string|Revision', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Is the given `log` message indicating it is a fixing revision? A message is considered indicating a bug fix if it matches a set of regular expressions.\n\n```boalang\nisfixingrevision := function(log: string) : bool {\n\tif (match(`\bfix(s|es|ing|ed)?\b`, log)) return true;\n\tif (match(`\b(error|bug|issue)(s)\b`, log)) return true;\n\treturn false;\n};\n```\n\n```boalang\nisfixingrevision := function(rev: Revision) : bool {\n\treturn isfixingrevision(rev.log);\n};\n```',
    },
    // TODO fix this
    // isfixingrevision: {
    //     args: [
    //         { name: 'rev: Revision', help: '' },
    //     ],
    //     ret: { type: ': bool', help: '' },
    //     help: 'Is the given revision `rev`\'s log message indicating it is a fixing revision? A message is considered indicating a bug fix if it matches a set of regular expressions.',
    // },
    iskind: {
        args: [
            { name: 's: string', help: '' },
            { name: 'k: dsl_type', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Returns `true` if the kind `k` starts with the string `s`. Valid `dsl_type`s are: `FileKind`.\n\n```boalang\niskind := function(s: string, k: FileKind) : bool {\n\treturn match(format(`^%s`, s), string(k));\n};\n```',
    },
    isliteral: {
        args: [
            { name: 'e: Expression', help: '' },
            { name: 's: string', help: '' },
        ],
        ret: { type: ': bool', help: '' },
        help: 'Returns `true` if the expression `e` is of kind LITERAL and the literal matches the string `s`.\n\n```boalang\nisliteral := function(e: Expression, s: string) : bool {\n\treturn e.kind == ExpressionKind.LITERAL && def(e.literal) && e.literal == s;\n};\n```',
    },
};