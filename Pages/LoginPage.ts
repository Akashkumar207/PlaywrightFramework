import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";


export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator("//input[@name='user_name']");
        this.password = page.locator("//input[@name='user_password']");
        this.loginButton = page.locator("//input[@id='submitButton']");
    }



    async openLoginPage(){
        await this.hitUrl("http://localhost:8181/");

    }

    async enterUsername(usernameValue: string) {
        await this.enterText(this.username, usernameValue);
    }

    async enterPassword(passwordValue: string) {
        await this.enterText(this.password, passwordValue);
    }

    async clickOnLoginButton() {
        await this.click(this.loginButton);
    }


    
}

