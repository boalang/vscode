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
import * as boaapi from '@boa/boa-api/lib/boaclient';
import { getBoaUsername, getBoaPassword, removeCredentials } from './credentials';

export function getJobUri(id) {
    return vscode.Uri.parse(`${vscode.env.uriScheme}://boalang/job/${id}`);
}

let datasets: string[] = null;
export async function getDatasets() {
    if (datasets == null)
        runBoaCommands(async (client: boaapi.BoaClient) => {
            await client.datasetNames()
                .then((ds: string[]) => datasets = ds);
        }).then(
            () => vscode.window.setStatusBarMessage('$(pass) Boa API: logged in', 10000)
        );
}

async function selectDataset(): Promise<string> {
	interface DatasetQuickPickItem extends vscode.QuickPickItem {
		dataset: string;
	}

    await getDatasets();

    const boaConfig = vscode.workspace.getConfiguration('boalang');

    let sortedDatasets = [...datasets];
    const favDataset = boaConfig.get('dataset.favorite') as string;
    if (sortedDatasets.indexOf(favDataset) > -1) {
        sortedDatasets.splice(sortedDatasets.indexOf(favDataset), 1)
        sortedDatasets = [favDataset].concat(sortedDatasets)
    }
    const lastDataset = boaConfig.get('dataset.last') as string;
    if (sortedDatasets.indexOf(lastDataset) > -1) {
        sortedDatasets.splice(sortedDatasets.indexOf(lastDataset), 1)
        sortedDatasets = [lastDataset].concat(sortedDatasets)
    }

    const items: DatasetQuickPickItem[] = sortedDatasets.map((t, i) => {
		return {
			label: (lastDataset == t ? '$(history) ' : favDataset == t ? '$(star-full) ' : '') + t.replace('[admin] ', ''),
			// detail: lastDataset == t ? 'last used' : favDataset == t ? 'favorite' : null,
            description: t.indexOf('[admin] ') > -1 ? 'admin' : '',
            alwaysShow: true,
			dataset: t
		};
	});
	const item = await vscode.window.showQuickPick(items, {
        placeHolder: lastDataset,
        title: 'Select the Boa dataset to query',
        ignoreFocusOut: false
    });

    if (item)
        boaConfig.update('dataset.last', item.dataset, true);
    return item ? item.dataset : undefined;
}

export async function runBoaCommands(func: { (client: boaapi.BoaClient): Promise<void> }) {
    const username = await getBoaUsername();
    if (username) {
        const password = await getBoaPassword();
        if (password) {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Window,
                cancellable: false,
                title: 'Boa API'
            }, async () => {
                const client = new boaapi.BoaClient(boaapi.BOA_API_ENDPOINT);
                await client.login(username, password).then(
                    async () => await func(client)
                ).catch(
                    async (err: Error) => {
                        if (err.message.indexOf('Wrong username or password.') > -1) {
                            vscode.window.showInformationMessage('Boa API username/password were invalid. Please re-enter.');
                            await removeCredentials();
                            await runBoaCommands(func);
                        }
                    }
                ).finally(
                    () => client.close()
                );
            });
        }
    }
}

export async function runQuery(uri:vscode.Uri) {
    const dataset = await selectDataset();
    if (dataset) {
        runBoaCommands(async (client: boaapi.BoaClient) => {
            const datasetId = await client.getDataset(dataset);

            // if not a URI, it is probably a range from the code lens
            if (!(uri instanceof vscode.Uri)) {
                uri = vscode.window.activeTextEditor.document.uri;
            }

            // if the file has never been saved
            if (uri.scheme == "untitled") {
                submitQuery(vscode.window.activeTextEditor.document.getText(), datasetId);
            } else {
                // otherwise send the file contents
                require('fs').readFile(uri.fsPath, 'utf8', (err, query) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    submitQuery(query, datasetId);
                });
            }
        });
    }
}

async function submitQuery(query, dataset) {
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        cancellable: true,
        title: 'Boa query submitted and running...'
    }, async (progress, cancel) => {
        progress.report({  increment: 0 });

        await runBoaCommands(async (client: boaapi.BoaClient) => {
            progress.report({  increment: 10 });

            const job = await client.query(query, dataset);
            progress.report({  increment: 20 });

            cancel.onCancellationRequested(async (e) => {
                console.log(`stopping job ${job.id}`);
                await job.stop();
                progress.report({ increment: 100 });
            });

            await job.wait();

            progress.report({  increment: 95 });
            showJob(getJobUri(job.id));
            vscode.commands.executeCommand('boalang.refreshJobs');
        });

        progress.report({ increment: 100 });
    });
}

export function showJob(uri:vscode.Uri) {
    console.log('show job');
    console.log(uri);
    vscode.window.showInformationMessage(`TODO: show info for Boa job ${uri.path}`);
}