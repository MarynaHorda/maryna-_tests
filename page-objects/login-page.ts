class LoginPage {
  clickLoginSubmitBtn() {
    cy.get('#login-submit').click()
  }

  setUserName(name:string) {
    cy.get('#username').type(name)
  }

  setPassword(password:string) {
    cy.get('#password').type(password)
  }

  verifyUrl() {
    cy.url().should('include', '/login')
  }

  login(name:string, password:string) {
    this.setUserName(name)
    this.setPassword(password)
    this.clickLoginSubmitBtn()
  }
}

export default new LoginPage()
