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

export default class JobCache {
    private static source = {};

    static async getSource(job) {
        if (!this.source[job.id]) {
            this.source[job.id] = await job.source;
        }

        return this.source[job.id];
    }

    private static outputSize = {};

    static async getOutputSize(job) {
        if (!this.outputSize[job.id]) {
            this.outputSize[job.id] = await job.outputSize;
        }

        return this.outputSize[job.id];
    }

    private static url = {};

    static async getUrl(job) {
        if (!this.url[job.id]) {
            this.url[job.id] = await job.url;
        }

        return this.url[job.id];
    }

    private static compilerErrors = {};

    static async getCompilerErrors(job) {
        if (!this.compilerErrors[job.id]) {
            this.compilerErrors[job.id] = await job.compilerErrors;
        }

        return this.compilerErrors[job.id];
    }

    private static output = {};

    static async getOutput(job) {
        if (!this.output[job.id]) {
            this.output[job.id] = await job.output;
        }

        return this.output[job.id];
    }
}