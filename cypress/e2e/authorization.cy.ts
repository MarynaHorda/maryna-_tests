import loginPage from '../../page-objects/login-page'
import loggedHomePage from '../../page-objects/logged-home-page'
import { getUserName } from 'cypress/support/env'
import lostPasswordPage from 'page-objects/lost-password-page'
import homePage from 'page-objects/home-page'

describe('Authentication flows', () => {
  const userName = getUserName()

  it('Authorization and verification of logged state', () => {
    loginPage.loginDefaultUser()

    loggedHomePage.verifyLoggedState(userName)
    loggedHomePage.logout()
  })

  it('Unable to reset password', () => {
    homePage.loginBtn().click()

    loginPage.lostPasswordBtn().click()

    lostPasswordPage.requestPassword()
    lostPasswordPage.verifyUnknownUserError()
  })
})
