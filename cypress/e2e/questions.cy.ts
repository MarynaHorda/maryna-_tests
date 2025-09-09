import loginPage from '../../page-objects/login-page';
import loggedHomePage from '../../page-objects/logged-home-page';
import createNewQuestion from '../../page-objects/create-new-question';
import homePage from 'page-objects/home-page';

describe('Questions tests', () => {
  it('Try creating question without required field', () => {
    homePage.clickLoginBtn()
    loginPage.login();
    loggedHomePage.createNewQst();
    createNewQuestion.clickCommitBtn();
    createNewQuestion.checkErrorAndField();
  });
});