import loginPage from '../../page-objects/login-page'
import loggedHomePage from '../../page-objects/logged-home-page'
import forumsPage from '../../page-objects/forums-page'
import helpPage from '../../page-objects/help-page'
import issuesWithReceivingEmailsPage from '../../page-objects/issues-with-receiving-emails-page'

describe('Forum test', () => {
  beforeEach(() => {
    loginPage.loginDefaultUser()
  })

  afterEach(() => {
    loggedHomePage.logout()
  })

  it('Add and remove self from watchers list', () => {
    loggedHomePage.forumsBtn().click()

    forumsPage.helpBtn().click()

    helpPage.issuesWithReceivingEmails().click()

    issuesWithReceivingEmailsPage.addWatcher()
    issuesWithReceivingEmailsPage.removeWatcher()
  })
})
