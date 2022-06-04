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
import { runBoaCommands } from './boa';
import JobCache from './cache';
import { CompilerStatus, ExecutionStatus } from '@boa/boa-api/lib/jobhandle';
import { reportErrors } from './diagnostics';

export const boaDocumentProvider = new class implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    async provideTextDocumentContent(uri: vscode.Uri): Promise<string> {
        var data: string = '';
        switch (uri.fragment) {
            case 'details':
                await runBoaCommands(async (client) => {
                    const job = await client.getJob(uri.authority);
                    if (job.compilerStatus == CompilerStatus.ERROR) {
                        reportErrors(uri, await job.compilerErrors);
                    } else if (job.executionStatus == ExecutionStatus.ERROR) {
                        reportErrors(uri, ['There was a runtime error.']);
                    } else {
                        reportErrors(uri, undefined);
                    }
                    data = await JobCache.getSource(job);
                });
                break;
        
            case 'output':
                await runBoaCommands(async (client) => {
                    const job = await client.getJob(uri.authority);
                    data = await job.outputFull;
                });
                break;
        }
        return data;
    }
};