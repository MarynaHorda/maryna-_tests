class MyAccountPage {
  
  getChangePasswordBtn() {
  return cy.get('.contextual > .icon')
  }
  
  clickChangePasswordBtn() {
  this.getChangePasswordBtn().click()
  }
}
export default new MyAccountPage()
