# Change Log

## [0.3.3] - 2023-11-07
 - updates to the behavior of the job lists tree
   - refreshes automatically after a job run finishes
   - if the last-run job had an error, it expands the item
   - shows the filename the job was run from (note: this only caches the mapping for your current session)

## [0.3.2] - 2023-10-17
 - added a new sidebar view that shows an overview of the study template, listing the queries and analyses available, allowing for quickly navigating between them, and running them

## [0.3.1] - 2023-10-16
 - add new 'wizards' for adding new datasets, queries, and analyses to the study config, that can be triggered as commands or from code lenses
 - fix autocomplete breaking if a snippet file path failed to load

## [0.3.0] - 2023-06-07
 - now automatically updates the study-config.json (and jobs.json) if files are moved/renamed via the Explorer UI
 - study-config.json now immediately triggers a diagnostic recheck whenever files are renamed
 - improved rendering of hovers for output variables
 - now infers and displays in hovers the type of a call as the called function's return type
 - improved debugging support for CFG generation
 - fixed bug with codelense on CSV files in processor tags
 - fixes issues with hovers on variables that used type inference
 - fixes bug #45 - dont autocomplete Boa code if inside a comment

## [0.2.9] - 2022-12-02
 - better support for hovers - now when you hover types and variables, it provides information/documentation about it
 - improved auto-completion support for enum types
 - improved auto-completion support for tuple types
 - improved symbols support for enum types
 - improved symbols support for tuple types

## [0.2.8] - 2022-11-08
 - better code lens tooltips for study template (shows the make command)
 - renamed 'gen dupes' code lens to more generic 'run processor'
 - fixed the 'run processor' code lens using bad processor path
 - fixed issue with code lens/links not knowing if a Python file was an analysis or processor

## [0.2.7] - 2022-11-05
 - update Boa API to 0.2.1
 - better handling of Boa terms & conditions prompts
 - jobs lists now sorts based on job number

## [0.2.6] - 2022-10-21
 - better handling of login error messages, specifically if the user needs to agree to T&C
 - now when switching between Boa API endpoints, cleans up the cache and resets the job list
 - fixed some crashes in the document formatter
 - fixed a bug with symbol matching grabbing too much, which caused renaming symbols to rename too much

## [0.2.5] - 2022-09-28
 - document formatting now respects the documents EOL and indentation settings
 - added the ability to view any arbitrary job (by giving the job number)
 - added ability to only format selected text
 - improved document formatting for visit statements, traversals, and fixp functions
 - fixed a bug with opening processor files from the study config file
 - fixed a bug in document formatting of output variables with aggregator parameters
 - fixed a bug in document formatting of output variables with weights

## [0.2.4] - 2022-08-28
 - now only updates the jobs list if there is already a list shown
 - fixes bug #32 - code suggest the names of variables
 - added code completion for 'input.'
 - fix some code breaking if certain tabs (like PDF previews) are open
 - improved document formatting for functions, enums, and tuples
 - syntax highlight the 'type' keyword

## [0.2.3] - 2022-08-24
 - fixes bug #33 - switch cases did not allow variable declarations

## [0.2.2] - 2022-08-23
 - added missing documentation for CodeRepository/Revision attributes
 - improved code completion support
 - several bug fixes

## [0.2.1] - 2022-08-17
 - initial support for document formatting
 - adds diagnostics and quick fixes for bad template tags
 - updated built-in function documentation
 - better UDF support for signature helpers, including showing their return type
 - improved the refactoring support to ensure unique names
 - menu items now hide if the relevant job does not support that action
 - improved error messages
 - more permissive parsing for bad template tags
 - fixes bug with renaming template tags in dirty editors

## [0.2.0] - 2022-07-15
 - extension is no longer considered a preview
 - better support for method signature helpers, including user-defined functions
 - ability to rename template tags
 - added a rudimentary extract refactoring to make code snippet files
 - very rudimentary extract method support
 - added documentation for the traverse() function
 - template live previews now have errors synchronized to the preview
 - better handling of some syntax error messages

## [0.1.9] - 2022-07-14
 - switched to using ASTs to process queries
 - added syntax error marking as you type
 - added ability to rename identifiers
 - added ability to view symbols in the file
 - added ability to look up references/definition of an identifier
 - word highlighting now uses references, when available

## [0.1.8] - 2022-07-10
 - support for built-in functions, including: code completions, signature helpers, and function doc hovers
 - add ability to stop running jobs

## [0.1.7] - 2022-07-06
 - better handling of changing usernames/passwords
 - provides diagnostics for study-config.json
 - fixed a bug with live preview of templated queries

## [0.1.5] - 2022-07-05
 - connections to the Boa API are reused for better performance
 - better error handling of bad connections to the API
 - templated query previews now update live

## [0.1.4] - 2022-07-01
 - better window management, closes windows after deleting jobs
 - add ability to download outputs (vs just viewing them)
 - add way to more easiliy change API endpoints
 - add way to preview fully-substituted template queries

## [0.1.3] - 2022-06-25
 - first beta release of extension
 - now uses webpack for faster installs and loading
 - code completions for template substutitions were improved
 - somewhat better handling when there is no internet
 - clicking to view a job's public URL marks the job as public first (if needed)

## [0.1.2] - 2022-06-09
 - use newer Boa API and fix import issues breaking most features

## [0.1.0] - 2022-06-09
 - Initial release of Boa VS Code extension
