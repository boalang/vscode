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
import { TextEncoder } from 'util';
import * as vscode from 'vscode';
import * as consts from '../consts';
import { analysesPath, binPath, csvPath, jobsFile, outputPath, scriptPath, snippetPath, studyConfigFile } from '../consts';
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
    getDatasetNames() {
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

    async resolveSubstitutions(filename: string) {
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
            query = query.replace(new RegExp('([ \t]*)(.*(?=' + k.replace(/[{}]/g, '\\$&') + '))' + k.replace(/[{}]/g, '\\$&') + '(\n?)', 'g'), '$1$2' + replacement + '$3');
        }
        if (orig != query) {
            return this.performSubstitutions(query, subs);
        }
        return query;
    }

    private async getSubst(replacement, limit: number) {
        let content = '';
        if (replacement.hasOwnProperty('file')) {
            const path = getWorkspaceRoot() + '/' + snippetPath + '/' + replacement['file'];
            content = await this.getFileSnippet(path, limit);
        } else {
            content = replacement['replacement'];
        }
        if (!content) return "";
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
            (val) => val.trim().split('\n').slice(0, limit).join('\n')
        );
    }

    getOutputs() {
        if (!this.json.hasOwnProperty('queries'))
            return [];
        return Object.keys(this.json['queries']);
    }

    getCSVs() {
        const csvs = new Set<string>();
        if (!this.json.hasOwnProperty('queries'))
            return csvs;
        const keys = Object.keys(this.json['queries']);
        keys.forEach(k => {
            const q = this.json['queries'][k];
            if (q.hasOwnProperty('csv'))
                if (q['csv'].hasOwnProperty('output'))
                    csvs.add(q['csv']['output']);
        });
        return csvs;
    }

    getQueries() {
        const queries = new Set<string>();
        if (!this.json.hasOwnProperty('queries'))
            return queries;
        const keys = Object.keys(this.json['queries']);
        keys.forEach(k => {
            const q = this.json['queries'][k];
            if (q.hasOwnProperty('query'))
                queries.add(q['query']);
        });
        return queries;
    }

    getOutputsForQuery(uri: vscode.Uri|string) {
        const uriStr = uri.toString();

        const targets = [];
        for (const output in this.json['queries']) {
            if (uriStr.endsWith(this.json['queries'][output]['query'])) {
                targets.push(output);
            }
        }
        return targets;
    }

    getSubstitutionFiles() {
        if (!this.json.hasOwnProperty('substitutions'))
            return [];
        // TODO implement
        return [];
    }

    getAnalyses() {
        if (!this.json.hasOwnProperty('analyses'))
            return [];
        return Object.keys(this.json['analyses']);
    }

    getAnalysisInputs(filename: string) {
        if (!this.json.hasOwnProperty('analyses'))
            return [];
        if (!this.json['analyses'].hasOwnProperty(filename))
            return [];
        if (!this.json['analyses'][filename].hasOwnProperty('input'))
            return [];
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

    async addTemplateTag(tag: string) {
        if (!tag) {
            tag = await vscode.window.showInputBox({
                placeHolder: '{@tag@}',
                title: 'New Template Tag',
                prompt: 'Enter the new, global template tag to add',
            });
            if (!tag) {
                return;
            }
        }

        // normalize the tag
        tag = tag.trim();
        if (!tag.startsWith('{@'))
            tag = '{@' + tag;
        if (!tag.endsWith('@}'))
            tag = tag + '@}';

        // add it globally
        if (!('substitutions' in this._json)) {
            this._json['substitutions'] = [];
        }
        this._json['substitutions'].push({
            target: tag,
            replacement: '',
        });

        await this.writeFile();
    }

    async renameQuery(oldUri: vscode.Uri, newUri: vscode.Uri) {
        let changed = false;
        const substNewName = newUri.path.substring(getWorkspaceRoot().length + snippetPath.length + 2);

        // file is a 'query'
        if (this.json.hasOwnProperty('queries')) {
            const queryNewName = newUri.path.substring(getWorkspaceRoot().length + scriptPath.length + 2);
            const keys = Object.keys(this.json['queries']);
            keys.forEach(k => {
                if (this.json['queries'][k].hasOwnProperty('query')) {
                    if (oldUri.toString().endsWith(this.json['queries'][k]['query'])) {
                        changed = true;
                        this._json['queries'][k]['query'] = queryNewName;
                    }
                }

                // file is a local substitution's 'file'
                if (this.json['queries'][k].hasOwnProperty('substitutions')) {
                    for (let i = 0; i < this.json['queries'][k]['substitutions'].length; i++) {
                        if (this.json['queries'][k]['substitutions'][i].hasOwnProperty('file')) {
                            if (oldUri.toString().endsWith(this.json['queries'][k]['substitutions'][i]['file'])) {
                                changed = true;
                                this._json['queries'][k]['substitutions'][i]['file'] = substNewName;
                            }
                        }
                    }
                }
            });
        }

        // file is a global substitution's 'file'
        if (this.json.hasOwnProperty('substitutions')) {
            for (let i = 0; i < this.json['substitutions'].length; i++) {
                if (this.json['substitutions'][i].hasOwnProperty('file')) {
                    if (oldUri.toString().endsWith(this.json['substitutions'][i]['file'])) {
                        changed = true;
                        this._json['substitutions'][i]['file'] = substNewName;
                    }
                }
            }
        }

        if (changed)
            await this.writeFile();
    }

    async renameCSV(oldUri: vscode.Uri, newUri: vscode.Uri) {
        let changed = false;

        if (this.json.hasOwnProperty('queries')) {
            const newName = newUri.path.substring(getWorkspaceRoot().length + csvPath.length + 2);
            const keys = Object.keys(this.json['queries']);
            keys.forEach(k => {
                // file is a query's 'csv' 'output' entry
                if (this.json['queries'][k].hasOwnProperty('csv') && this.json['queries'][k]['csv'].hasOwnProperty('output')) {
                    if (oldUri.path.endsWith(csvPath + '/' + this.json['queries'][k]['csv']['output'])) {
                        changed = true;
                        this._json['queries'][k]['csv']['output'] = newName;
                    }
                }

                // file is a processor's 'csv' entry
                if (this.json['queries'][k].hasOwnProperty('processors')) {
                    const processorKeys = Object.keys(this.json['queries'][k]['processors']);
                    processorKeys.forEach(pk => {
                        if (this.json['queries'][k]['processors'][pk].hasOwnProperty('csv')
                                && oldUri.path.endsWith(csvPath + '/' + this.json['queries'][k]['processors'][pk]['csv'])) {
                            changed = true;
                            this._json['queries'][k]['processors'][pk]['csv'] = newName;
                        }
                    });
                }
            });
        }

        // file is an 'input' in an analysis
        if (this.json.hasOwnProperty('analyses')) {
            const newName = newUri.path.substring(getWorkspaceRoot().length + analysesPath.length + 2);
            const keys = Object.keys(this.json['analyses']);
            keys.forEach(k => {
                if (this.json['analyses'][k].hasOwnProperty('input')) {
                    for (let i = 0; i < this.json['analyses'][k]['input'].length; i++) {
                        if (oldUri.path.endsWith(csvPath + '/' + this.json['analyses'][k]['input'][i])) {
                            changed = true;
                            this.json['analyses'][k]['input'][i] = newName;
                        }
                    }
                }
            });
        }

        if (changed)
            await this.writeFile();
    }

    async renameScript(oldUri: vscode.Uri, newUri: vscode.Uri) {
        let changed = false;

        const scriptFilename = oldUri.toString().substring(oldUri.toString().lastIndexOf('/') + 1);

        // file is an analysis
        if (oldUri.path.includes(analysesPath) && this.json.hasOwnProperty('analyses') && scriptFilename in this.json['analyses']) {
            changed = true;
            const newName = newUri.path.substring(getWorkspaceRoot().length + analysesPath.length + 2);
            this._json['analyses'][newName] = this.json['analyses'][scriptFilename];
            delete this._json['analyses'][scriptFilename];
        } else if (oldUri.path.includes(binPath)) {
            // file is a processor
            if (this.json.hasOwnProperty('queries')) {
                const keys = Object.keys(this.json['queries']);
                keys.forEach(k => {
                    if (this.json['queries'][k].hasOwnProperty('processors') && scriptFilename in this.json['queries'][k]['processors']) {
                        changed = true;
                        const newName = newUri.path.substring(getWorkspaceRoot().length + binPath.length + 2);
                        this._json['queries'][k]['processors'][newName] = this.json['queries'][k]['processors'][scriptFilename];
                        delete this._json['queries'][k]['processors'][scriptFilename];
                    }
                });
            }
        }

        if (changed)
            await this.writeFile();
    }

    async renameOutput(oldUri: vscode.Uri, newUri: vscode.Uri) {
        let changed = false;

        if (this.json.hasOwnProperty('queries')) {
            const newName = newUri.path.substring(getWorkspaceRoot().length + csvPath.length + 2);
            const keys = Object.keys(this.json['queries']);

            // file is a processor 'output' entry
            keys.forEach(k => {
                if (this.json['queries'][k].hasOwnProperty('processors')) {
                    const processorKeys = Object.keys(this.json['queries'][k]['processors']);
                    processorKeys.forEach(pk => {
                        if (this.json['queries'][k]['processors'][pk].hasOwnProperty('output')
                                && oldUri.path.endsWith(this.json['queries'][k]['processors'][pk]['output'])) {
                            changed = true;
                            this._json['queries'][k]['processors'][pk]['output'] = newUri.path.substring(getWorkspaceRoot().length + 1);
                        }
                    });
                }
            });

            // file is a top-level output
            Object.keys(this.json['queries']).filter(k => oldUri.path.endsWith(k)).forEach(q => {
                changed = true;
                let newName = newUri.toString();
                newName = newName.substring(newName.lastIndexOf(outputPath) + outputPath.length + 1);
    
                this._json['queries'][newName] = this._json['queries'][q];
                delete this._json['queries'][q];
                this.rewriteJobs(q, newName);
            });
        }

        if (changed)
            await this.writeFile();
    }

    async addDataset(name: String, ds: String) {
        if (!this._json.hasOwnProperty('datasets'))
            this._json['datasets'] = {};

        this._json['datasets'][name] = ds.replace(consts.adminPrefix, '');

        await this.writeFile();
    }

    async addAnalysis(script: String, input: String[]) {
        if (!this._json.hasOwnProperty('analyses'))
            this._json['analyses'] = {};

        this._json['analyses'][script] = {};
        this._json['analyses'][script]['input'] = input;

        await this.writeFile();
    }

    async addQuery(query: String, ds: String) {
        if (!this._json.hasOwnProperty('queries'))
            this._json['queries'] = {};

        const output = query.replace('.boa', '.txt');

        this._json['queries'][output] = {};
        this._json['queries'][output]['query'] = 'queries/' + query;
        this._json['queries'][output]['dataset'] = ds;

        await this.writeFile();
    }

    private async rewriteJobs(oldName: string, newName: string) {
        const fileName = getWorkspaceRoot() + '/' + jobsFile;
        const jobsUri = vscode.Uri.file(fileName);

        let raw = '';
        let jobsJson = {};
        try {
            raw = '';
            jobsJson = {};
            await getFileContents(fileName).then(
                (val) => {
                    raw = val;
                    jobsJson = JSON.parse(val);
                }
            );
        } catch (e) {
            raw = '';
            jobsJson = {};
        }
        jobsJson[newName] = jobsJson[oldName];
        delete jobsJson[oldName];

        const json = JSON.stringify(jobsJson, null, 2);
        try {
            const fs = require('fs');
            fs.chmod(fileName, 0o644, async () => {
                await vscode.workspace.fs.writeFile(jobsUri, new TextEncoder().encode(json));
                fs.chmod(fileName, 0o444, () => {});
            });
        } catch (e) {
            console.error(e);
        }
    }

    async writeFile() {
        const json = JSON.stringify(this._json, null, 4) + '\n';
        await vscode.workspace.fs.writeFile(this.uri, new TextEncoder().encode(json));
    }
}

export const cache = new StudyConfigCache();
