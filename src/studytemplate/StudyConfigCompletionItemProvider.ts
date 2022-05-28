import * as vscode from 'vscode';
import { getDatasets } from '../boa';
import * as consts from '../consts';

/**
 * Provides intellisense completions for dataset names in the study-config.json file.
 */
export class StudyConfigCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem[]> {
        if (position.character >= 0) {
            // scope completions to just the "datasets" key
            const prefix = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
            const bracePos = prefix.lastIndexOf('{', prefix.length);

            if (bracePos > -1) {
                const matches = prefix.match(/"datasets"\s*:\s*{/);
                if (matches && matches.index + matches[0].length == bracePos + 1) {
                    return getDatasets().then((datasets) => {
                        const items = datasets.map((ds) => new vscode.CompletionItem(ds, vscode.CompletionItemKind.Text));
                        items.forEach((item) => item.insertText = '"' + (item.label as string).replace(consts.adminPrefix, '') + '"');
                        return Promise.resolve(items);
                    });
                }
            }
        }

        return [];
    }
}
