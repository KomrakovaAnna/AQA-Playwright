import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class GaragePage extends BasePage {
  readonly pageURL: string;

  readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.pageURL = "/panel/garage";

    this.pageHeading = page.locator("h1", {
      hasText: "Garage",
    });
  }

  async open() {
    await super.open(this.pageURL);
  }
}
