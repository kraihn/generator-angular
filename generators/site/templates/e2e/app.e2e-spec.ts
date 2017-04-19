import { <%= appTitle %>Page } from './app.po';

describe('<%= appName %> App', () => {
  let page: <%= appTitle %>Page;

  beforeEach(() => {
    page = new <%= appTitle %>Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
