# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Scenario 4 - Negative Test
- Location: tests/specs/login.spec.ts:11:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class CommonChecksPage {
  4  |   readonly cartButton: Locator;
  5  | 
  6  |   constructor(private page: Page) {
  7  |     this.cartButton = page.getByTestId('shopping-cart-link');
  8  |   }
  9  | 
  10 |   async openBaseUrl() {
> 11 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  12 |   }
  13 | 
  14 |   async getCurrentUrl(): Promise<string> {
  15 |     return this.page.url();
  16 |   }
  17 | 
  18 |   async clickCartButton() {
  19 |     await this.cartButton.click();
  20 |   }
  21 | }
```