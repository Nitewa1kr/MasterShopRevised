import { MasterShopAppPage } from './app.po';

describe('master-shop-app App', () => {
  let page: MasterShopAppPage;

  beforeEach(() => {
    page = new MasterShopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
