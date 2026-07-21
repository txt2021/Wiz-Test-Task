import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';
import { CheckoutPage } from '../../pages/checkout.page';

interface Fixtures {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    loggedIn: void;
    itemsInCart: void;
}
export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    loggedIn: async ({ page, loginPage }, use) => {
        await page.goto('/');
        await loginPage.login(
            loginPage.validUsername,
            loginPage.password
        );
        await use();
    },

    itemsInCart: async ({ loggedIn, inventoryPage, cartPage }, use) => {
        await inventoryPage.addItemsToCart();
        await inventoryPage.clickCartButton();
        await cartPage.clickCheckoutButton();
        await use();
    },
});
export { expect };