import { Page, Locator } from '@playwright/test';
import endpoints from '../data/endpoints.json';
import titles from '../data/titles.json';
import { CommonChecksPage } from './commonChecks.page';

export class InventoryPage extends CommonChecksPage {
    readonly inventoryUrl: string = process.env.BASE_URL + endpoints.inventoryUrl;
    readonly inventoryTitleText: string = titles.inventoryPageTitle;
    readonly inventoryTitle: Locator;
    readonly addToCartButton: Locator;
    
    constructor( page: Page) {
        super(page);
        this.inventoryTitle = page.getByText('Products');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    }

    async addItemsToCart() {
        const items = await this.addToCartButton.all();
        for (const item of items.slice(0, 2)) {
            await item.click();
        }
    }
}