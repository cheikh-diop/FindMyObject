import { AppPage } from './app.po';
import { Login } from './auth.po';

describe('findmyject App', () => {
  let page: AppPage;
  let auth: Login;

  beforeEach(() => {
    page = new AppPage();
    auth = new Login();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('Scénario d`authentification avec succès', () => {
    auth.navigateTo();
    auth.checkauth();
  })

});
