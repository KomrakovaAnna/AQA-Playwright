import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class SignUpForm extends BasePage {
  readonly nameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly reEnterPasswordField: Locator;
  readonly registerBtn: Locator;
  readonly errorMessage: Locator;
  readonly logInErrorMessage: Locator;
  readonly form: Locator;
  readonly formTitle: Locator;

  constructor(page: Page) {
    super(page);

    this.form = page.locator(".modal-content");
    this.formTitle = page.locator(".modal-title", { hasText: "Registration" });

    this.nameField = page.locator("#signupName");
    this.lastNameField = page.locator("#signupLastName");
    this.emailField = page.locator("#signupEmail");
    this.passwordField = page.locator("#signupPassword");
    this.reEnterPasswordField = page.locator("#signupRepeatPassword");
    this.registerBtn = this.form.locator(".btn-primary");

    this.errorMessage = page.locator(".invalid-feedback");
    this.logInErrorMessage = page.locator(".alert-danger");
  }
  async getName() {
    return await this.nameField;
  }
  async checkSignUpFormIsOpen() {
    await this.formTitle.isVisible();
  }

  async enterNameValue(value: string) {
    await this.nameField.fill(value);
    await this.nameField.blur();
  }
  async enterLastNameValue(value: string) {
    await this.lastNameField.fill(value);
    await this.lastNameField.blur();
  }
  async enterEmailValue(value: string) {
    await this.emailField.fill(value);
    await this.emailField.blur();
  }
  async enterPasswordValue(value: string) {
    await this.passwordField.fill(value);
    await this.passwordField.blur();
  }
  async reEnterPasswordValue(value: string) {
    await this.reEnterPasswordField.fill(value);
    await this.reEnterPasswordField.blur();
  }
  async clickRegisterBtn() {
    this.registerBtn.click();
  }
  async successfulRegistration(
    nameValue: string,
    lastNameValue: string,
    emailFieldValue: string,
    passwordValue: string,
    reEnterPasswordValue: string
  ) {
    await this.nameField.fill(nameValue);
    await this.lastNameField.fill(lastNameValue);
    await this.emailField.fill(emailFieldValue);
    await this.passwordField.fill(passwordValue);
    await this.reEnterPasswordField.fill(reEnterPasswordValue);
    await this.registerBtn.click;
  }
  async checkErrorMessageOnInvalidField() {
    return await this.errorMessage;
  }
}
