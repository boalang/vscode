# Boa VSCode Extension

## Installing Dependencies

Run `npm install` to download and locally install all development dependencies
for the extension.

## Building

The build system is configured to run a watcher.  If the watcher is not
running, open the command palette and run `Tasks: Run Build Task`.

That should start the watcher task.  You can verify the task is running by
looking in your terminal list.  There should be a `watch - tsconfig.json` task
in your list of open terminals.

Every time you save one of the `.ts` source files, the watcher should detect
the change and rebuild.

## Running the Exension

Press `F5` to run the extension in a new VSCode window.  Note that some
messages may print to the original VSCode window's debug console.  You can
debug it as you would any other application.

If you make changes to the source, go back to the running extension and press
`CTRL-R` to reload the window and pick up the new changes.
