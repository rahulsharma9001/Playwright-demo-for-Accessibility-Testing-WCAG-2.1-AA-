// @ts-check
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

/**
 * Load environment variables based on ENV value (default: dev)
 * You can create config/dev.env, config/stage.env, etc.
 */
dotenv.config({
  path: path.resolve(__dirname, `./config/${process.env.ENV || 'dev'}.env`),
});

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter setup (HTML + optional Allure) */
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    // ['allure-playwright'], // uncomment if using Allure
  ],

  /* Shared settings for all projects below. */
  use: {
    /* Base URL driven by environment files */
    baseURL: process.env.BASE_URL || 'https://www.flipkart.com/',

    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    /* Collect trace when retrying failed tests */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  /* Run your local dev server before starting the tests (if needed) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
