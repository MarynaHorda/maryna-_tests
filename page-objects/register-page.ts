import { text } from 'cypress/fixtures/text'
import {
  getFirstName,
  getInvalidMail,
  getLastName,
  getLogin,
  getMail,
  getPassword,
  getPasswordConfirmation,
  getUniqueLogin,
} from 'cypress/support/env'

class RegisterPage {
  loginField = () => cy.get('#user_login')
  passwordField = () => cy.get('#user_password')
  confirmField = () => cy.get('#user_password_confirmation')
  firstNameField = () => cy.get('#user_firstname')
  lastNameField = () => cy.get('#user_lastname')
  mailField = () => cy.get('#user_mail')
  submitBtn = () => cy.get('input[type="submit"]')
  errorContainer = () => cy.get('#errorExplanation')

  register() {
    this.loginField().type(getLogin())
    this.passwordField().type(getPassword())
    this.confirmField().type(getPasswordConfirmation())
    this.firstNameField().type(getFirstName())
    this.lastNameField().type(getLastName())
    this.mailField().type(getMail())
    this.submitBtn().click()
  }

  registerWithInvalidMail() {
    this.loginField().type(getUniqueLogin())
    this.passwordField().type(getPassword())
    this.confirmField().type(getPasswordConfirmation())
    this.firstNameField().type(getFirstName())
    this.lastNameField().type(getLastName())
    this.mailField().type(getInvalidMail())
    this.submitBtn().click()
  }

  verifyMailError() {
    this.errorContainer()
      .should('be.visible')
      .and('contain', text.errorMailExist)
  }

  verifyLoginError() {
    this.errorContainer()
      .should('be.visible')
      .and('contain', text.errorLoginExist)
  }

  verifyMailInvalidError() {
    this.errorContainer()
      .should('be.visible')
      .and('contain', text.errorMailInvalid)
  }
}

export default new RegisterPage()
