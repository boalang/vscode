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
import AuthSettings from './password'
import { BoaJobsProvider } from './treeprovider';

const datasets = [ '2021 Aug/Python', '2021 Aug/Kotlin', '2019 October/GitHub', '2019 October/GitHub (small)' ];
const boaConfig = vscode.workspace.getConfiguration('boalang');

async function selectDataset(): Promise<string> {
	interface DatasetQuickPickItem extends vscode.QuickPickItem {
		dataset: string;
	}
    const favDataset = boaConfig.get('dataset.favorite');
    const lastDataset = boaConfig.get('dataset.last') as string;
    const items: DatasetQuickPickItem[] = datasets.map((t, i) => {
		return {
			label: (lastDataset == t ? '$(history)' : favDataset == t ? '$(star-full)' : '$(database)') + ' ' + t,
			description: lastDataset == t ? 'last used' : favDataset == t ? 'favorite' : null,
            alwaysShow: true,
			dataset: t
		};
	});
	const item = await vscode.window.showQuickPick(items, {
        title: 'Select the Boa dataset to query',
        ignoreFocusOut: false
    });
    if (item)
        boaConfig.update('dataset.last', item.dataset, true);
    return item ? item.dataset : undefined;
}

async function getBoaUsername() {
    const username = boaConfig.get('login.username') as string;
    console.log(username);
    // if (username)
        // return username;
    const newuser = await vscode.window.showInputBox({
        placeHolder: 'username',
        title: 'Boa API username',
        value: username,
        prompt: 'Enter your Boa website username to use the Boa API',
        // validateInput: commonUtils.sqlPasswordValidatorGenerator(adminUserName)
    });
    await boaConfig.update('login.username', newuser, true);
    return newuser;
}

async function getBoaPassword(forceReset = false) {
    const settings = AuthSettings.instance;

    if (!forceReset) {
        const existingPw = await settings.getPassword();
        if (existingPw)
            return existingPw;
    }

    const pw = await vscode.window.showInputBox({
        placeHolder: 'password',
        title: 'Boa API Password',
        prompt: 'Enter your Boa website password to use the Boa API',
        password: true,
        // validateInput: commonUtils.sqlPasswordValidatorGenerator(adminUserName)
    });
    await settings.storePassword(pw);
    return pw;
}

async function runBoaCommands(func: { (client: any): Promise<void>; (arg0: any): void; }) {
    const username = await getBoaUsername();
    if (username) {
        const password = await getBoaPassword();
        if (password) {
            const dataset = await selectDataset();
            if (dataset) {
                const client = new boaapi.BoaClient(boaapi.BOA_API_ENDPOINT);

                await client.login(username, password);
              
                func(client);
              
                await client.close();
            }
        }
    }
}

async function runQuery(uri:vscode.Uri) {
    runBoaCommands(async client => {
        await client.datasets(boaapi.adminFilter)
            .then((datasets) => console.log(datasets));
    });
}

function showJob(uri:vscode.Uri) {
    console.log('show job');
    console.log(uri);
    vscode.window.showInformationMessage(`TODO: show info for Job #${uri}`);
}

async function refreshJobs(uri:vscode.Uri) {
    console.log('jobs refresh');
}

// this method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    // handle password storage
    AuthSettings.init(context);

    // register all commands
    context.subscriptions.push(vscode.commands.registerCommand('boalang.showJob', showJob));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.refreshJobs', refreshJobs));
    context.subscriptions.push(vscode.commands.registerCommand('boalang.runQuery', runQuery));

    // set up the job list TreeView
    vscode.window.registerTreeDataProvider('boalang.jobList', new BoaJobsProvider());
    // vscode.window.createTreeView('boalang.jobList', { treeDataProvider: new BoaJobsProvider() });
}

// this method is called when the extension is deactivated
export function deactivate() {
}