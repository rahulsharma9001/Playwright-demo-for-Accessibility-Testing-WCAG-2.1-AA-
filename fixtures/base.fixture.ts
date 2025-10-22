// import { test as base, Page } from '@playwright/test';
// import { HomePage } from '../pages/home.page';
// import { SearchPage } from '../pages/search.page';
// import { ProductPage } from '../pages/product.page';

// type Pages = {
//   homePage: HomePage;
//   searchPage: SearchPage;
//   productPage: ProductPage;
// };

// export const test = base.extend<Pages>({
//   homePage: async ({ page }, use) => {
//     await use(new HomePage(page));
//   },
//   searchPage: async ({ page }, use) => {
//     await use(new SearchPage(page));
//   },
//   productPage: async ({ page }, use) => {
//     await use(new ProductPage(page));
//   }
// });

// export { expect } from '@playwright/test';
