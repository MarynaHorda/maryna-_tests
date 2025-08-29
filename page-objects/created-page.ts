class CreatedPage {
  clickSaveBtn() {
    cy.get(':nth-child(6) > input').click()
  }

  searchInfo(pageTitle) {
    cy.get('#q').click().type(pageTitle).type('{enter}')
  }

  verifyTitle(pageUrlTitle) {
    cy.get('.wiki-page > a').should('have.text', `Wiki: ${pageUrlTitle}`)
  }

  searchAndVerifyPage(pageTitle, pageUrlTitle) {
    this.searchInfo(pageTitle)
    this.verifyTitle(pageUrlTitle)
  }
}

export default new CreatedPage()
