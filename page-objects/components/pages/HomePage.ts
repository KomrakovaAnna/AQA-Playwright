import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SignUpForm } from "../forms/SignUpForm";

export class HomePage extends BasePage {
  readonly signInBtn: Locator;
  readonly signUpBtn: Locator;
  readonly pageURL: string;

  constructor(page: Page) {
    super(page);
    this.pageURL = "";

    this.signInBtn = page.locator(".header_signin");
    this.signUpBtn = page.locator(".hero-descriptor_btn", {
      hasText: "Sign up",
    });
  }

  async open() {
    await super.open(this.pageURL);
  }

  async openSignInForm() {
    await this.signInBtn.click();
  }
  async openSignUpForm() {
    await this.signUpBtn.click();
  }
}
