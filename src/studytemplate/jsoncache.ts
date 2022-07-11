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
import { snippetPath, studyConfigFile } from '../consts';
import { getFileContents, getWorkspaceRoot } from '../utils';

class StudyConfigCache {
    onDidChangeEmitter = new vscode.EventEmitter<StudyConfigCache>();
    onDidChange = this.onDidChangeEmitter.event;

    private _json: object;
    private _raw: string;

    private watcher: vscode.FileSystemWatcher;
    private _file: string;

    constructor() {
        this._file = getWorkspaceRoot() + '/' + studyConfigFile;

        // watch study-config.json for changes, then refresh the cached JSON
        this.watcher = vscode.workspace.createFileSystemWatcher(this._file);
        this.watcher.onDidChange(this.updateJSON.bind(this));
        this.watcher.onDidCreate(this.updateJSON.bind(this));
        this.watcher.onDidDelete(this.updateJSON.bind(this));

        this.updateJSON();
    }

    get filename() {
        return this._file;
    }

    get uri() {
        return vscode.Uri.file(this._file);
    }

    get json() {
        return this._json ? this._json : { };
    }

    get raw() {
        return this._raw;
    }

    private datasets: string[] = null;
    getDatasets() {
        if (this.datasets === null) {
            if (!this.json.hasOwnProperty('datasets')) {
                return [];
            }
            this.datasets = Object.keys(this.json['datasets']);
        }

        return this.datasets;
    }

    private substitutions = null;
    getSubstitutions() {
        if (this.substitutions !== null) {
            return this.substitutions;
        }

        this.substitutions = { substitutions: {} };

        for (const output in this.json['queries']) {
            const query = this.json['queries'][output];
            const items = {};
            for (const idx in query['substitutions']) {
                const subst = query['substitutions'][idx];
                items[subst['target']] = { subst: subst, output: output };
            }
            if (Object.keys(items).length > 0) {
                if (!this.substitutions[query['query']]) {
                    this.substitutions[query['query']] = [];
                }
                this.substitutions[query['query']].push(items);
            }
        }

        for (const idx in this.json['substitutions']) {
            const subst = this.json['substitutions'][idx];
            this.substitutions.substitutions[subst['target']] = { subst: subst, output: undefined };
        }

        return this.substitutions;
    }

    async resolveSubstitutions(filename) {
        const subDefinitions = this.getSubstitutions();
        const subs = {};
        for (const s of Object.keys(subDefinitions['substitutions'])) {
            subs[s] = subDefinitions['substitutions'][s];
        }
        for (const s in subDefinitions) {
            if (s != 'substitutions') {
                for (const items of subDefinitions[s]) {
                    for (const sub in items) {
                        if (items[sub].output == filename) {
                            subs[sub] = items[sub];
                        }
                    }
                }
            }
        }
        return subs;
    }

    async performSubstitutions(query: string, subs) {
        const orig = query;
        for (const k of Object.keys(subs)) {
            let replacement = (await this.getSubst(subs[k].subst, Number.MAX_VALUE)).trim();
            replacement = replacement.replace(new RegExp('\n', 'g'), '\n\$1');
            if (replacement.length == 0) {
                query = query.replace(new RegExp('^' + k.replace(/[{}]/g, '\\$&') + '\n', 'gm'), '');
            }
            query = query.replace(new RegExp('([ \t]*)' + k.replace(/[{}]/g, '\\$&') + '(\n?)', 'g'), '$1' + replacement + '$2');
        }
        if (orig != query) {
            return this.performSubstitutions(query, subs);
        }
        return query;
    }

    private async getSubst(replacement, limit) {
        let content = '';
        if (replacement.hasOwnProperty('file')) {
            const path = getWorkspaceRoot() + '/' + snippetPath + '/' + replacement['file'];
            content = await this.getFileSnippet(path, limit);
        } else {
            content = replacement['replacement'];
        }
        return content;
    }

    async renderSubstitution(replacement, local: string|undefined) {
        let scope = '';

        let content = await this.getSubst(replacement, 10);
        if (content.trim().length == 0) {
            content = '# template is empty';
        }

        if (replacement.hasOwnProperty('file')) {
            const path = getWorkspaceRoot() + '/' + snippetPath + '/' + replacement['file'];
            const file = 'file://' + path;
            scope += `[view included file](${file})\\\n`;
        }

        if (local) {
            scope += `**[scope: $(file) ${local}]**`;
        } else {
            scope += `**[scope: $(globe) global]**`;
        }

        return `\`\`\`\`boalang\n${content}\n\`\`\`\`\n\n----\n\n${scope}`;
    }

    private async getFileSnippet(path: string, limit: number) {
        return getFileContents(path).then(
            (val) => {
                return val.trim().split('\n').slice(0, limit).join('\n');
            }
        );
    }

    getQueries() {
        if (!this.json.hasOwnProperty('queries')) return [];
        return Object.keys(this.json['queries']);
    }

    getQueryTargets(uri) {
        const uriStr = uri.toString();

        const targets = [];
        for (const output in this.json['queries']) {
            if (uriStr.endsWith(this.json['queries'][output]['query'])) {
                targets.push(output);
            }
        }
        return targets;
    }

    getAnalysisInputs(filename) {
        if (!this.json.hasOwnProperty('analyses')) return [];
        if (!this.json['analyses'].hasOwnProperty(filename)) return [];
        if (!this.json['analyses'][filename].hasOwnProperty('input')) return [];
        return this.json['analyses'][filename].input;
    }

    private async updateJSON() {
        try {
            this._raw = '';
            this._json = {};
            await getFileContents(this._file).then(
                (val) => {
                    this._raw = val;
                    this._json = JSON.parse(val);
                }
            );
        } catch (e) {
            this._raw = '';
            this._json = {};
        }

        this.substitutions = null;
        this.datasets = null;

        this.onDidChangeEmitter.fire(this);
    }
}

export const cache = new StudyConfigCache();
