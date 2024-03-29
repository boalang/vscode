//
// Copyright 2022, Robert Dyer, Kareem Keshk
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
import * as boaapi from '@boalang/boa-api';
import { getBoaUsername, getBoaPassword, removeCredentials } from './credentials';
import { BoaJob, treeProvider } from './treeprovider';
import * as consts from './consts';
import JobCache from './jobcache';
import { getFileContents, getWorkspaceRoot, promptUser } from './utils';
import { outputChannel } from './extension';

export function getJobUri(id: any) {
    return vscode.Uri.parse(`boalang://${id}/`);
}

const onDatasetsChangeEmitter = new vscode.EventEmitter<string[]>();
export const onDatasetsChange = onDatasetsChangeEmitter.event;

let datasets: string[] = null;
export async function getDatasets(tryLoad = true) {
    if (!tryLoad || datasets !== null) {
        return datasets;
    }
    datasets = [];

    await runBoaCommands(async (client: boaapi.BoaClient) => {
        await client.datasetNames().then((ds: string[]) => datasets = ds);
    }).then(
        () => vscode.window.setStatusBarMessage('$(pass) Boa API: logged in', 10000)
    ).catch(
        () => datasets = null
    );

    onDatasetsChangeEmitter.fire(datasets);
    return datasets;
}

async function selectDataset(): Promise<string> {
    interface DatasetQuickPickItem extends vscode.QuickPickItem {
        dataset: string;
    }

    const datasets = await getDatasets();
    if (datasets === null) {
        return undefined;
    }

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
            label: (favDataset == t ? '$(star-full) ' : lastDataset == t ? '$(history) ' : '') + t.replace(consts.adminPrefix, ''),
            description: t.indexOf(consts.adminPrefix) > -1 ? 'admin' : '',
            alwaysShow: true,
            dataset: t
        };
    });
    const item = await vscode.window.showQuickPick(items, {
        placeHolder: lastDataset,
        title: 'Select the Boa dataset to query',
        ignoreFocusOut: false
    });

    return item ? item.dataset : undefined;
}

export async function setFavorite() {
    const boaConfig = vscode.workspace.getConfiguration('boalang');
    const dataset = await selectDataset();
    if (dataset) {
        boaConfig.update('dataset.favorite', dataset, true);
        vscode.window.showInformationMessage(`Boa favorite dataset: ${dataset}`);
    }
}

async function selectEndpoint(): Promise<string> {
    return new Promise((resolve) => {
        const quickPick = vscode.window.createQuickPick();

        const boaConfig = vscode.workspace.getConfiguration('boalang');
        quickPick.placeholder = boaConfig.get<string>('api.endpoint');
        quickPick.title = 'Select the Boa API endpoint';

        const sortedItems = [quickPick.placeholder, ...boaapi.KNOWN_ENDPOINTS.filter(item => item != quickPick.placeholder)];
        let defaultItems = sortedItems.map(label => ({ label: label }));
        if (!sortedItems.includes(quickPick.placeholder)) {
            defaultItems = [{ label: quickPick.placeholder }, ...defaultItems];
        }
        quickPick.items = [...defaultItems];

        quickPick.onDidChangeValue(() => {
            if (quickPick.value.trim().length == 0) {
                quickPick.items = defaultItems;
            } else if (!sortedItems.includes(quickPick.value)) {
                quickPick.items = [{ label: quickPick.value }, ...defaultItems];
            }
        })

        quickPick.onDidAccept(() => {
            resolve(quickPick.activeItems[0].label);
            quickPick.dispose();
        });

        quickPick.show();
    });
}

export async function setEndpoint() {
    const boaConfig = vscode.workspace.getConfiguration('boalang');
    const endpoint = await selectEndpoint();
    if (endpoint) {
        boaConfig.update('api.endpoint', endpoint, true);
        vscode.window.showInformationMessage(`Boa API endpoint: ${endpoint}`);
    }
}

export async function closeClient() {
    if (client !== null) {
        await client.close().catch(
            () => {
                // ignore errors during close
            }
        );
        client = null;
    }
    datasets = null;
    treeProvider.reset();
    JobCache.reset();
}

let client = null;
export async function runBoaCommands(func: { (client: boaapi.BoaClient): Promise<void> }, retrying = false) {
    if (client === null) {
        const username = await getBoaUsername();
        if (username) {
            const password = await getBoaPassword();
            if (password) {
                await vscode.window.withProgress({
                    location: vscode.ProgressLocation.Window,
                    cancellable: false,
                    title: 'Boa API'
                }, async () => {
                    const boaConfig = vscode.workspace.getConfiguration('boalang');
                    const endpoint = boaConfig.get('api.endpoint', boaapi.BOA_API_ENDPOINT) as string;
                    client = new boaapi.BoaClient(endpoint);
                    await client.login(username, password).then(
                        async () => await func(client)
                    ).catch(
                        async (err: Error) => {
                            client = null;
                            if (err.message.indexOf('Wrong username or password.') > -1) {
                                vscode.window.showInformationMessage('Boa API username/password were invalid. Please re-enter.');
                                await removeCredentials();
                                if (!retrying) {
                                    await runBoaCommands(func, true);
                                    return;
                                }
                            } else if (err.message.indexOf('Account is temporarily blocked') > -1) {
                                vscode.window.showInformationMessage('Your Boa account is blocked for too many invalid logins. Please wait an hour.');
                            } else if (err.message.indexOf(': 302') > -1) {
                                vscode.window.showInformationMessage('You need to visit the Boa website, log back in, and accept the Terms & Conditions first.', 'Visit', 'Later')
                                    .then(selection => {
                                        if (selection == 'Visit') {
                                            vscode.env.openExternal(vscode.Uri.parse(endpoint.split('?')[0] + '?q=user/logout'));
                                        }
                                    });
                            } else if (err.message.indexOf('getaddrinfo ENOTFOUND') > -1) {
                                vscode.window.showInformationMessage('Unable to connect to the Boa API.');
                            } else {
                                vscode.window.showInformationMessage(err.message.replace(/user\.login\([^)]+\)/, 'user.login()'));
                            }
                            throw err;
                        }
                    );
                });
            } else {
                throw new Error('No username/password given.');
            }
        } else {
            throw new Error('No username/password given.');
        }
    } else {
        if (!retrying) {
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Window,
                cancellable: false,
                title: 'Boa API'
            }, async () => {
                await func(client).catch(
                    async (err: Error) => {
                        console.error(err);
                        await closeClient();
                        await runBoaCommands(func, true);
                    }
                );
            });
        } else {
            vscode.window.showInformationMessage('Unable to connect to the Boa API.');
            throw new Error('Unable to connect to the Boa API.');
        }
    }
}

export async function runQuery(uri: vscode.Uri) {
    const dataset = await selectDataset();
    if (dataset) {
        const boaConfig = vscode.workspace.getConfiguration('boalang');
        boaConfig.update('dataset.last', dataset, true);

        runBoaCommands(async (client: boaapi.BoaClient) => {
            const datasetId = await client.getDataset(dataset);

            // if not a URI, it is probably a range from the code lens
            if (!(uri instanceof vscode.Uri)) {
                uri = vscode.window.activeTextEditor.document.uri;
            }

            // if the file has never been saved, or it is an old job
            if (uri.scheme == 'untitled' || uri.scheme == 'boalang') {
                submitQuery(vscode.window.activeTextEditor.document.getText(), datasetId, uri);
            } else {
                const dirty = vscode.workspace.textDocuments.filter((doc) => doc.uri.toString() == uri.toString() && doc.isDirty);
                if (dirty.length == 1) {
                    submitQuery(dirty[0].getText(), datasetId, uri);
                } else {
                    // otherwise send the file contents
                    getFileContents(uri.fsPath)
                        .then(query => submitQuery(query, datasetId, uri))
                        .catch(err => console.error(err));
                }
            }
        });
    }
}

async function submitQuery(query: string, dataset: any, uri: vscode.Uri) {
    if (query.indexOf('{@') != -1) {
        if (!(await promptUser('The query contains template variables and will not run directly.  You should use the study template make system instead.  Continue anyway?'))) {
            return;
        }
    }

    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        cancellable: true,
        title: 'Boa query submitted and running...'
    }, async (progress, cancel) => {
        progress.report({ increment: 0 });

        await runBoaCommands(async (client: boaapi.BoaClient) => {
            progress.report({ increment: 10 });

            const job = await client.query(query, dataset);
            progress.report({ increment: 20 });
            JobCache.mapToFile(job, uri);
            vscode.commands.executeCommand('boalang.joblist.refresh');

            cancel.onCancellationRequested(async (e) => {
                await job.stop();
                progress.report({ increment: 100 });
            });

            const worked = await job.wait();

            progress.report({ increment: 95 });
            if (worked) {
                vscode.commands.executeCommand('boalang.job.showOutput', getJobUri(job.id));
            }
        });

        progress.report({ increment: 100 });
        vscode.commands.executeCommand('boalang.joblist.refresh');
    });
}

export function downloadOutput(uri: vscode.Uri|BoaJob) {
    runBoaCommands(async (client: boaapi.BoaClient) => {
        const jobId = getJobId(uri);
        const job = await client.getJob(jobId);

        if (await JobCache.getOutputSize(job) > 0) {
            await job.downloadOutput(`${getWorkspaceRoot()}/boa-job${jobId}-output.txt`);
            vscode.window.showInformationMessage(`Output for Job ${jobId} downloaded`);
        } else {
            vscode.window.showInformationMessage(`Job ${jobId} has no output`);
        }
    });
}

async function promptJobId() {
    const jobId = await vscode.window.showInputBox({
        placeHolder: '<job id>',
        title: 'Enter the Job ID',
        prompt: 'Enter your the Job ID you want to view',
    });
    return getJobUri(jobId);
}

export function showOutput() {
    return async function showOutput(uri: vscode.Uri|BoaJob|undefined) {
        if (uri === undefined) {
            uri = await promptJobId();
        }

        runBoaCommands(async (client: boaapi.BoaClient) => {
            let jobId: string;
            if (uri instanceof vscode.Uri) {
                jobId = uri.authority;
            } else {
                jobId = uri.job.id;
            }
            const job = await client.getJob(jobId);

            if (await JobCache.getOutputSize(job) > 0) {
                outputChannel.clear();
                outputChannel.append(await JobCache.getOutput(job));
                outputChannel.show();
            } else {
                vscode.window.showInformationMessage(`Job ${jobId} has no output`);
            }
        });
    }
}

export async function showUri(uri: vscode.Uri) {
    const doc = await vscode.workspace.openTextDocument(uri);
    await vscode.window.showTextDocument(doc, {
        preview: true,
        preserveFocus: true,
        viewColumn: vscode.ViewColumn.Two,
    });
}

export function buildUri(uri: vscode.Uri|BoaJob|boaapi.JobHandle, path: string, fragment: string) {
    if (uri instanceof BoaJob) {
        uri = getJobUri(uri.job.id);
    } else if (uri instanceof vscode.Uri) {
        uri = getJobUri(uri.authority);
    } else {
        uri = getJobUri(uri.id);
    }
    path = path.replace('$id', uri.authority);
    return vscode.Uri.parse(`${uri.toString()}${path}#${fragment}`);
}

export async function showFullOutput(uri: vscode.Uri|BoaJob|undefined) {
    if (uri === undefined) {
        uri = await promptJobId();
    }

    const jobId = getJobId(uri);
    const job = await client.getJob(jobId);

    if (await JobCache.getOutputSize(job) > 0) {
        showUri(buildUri(uri, 'boa-job$id-output.txt', 'output'));
    } else {
        vscode.window.showInformationMessage(`Job ${jobId} has no output`);
    }
}

export async function showJob(uri: vscode.Uri|BoaJob|undefined) {
    if (uri === undefined) {
        uri = await promptJobId();
    }
    showUri(buildUri(uri, 'boa-job$id-source.boa', 'source'));
}

function getJobId(uri: vscode.Uri|BoaJob) {
    let jobId: string;
    if (uri instanceof vscode.Uri) {
        jobId = uri.authority;
    } else {
        jobId = uri.job.id;
    }
    return jobId;
}

export function viewPublicUrl(uri: vscode.Uri|BoaJob) {
    runBoaCommands(async (client: boaapi.BoaClient) => {
        const jobId = getJobId(uri);
        const job = await client.getJob(jobId);

        if (await job.public != true) {
            if (await promptUser(`Can't open URL because job ${jobId} is private. Do you want to make it public?`)) {
                await togglePublic(uri);
            } else {
                return;
            }
        }

        const jobUrl = await job.publicUrl;
        vscode.env.openExternal(vscode.Uri.parse(jobUrl));
    });
}

export async function deleteJob(uri: vscode.Uri|BoaJob) {
    if (await promptUser('Are you sure you want to delete this job?')) {
            runBoaCommands(async (client: boaapi.BoaClient) => {
            const jobId = getJobId(uri);
            const job = await client.getJob(jobId);

            await job.delete();
            for (const grp of vscode.window.tabGroups.all) {
                for (const tab of grp.tabs) {
                    if (tab.input) {
                        const uri = (tab.input as any).uri as vscode.Uri;
                        if (uri && uri.scheme == 'boalang' && uri.authority == jobId) {
                            vscode.window.tabGroups.close(tab, true);
                        }
                    }
                }
            }
            vscode.commands.executeCommand('boalang.joblist.refreshIfLoaded');
            vscode.window.showInformationMessage(`Job ${jobId} has been deleted`);
        });
    }
}

export function togglePublic(uri: vscode.Uri|BoaJob) {
    runBoaCommands(async (client: boaapi.BoaClient) => {
        const jobId = getJobId(uri);
        const job = await client.getJob(jobId);

        const isPublic = await job.public;
        job.public = !isPublic;

        if (!isPublic) {
            vscode.window.showInformationMessage(`Job ${jobId} has been set to public`);
        } else {
            vscode.window.showInformationMessage(`Job ${jobId} has been set to private`);
        }
    });
}

export async function resubmitJob(uri: vscode.Uri|BoaJob) {
    if (await promptUser('Are you sure you want to resubmit this job?')) {
        runBoaCommands(async (client: boaapi.BoaClient) => {
            const jobId = getJobId(uri);
            const job = await client.getJob(jobId);

            if (!job.running) {
                await job.resubmit();
                vscode.commands.executeCommand('boalang.joblist.refresh');
                vscode.window.showInformationMessage(`Job ${jobId} has been resubmitted`);
            } else {
                vscode.window.showInformationMessage(`Job ${jobId} is already running, stop it first`);
            }
        });
    }
}

export function stopJob(uri: vscode.Uri|BoaJob) {
    runBoaCommands(async (client: boaapi.BoaClient) => {
        const jobId = getJobId(uri);
        const job = await client.getJob(jobId);

        if (job.running) {
            await job.stop();
            vscode.commands.executeCommand('boalang.joblist.refreshIfLoaded');
            vscode.window.showInformationMessage(`Job ${jobId} was stopped`);
        } else {
            vscode.window.showInformationMessage(`Job ${jobId} is not currently running`);
        }
    });
}