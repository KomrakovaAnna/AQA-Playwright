import { test } from "../../test-data/fixtures/fixtureBase";
import { HomePage } from "../../page-objects/components/pages/HomePage";
import { SignInForm } from "../../page-objects/components/forms/SignInForm";
import { GaragePage } from "../../page-objects/components/pages/GaragePage";
import { expect } from "playwright/test";

test.describe("API: Profile tests", () => {
  test.use({ storageState: "test-data/states/mainUserState.json" });
  let homePage: HomePage;
  let signInForm: SignInForm;
  let garagePage: GaragePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signInForm = new SignInForm(page);
    garagePage = new GaragePage(page);

    await garagePage.open();

    const testData = {
      status: "ok",
      data: {
        userId: 155139,
        photoFilename: "default-user.png",
        name: "Tired",
        lastName: "QA",
      },
    };

    await page.route("**/api/users/profile", (route) =>
      route.fulfill({
        body: JSON.stringify(testData),
      })
    );
  });

  test(`Getting to profile`, async () => {
    await garagePage.profile.click();
    await expect(garagePage.profileName).toHaveText("Tired QA");
  });
});
