class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForElement(locator) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
  }

  async click(locator) {
    await this.waitForElement(locator);
    await this.page.click(locator);
  }

  async type(locator, text) {
    await this.waitForElement(locator);
    await this.page.fill(locator, text);
  }
}

module.exports = { BasePage };