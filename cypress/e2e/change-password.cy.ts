import loginPage from '../../page-objects/login-page'
import loggedHomePage from '../../page-objects/logged-home-page'
import myAccountPage from '../../page-objects/my-account-page'
import changePasswordPage from '../../page-objects/change-password-page'

describe('Change Password test', () => {
  beforeEach(() => {
    loginPage.loginDefaultUser()
  })

  afterEach(() => {
    loggedHomePage.logout()
  })

  it('Check that the user unable to set the same password', () => {
    loggedHomePage.myAccountBtn().click()

    myAccountPage.changePasswordBtn().click()

    changePasswordPage.changePassword()
    changePasswordPage.verifyErrorInfo()
  })
})
