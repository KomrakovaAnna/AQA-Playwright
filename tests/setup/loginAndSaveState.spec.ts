import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/components/pages/HomePage";
import { SignInForm } from "../../page-objects/components/forms/SignInForm";
import generateEmail from "../../utils/emailGenerator";
import { GaragePage } from "../../page-objects/components/pages/GaragePage";
import { mainUserEmail, mainUserPassword } from "../../test-data/credentials";

test.describe("Setup", () => {
  let homePage: HomePage;
  let signInForm: SignInForm;
  let garagePage: GaragePage;

  test.beforeEach("Sign in modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signInForm = new SignInForm(page);
    garagePage = new GaragePage(page);

    await page.goto("");
    await homePage.openSignInForm();
  });
  test("Login to main user and save the state", async ({ page }) => {
    await signInForm.loginWithCredentials(mainUserEmail, mainUserPassword);
    await garagePage.verifyPageIsOpen();
    await page
      .context()
      .storageState({ path: "test-data/states/mainUserState.json" });
  });
});
