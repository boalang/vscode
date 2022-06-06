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
import * as fs from 'fs';
import { snippetPath } from '../consts';
import { getWorkspaceRoot } from '../utils';
import { cache } from './StudyConfigCache';

export default class SubstitutionHoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position, /<<[^>]+>>/);
        if (!range) return undefined;
        const word = document.getText(range);

        const hovers = [];

        const substitutions = cache.getSubstitutions();
        for (const filename in substitutions) {
            if (document.fileName.endsWith(filename)) {
                const sub = substitutions[filename][word];
                if (sub) {
                    hovers.push(await this.buildHover(sub.subst, sub.output));
                }
            }
        }
        
        const sub = substitutions.substitutions[word];
        if (sub) {
            hovers.push(await this.buildHover(sub.subst, sub.output));
        }

        if (hovers.length == 0) return new vscode.Hover(new vscode.MarkdownString('$(error) No substitution is defined for this template variable.', true));

        return new vscode.Hover(new vscode.MarkdownString(hovers.join('\n\n----\n\n'), true));
    }

    private async buildHover(replacement, local: string|undefined) {
        let scope = '';

        let content = '';
        if (replacement.hasOwnProperty('file')) {
            const path = getWorkspaceRoot() + '/' + snippetPath + '/' + replacement['file'];
            const file = 'file://' + path;
            content = await this.getFileSnippet(path, 10);
            scope += `[view included file](${file})\\\n`;
        } else {
            content = replacement['replacement'];
            if (content.trim().length == 0) {
                content = '# template is empty';
            }
        }

        if (local) {
            scope += `**[scope: $(file) ${local}]**`;
        } else {
            scope += `**[scope: $(globe) global]**`;
        }

        return `\`\`\`\`boalang\n${content}\n\`\`\`\`\n\n----\n\n${scope}`;
    }

    private async getFileSnippet(path: string, limit: number): Promise<string> {
        let lines = [];
        let acc = '';

        let rs = fs.createReadStream(path, {encoding: 'utf8'});
        return new Promise((resolve, reject) =>
            rs.on('data', function (chunk: string) {
                acc += chunk;
                let parts = chunk.split('\n', limit - lines.length);
                parts.forEach(l => lines.push(l));
                if (lines.length === limit) {
                    rs.close();
                }
            }).on('close', function () {
                let content = lines.join('\n');
                if (acc.trim().length > content.trim().length) {
                    content += '\n...';
                }
                return resolve(content);
            }).on('error', function (err) {
                return resolve(`*Error loading file contents: ${err}.*`);
            }));
    }
}