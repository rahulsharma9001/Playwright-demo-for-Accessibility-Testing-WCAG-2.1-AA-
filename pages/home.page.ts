import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    public logo!: Locator;
    public storeLocation!: Locator;

    constructor(private page: Page) {
        this.logo = this.page.locator("//img[@alt='Reliance Retail Logo']");
        this.storeLocation = this.page.locator("a[href='http://storelocator.ril.com/Retail.aspx'][role='menuitem']");
    }
}
    
