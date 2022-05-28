import * as vscode from 'vscode';

export class StudyConfigCodelensProvider implements vscode.CodeLensProvider {
    public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
        const lenses = [];
        const docPath = document.uri.fsPath.substring(0, document.uri.fsPath.lastIndexOf('/'));

        // looks for query outputs, e.g.: "kotlin/rq1.txt": {
        for (const output of document.getText().matchAll(/"([^"]+\.txt)"\s*:\s*{/g)) {
            const range = new vscode.Range(document.positionAt(output.index + 1), document.positionAt(output.index + 1 + output[1].length));
            const lense = new vscode.CodeLens(range, {
                title: "$(cloud-download) Download Output",
                tooltip: "Make sure this output is up to date and downloaded",
                command: "boalang.downloadOutput",
                arguments: [output[1]]
            });
            lenses.push(lense);
        }

        // looks for CSV files, e.g.: "csv": "kotlin/dupes.csv"
        for (const csv of document.getText().matchAll(/"([^"]+\.csv)"/g)) {
            const range = new vscode.Range(document.positionAt(csv.index + 1), document.positionAt(csv.index + 1 + csv[1].length));
            const lense = new vscode.CodeLens(range, {
                title: "$(table) Generate CSV",
                tooltip: "Generates the CSV output - this might trigger a download on the input",
                command: "boalang.generateCSV",
                arguments: [csv[1]]
            });
            lenses.push(lense);
        }

        // looks for dupes output files, e.g.: "output": "kotlin/dupes.txt",
        for (const output of document.getText().matchAll(/"output"\s*:\s*"([^"]+\.txt)"/g)) {
            const range = new vscode.Range(document.positionAt(output.index + 1), document.positionAt(output.index + 1 + output[1].length));
            const lense = new vscode.CodeLens(range, {
                title: "$(list-filter) Generate Dupes",
                tooltip: "Generates the Dupes output - this might trigger a download on the input",
                command: "boalang.generateDupes",
                arguments: [output[1]]
            });
            lenses.push(lense);
        }

        // looks for analyses, e.g.: "rq1.py": {
        for (const target of document.getText().matchAll(/"([^"]+)\.py"\s*:/g)) {
            const range = new vscode.Range(document.positionAt(target.index + 1), document.positionAt(target.index + 1 + target[1].length));
            const lense = new vscode.CodeLens(range, {
                title: "$(play) Run Analysis",
                tooltip: "Runs the selected analysis script - this will download all inputs",
                command: "boalang.runAnalysis",
                arguments: [target[1]]
            });
            lenses.push(lense);
        }

        return lenses;
    }
}
