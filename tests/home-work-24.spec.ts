import { test, expect } from "@playwright/test";
import { HomePage } from "../src/components/forms/pages/HomePage";

test.describe("Sign in", () => {
  let homePage: HomePage;

  test("Sign in modal open", async ({ page }) => {
    homePage = new HomePage(page, "baseUrl");

    await page.goto("");
    await homePage.openSignInForm();
  });
});
