class HomePage {
  clickLoginBtn() {
    cy.get('.login').click()
  }

  clickRegisterBtn() {
    cy.get('.register').click()
  }

  verifyLoginBtn() {
    cy.get('.login').should('have.text', 'Sign in')
  }

  verifyRegisterBtn() {
    cy.get('.register').should('have.text', 'Register')
  }

  searchInfo(info) {
    cy.get('#q').type(info).type('{enter}')
  }

  clickActivityBtn() {
    cy.get('.activity').click()
  }

  open() {
    cy.visit('https://www.redmine.org')
  }
}

export default new HomePage()
