import { text } from '../cypress/fixtures/text'

class CreateNewQuestion {
  
  getCommitBtn() {
  return cy.get('[name="commit"]');
  }
  
  clickCommitBtn() {
  this.getCommitBtn().click();
  }

  getError() {
  return cy.get('#errorExplanation');
  }

  verifyError() {
  this.getError();
  cy.contains(text.errorEmptyTitle).should('be.visible');
  }

  getErrorField() {
  return cy.get('label[for="issue_subject"]')
  }
  
  highlightErrorField() {
  this.getErrorField().should('have.class', 'error');
  }

  checkErrorAndField() {
  this.verifyError()
  this.highlightErrorField()
  }
}
export default new CreateNewQuestion()
