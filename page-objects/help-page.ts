class HelpPage {
  issuesWithReceivingEmails = () => cy.get('#message-71040 > .subject > a')
}

export default new HelpPage()
