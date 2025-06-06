import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainTitleText() {
    return element(by.css('app-root .title')).getText();
  }
}
