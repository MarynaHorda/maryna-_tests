import { text } from '../cypress/fixtures/text'
class ChangePasswordPage {
  setPassword(password) {
    cy.get('#password').type(password)
  }

  setNewPassword(newPassword) {
    cy.get('#new_password').type(newPassword)
  }

  setNewPasswordConfirmation(newPasswordConfirmation) {
    cy.get('#new_password_confirmation').type(newPasswordConfirmation)
  }

  clickSubmitBtn() {
    cy.get('[type="submit"]').click()
  }

  changePassword(password, newPassword, newPasswordConfirmation) {
    this.setPassword(password)
    this.setNewPassword(newPassword)
    this.setNewPasswordConfirmation(newPasswordConfirmation)
    this.clickSubmitBtn()
  }

  verifyErrorInfo() {
    cy.contains(text.errorNewPassword).should('be.visible')
  }
}

export default new ChangePasswordPage()
