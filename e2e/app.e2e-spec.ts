import { Ng2BacktopPage } from './app.po';

describe('ng2-backtop App', function() {
  let page: Ng2BacktopPage;

  beforeEach(() => {
    page = new Ng2BacktopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
