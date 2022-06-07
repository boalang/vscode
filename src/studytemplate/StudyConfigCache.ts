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
import { snippetPath, studyConfigFile } from '../consts';
import { getWorkspaceRoot } from '../utils';

class StudyConfigCache {
    private _json: object;
    private watcher: vscode.FileSystemWatcher;

    constructor() {
        // watch study-config.json for changes, then refresh the cached JSON
        this.watcher = vscode.workspace.createFileSystemWatcher(getWorkspaceRoot() + '/' + studyConfigFile);
        this.watcher.onDidChange(this.updateJSON.bind(this));
        this.watcher.onDidCreate(this.updateJSON.bind(this));
        this.watcher.onDidDelete(this.updateJSON.bind(this));

        this.updateJSON();
    }

    get json() {
        return this._json;
    }

    private substitutions = null;
    getSubstitutions() {
        if (this.substitutions !== null) {
            return this.substitutions;
        }

        this.substitutions = { substitutions: {} };

        for (const output in this._json['queries']) {
            const query = this._json['queries'][output];
            const items = {};
            for (const idx in query['substitutions']) {
                const subst = query['substitutions'][idx];
                items[subst['target']] = { subst: subst, output: output };
            }
            this.substitutions[query['query']] = items;
        }

        for (const idx in this._json['substitutions']) {
            const subst = this._json['substitutions'][idx];
            this.substitutions.substitutions[subst['target']] = { subst: subst, output: undefined };
        }

        return this.substitutions;
    }

    renderSubstitution(replacement, local: string|undefined) {
        let scope = '';

        let content = '';
        if (replacement.hasOwnProperty('file')) {
            const path = getWorkspaceRoot() + '/' + snippetPath + '/' + replacement['file'];
            const file = 'file://' + path;
            content = this.getFileSnippet(path, 10);
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

    private getFileSnippet(path: string, limit: number): string {
        let lines = [];
        let acc = '';

        const contents = fs.readFileSync(path).toString();
        return contents;
        // let rs = fs.createReadStream(path, {encoding: 'utf8'});
        // return new Promise((resolve, reject) =>
        //     rs.on('data', function (chunk: string) {
        //         acc += chunk;
        //         let parts = chunk.split('\n', limit - lines.length);
        //         parts.forEach(l => lines.push(l));
        //         if (lines.length === limit) {
        //             rs.close();
        //         }
        //     }).on('close', function () {
        //         let content = lines.join('\n');
        //         if (acc.trim().length > content.trim().length) {
        //             content += '\n...';
        //         }
        //         return resolve(content);
        //     }).on('error', function (err) {
        //         return resolve(`*Error loading file contents: ${err}.*`);
        //     }));
    }

    private updateJSON() {
        try {
            this._json = JSON.parse(fs.readFileSync(getWorkspaceRoot() + '/' + studyConfigFile).toString());
        } catch (e) {
            this._json = {};
        }

        this.substitutions = null;
    }
}

export const cache = new StudyConfigCache();
