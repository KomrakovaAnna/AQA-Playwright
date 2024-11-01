import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class GaragePage extends BasePage {
  readonly pageURL: string;
  readonly addNewCarButton: Locator;
  readonly brandDropdown: Locator;
  readonly modelDropdown: Locator;
  readonly mileageField: Locator;
  readonly addButton: Locator;
  readonly pageHeading: Locator;
  readonly lastCarName: Locator;

  readonly profile: Locator;
  readonly profileName: Locator;

  constructor(page: Page) {
    super(page);
    this.pageURL = "/panel/garage";
    this.addNewCarButton = page.getByText("Add car");
    this.brandDropdown = page.locator("#addCarBrand");
    this.modelDropdown = page.locator("#addCarModel");
    this.mileageField = page.locator("#addCarMileage");
    this.addButton = page.getByText("Add", { exact: true });
    this.pageHeading = page.locator("h1", {
      hasText: "Garage",
    });
    this.lastCarName = page.locator(".car_name").first();

    this.profile = page.locator(".-profile");
    this.profileName = page.locator(".profile_name");
  }

  async open() {
    await super.open(this.pageURL);
  }

  async verifyPageIsOpen() {
    await expect(this.pageHeading).toBeVisible();
  }

  async addNewCar(brand: string, model: string, mileage: string) {
    await this.addNewCarButton.click();
    await this.brandDropdown.selectOption(brand);
    await this.modelDropdown.selectOption(model);
    const color = await this.addButton.getAttribute("class");
    await this.mileageField.fill(mileage);
    await this.addButton.click();
  }

  async verifyLastAddedCarName(name: string) {
    await expect(this.lastCarName).toHaveText(name);
  }
}
