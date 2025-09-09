import { randomWait } from "cypress/support/utils";

class FoundResultsPage {
  
  getCheckboxTitlesOnly() {
  return cy.get('#titles_only')
  }
  
  checkboxTitlesOnly() {
  this.getCheckboxTitlesOnly().check()
  }

  getCheckboxNews() {
  return cy.get('#news')
  }
  
  checkboxNews() {
  this.getCheckboxNews().check()
  }

  getSearchBtn() {
  return cy.get('#search-form > :nth-child(3) > input')
  }
  
  clickSearchBtn() {
  this.getSearchBtn().click()
  }

  filter() {
  this.checkboxTitlesOnly()
  randomWait(300, 800);
  this.checkboxNews()
  randomWait(300, 800);
  this.clickSearchBtn()
  }

  getTitle() {
  return cy.get('#content > h3')
  }
  
  getDescriptionList() {
  return cy.get('dt')
  }

  verifyAmount() {
  this.getTitle().should('have.text', 'Results (1)')
  this.getDescriptionList().its('length').then((amount) => {
  cy.log('Results: ' + amount)
  expect(amount).to.equal(1)
  })
  }

  getFoundTitle() {
  return cy.get('.news > a')
  }

  verifyFoundTitle() {
  this.getFoundTitle().should('have.text','Redmine 6.0.6, 5.1.9 and 5.0.13 released')
  }

  verifyAmountAndTitle() {
  this.verifyAmount()
  this.verifyFoundTitle()
  }
}
export default new FoundResultsPage()
