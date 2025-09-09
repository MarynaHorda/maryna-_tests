class NewsPage {
  
  getOnRelease() {
  return cy.get(':nth-child(4) > header > h3 > a')
  }
  
  clickOnRelease() {
  this.getOnRelease().click()
  }
}

export default new NewsPage()
