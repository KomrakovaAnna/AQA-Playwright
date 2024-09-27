import { Page } from "@playwright/test";

export class BasePage {
  private _page: Page;
  private _url: string;

  constructor(page: Page, baseURL: string) {
    this._page = page;
    this._url = baseURL;
  }
}
