import { Page, Locator } from '@playwright/test';

export class CommonChecksPage {
  readonly cartButton: Locator;

  constructor(private page: Page) {
    this.cartButton = page.getByTestId('shopping-cart-link');
  }

  async openBaseUrl() {
    await this.page.goto('/');
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }
}