import { Page, Locator } from '@playwright/test';
import messages from '../data/messages.json';
import { CommonChecksPage } from './commonChecks.page';

export class LoginPage extends CommonChecksPage {
    readonly usernameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly validUsername: string;
    readonly password: string;
    readonly invalidUsername: string;
    readonly invalidLoginError: string = messages.invalidLoginError;
    readonly invalidLoginErrorContainer: Locator;

    constructor( page: Page) {
        super(page);
        this.validUsername = process.env.VALID_TEST_USERNAME!;
        this.password = process.env.VALID_TEST_PASSWORD!;
        this.invalidUsername = process.env.INVALID_TEST_USERNAME!;
        this.usernameInputField = page.getByPlaceholder('Username');
        this.passwordInputField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidLoginErrorContainer = page.getByTestId('error');
    }

    async login(username:string, password:string) {
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();
    }

}