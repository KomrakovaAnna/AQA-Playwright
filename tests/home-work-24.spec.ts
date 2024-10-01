import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/components/pages/HomePage";
import { SignUpForm } from "../page-objects/components/forms/SignUpForm";
import { SignInForm } from "../page-objects/components/forms/SignInForm";
import generateEmail from "../utils/emailGenerator";
import { GaragePage } from "../page-objects/components/pages/GaragePage";

test.describe("Sign in", () => {
  let homePage: HomePage;
  let signInForm: SignInForm;

  test("Sign in modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signInForm = new SignInForm(page);

    await page.goto("");
    await homePage.openSignInForm();
  });
});

test.describe("Sign Up Form: Name Field", async () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;

  test.beforeEach("Sign up modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await page.goto("");
    await homePage.openSignUpForm();
  });

  test("Correct error on empty name field", async () => {
    await signUpForm.enterNameValue("");
    await signUpForm.checkErrorMessage("Name required");
  });
  test("Correct error on invalid input in name field", async () => {
    await signUpForm.enterNameValue("123");
    await signUpForm.checkErrorMessage("Name is invalid");
  });
  test("Correct error on too long input in name field", async () => {
    await signUpForm.enterNameValue("qwertyuiopasdfghjklzx");
    await signUpForm.checkErrorMessage(
      "Name has to be from 2 to 20 characters long"
    );
  });
  test("Correct error on too short input in name field", async () => {
    await signUpForm.enterNameValue("q");
    await signUpForm.checkErrorMessage(
      "Name has to be from 2 to 20 characters long"
    );
  });
  test("Red border on invalid input in name field", async ({ page }) => {
    await signUpForm.enterNameValue("q");
    await expect(
      page.getByText("Name has to be from 2 to 20 characters long")
    ).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
  test("Valid input in name field", async () => {
    await signUpForm.enterNameValue("Anna");
  });
});

test.describe("Sign Up Form: Last Name Field", async () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;

  test.beforeEach("Sign up modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await page.goto("");
    await homePage.openSignUpForm();
  });
  test("Correct error on empty last name field", async () => {
    await signUpForm.enterLastNameValue("");
    await signUpForm.checkErrorMessage("Last name required");
  });
  test("Correct error on invalid input in last name field", async () => {
    await signUpForm.enterLastNameValue("123");
    await signUpForm.checkErrorMessage("Last name is invalid");
  });
  test("Correct error on too long input in last name field", async () => {
    await signUpForm.enterLastNameValue("qwertyuiopasdfghjklzx");
    await signUpForm.checkErrorMessage(
      "Last name has to be from 2 to 20 characters long"
    );
  });
  test("Correct error on too short input in last name field", async () => {
    await signUpForm.enterLastNameValue("q");
    await signUpForm.checkErrorMessage(
      "Last name has to be from 2 to 20 characters long"
    );
  });
  test("Red border on invalid input in last name field", async ({ page }) => {
    await signUpForm.enterLastNameValue("q");
    await expect(
      page.getByText("Last name has to be from 2 to 20 characters long")
    ).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
  test("Valid input in last name field", async () => {
    await signUpForm.enterLastNameValue("Komrakova");
  });
});

test.describe("Sign Up Form: Email Field", async () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;

  test.beforeEach("Sign up modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await page.goto("");
    await homePage.openSignUpForm();
  });

  test("Correct error on incorrect input in email field", async () => {
    await signUpForm.enterEmailValue("@");
    await signUpForm.checkErrorMessage("Email is incorrect");
  });
  test("Correct error on empty email field", async () => {
    await signUpForm.enterEmailValue("");
    await signUpForm.checkErrorMessage("Email required");
  });
  test("Red border on invalid input in email field", async ({ page }) => {
    await signUpForm.enterEmailValue("q");
    await expect(page.getByText("Email is incorrect")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
  test("Valid input in email field", async ({ page }) => {
    await signUpForm.enterEmailValue(generateEmail());
    await expect(page.getByLabel("Email")).toHaveCSS(
      "border-color",
      "rgb(206, 212, 218)"
    );
  });
});

test.describe("Sign Up Form: Password Field", async () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;

  test.beforeEach("Sign up modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await page.goto("");
    await homePage.openSignUpForm();
  });

  test("Correct error on incorrect input in password field", async () => {
    await signUpForm.enterPasswordValue("@");
    await signUpForm.checkErrorMessage(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
  });
  test("Correct error on empty password field", async () => {
    await signUpForm.enterPasswordValue("");
    await signUpForm.checkErrorMessage("Password required");
  });
  test("Red border on invalid input in email field", async ({ page }) => {
    await signUpForm.enterPasswordValue("");
    await expect(page.getByText("Password required")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
  test("Valid input in password field", async () => {
    await signUpForm.enterPasswordValue("GmmWsR6**");
  });
});

test.describe("Sign Up Form: Re Enter Password Field", async () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;

  test.beforeEach("Sign up modal open", async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);

    await page.goto("");
    await homePage.openSignUpForm();
    await signUpForm.enterPasswordValue("GmmWseR5**");
  });

  test("Correct error if passwords don't much", async () => {
    await signUpForm.reEnterPasswordValue("GmmWseR6**");
    await signUpForm.checkErrorMessage("Passwords do not match");
  });
  test("Correct error on empty re-enter password field", async () => {
    await signUpForm.reEnterPasswordValue("");
    await signUpForm.checkErrorMessage("Re-enter password required");
  });
  test("Red border on invalid input in re-enter field", async ({ page }) => {
    await signUpForm.reEnterPasswordValue("");
    await expect(page.getByText("Password required")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});

test.describe("Registration: Register Button", () => {
  let homePage: HomePage;
  let signUpForm: SignUpForm;
  let garagePage: GaragePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signUpForm = new SignUpForm(page);
    garagePage = new GaragePage(page);

    await page.goto("");
    await homePage.openSignUpForm();
  });

  test("Successful registration", async () => {
    await signUpForm.registerANewUser(
      "Anna",
      "Komrakova",
      "GmmWseR6**",
      "GmmWseR6**"
    );
    await expect(garagePage.pageHeading).toBeVisible();
  });

  test("Registration button is active when all fields are filled in", async () => {
    await signUpForm.enterNameValue("Anna");
    await signUpForm.enterLastNameValue("Komrakova");
    await signUpForm.enterEmailValue(generateEmail());
    await signUpForm.enterPasswordValue("GmmWseR6**");
    await signUpForm.reEnterPasswordValue("GmmWseR6**");
    await expect(signUpForm.registerBtn).toBeEnabled();
  });
  test("Registration button is disabled when all fields are empty", async () => {
    await expect(signUpForm.registerBtn).toBeDisabled();
  });
  test("Registration button is disabled when any field is empty", async () => {
    await signUpForm.enterNameValue("Anna");
    await signUpForm.enterLastNameValue("Komrakova");
    await signUpForm.enterEmailValue(generateEmail());
    await signUpForm.enterPasswordValue("GmmWseR6**");
    await expect(signUpForm.registerBtn).toBeDisabled();
  });
  test("Registration button is disabled when data in any field is invalid", async () => {
    await signUpForm.enterNameValue("A");
    await signUpForm.enterLastNameValue("Komrakova");
    await signUpForm.enterEmailValue(generateEmail());
    await signUpForm.enterPasswordValue("GmmWseR6**");
    await signUpForm.reEnterPasswordValue("GmmWseR6**");
    await expect(signUpForm.registerBtn).toBeDisabled();
  });
});
