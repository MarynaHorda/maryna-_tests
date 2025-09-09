import loginPage from '../../page-objects/login-page';
import loggedHomePage from '../../page-objects/logged-home-page';
import forumsPage from '../../page-objects/forums-page';
import helpPage from '../../page-objects/help-page';
import iwrePage from '../../page-objects/iwre-page';
import homePage from 'page-objects/home-page';

describe('Forum tests', () => {
  it('Add and remove yourself as watcher', () => {
    homePage.clickLoginBtn()
    loginPage.login();
    loggedHomePage.clickBoardsBtn();
    forumsPage.clickHelpBtn();
    helpPage.clickIwreBtn();
    iwrePage.checkAddWatcher();
    iwrePage.checkRemoveWatcher();
  });
});