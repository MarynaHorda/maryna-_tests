import { text } from 'cypress/fixtures/text'

class HistoryPage {
  toVersionRadioButtons = () => cy.get('input[name="version"]')
  fromVersionRadioButtons = () => cy.get('input[name="version_from"]')
  viewDifferencesBtn = () =>
    cy.get('input[name="commit"][value="View differences"]')
  diffTitleHeader = () => cy.get('h2')
  textDiffBlock = () => cy.get('pre.text-diff')

  selectAndCompareVersions() {
    this.toVersionRadioButtons().eq(1).check()
    this.fromVersionRadioButtons().should('be.checked')
    this.viewDifferencesBtn().first().should('be.visible').click()
  }

  verifyDiffTitle() {
    this.diffTitleHeader().should('be.visible').and('contain', text.diffTitle)
  }

  verifyDiffContentAdded() {
    this.textDiffBlock()
      .find('span.diff_in')
      .should('be.visible')
      .and('contain', text.diffContent)
  }
}

export default new HistoryPage()
