class ChangelogPage {
  header = () => cy.get('h1')

  pageHeader = () => this.header().contains('Changelog')
  versionList = () => cy.get('.wiki-page ul')
  latestVersionLink = () => this.versionList().find('li').first().find('a')
  securityAdvisoriesLink = () =>
    cy.get('a[href="/projects/redmine/wiki/Security_Advisories"]').first()

  verifyTotalVersionsCount(expectedCount: number) {
    this.versionList().find('li').should('have.length', expectedCount)
  }

  navigateToLatestVersion(versionName: string) {
    this.latestVersionLink().should('contain', versionName).click()

    const partialName = versionName.replace(' series', '')

    this.header().should('contain', partialName)
  }

  navigateAndVerifySecurityAdvisories() {
    this.securityAdvisoriesLink().click()
    cy.url().should('include', '/wiki/Security_Advisories')
    this.header().should('contain', 'Security Advisories')
  }

  open() {
    cy.visit('/projects/redmine/wiki/Changelog')
  }
}

export default new ChangelogPage()
