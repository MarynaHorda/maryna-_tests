class ForumsPage {
  
  getHelpBtn() {
  return cy.get(':nth-child(2) > .name > .board')
  }
  
  clickHelpBtn() {
  this.getHelpBtn().click()
  }
}

export default new ForumsPage()
