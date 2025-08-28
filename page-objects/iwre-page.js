class IwrePage {

checkAddWatcher () {
cy.get('.message-71040-watcher').click();
cy.get('#watchers .user').should('have.length', 4);
}

checkRemoveWatcher () {
cy.get('.message-71040-watcher').click();
cy.get('.user-723556 > .user').should('not.exist');
}

}

export default new IwrePage ();