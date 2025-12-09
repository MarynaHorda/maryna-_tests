import { text } from 'cypress/fixtures/text'

class ActivityPage {
  dateField = () => cy.get('#from')
  applyBtn = () => cy.get('.button-small')

  searchByDate(date: string) {
    this.dateField().clear().type(date)
    this.applyBtn().click()
  }

  verifyNoData() {
    cy.get('#content').should('contain', text.errorNoData).and('be.visible')
  }
}

export default new ActivityPage()
