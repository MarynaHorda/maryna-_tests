import { text } from "cypress/fixtures/text"
import { getFirstName, getLastName, getLogin, getMail, getPassword, getPasswordConfirmation } from "cypress/support/env";
import { randomWait } from "cypress/support/utils"

class RegisterPage {
  
  getUserLogin() {
  return cy.get('#user_login')
  }
  
  setUserLogin(login:string) {
  this.getUserLogin().type(login);
  }

  getUserPassword() {
  return cy.get('#user_password')
  }

  setUserPassword(password:string) {
  this.getUserPassword().type(password);
  }

  getUserPasswordConfirmation() {
  return cy.get('#user_password_confirmation')
  }

  setUserPasswordConfirmation(passwordConfirmation:string) {
  this.getUserPasswordConfirmation().type(passwordConfirmation);
  }

  getUserFirstName() {
  return cy.get('#user_firstname')
  }

  setUserFirstName(firstName:string) {
  this.getUserFirstName().type(firstName);
  }

  getUserLastName() {
  return cy.get('#user_lastname')
  }

  setUserLastName(lastName:string) {
  this.getUserLastName().type(lastName);
  }

  getUserMail() {
  return cy.get('#user_mail')
  }

  setUserMail(mail:string) {
  this.getUserMail().type(mail);
  }

  getSubmitBtn() {
  return cy.get('[type="submit"]')
  }

  clickSubmitBtn() {
  this.getSubmitBtn().click();
  }

  verifyMailInfo() {
  cy.contains(text.errorMailExist).should('be.visible');
  }

  veryfiLogininfo() {
  cy.contains(text.errorLoginExist).should('be.visible');
  }

  register() {
  this.setUserLogin(getLogin());
  randomWait(300, 800);
  this.setUserPassword(getPassword());
  randomWait(300, 800);
  this.setUserPasswordConfirmation(getPasswordConfirmation());
  randomWait(300, 800);
  this.setUserFirstName(getFirstName());
  randomWait(300, 800);
  this.setUserLastName(getLastName());
  randomWait(300, 800);
  this.setUserMail(getMail());
  randomWait(300, 800);
  this.clickSubmitBtn();
}
}

export default new RegisterPage()
