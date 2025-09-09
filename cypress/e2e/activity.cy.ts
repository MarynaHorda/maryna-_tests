import homePage from 'page-objects/home-page';
import activityPage from '../../page-objects/activity-page';
import { futureDate } from './constants';

describe('Activity tests', () => {
  it('Check that there is no activity on future', () => {
   homePage.clickActivityBtn()
   activityPage.searchDate(futureDate);
   activityPage.verifyNoData()
   })
   })
