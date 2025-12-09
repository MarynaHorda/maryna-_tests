import { getUserName, getPassword, getTwoFaCodes } from 'cypress/support/env'
import homePage from './home-page'

class LoginPage {
  userNameField = () => cy.get('#username')
  passwordField = () => cy.get('#password')
  loginSubmitBtn = () => cy.get('#login-submit')
  twoFACodeField = () => cy.get('#twofa_code')
  lostPasswordBtn = () => cy.get('.lost_password')

  trySubmitTwoFaCodes(codes: string[]) {
    const idx = Cypress.env('currentCodeIndex') || 0
    if (idx >= codes.length) throw new Error('No valid 2FA codes left')

    this.twoFACodeField().type(codes[idx])
    this.loginSubmitBtn().click()
    Cypress.env('currentCodeIndex', idx + 1)

    cy.get('body', { timeout: 5000 }).then(($body) => {
      if ($body.find('#twofa_code').length) {
        this.trySubmitTwoFaCodes(codes)
      } else if ($body.find('#flash_error').text().includes('Too many tries')) {
        cy.wait(3000)
        this.loginDefaultUser()
      }
    })
  }

  loginDefaultUser() {
    homePage.loginBtn().click()
    cy.url().should('include', '/login')
    this.userNameField().type(getUserName())
    this.passwordField().type(getPassword())
    this.loginSubmitBtn().click()

    cy.get('body').then(($body) => {
      if ($body.find('#twofa_code').length) {
        this.trySubmitTwoFaCodes(getTwoFaCodes())
      }
    })
  }
}

export default new LoginPage()
