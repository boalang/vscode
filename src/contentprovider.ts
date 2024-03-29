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
import { parseBoaCode } from './ast/parser';
import { runBoaCommands } from './boa';
import JobCache from './jobcache';
import { getQuery } from './studytemplate/extension';

export const boaDocumentProvider = new class implements vscode.TextDocumentContentProvider {
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    async provideTextDocumentContent(uri: vscode.Uri): Promise<string> {
        var data: string = '';
        switch (uri.fragment) {
            case 'preview':
                data += await getQuery(vscode.Uri.parse(uri.query), uri.authority);
                parseBoaCode(data, uri);
                break;

            case 'source':
                await runBoaCommands(async (client) => {
                    const job = await client.getJob(uri.authority);
                    if (job.id == uri.authority) {
                        data = await JobCache.getSource(job);
                        await JobCache.updateContext(job);
                    } else {
                        vscode.window.showErrorMessage(`Invalid/undefined job ID or you do not have access to that job.`);
                        return undefined;
                    }
                });
                break;

            case 'output':
                await runBoaCommands(async (client) => {
                    const job = await client.getJob(uri.authority);
                    data = await job.outputFull;
                    await JobCache.updateContext(job);
                });
                break;
        }
        return data;
    }
};