class ForumsPage {

clickHelpBtn () {
cy.get(':nth-child(2) > .name > .board').click();
}

}

export default new ForumsPage ();