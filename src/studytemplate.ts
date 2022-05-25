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
import * as vscode from 'vscode';
import { getDatasets } from './boa';
import * as consts from './consts';

/**
 * Provides intellisense completions for dataset names in the study-config.json file.
 */
class StudyConfigCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem[]> {
        return getDatasets().then((datasets) => {
            const items = datasets.map((ds) => new vscode.CompletionItem(ds, vscode.CompletionItemKind.Text));
            items.forEach((item) => item.insertText = '"' + (item.label as string).replace(consts.adminPrefix, '') + '"');
            return Promise.resolve(items);
        });
    }
}

/**
 * Processes the study template's jobs.json file to make file paths and job numbers into links.
 */
class JobsJSONLinkProvider implements vscode.DocumentLinkProvider {
	provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.DocumentLink[] | undefined {
        const links = [];

        const jsonPath = document.uri.fsPath.substring(0, document.uri.fsPath.lastIndexOf('/'));

        // looks for query outputs, e.g.: "kotlin/rq1.txt": {
        for (const output of document.getText().matchAll(/"([^"]+\.txt)"/g)) {
            const range = new vscode.Range(document.positionAt(output.index + 1), document.positionAt(output.index + 1 + output[1].length));
            const link = new vscode.DocumentLink(range, vscode.Uri.parse(`file://${jsonPath}/${consts.outputPath}/${output[1]}`));
            link.tooltip = `View the Boa query output file '${consts.outputPath}/${output[1]}'`;
            links.push(link);
        }

        return links;
	}
}

/**
 * Processes the study template's study-config.json file to make file paths into links.
 */
class StudyConfigJSONLinkProvider implements vscode.DocumentLinkProvider {
	provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.DocumentLink[] | undefined {
        const links = [];

        const jsonPath = document.uri.fsPath.substring(0, document.uri.fsPath.lastIndexOf('/'));

        // looks for query outputs, e.g.: "kotlin/rq1.txt": {
        for (const output of document.getText().matchAll(/"([^"]+\.txt)"/g)) {
            const range = new vscode.Range(document.positionAt(output.index + 1), document.positionAt(output.index + 1 + output[1].length));
            const link = new vscode.DocumentLink(range, vscode.Uri.parse(`file://${jsonPath}/${consts.outputPath}/${output[1]}`));
            link.tooltip = `View the Boa query output file '${consts.outputPath}/${output[1]}'`;
            links.push(link);
        }

        // looks for queries, e.g.: "query": "queries/hashes.boa",
        for (const query of document.getText().matchAll(/"query":\s*"([^"]+\.boa)"/g)) {
            const startPos = query.index + query[0].length - query[1].length - 1;
            const range = new vscode.Range(document.positionAt(startPos), document.positionAt(startPos + query[1].length));
            const link = new vscode.DocumentLink(range, vscode.Uri.parse(`file://${jsonPath}/${consts.scriptPath}/${query[1]}`));
            link.tooltip = `View the Boa query '${consts.scriptPath}/${query[1]}'`;
            links.push(link);
        }

        // looks for CSV files, e.g.: "csv": "kotlin/dupes.csv"
        for (const csv of document.getText().matchAll(/"([^"]+\.csv)"/g)) {
            const range = new vscode.Range(document.positionAt(csv.index + 1), document.positionAt(csv.index + 1 + csv[1].length));
            const link = new vscode.DocumentLink(range, vscode.Uri.parse(`file://${jsonPath}/${consts.csvPath}/${csv[1]}`));
            link.tooltip = `View the Boa output CSV file '${consts.csvPath}/${csv[1]}'`;
            links.push(link);
        }

        // looks for replacement files, e.g.: "file": "escape.boa"
        for (const replacement of document.getText().matchAll(/"file":\s*"([^"]+\.boa)"/g)) {
            const startPos = replacement.index + replacement[0].length - replacement[1].length - 1;
            const range = new vscode.Range(document.positionAt(startPos), document.positionAt(startPos + replacement[1].length));
            const link = new vscode.DocumentLink(range, vscode.Uri.parse(`file://${jsonPath}/${consts.snippetPath}/${replacement[1]}`));
            link.tooltip = `View the Boa query output file '${consts.snippetPath}/${replacement[1]}'`;
            links.push(link);
        }

        return links;
	}
}

const jobsSelector: vscode.DocumentSelector = {
    language: 'json',
    scheme: 'file',
    pattern: '**/jobs.json',
};
const studyConfigSelector: vscode.DocumentSelector = {
    language: 'json',
    scheme: 'file',
    pattern: '**/study-config.json',
};

export function activateStudyTemplateSupport(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(jobsSelector, new JobsJSONLinkProvider()));
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider(studyConfigSelector, new StudyConfigJSONLinkProvider()));

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(studyConfigSelector, new StudyConfigCompletionItemProvider(), '\"'));
}