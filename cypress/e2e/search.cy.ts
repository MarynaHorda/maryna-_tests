import homePage from '../../page-objects/home-page'
import foundResultsPage from '../../page-objects/found-results-page'
import { expectedAmount, expectedTitle, searchQuery } from 'cypress/support/constants'

describe('Search test', () => {
  it('Search and filter', () => {
    homePage.searchInfo(searchQuery)

    foundResultsPage.applyFilters()
    foundResultsPage.verifyAmountAndTitle(expectedAmount, expectedTitle)
  })
})
