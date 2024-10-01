import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class SignInForm extends BasePage {
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginBtn: Locator;
  readonly form: Locator;
  readonly errorMessage: Locator;
  readonly logInErrorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.form = page.locator(".modal-content");

    this.emailField = page.locator("#signinEmail");
    this.passwordField = page.locator("#signinPassword");
    this.loginBtn = this.form.locator(".btn-primary");

    this.errorMessage = page.locator(".invalid-feedback");
    this.logInErrorMessage = page.locator(".alert-danger");
  }
}