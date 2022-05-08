import { ExtensionContext, SecretStorage } from 'vscode';

const passwordKey = 'boalang.login.password';

export default class AuthSettings {
    private static _instance: AuthSettings;

    constructor(private secretStorage: SecretStorage) {}

    static init(context: ExtensionContext): void {
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