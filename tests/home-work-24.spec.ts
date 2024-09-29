import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/components/pages/HomePage";
import { SignUpForm } from "../page-objects/components/forms/SignUpForm";
import { SignInForm } from "../page-objects/components/forms/SignInForm";

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

  test("Correct error on empty name field", async ({ page }) => {
    await signUpForm.enterNameValue("");
    await expect(page.getByText("Name required")).toBeVisible;
  });
  test("Correct error on invalid input in name field", async ({ page }) => {
    await signUpForm.enterNameValue("123");
    await expect(page.getByText("Name is invalid")).toBeVisible;
  });
  test("Correct error on too long input in name field", async ({ page }) => {
    await signUpForm.enterNameValue("qwertyuiopasdfghjklzx");
    await expect(page.getByText("Name has to be from 2 to 20 characters long"))
      .toBeVisible;
  });
  test("Correct error on too short input in name field", async ({ page }) => {
    await signUpForm.enterNameValue("q");
    await expect(page.getByText("Name has to be from 2 to 20 characters long"))
      .toBeVisible;
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
  test("Correct error on empty last name field", async ({ page }) => {
    await signUpForm.enterLastNameValue("");
    await expect(page.getByText("Last name requiredd")).toBeVisible;
  });
  test("Correct error on invalid input in last name field", async ({
    page,
  }) => {
    await signUpForm.enterLastNameValue("123");
    await expect(page.getByText("Last name is invalid")).toBeVisible;
  });
  test("Correct error on too long input in last name field", async ({
    page,
  }) => {
    await signUpForm.enterLastNameValue("qwertyuiopasdfghjklzx");
    await expect(
      page.getByText("Last name has to be from 2 to 20 characters long")
    ).toBeVisible;
  });
  test("Correct error on too short input in last name field", async ({
    page,
  }) => {
    await signUpForm.enterLastNameValue("q");
    await expect(page.getByText("Name has to be from 2 to 20 characters long"))
      .toBeVisible;
  });
  test("Red border on invalid input in last name field", async ({ page }) => {
    await signUpForm.enterLastNameValue("q");
    await expect(
      page.getByText("Last name has to be from 2 to 20 characters long")
    ).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });
  test("Valid input in last name field", async () => {
    await signUpForm.enterLastNameValue("Anna");
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

  test("Correct error on incorrect input in email field", async ({ page }) => {
    await signUpForm.enterEmailValue("@");
    await expect(page.getByText("Email is incorrect")).toBeVisible;
  });
  test("Correct error on empty email field", async ({ page }) => {
    await signUpForm.enterEmailValue("");
    await expect(page.getByText("Email required")).toBeVisible;
  });
  test("Red border on invalid input in email field", async ({ page }) => {
    await signUpForm.enterEmailValue("q");
    await expect(page.getByText("Email is incorrect")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
  test("Valid input in email field", async ({ page }) => {
    await signUpForm.enterEmailValue("komrakova.anna@gmail.com");
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

  test("Correct error on incorrect input in password field", async ({
    page,
  }) => {
    await signUpForm.enterPasswordValue("@");
    await expect(
      page.getByText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
    ).toBeVisible;
  });
  test("Correct error on empty password field", async ({ page }) => {
    await signUpForm.enterPasswordValue("");
    await expect(page.getByText("Password required")).toBeVisible;
  });
  test("Red border on invalid input in email field", async ({ page }) => {
    await signUpForm.enterPasswordValue("");
    await expect(page.getByText("Password required")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
  test("Valid input in password field", async ({ page }) => {
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

  test("Correct error if passwords don't much", async ({ page }) => {
    await signUpForm.reEnterPasswordValue("GmmWseR6**");
    await expect(page.getByText("Passwords do not match")).toBeVisible;
  });
  test("Correct error on empty re-enter password field", async ({ page }) => {
    await signUpForm.reEnterPasswordValue("");
    await expect(page.getByText("Re-enter password required")).toBeVisible;
  });
  test("Red border on invalid input in re-enter field", async ({ page }) => {
    await signUpForm.reEnterPasswordValue("");
    await expect(page.getByText("Password required")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});
