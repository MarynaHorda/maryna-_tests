import { randomWait } from 'cypress/support/utils'
import { text } from '../cypress/fixtures/text'
import { getNewPassword, getNewPasswordConfirmation, getPassword } from 'cypress/support/env'
class ChangePasswordPage {
  
  getPassword() {
  return cy.get('#password')
  }

  setPassword(password:string) {
  this.getPassword().type(password)
  }

  getNewPassword() {
  return cy.get('#new_password')
  }

  setNewPassword(newPassword:string) {
  this.getNewPassword().type(newPassword)
  }

  getNewPasswordConfirmation() {
  return cy.get('#new_password_confirmation')
  }

  setNewPasswordConfirmation(newPasswordConfirmation:string) {
  this.getNewPasswordConfirmation().type(newPasswordConfirmation)
  }

  getSubmitBtn() {
  return cy.get('[type="submit"]')
  }

  clickSubmitBtn() {
  this.getSubmitBtn().click()
  }

  changePassword() {
  this.setPassword(getPassword());
  randomWait(300, 800);
  this.setNewPassword(getNewPassword());
  randomWait(300, 800);
  this.setNewPasswordConfirmation(getNewPasswordConfirmation());
  randomWait(300, 800);
  this.clickSubmitBtn();
  }

  verifyErrorInfo() {
  cy.contains(text.errorNewPassword).should('be.visible')
  }
}

export default new ChangePasswordPage()
