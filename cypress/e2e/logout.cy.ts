import loginPage from '../../page-objects/login-page';
import loggedHomePage from '../../page-objects/logged-home-page';
import homePage from 'page-objects/home-page';

describe('Log out test', () => {
  it('Log out', () => {
    homePage.clickLoginBtn()
    loginPage.login();
    loggedHomePage.clickLogoutBtn();
  });
});