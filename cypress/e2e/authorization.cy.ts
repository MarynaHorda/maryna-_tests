import loginPage from '../../page-objects/login-page';
import loggedHomePage from '../../page-objects/logged-home-page';
import homePage from 'page-objects/home-page';

describe('Authorization test', () => {
  it('Authorization', () => {
    homePage.clickLoginBtn()
    loginPage.verifyUrl();
    loginPage.login();
    loggedHomePage.verifyLoggedAsText();
    loggedHomePage.verifyLogoutBtn();
  });
  });