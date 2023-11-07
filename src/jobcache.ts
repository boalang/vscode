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
import { buildUri } from './boa';
import { JobHandle } from '@boalang/boa-api';

export default class JobCache {
    private static source = {};

    static async getSource(job) {
        if (!this.source[job.id]) {
            try {
                this.source[job.id] = await job.source;
            } catch (err) { }
        }

        return this.source[job.id];
    }

    private static outputSize = {};

    static async getOutputSize(job) {
        if (!this.outputSize[job.id]) {
            try {
                this.outputSize[job.id] = await job.outputSize;
            } catch (err) { }
        }

        return this.outputSize[job.id];
    }

    private static url = {};

    static async getUrl(job) {
        if (!this.url[job.id]) {
            try {
                this.url[job.id] = await job.url;
            } catch (err) { }
        }

        return this.url[job.id];
    }

    private static compilerErrors = {};

    static async getCompilerErrors(job) {
        if (!this.compilerErrors[job.id]) {
            try {
                this.compilerErrors[job.id] = await job.compilerErrors;
            } catch (err) { }
        }

        return this.compilerErrors[job.id];
    }

    private static output = {};

    static async getOutput(job) {
        if (!this.output[job.id]) {
            try {
                const boaConfig = vscode.workspace.getConfiguration('boalang');
                job.outputSize = boaConfig.get<number>('output.size', 64 * 1024);
                this.output[job.id] = await job.output;
            } catch (err) { }
        }

        return this.output[job.id];
    }

    static clearOutputs() {
        this.output = {};
    }

    private static jobContexts = {
        hasoutput: [],
        running: [],
        stopped: [],
    };

    static async updateContext(job: JobHandle) {
        const uri1 = buildUri(job, 'boa-job$id-source.boa', 'source');
        const uri2 = buildUri(job, 'boa-job$id-output.txt', 'output');

        let idx = this.jobContexts.hasoutput.indexOf(uri1);
        if (idx !== -1) this.jobContexts.hasoutput.splice(idx, 1);
        idx = this.jobContexts.hasoutput.indexOf(uri2);
        if (idx !== -1) this.jobContexts.hasoutput.splice(idx, 1);

        idx = this.jobContexts.running.indexOf(uri1);
        if (idx !== -1) this.jobContexts.running.splice(idx, 1);
        idx = this.jobContexts.running.indexOf(uri2);
        if (idx !== -1) this.jobContexts.running.splice(idx, 1);

        idx = this.jobContexts.stopped.indexOf(uri1);
        if (idx !== -1) this.jobContexts.stopped.splice(idx, 1);
        idx = this.jobContexts.stopped.indexOf(uri2);
        if (idx !== -1) this.jobContexts.stopped.splice(idx, 1);

        if (job.running) {
            this.jobContexts.running.push(uri1);
            this.jobContexts.running.push(uri2);
        } else {
            this.jobContexts.stopped.push(uri1);
            this.jobContexts.stopped.push(uri2);
        }

        if (await this.getOutputSize(job) > 0) {
            this.jobContexts.hasoutput.push(uri1);
            this.jobContexts.hasoutput.push(uri2);
        }

        vscode.commands.executeCommand('setContext', 'boalang.jobs.hasoutput', this.jobContexts.hasoutput);
        vscode.commands.executeCommand('setContext', 'boalang.jobs.running', this.jobContexts.running);
        vscode.commands.executeCommand('setContext', 'boalang.jobs.stopped', this.jobContexts.stopped);
    }

    private static jobFiles = {};

    static mapToFile(job, uri) {
        this.jobFiles[job.id] = uri;
    }

    static getFileFromJob(job) {
        if (job.id in this.jobFiles)
            return this.jobFiles[job.id];
        return undefined;
    }

    static renameFileMap(oldUri, newUri) {
        for (const key in this.jobFiles) {
            if (this.jobFiles[key].path === oldUri.path) {
                this.jobFiles[key] = newUri;
            }
        }
    }

    static removeFileMap(uri) {
        for (const key in this.jobFiles) {
            if (this.jobFiles[key].path === uri.path) {
                delete this.jobFiles[key];
            }
        }
    }

    static async reset() {
        this.source = {};
        this.outputSize = {};
        this.url = {};
        this.compilerErrors = {};
        this.output = {};
        this.jobContexts.hasoutput = [];
        this.jobContexts.running = [];
        this.jobContexts.stopped = [];
        this.jobFiles = {};
    }
}