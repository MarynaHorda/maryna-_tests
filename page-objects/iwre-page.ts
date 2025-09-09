class IwrePage {
  
  getWatchBtn () {
  return cy.get('.message-71040-watcher')
  }

  getWatchers() {
  return cy.get('#watchers .user')
  }
  
  checkAddWatcher() {
  this.getWatchBtn().click()
  this.getWatchers().should('have.length', 4)
  }

  getUnwatch() {
  return cy.get('.user-723556 > .user')
  }

  checkRemoveWatcher() {
  this.getWatchBtn().click()
  this.getUnwatch().should('not.exist')
  }
}

export default new IwrePage()
