class FoundResultsPage {
  checkboxTitlesOnly = () => cy.get('#titles_only')
  checkboxNews = () => cy.get('#news')
  searchBtn = () => cy.get('#search-form input[type="submit"]')
  resultsTitle = () => cy.get('#content > h3')
  descriptionListItems = () => cy.get('dt')
  foundArticleTitle = () => cy.get('.news > a')

  applyFilters() {
    this.checkboxTitlesOnly().check()
    this.checkboxNews().check()
    this.searchBtn().click()
  }

  verifyResultsHeader(expectedAmount: number) {
    this.resultsTitle().should('have.text', `Results (${expectedAmount})`)
    this.descriptionListItems().should('have.length', expectedAmount)
  }

  verifySpecificArticleTitle(expectedTitle: string) {
    this.foundArticleTitle().should('be.visible').and('contain', expectedTitle)
  }

  verifyAmountAndTitle(expectedAmount: number, expectedTitle: string) {
    this.verifyResultsHeader(expectedAmount)
    this.verifySpecificArticleTitle(expectedTitle)
  }
}

export default new FoundResultsPage()
