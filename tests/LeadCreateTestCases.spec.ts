import { test,type Page, expect } from "@playwright/test";
import createLeadData from "../TestData/LeadCreateData.json"with {type:'json'};
import commonData from "../TestData/CommonData.json"with {type:'json'};
import { LoginPage } from "../Pages/LoginPage.js";
import { HomePage } from "../Pages/HomePage.js";
import { LeadPage } from "../Pages/LeadPage.js";
import { CreateLeadPage } from "../Pages/LeadsCreatePage.js";
import { LeadDetailsPage } from "../Pages/LeadDetailsPage.js";
import testData from "../TestData/TestData.json"with {type:'json'};

test.beforeEach(async ({ page }) => {
    await createLeadFlow(page); 
});

  test.only(`VT001_Verify_Create_Lead `, async ({ page }) => {
     let createLeadPage : CreateLeadPage= new CreateLeadPage(page);
    expect(createLeadPage.firstName).toHaveAttribute("class", "detailedViewTextBox");
    // verify firstname, lastname , company, title is correct on edit lead page
    expect(createLeadPage.firstName).toHaveValue(commonData.createLeadData.firstName);
    expect(createLeadPage.lastName).toHaveValue(commonData.createLeadData.lastName);
    expect(createLeadPage.company).toHaveValue(commonData.createLeadData.company);
  

    
   
});



test.only(`VT002_Verify_Create_Lead_And_Edit_Lead`, async ({ page }) => {
    let createLeadPage : CreateLeadPage= new CreateLeadPage(page);
    let leadDetailsPage: LeadDetailsPage = new LeadDetailsPage(page);
    expect(leadDetailsPage.editButton).toBeVisible();
    expect(leadDetailsPage.editButton).toBeEnabled();

    await leadDetailsPage.clickOnEditButton();
    expect(leadDetailsPage.editButton).toBeHidden();
    
expect(createLeadPage.firstName).toHaveAttribute("class", "detailedViewTextBox");
    // verify firstname, lastname , company, title is correct on edit lead page
    expect(createLeadPage.firstName).toHaveValue(commonData.createLeadData.firstName);
    expect(createLeadPage.lastName).toHaveValue(commonData.createLeadData.lastName);
    expect(createLeadPage.company).toHaveValue(commonData.createLeadData.company);
    expect(createLeadPage.titleName).toHaveValue(commonData.createLeadData.title);


});


test.only(`VT003_Verify_Create_Lead_And_Delete_Lead`, async ({ page }) => {
    let leadDetailsPage: LeadDetailsPage = new LeadDetailsPage(page);
    await leadDetailsPage.clickOnDeleteButton();
    await leadDetailsPage.acceptAlert();
});


  async function createLeadFlow(page:Page){
    let loginPage: LoginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.enterUsername(commonData.login.username);
    await loginPage.enterPassword(commonData.login.password);
    await loginPage.clickOnLoginButton();
    let homePage: HomePage = new HomePage(page);
    await homePage.clickOnLeadModule();
    let leadPage: LeadPage = new LeadPage(page);
    await leadPage.clickOnCreateLeadButton();
    let createLeadPage: CreateLeadPage = new CreateLeadPage(page);
    await createLeadPage.selectTitle(commonData.createLeadData.title);
    await createLeadPage.enterFirstName(commonData.createLeadData.firstName);
    await createLeadPage.enterLastName(commonData.createLeadData.lastName);
    await createLeadPage.enterCompany(commonData.createLeadData.company);
    await createLeadPage.clickOnSaveButton();

   
  }

