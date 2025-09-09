import { randomWait } from 'cypress/support/utils';
import { text } from '../cypress/fixtures/text'

class CreateNewPage {

  getPageTitle() {
  return cy.get('#page_title')
  }

  setPageTitle(pageTitle:string) {
  this.getPageTitle().clear().type(pageTitle);
  }

  getSubmitBtn() {
  return cy.get('[type="submit"]')
  }

  clickSubmitBtn() {
  this.getSubmitBtn().click();
  }

  createPage(pageTitle:string) {
  this.setPageTitle(pageTitle);
  randomWait(300, 800);
  this.clickSubmitBtn();
  }

  titleExist() {
  cy.contains(text.errorTitleExist).should('be.visible');
  }
}

export default new CreateNewPage()
