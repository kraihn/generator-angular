import { TempPage } from './app.po';

describe('<%= appName %>', () => {
  let page: TempPage;

  beforeEach(() => {
    page = new TempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
