class HomePage {
  loginBtn = () => cy.get('.login')
  registerBtn = () => cy.get('.register')
  searchField = () => cy.get('#q')
  activityBtn = () => cy.get('.activity')
  actionsBtn = () => cy.get('span.icon-only.icon-actions[title="Actions"]')
  historyBtn = () => cy.get('a.icon-history').contains('History')
  changelogLink = () => cy.get('a[href="/projects/redmine/wiki/Changelog"]').contains('Changelog').first()

  openHistory() {
    this.actionsBtn().click()
    this.historyBtn().click()
  }

  searchInfo(info: string) {
    this.searchField().type(`${info}{enter}`)
  }

  open() {
    cy.visit('/')
  }
}

export default new HomePage()
