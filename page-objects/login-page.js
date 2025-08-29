class LoginPage {
  clickLoginSubmitBtn() {
    cy.get('#login-submit').click()
  }

  setUserName(name) {
    cy.get('#username').type(name)
  }

  setPassword(password) {
    cy.get('#password').type(password)
  }

  verifyUrl() {
    cy.url().should('include', '/login')
  }

  login(name, password) {
    this.setUserName(name)
    this.setPassword(password)
    this.clickLoginSubmitBtn()
  }
}

export default new LoginPage()
