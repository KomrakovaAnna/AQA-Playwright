import { test } from "@playwright/test";
import { HomePage } from "../page-objects/components/pages/HomePage";
import { SignInForm } from "../page-objects/components/forms/SignInForm";
import { GaragePage } from "../page-objects/components/pages/GaragePage";

test.describe("GaragePage tests", () => {
  test.use({ storageState: "test-data/states/mainUserState.json" });
  let homePage: HomePage;
  let signInForm: SignInForm;
  let garagePage: GaragePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    signInForm = new SignInForm(page);
    garagePage = new GaragePage(page);

    await garagePage.open();
  });

  test("Add BMW X5", async () => {
    await garagePage.addNewCar("BMW", "X5", "100");
    await garagePage.verifyLastAddedCarName("BMW X5");
  });

  test("Add Audi TT", async ({ page }) => {
    await garagePage.addNewCar("Audi", "TT", "100");
    await garagePage.verifyLastAddedCarName("Audi TT");
  });
});
