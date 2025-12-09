import historyPage from 'page-objects/history-page'
import homePage from 'page-objects/home-page'

describe('Compare versions', () => {
  it('Check and compare versions', () => {
    homePage.openHistory()

    historyPage.selectAndCompareVersions()
    historyPage.verifyDiffTitle()
    historyPage.verifyDiffContentAdded()
  })
})
