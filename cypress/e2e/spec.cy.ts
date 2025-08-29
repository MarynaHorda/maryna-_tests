import createNewPage from '../../page-objects/create-new-page'
import createNewQuestion from '../../page-objects/create-new-question'
import createdPage from '../../page-objects/created-page'
import foundResultsPage from '../../page-objects/found-results-page'
import homePage from '../../page-objects/home-page'
import loggedHomePage from '../../page-objects/logged-home-page'
import loginPage from '../../page-objects/login-page'
import newsPage from '../../page-objects/news-page'
import registerPage from '../../page-objects/register-page'
import releasePage from '../../page-objects/release-page'
import forumsPage from '../../page-objects/forums-page'
import helpPage from '../../page-objects/help-page'
import iwrePage from '../../page-objects/iwre-page'
import activityPage from '../../page-objects/activity-page'
import myAccountPage from '../../page-objects/my-account-page'
import changePasswordPage from '../../page-objects/change-password-page'

describe('Maryna`s tests', () => {
  it('Authorization', () => {
    homePage.open()
    homePage.clickLoginBtn()
    loginPage.verifyUrl()
    loginPage.login(Cypress.env('userName'), Cypress.env('password'))
    loggedHomePage.verifyLoggedAsText()
    loggedHomePage.verifyLogoutBtn()
  })

  it('Log out', () => {
    homePage.open()
    homePage.clickLoginBtn()
    loginPage.login(Cypress.env('userName'), Cypress.env('password'))
    loggedHomePage.clickLogoutBtn()
    homePage.verifyLoginBtn()
    homePage.verifyRegisterBtn()
  })

  it('Search info', () => {
    homePage.open()
    homePage.searchInfo('Redmine 6.0.6, 5.1.9 and 5.0.13 released')
    foundResultsPage.filter()
    foundResultsPage.verifyAmountAndTitle()
  })

  it('Check unsuccessful registration', () => {
    homePage.open()
    homePage.clickRegisterBtn()
    registerPage.register(
      Cypress.env('login'),
      Cypress.env('password'),
      Cypress.env('passwordConfirmation'),
      Cypress.env('firstName'),
      Cypress.env('lastName'),
      Cypress.env('mail')
    ),
      registerPage.verifyMailInfo()
    registerPage.veryfiLogininfo()
  })


  it('Try creating question without required field', () => {
    homePage.open()
    homePage.clickLoginBtn()
    loginPage.login(Cypress.env('userName'), Cypress.env('password'))
    loggedHomePage.createNewQst()
    createNewQuestion.clickCommitBtn()
    createNewQuestion.checkErrorAndField()
  })


  it('Add and remove yourself as watcher', () => {
    homePage.open()
    homePage.clickLoginBtn()
    loginPage.login(Cypress.env('userName'), Cypress.env('password'))
    loggedHomePage.clickBoardsBtn()
    forumsPage.clickHelpBtn()
    helpPage.clickIwreBtn()
    iwrePage.checkAddWatcher()
    iwrePage.checkRemoveWatcher()
  })

  it('Check that there is no activity on future', () => {
    homePage.open()
    homePage.clickActivityBtn()
    activityPage.searchDate('2026-01-29'), activityPage.verifyNoData()
  })

  it('Unable to set the same password', () => {
    homePage.open()
    homePage.clickLoginBtn()
    loginPage.login(Cypress.env('userName'), Cypress.env('password'))
    loggedHomePage.clickMyAccountBtn()
    myAccountPage.clickChangePasswordBtn()
    changePasswordPage.changePassword(
      Cypress.env('password'),
      Cypress.env('newPassword'),
      Cypress.env('newPasswordConfirmation')
    ),
      changePasswordPage.verifyErrorInfo()
  })
})
