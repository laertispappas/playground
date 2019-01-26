import { HNewsPage } from './app.po';

describe('h-news App', () => {
  let page: HNewsPage;

  beforeEach(() => {
    page = new HNewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
