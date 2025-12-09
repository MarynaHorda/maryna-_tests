import homePage from '../../page-objects/home-page'
import activityPage from '../../page-objects/activity-page'
import { futureDate } from 'cypress/support/constants'

describe('Activity check', () => {
  it('Verify that no data is displayed for a future date', () => {
    homePage.activityBtn().click()

    activityPage.searchByDate(futureDate)
    activityPage.verifyNoData()
  })
})
