import { text } from '../cypress/fixtures/text'
import {
  getNewPassword,
  getNewPasswordConfirmation,
  getPassword,
} from 'cypress/support/env'
class ChangePasswordPage {
  passwordField = () => cy.get('#password')
  newPasswordField = () => cy.get('#new_password')
  confirmField = () => cy.get('#new_password_confirmation')
  submitBtn = () => cy.get('[type="submit"]')
  errorFlash = () => cy.get('#flash_error')

  changePassword() {
    this.passwordField().type(getPassword())
    this.newPasswordField().type(getNewPassword())
    this.confirmField().type(getNewPasswordConfirmation())
    this.submitBtn().click()
  }

  verifyErrorInfo() {
    this.errorFlash().should('be.visible').and('contain', text.errorNewPassword)
  }
}

export default new ChangePasswordPage()
