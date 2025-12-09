class LoggedHomePage {
  logoutBtn = () => cy.get('.logout')
  loggedAsText = () => cy.get('#loggedas')
  newObjectBtn = () => cy.get('#new-object')
  newWikiPageBtn = () => cy.get('.new-wiki-page')
  newQstBtn = () => cy.get('.new-issue-sub')
  myAccountBtn = () => cy.get('.my-account')
  forumsBtn = () => cy.get('.boards')

  logout() {
    cy.get('body').then(($body) => {
      if ($body.find('.logout').length) {
        this.logoutBtn().click()
      }
    })
  }

  verifyLoggedState(userName: string) {
    this.loggedAsText().should('have.text', `Logged in as ${userName}`)
    this.logoutBtn().should('be.visible')
  }

  createNewPage() {
    this.newObjectBtn().click()
    this.newWikiPageBtn().click()
  }

  createNewQst() {
    this.newObjectBtn().click()
    this.newQstBtn().click()
  }
}

export default new LoggedHomePage()
