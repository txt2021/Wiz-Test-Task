import dotenv from 'dotenv';
dotenv.config();
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  retries: 2,
  workers: 4,
    reporter: [['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
