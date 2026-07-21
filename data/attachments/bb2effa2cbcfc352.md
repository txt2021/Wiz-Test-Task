# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.ts >> Scenario 3 - Checkout
- Location: tests/specs/checkout.spec.ts:5:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/login.page';
  3  | import { InventoryPage } from '../../pages/inventory.page';
  4  | import { CartPage } from '../../pages/cart.page';
  5  | import { CheckoutPage } from '../../pages/checkout.page';
  6  | 
  7  | interface Fixtures {
  8  |     loginPage: LoginPage;
  9  |     inventoryPage: InventoryPage;
  10 |     cartPage: CartPage;
  11 |     checkoutPage: CheckoutPage;
  12 |     loggedIn: void;
  13 |     itemsInCart: void;
  14 | }
  15 | export const test = base.extend<Fixtures>({
  16 |     loginPage: async ({ page }, use) => {
  17 |         await use(new LoginPage(page));
  18 |     },
  19 |     inventoryPage: async ({ page }, use) => {
  20 |         await use(new InventoryPage(page));
  21 |     },
  22 |     cartPage: async ({ page }, use) => {
  23 |         await use(new CartPage(page));
  24 |     },
  25 |     checkoutPage: async ({ page }, use) => {
  26 |         await use(new CheckoutPage(page));
  27 |     },
  28 |     loggedIn: async ({ page, loginPage }, use) => {
> 29 |         await page.goto('/');
     |                    ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  30 |         await loginPage.login(
  31 |             loginPage.validUsername,
  32 |             loginPage.password
  33 |         );
  34 |         await use();
  35 |     },
  36 | 
  37 |     itemsInCart: async ({ loggedIn, inventoryPage, cartPage }, use) => {
  38 |         await inventoryPage.addItemsToCart();
  39 |         await inventoryPage.clickCartButton();
  40 |         await cartPage.clickCheckoutButton();
  41 |         await use();
  42 |     },
  43 | });
  44 | export { expect };
```