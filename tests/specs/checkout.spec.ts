import { test, expect } from '../helper/fixtures/fixtures';
import users from '../data/users.json';
import messages from '../data/messages.json';

test('Scenario 3 - Checkout', async ({ checkoutPage, cartPage, loggedIn, itemsInCart }) => {
    await checkoutPage.fillCheckoutInformation(users.mockUser.firstName, users.mockUser.lastName, users.mockUser.postalCode);
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();
    await expect(checkoutPage.confirmationMessageTitle).toBeVisible();
    await expect(checkoutPage.confirmationMessageTitle).toHaveText(messages.confirmCheckoutMessageTitle);
    await expect(checkoutPage.confirmationMessageText).toBeVisible();
    await expect(checkoutPage.confirmationMessageText).toHaveText(messages.confirmCheckoutMessageText);
});
