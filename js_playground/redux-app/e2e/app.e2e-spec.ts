import { ReduxAppPage } from './app.po';

describe('redux-app App', () => {
  let page: ReduxAppPage;

  beforeEach(() => {
    page = new ReduxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
