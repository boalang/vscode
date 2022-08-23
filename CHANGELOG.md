# Change Log

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
