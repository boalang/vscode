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
import { studyConfigFile } from '../consts';
import { getWorkspaceRoot } from '../utils';

class StudyConfigCache {
    private _json: object;
    private watcher: vscode.FileSystemWatcher;

    constructor() {
        // watch study-config.json for changes, then refresh the cached JSON
        this.watcher = vscode.workspace.createFileSystemWatcher(getWorkspaceRoot() + '/' + studyConfigFile);
        this.watcher.onDidChange(this.updateJSON);
        this.watcher.onDidCreate(this.updateJSON);
        this.watcher.onDidDelete(this.updateJSON);

        this.updateJSON();
    }

    get json() {
        return this._json;
    }

    private updateJSON() {
        try {
            this._json = JSON.parse(fs.readFileSync(getWorkspaceRoot() + '/' + studyConfigFile).toString());
        } catch (e) {
            this._json = {};
        }
    }
}

export const cache = new StudyConfigCache();
