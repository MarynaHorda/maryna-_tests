import { randomWait } from "cypress/support/utils"

class LoggedHomePage {
  
  getLogoutBtn() {
  return cy.get('.logout')
  }
  
  clickLogoutBtn() {
  this.getLogoutBtn().click();
  }

  getLoggedAsText() {
  return cy.get('#loggedas')
  }

  verifyLoggedAsText() {
  this.getLoggedAsText().should('have.text', 'Logged in as Barabulka1945');
  }

  getVerifyLogoutBtn() {
  return cy.get('.logout')
  }

  verifyLogoutBtn() {
  this.getVerifyLogoutBtn().should('have.text', 'Sign out');
  }

  getNewObjectBtn() {
  return cy.get('#new-object')
  }

  clickNewObjectBtn() {
  this.getNewObjectBtn().click();
  }

  getNewWikiPageBtn() {
  return cy.get('.new-wiki-page')
  }

  clickNewWikiPageBtn() {
  this.getNewWikiPageBtn().click();
  }

  getNewQstBtn() {
  return cy.get('.new-issue-sub')
  }

  clickNewQstBtn() {
  this.getNewQstBtn().click();
  }

  getNewsBtn() {
  return cy.get('.news')
  }

  clickNewsBtn() {
  this.getNewsBtn().click();
  }

  createNewPage() {
  this.clickNewObjectBtn();
  randomWait(300, 800);
  this.clickNewWikiPageBtn();
  }

  createNewQst() {
  this.clickNewObjectBtn();
  randomWait(300, 800);
  this.clickNewQstBtn();
  }

  getBoardsBtn() {
  return cy.get('.boards')
  }

  clickBoardsBtn() {
  this.getBoardsBtn().click();
  }

  getMyAccountBtn() {
  return cy.get('.my-account')
  }

  clickMyAccountBtn() {
  this.getMyAccountBtn().click();
  }
}

export default new LoggedHomePage()
