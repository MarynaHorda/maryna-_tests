class IwrePage {

checkAddWatcher () {
cy.get('.message-71040-watcher').click();
cy.get('#watchers .user').should('have.length', 2);
cy.get('.user-723556 > .user').should('have.text', 'Barabulka Barabulka');
}

checkRemoveWatcher () {
cy.get('.message-71040-watcher').click();
cy.get('.user-723556 > .user').should('not.exist');
}

}

export default new IwrePage ();