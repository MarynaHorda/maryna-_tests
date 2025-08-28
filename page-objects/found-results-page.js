class FoundResultsPage {

checkboxTitlesOnly() {
cy.get('#titles_only').check();
}

checkboxNews() {
cy.get('#news').check();
}

clickSearchBtn() {
cy.get('#search-form > :nth-child(3) > input').click();
}

filter() {
this.checkboxTitlesOnly()
this.checkboxNews()
this.clickSearchBtn()
}

verifyAmount() {
cy.get('#content > h3').should('have.text', 'Results (1)');
cy.get('dt').its('length').then((amount) => {
cy.log('Results: ' + amount);
expect(amount).to.equal(1);
})
}

verifyFoundTitle() {
cy.get('.news > a').should('have.text', 'Redmine 6.0.6, 5.1.9 and 5.0.13 released');
}

verifyAmountAndTitle() {
this.verifyAmount()
this.verifyFoundTitle()
}

}
export default new FoundResultsPage();