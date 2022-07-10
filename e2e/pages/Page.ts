/**
 * Implements the {@link https://webdriver.io/docs/pageobjects/ page object pattern}.
 */
import { ChainablePromiseElement } from 'webdriverio';

export default abstract class Page {
  abstract readonly root: ChainablePromiseElement<WebdriverIO.Element>;

  async isDisplayed(): Promise<boolean> {
    return this.root.isDisplayed();
  }
}
