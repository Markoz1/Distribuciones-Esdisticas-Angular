import { DistribucionesEsdisticasAngularPage } from './app.po';

describe('distribuciones-esdisticas-angular App', () => {
  let page: DistribucionesEsdisticasAngularPage;

  beforeEach(() => {
    page = new DistribucionesEsdisticasAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
