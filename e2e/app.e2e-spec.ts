import { Angular4PortfolioFueconcilloPage } from './app.po';

describe('angular4-portfolio-fueconcillo App', () => {
  let page: Angular4PortfolioFueconcilloPage;

  beforeEach(() => {
    page = new Angular4PortfolioFueconcilloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
