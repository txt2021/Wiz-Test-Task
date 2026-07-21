import { test } from '../helper/fixtures/fixtures';

test('Scenario 2 - Shopping Cart', async ({  inventoryPage, cartPage, loggedIn  }) => {
    await inventoryPage.addItemsToCart();
    await inventoryPage.clickCartButton();
    await cartPage.expectAllCartItemsToBeVisible();
    await cartPage.deleteOneItemFromCart();
    await cartPage.expectOneCartItemToBeVisible();
});
