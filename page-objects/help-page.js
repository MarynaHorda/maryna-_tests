class HelpPage {
  clickIwreBtn() {
    cy.get('#message-71040 > .subject > a').click()
  }
}

export default new HelpPage()
