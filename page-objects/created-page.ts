class CreatedPage {
  
  getSaveBtn() {
  return cy.get(':nth-child(6) > input')
  }
  
  clickSaveBtn() {
  this.getSaveBtn().click()
  }

  getSearchField() {
  return cy.get('#q')
  }
  
  searchInfo(pageTitle:string) {
  this.getSearchField().click().type(pageTitle).type('{enter}')
  }

  getTitle() {
  return cy.get('.wiki-page > a');
  }

  verifyTitle(pageUrlTitle: string) {
  this.getTitle().should('have.text', `Wiki: ${pageUrlTitle}`);
  }

  searchAndVerifyPage(pageTitle:string, pageUrlTitle:string) {
  this.searchInfo(pageTitle)
  this.verifyTitle(pageUrlTitle)
  }
}

export default new CreatedPage()
