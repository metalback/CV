import { AppPage } from './app.po';

describe('cv App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the main title', () => {
    page.navigateTo();
    expect(page.getMainTitleText()).toEqual('Mauricio Beltrán');
  });
});
