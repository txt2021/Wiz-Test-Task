import { Page, Locator } from '@playwright/test';
import { CommonChecksPage } from './commonChecks.page';

export class CheckoutPage extends CommonChecksPage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly confirmationMessageTitle: Locator;
    readonly confirmationMessageText: Locator;
    readonly backToProductsButton: Locator;
    readonly generatePDFButton: Locator;

    constructor( page: Page) {
        super(page);
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'continue' });
        this.finishButton = page.getByRole('button', { name: 'finish' });
        this.confirmationMessageTitle = page.getByTestId('complete-header');
        this.confirmationMessageText = page.getByTestId('complete-text');
        this.backToProductsButton = page.getByRole('button', { name: 'back-to-products' });
        this.generatePDFButton = page.getByRole('button', { name: 'generate-pdf-order' });
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }
  
    async clickContinueButton() {
        await this.continueButton.click();
    }

    async clickFinishButton() {
        await this.finishButton.click();
    }

}