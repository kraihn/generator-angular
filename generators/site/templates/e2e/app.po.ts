import { browser, element, by } from 'protractor';

export class TempPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-<%= appName %> h1')).getText();
  }
}
