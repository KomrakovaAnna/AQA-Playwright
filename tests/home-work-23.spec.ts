import { test, expect, Locator } from "@playwright/test";

test.describe("Registration: Name Field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await page
      .locator(".hero-descriptor_btn", {
        hasText: "Sign up",
      })
      .click();
    await expect(
      page.locator(".modal-title", { hasText: "Registration" })
    ).toBeVisible();
    await page.locator(".modal-title");
  });

  test("Correct error on empty name field", async ({ page }) => {
    await page.locator("#signupName").focus();
    await page.locator("#signupName").blur();
    await expect(
      page.locator(".invalid-feedback", { hasText: "Name required" })
    ).toBeVisible();
  });

  test("Correct error on invalid input in name field", async ({ page }) => {
    await page.locator("#signupName").fill("123");
    await page.locator("#signupName").blur();
    await expect(
      page.locator(".invalid-feedback", { hasText: "Name is invalid" })
    ).toBeVisible();
  });

  test("Correct error on too long input in name field", async ({ page }) => {
    await page.locator("#signupName").fill("qwertyuiopasdfghjklzx");
    await page.locator("#signupName").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Name has to be from 2 to 20 characters long",
      })
    ).toBeVisible();
  });

  test("Correct error on too short input in name field", async ({ page }) => {
    await page.locator("#signupName").fill("q");
    await page.locator("#signupName").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Name has to be from 2 to 20 characters long",
      })
    ).toBeVisible();
  });

  test("Red border on invalid input in name field", async ({ page }) => {
    await page.locator("#signupName").fill("q");
    await page.locator("#signupName").blur();
    await expect(page.locator(".invalid-feedback")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  test("Valid input in name field", async ({ page }) => {
    await page.locator("#signupName").fill("Anna");
    await page.locator("#signupName").blur();
    await expect(page.locator("invalid-feedback")).not.toBeVisible();
    await expect(page.locator("#signupName")).toHaveCSS(
      "border-color",
      "rgb(206, 212, 218)"
    );
  });
});

test.describe("Registration: Last Name Field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await page
      .locator(".hero-descriptor_btn", {
        hasText: "Sign up",
      })
      .click();
    await expect(
      page.locator(".modal-title", { hasText: "Registration" })
    ).toBeVisible();
    await page.locator(".modal-title");
  });

  test("Correct error on empty last name field", async ({ page }) => {
    await page.locator("#signupLastName").focus();
    await page.locator("#signupLastName").blur();
    await expect(
      page.locator(".invalid-feedback", { hasText: "Last name required" })
    ).toBeVisible();
  });

  test("Correct error on invalid input in last name field", async ({
    page,
  }) => {
    await page.locator("#signupLastName").fill("123");
    await page.locator("#signupLastName").blur();
    await expect(
      page.locator(".invalid-feedback", { hasText: "Last name is invalid" })
    ).toBeVisible();
  });

  test("Correct error on too long input in last name field", async ({
    page,
  }) => {
    await page.locator("#signupLastName").fill("qwertyuiopasdfghjklzx");
    await page.locator("#signupLastName").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Last name has to be from 2 to 20 characters long",
      })
    ).toBeVisible();
  });

  test("Correct error on too short input in last name field", async ({
    page,
  }) => {
    await page.locator("#signupLastName").fill("q");
    await page.locator("#signupLastName").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Last name has to be from 2 to 20 characters long",
      })
    ).toBeVisible();
  });

  test("Red border on invalid input in last name field", async ({ page }) => {
    await page.locator("#signupLastName").fill("q");
    await page.locator("#signupLastName").blur();
    await expect(page.locator(".invalid-feedback")).toHaveCSS(
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  test("Valid input in last name field", async ({ page }) => {
    await page.locator("#signupLastName").fill("Komrakova");
    await page.locator("#signupLastName").blur();
    await expect(page.locator("invalid-feedback")).not.toBeVisible();
    await expect(page.locator("#signupLastName")).toHaveCSS(
      "border-color",
      "rgb(206, 212, 218)"
    );
  });
});

test.describe("Registration: Email Field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await page
      .locator(".hero-descriptor_btn", {
        hasText: "Sign up",
      })
      .click();
    await expect(
      page.locator(".modal-title", { hasText: "Registration" })
    ).toBeVisible();
    await page.locator(".modal-title");
  });

  test("Correct error on incorrect input in email field", async ({ page }) => {
    await page.locator("#signupEmail").fill("@");
    await page.locator("#signupEmail").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Email is incorrect",
      })
    ).toBeVisible();
  });

  test("Correct error on empty email field", async ({ page }) => {
    await page.locator("#signupEmail").focus();
    await page.locator("#signupEmail").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Email required",
      })
    ).toBeVisible();
  });

  test("Correct red border on empty email field", async ({ page }) => {
    await page.locator("#signupEmail").focus();
    await page.locator("#signupEmail").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Email required",
      })
    ).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });

  test("Valid input in  email field", async ({ page }) => {
    await page.locator("#signupEmail").fill("aqa-komrakova.anna@gmail.com");
    await page.locator("#signupEmail").blur();
    await expect(page.locator("invalid-feedback")).not.toBeVisible();
    await expect(page.locator("#signupEmail")).toHaveCSS(
      "border-color",
      "rgb(206, 212, 218)"
    );
  });
});

test.describe("Registration: Password Field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await page
      .locator(".hero-descriptor_btn", {
        hasText: "Sign up",
      })
      .click();
    await expect(
      page.locator(".modal-title", { hasText: "Registration" })
    ).toBeVisible();
    await page.locator(".modal-title");
  });

  test("Correct error on invalid password field", async ({ page }) => {
    await page.locator("#signupPassword").fill("123");
    await page.locator("#signupPassword").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText:
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      })
    ).toBeVisible();
  });

  test("Correct error on empty password field", async ({ page }) => {
    await page.locator("#signupPassword").focus();
    await page.locator("#signupPassword").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Password required",
      })
    ).toBeVisible();
  });

  test("Correct red border on empty password field", async ({ page }) => {
    await page.locator("#signupPassword").focus();
    await page.locator("#signupPassword").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Password required",
      })
    ).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });

  test("Valid input in  password field", async ({ page }) => {
    await page.locator("#signupPassword").fill("GmmWseR6**");
    await page.locator("#signupPassword").blur();
    await expect(page.locator("invalid-feedback")).not.toBeVisible();
    await expect(page.locator("#signupPassword")).toHaveCSS(
      "border-color",
      "rgb(206, 212, 218)"
    );
  });
});

test.describe("Registration: Re-enter password Field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await page
      .locator(".hero-descriptor_btn", {
        hasText: "Sign up",
      })
      .click();
    await expect(
      page.locator(".modal-title", { hasText: "Registration" })
    ).toBeVisible();
    await page.locator(".modal-title");
    await page.locator("#signupPassword").fill("GmmWseR6**");
  });

  test("Correct error if passwords don't much", async ({ page }) => {
    await page.locator("#signupRepeatPassword").fill("Gmmwser6**");
    await page.locator("#signupRepeatPassword").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Passwords do not match",
      })
    ).toBeVisible();
  });

  test("Correct error on empty re-enter password field", async ({ page }) => {
    await page.locator("#signupRepeatPassword").focus();
    await page.locator("#signupRepeatPassword").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Re-enter password required",
      })
    ).toBeVisible();
  });

  test("Red border on empty re-enter password field", async ({ page }) => {
    await page.locator("#signupRepeatPassword").focus();
    await page.locator("#signupRepeatPassword").blur();
    await expect(
      page.locator(".invalid-feedback", {
        hasText: "Password required",
      })
    ).toHaveCSS("border-color", "rgb(220, 53, 69)");
  });

  test("Valid input in  re-enter password field", async ({ page }) => {
    await page.locator("#signupRepeatPassword").fill("GmmWseR6**");
    await page.locator("#signupRepeatPassword").blur();
    await expect(page.locator("invalid-feedback")).not.toBeVisible();
    await expect(page.locator("#signupRepeatPassword")).toHaveCSS(
      "border-color",
      "rgb(206, 212, 218)"
    );
  });
});

test.describe("Registration: Register Button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
    await page
      .locator(".hero-descriptor_btn", {
        hasText: "Sign up",
      })
      .click();
    await expect(
      page.locator(".modal-title", { hasText: "Registration" })
    ).toBeVisible();
    await page.locator(".modal-title");
  });

  test("Successful registration", async ({ page }) => {
    await page.locator("#signupName").fill("Anna");
    await page.locator("#signupLastName").fill("Komrakova");
    await page.locator("#signupEmail").fill("aqa-komrakova.anna+7@gmail.com");
    await page.locator("#signupPassword").fill("GmmWseR6**");
    await page.locator("#signupRepeatPassword").fill("GmmWseR6**");
    await expect(
      page.locator(".btn-primary", { hasText: "Register" })
    ).toBeEnabled();
    await page.locator(".btn-primary", { hasText: "Register" }).click();
    await page.locator("h1", { hasText: "Garage" });
    await page.locator(".sidebar_btn").getByText("Settings").click();
    await page.getByText("Remove my account").click();
    await page.locator(".modal-header", { hasText: "Remove account" });
    await page.getByText("Remove", { exact: true }).click();
  });

  test("Registration button is active when all fields are filled in", async ({
    page,
  }) => {
    await page.locator("#signupName").fill("Anna");
    await page.locator("#signupLastName").fill("Komrakova");
    await page.locator("#signupEmail").fill("aqa-komrakova.anna@gmail.com");
    await page.locator("#signupPassword").fill("GmmWseR6**");
    await page.locator("#signupRepeatPassword").fill("GmmWseR6**");
    await expect(
      page.locator(".btn-primary", { hasText: "Register" })
    ).toBeEnabled();
  });
  test("Registration button is disabled when all fields are empty", async ({
    page,
  }) => {
    await expect(
      page.locator(".btn-primary", { hasText: "Register" })
    ).toBeDisabled();
  });
  test("Registration button is disabled when any field is empty", async ({
    page,
  }) => {
    await page.locator("#signupName").fill("Anna");
    await page.locator("#signupLastName").fill("Komrakova");
    await page.locator("#signupEmail").fill("aqa-komrakova.anna@gmail.com");
    await page.locator("#signupPassword").fill("GmmWseR6**");
    await expect(
      page.locator(".btn-primary", { hasText: "Register" })
    ).toBeDisabled();
  });
  test("Registration button is disabled when data in any field is invalid", async ({
    page,
  }) => {
    await page.locator("#signupName").fill("A");
    await page.locator("#signupLastName").fill("Komrakova");
    await page.locator("#signupEmail").fill("aqa-komrakova.anna@gmail.com");
    await page.locator("#signupPassword").fill("GmmWseR6**");
    await page.locator("#signupRepeatPassword").fill("GmmWseR6**");
    await expect(
      page.locator(".btn-primary", { hasText: "Register" })
    ).toBeDisabled();
  });
});
