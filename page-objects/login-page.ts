import { getPassword, getUserName } from "cypress/support/env";
import { randomWait } from "cypress/support/utils";

class LoginPage {
  
  getLoginSubmitBtn() {
  return cy.get('#login-submit')
  }

  clickLoginSubmitBtn() {
  this.getLoginSubmitBtn().click()
  }

  getUserName() {
  return cy.get('#username')
  }

  setUserName(name: string) {
  this.getUserName().type(name);
  }

  getPassword() {
  return cy.get('#password')
  }

  setPassword(password: string) {
  this.getPassword().type(password);
  }

  verifyUrl() {
  cy.url().should('include', '/login')
  }

  login() {
  this.setUserName(getUserName());
  randomWait(300, 800);
  this.setPassword(getPassword());
  randomWait(300, 800);
  this.clickLoginSubmitBtn();
  randomWait(300, 800);
  }
}

export default new LoginPage()
