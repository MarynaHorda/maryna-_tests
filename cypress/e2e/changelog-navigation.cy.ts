import { text } from 'cypress/fixtures/text'
import changelogPage from 'page-objects/changelog-page'

describe('Changelog Structure and Navigation', () => {
  const { totalCount, latestVersion } = text.changelog

  beforeEach(() => {
    changelogPage.open()
  })

  it('Verify total version count and navigation to the latest series', () => {
    changelogPage.pageHeader().should('be.visible')
    changelogPage.verifyTotalVersionsCount(totalCount)
    changelogPage.navigateToLatestVersion(latestVersion)
  })

  it('Verify navigation to Security Advisories link', () => {
    changelogPage.navigateAndVerifySecurityAdvisories()
  })
})
