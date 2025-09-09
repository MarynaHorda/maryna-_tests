import homePage from 'page-objects/home-page';
import registerPage from '../../page-objects/register-page';

describe('Registration tests', () => {
  it('Check unsuccessful registration', () => {
    homePage.clickRegisterBtn();
    registerPage.register();
    registerPage.verifyMailInfo();
    registerPage.veryfiLogininfo();
  });
});