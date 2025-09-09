import { randomWait } from 'cypress/support/utils';
import { text } from '../cypress/fixtures/text'
class ActivityPage {
  
  getDate() {
  return cy.get('#from')
  }
  
  setDate(date:string) {
  this.getDate().type(date)
  }

  getApplyBtn() {
  return cy.get('.button-small')
  }

  clickApplyBtn() {
  this.getApplyBtn().click()
  }

  verifyNoData() {
  cy.contains(text.errorNoData).should('be.visible')
  }

  searchDate(date:string) {
  this.setDate(date);
  randomWait(300, 800);
  this.clickApplyBtn();
  }
}

export default new ActivityPage()
