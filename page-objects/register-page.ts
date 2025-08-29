import { text } from "cypress/fixtures/text"

class RegisterPage {
  setUserLogin(login:string) {
    cy.get('#user_login').type(login)
  }

  setUserPassword(password:string) {
    cy.get('#user_password').type(password)
  }

  setUserPasswordConfirmation(passwordConfirmation:string) {
    cy.get('#user_password_confirmation').type(passwordConfirmation)
  }

  setUserFirstName(firstName:string) {
    cy.get('#user_firstname').type(firstName)
  }

  setUserLastName(lastName:string) {
    cy.get('#user_lastname').type(lastName)
  }

  setUserMail(mail:string) {
    cy.get('#user_mail').type(mail)
  }

  clickSubmitBtn() {
    cy.get('[type="submit"]').click()
  }

  verifyMailInfo() {
    cy.contains(text.errorMailExist).should('be.visible')
  }

  veryfiLogininfo() {
    cy.contains(text.errorLoginExist).should('be.visible')
  }

  register(login:string, password:string, passwordConfirmation:string, firstName:string, lastName:string, mail:string) {
    this.setUserLogin(login)
    this.setUserPassword(password)
    this.setUserPasswordConfirmation(passwordConfirmation)
    this.setUserFirstName(firstName)
    this.setUserLastName(lastName)
    this.setUserMail(mail)
    this.clickSubmitBtn()
  }
}

export default new RegisterPage()
