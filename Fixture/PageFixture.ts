import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { HomePage } from '../Pages/HomePage.js';
import { LeadPage } from '../Pages/LeadPage.js';



type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  leadsPage: LeadPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  leadsPage: async ({ page }, use) => {
    const leadsPage = new LeadPage(page);
    await use(leadsPage);
  },
});

export { expect } from '@playwright/test';