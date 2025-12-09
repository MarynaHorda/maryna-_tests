import homePage from '../../page-objects/home-page'
import registerPage from '../../page-objects/register-page'

describe('Registration tests', () => {
  beforeEach(() => {
    homePage.registerBtn().click()
  })

  it('Check error messages for existing login and email', () => {
    registerPage.register()
    registerPage.verifyMailError()
    registerPage.verifyLoginError()
  })

  it('Check error message for invalid email format', () => {
    registerPage.registerWithInvalidMail()
    registerPage.verifyMailInvalidError()
  })
})
