import { AngularpipesPage } from './app.po';

describe('angularpipes App', function() {
  let page: AngularpipesPage;

  beforeEach(() => {
    page = new AngularpipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
