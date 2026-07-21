import { test, expect } from '../helper/fixtures/fixtures';

test('Scenario 1 - Login', async ({ loginPage, inventoryPage }) => {
  await loginPage.openBaseUrl();
  await loginPage.login(loginPage.validUsername, loginPage.password);
  expect(await (inventoryPage.getCurrentUrl())).toBe(inventoryPage.inventoryUrl);
  await expect(inventoryPage.inventoryTitle).toBeVisible();
  await expect(inventoryPage.inventoryTitle).toHaveText(inventoryPage.inventoryTitleText);
});

test('Scenario 4 - Negative Test', async ({ loginPage }) => {
  await loginPage.openBaseUrl();
  await loginPage.login(loginPage.invalidUsername, loginPage.password);
  await expect(loginPage.invalidLoginErrorContainer).toBeVisible();
  await expect(loginPage.invalidLoginErrorContainer).toHaveText(loginPage.invalidLoginError);
});
