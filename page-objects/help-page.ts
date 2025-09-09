class HelpPage {
  
  getIwreBtn() {
  return cy.get('#message-71040 > .subject > a')
  }

  clickIwreBtn() {
  this.getIwreBtn().click()
  }
}

export default new HelpPage()
