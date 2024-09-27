import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly signInBtn: Locator;
  readonly signUpBtn: Locator;

  constructor(page: Page, baseURL: string) {
    super(page, baseURL);
    this.signInBtn = page.locator(".header_signin");
    this.signUpBtn = page.locator(".hero-descriptor_btn");
  }
  async openSignInForm() {
    await this.signInBtn.click();
  }
  async openSignUpForm() {
    await this.signUpBtn.click();
  }
}
