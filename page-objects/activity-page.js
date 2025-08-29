import { text } from '../cypress/fixtures/text'
class ActivityPage {
  setDate(date) {
    cy.get('#from').type(date)
  }

  clickApplyBtn() {
    cy.get('.button-small').click()
  }

  verifyNoData() {
    cy.contains(text.errorNoData).should('be.visible')
  }

  searchDate(date) {
    this.setDate(date)
    this.clickApplyBtn()
  }
}

export default new ActivityPage()
