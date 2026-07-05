import {expect, test,  type Page} from "@playwright/test"

import loginData from "../testdata/LoginData.json" with {type:'json'};
import { LoginPage } from "../Pages/LoginPage.js";



loginData.forEach((data) => {
     
     test.beforeEach(async ({ page }) => {
    let loginPage: LoginPage = new LoginPage(page);
        await loginPage.openLoginPage();
        await loginPage.enterUsername(data.username);
        await loginPage.enterPassword(data.password);
        await loginPage.clickOnLoginButton();
});
    test(`verify Login - ${data.label}`, async ({page})=>{
      
        if(data.status=="valid"){
             expect(page).toHaveTitle("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");

        }else{
       let loginPage: LoginPage = new LoginPage(page);
          await   expect(loginPage.username).toBeVisible();

        }


   });
   




     
})


