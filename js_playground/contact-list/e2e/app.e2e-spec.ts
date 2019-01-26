import { ContactListPage } from './app.po';

describe('contact-list App', () => {
  let page: ContactListPage;

  beforeEach(() => {
    page = new ContactListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
