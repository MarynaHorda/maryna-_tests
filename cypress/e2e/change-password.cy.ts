import loginPage from '../../page-objects/login-page';
import loggedHomePage from '../../page-objects/logged-home-page';
import myAccountPage from '../../page-objects/my-account-page';
import changePasswordPage from '../../page-objects/change-password-page';
import homePage from 'page-objects/home-page';

describe('Change Password tests', () => {
  it('Unable to set the same password', () => {
   homePage.clickLoginBtn();
   loginPage.login();
   loggedHomePage.clickMyAccountBtn();
   myAccountPage.clickChangePasswordBtn();
   changePasswordPage.changePassword();
   changePasswordPage.verifyErrorInfo();
   });

});