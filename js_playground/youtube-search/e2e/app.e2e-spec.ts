import { YoutubeSearchPage } from './app.po';

describe('youtube-search App', () => {
  let page: YoutubeSearchPage;

  beforeEach(() => {
    page = new YoutubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
