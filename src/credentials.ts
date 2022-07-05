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

const passwordKey = 'boalang.login.password';

export class AuthSettings {
    private static _instance: AuthSettings;

    constructor(private secretStorage: vscode.SecretStorage) {}

    static init(context: vscode.ExtensionContext): void {
        AuthSettings._instance = new AuthSettings(context.secrets);
    }

    static get instance(): AuthSettings {
        return AuthSettings._instance;
    }

    async storePassword(pw?: string): Promise<void> {
        if (pw) {
            this.secretStorage.store(passwordKey, pw);
        } else {
            this.secretStorage.delete(passwordKey);
        }
    }

    async getPassword(): Promise<string | undefined> {
        return await this.secretStorage.get(passwordKey);
    }

    async uninstall(): Promise<void> {
        this.storePassword(null);
    }
}

export async function getBoaUsername() {
    const boaConfig = vscode.workspace.getConfiguration('boalang');

    const username = boaConfig.get('login.username') as string;
    if (username)
        return username;
    const newuser = await vscode.window.showInputBox({
        placeHolder: 'username',
        title: 'Boa API username',
        value: username,
        prompt: 'Enter your Boa website username to use the Boa API',
    });
    await boaConfig.update('login.username', newuser, true);
    return newuser;
}

export async function getBoaPassword(forceReset = false) {
    const username = await getBoaUsername();
    if (!username)
        return undefined;

    const settings = AuthSettings.instance;

    if (!forceReset) {
        const existingPw = await settings.getPassword();
        if (existingPw)
            return existingPw;
    }

    const pw = await vscode.window.showInputBox({
        placeHolder: 'password',
        title: `Boa API Password for '${username}'`,
        prompt: 'Enter your Boa website password to use the Boa API',
        password: true,
    });
    await settings.storePassword(pw);
    return pw;
}

export async function resetUsername() {
    const boaConfig = vscode.workspace.getConfiguration('boalang');
    await boaConfig.update('login.username', undefined, true);
    resetPassword();
}

export async function resetPassword() {
    const settings = AuthSettings.instance;
    await settings.storePassword(null);
}

export async function removeCredentials() {
    resetUsername();
}