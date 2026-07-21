import { Page, Locator, expect } from '@playwright/test';
import { CommonChecksPage } from './commonChecks.page';
import endpoints from '../data/endpoints.json';

export class CartPage extends CommonChecksPage {
    readonly cartItemContainer: Locator;
    readonly removeButton: Locator;
    readonly checkoutButton: Locator;
    
    constructor( page: Page) {
        super(page);
        this.cartItemContainer = page.locator('[class="cart_item"]');
        this.removeButton = page.getByText('Remove');
        this.checkoutButton = page.getByRole('button', { name: 'checkout' });
    }

    async expectAllCartItemsToBeVisible() {
        const items = await this.cartItemContainer.all();
        await expect(items.length).toBe(2);
        for (const item of items) {
            await expect(item).toBeVisible();
        }
    }

    async deleteOneItemFromCart() {
    await this.removeButton.first().click();
    }

    async expectOneCartItemToBeVisible() {
        const items = await this.cartItemContainer.all();
        await expect(items.length).toBe(1);
        for (const item of items) {
            await expect(item).toBeVisible();
        }  
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();    
    }
}