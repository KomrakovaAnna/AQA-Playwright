class BasePage {
  constructor(page, url) {
    this._page = baseURL;
    this._url = url;
  }

  async open() {
    await this._page.goto(this._url);
  }
}
