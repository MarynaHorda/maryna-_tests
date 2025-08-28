class LoggedHomePage {

clickLogoutBtn() {
cy.get('.logout').click()
}

verifyLoggedAsText() {
cy.get('#loggedas').should('have.text', 'Увійшов як Barabulka');
}

verifyLogoutBtn() {
cy.get('.logout').should('have.text', 'Вийти');
}

clickNewObjectBtn() {
cy.get('#new-object').click();
}

clickNewWikiPageBtn() {
cy.get('.new-wiki-page').click();
}

clickNewQstBtn() {
cy.get('.new-issue-sub').click();
}

clickNewsBtn() {
cy.get('.news').click();
}

createNewPage() {
this.clickNewObjectBtn()
this.clickNewWikiPageBtn()
}

createNewQst() {
this.clickNewObjectBtn()
this.clickNewQstBtn()
}

clickBoardsBtn() {
cy.get('.boards').click();
}

clickMyAccountBtn() {
cy.get('.my-account').click();
}

}

export default new LoggedHomePage();

