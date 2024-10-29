import { test as base } from "@playwright/test";
import { Page } from "@playwright/test";
import { GaragePage } from "../../page-objects/components/pages/GaragePage";
import { SignInForm } from "../../page-objects/components/forms/SignInForm";

type MyFixtures = {
  garagePage: GaragePage;
  signInForm: SignInForm;
};

export const test = base.extend<MyFixtures>({
  garagePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: "test-data/states/mainUserState.json",
    });
    const page = await context.newPage();
    const garagePage = new GaragePage(page);
    await garagePage.open();
    await use(garagePage);
    await page.locator(".icon-edit").first().click();
    await page.locator("#addCarBrand").selectOption("Ford");
    await page.locator("#addCarModel").selectOption("Fiesta");
    await page.locator("#addCarMileage").clear();
    await page.locator("#addCarMileage").fill("350");
    await page.getByText("Save").click();
  },
});
