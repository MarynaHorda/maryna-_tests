class ForumsPage {
  helpBtn = () => cy.get('a.board').contains('Help')
}

export default new ForumsPage()
