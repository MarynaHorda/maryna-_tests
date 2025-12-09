class IssuesWithReceivingEmailsPage {
  watchBtn = () => cy.get('.message-71040-watcher')
  getWatchers = () => cy.get('#watchers .user')

  addWatcher() {
    this.getWatchers()
      .its('length')
      .then((initialCount) => {
        this.watchBtn().click()
        this.getWatchers().should('have.length', initialCount + 1)
      })
  }

  removeWatcher() {
    this.getWatchers()
      .its('length')
      .then((initialCount) => {
        this.watchBtn().click()
        this.getWatchers().should('have.length', initialCount - 1)
      })
  }
}

export default new IssuesWithReceivingEmailsPage()
