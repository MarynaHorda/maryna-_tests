class MyAccountPage {

clickChangePasswordBtn () {
cy.get('.contextual > .icon').click()
}

}
export default new MyAccountPage();