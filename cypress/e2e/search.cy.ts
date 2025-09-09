import homePage from '../../page-objects/home-page';
import foundResultsPage from '../../page-objects/found-results-page';
import { searchQuery } from './constants';

describe('Search tests', () => {
  it('Search info', () => {
    homePage.searchInfo(searchQuery);
    foundResultsPage.filter();
    foundResultsPage.verifyAmountAndTitle();
  });
});