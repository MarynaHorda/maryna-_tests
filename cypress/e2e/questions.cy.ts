import loginPage from '../../page-objects/login-page'
import loggedHomePage from '../../page-objects/logged-home-page'
import createNewQuestion from '../../page-objects/create-new-question'

describe('Questions tests', () => {
  beforeEach(() => {
    loginPage.loginDefaultUser()
  })

  afterEach(() => {
    loggedHomePage.logout()
  })

  it('Try creating question without required field', () => {
    loggedHomePage.createNewQst()

    createNewQuestion.commitBtn().click()
    createNewQuestion.checkErrorAndField()
  })
})
