import { text } from '../cypress/fixtures/text'

class CreateNewQuestion {
  commitBtn = () => cy.get('[name="commit"]')
  errorContainer = () => cy.get('#errorExplanation')
  errorFieldLabel = () => cy.get('label[for="issue_subject"]')

  verifyError() {
    this.errorContainer()
      .should('be.visible')
      .and('contain', text.errorEmptyTitle)
  }

  highlightErrorField() {
    this.errorFieldLabel().should('have.class', 'error')
  }

  checkErrorAndField() {
    this.verifyError()
    this.highlightErrorField()
  }
}

export default new CreateNewQuestion()
