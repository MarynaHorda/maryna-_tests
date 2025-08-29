import { text } from '../cypress/fixtures/text'

class CreateNewPage {
  setPageTitle(pageTitle) {
    cy.get('#page_title').clear().type(pageTitle)
  }

  clickSubmitBtn() {
    cy.get('[type="submit"]').click()
  }

  createPage(pageTitle) {
    this.setPageTitle(pageTitle)
    this.clickSubmitBtn()
  }

  titleExist() {
    cy.contains(text.errorTitleExist).should('be.visible')
  }
}

export default new CreateNewPage()
