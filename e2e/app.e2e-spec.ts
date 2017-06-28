import { MaterialDesingPage } from './app.po';

describe('material-desing App', () => {
  let page: MaterialDesingPage;

  beforeEach(() => {
    page = new MaterialDesingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
