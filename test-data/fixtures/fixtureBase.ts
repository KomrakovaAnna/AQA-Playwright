import { test as base } from "@playwright/test";
import { Page } from "@playwright/test";
import { GaragePage } from "../../page-objects/components/pages/GaragePage";
import { SignInForm } from "../../page-objects/components/forms/SignInForm";

type MyFixtures = {
  garagePageWithRemoving: GaragePage;
  signInForm: SignInForm;
};

export const test = base.extend<MyFixtures>({
  garagePageWithRemoving: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: "test-data/states/mainUserState.json",
    });
    const page = await context.newPage();
    const garagePage = new GaragePage(page);
    await garagePage.open();
    await use(garagePage);
    await page.locator(".icon-edit").first().click();
    await page.locator(".btn-outline-danger").click();
    await page.locator(".btn-danger").click();
  },
});
