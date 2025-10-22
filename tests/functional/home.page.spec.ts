import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test.describe('Home Page Feature Suite', () => {
    let homePage: HomePage;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        homePage = new HomePage(page);

        // Navigate once to the base URL
        await page.goto(process.env.BASE_URL ?? 'http://localhost:3000');

        // Store references for reuse
        homePage.page = page;
    });

    test('should display logo', async () => {
        await expect(homePage.logo).toBeVisible();
    });

    test('should display store locator link', async () => {
        await expect(homePage.storeLocation).toBeVisible();
    });

    test('should navigate to store locator page', async () => {
        await homePage.storeLocation.click();
        await expect(homePage.page).toHaveURL('https://relianceretail.com/');
    });
});
