import { NgMyLibPage } from './app.po';

describe('ng-my-lib App', () => {
  let page: NgMyLibPage;

  beforeEach(() => {
    page = new NgMyLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
