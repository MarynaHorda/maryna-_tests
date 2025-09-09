class HomePage {
  
  getLoginBtn() {
  return cy.get('.login')
  }
  
  clickLoginBtn() {
  this.getLoginBtn().click()
  }

  getRegisterBtn() {
  return cy.get('.register')
  }
  
  clickRegisterBtn() {
  this.getRegisterBtn().click()
  }

  getVerifyLoginBtn() {
  return cy.get('.login')
  }
  
  verifyLoginBtn() {
  this.getVerifyLoginBtn().should('have.text', 'Sign in')
  }

  getVerifyRegisterBtn() {
  return cy.get('.register')
  }

  verifyRegisterBtn() {
  this.getVerifyRegisterBtn().should('have.text', 'Register')
  }

  getSearchField() {
  return cy.get('#q')
  }
  
  searchInfo(info:string) {
  this.getSearchField().type(info).type('{enter}')
  }

  getActivityBtn() {
  return cy.get('.activity')
  }
  
  clickActivityBtn() {
  this.getActivityBtn().click()
  }

  open() {
    cy.visit('https://www.redmine.org')
  }
}

export default new HomePage()
