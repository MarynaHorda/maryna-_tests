import { text } from 'cypress/fixtures/text'
import { getInvalidMail } from 'cypress/support/env'

class LostPasswordPage {
  mailField = () => cy.get('#mail')
  submitBtn = () => cy.get('input[value="Submit"]')
  errorFlash = () => cy.get('#flash_error')

  requestPassword() {
    this.mailField().type(getInvalidMail())
    this.submitBtn().click()
  }

  verifyUnknownUserError() {
    this.errorFlash().should('be.visible').and('contain', text.errorUnknownUser)
  }
}
export default new LostPasswordPage()
