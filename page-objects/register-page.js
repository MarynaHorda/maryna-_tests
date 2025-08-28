import { text } from "../cypress/fixtures/text";

class RegisterPage {

setUserLogin(login) {
cy.get('#user_login').type(login)
}

setUserPassword(password) {
cy.get('#user_password').type(password);
}

setUserPasswordConfirmation(passwordConfirmation) {
cy.get('#user_password_confirmation').type(passwordConfirmation);
}

setUserFirstName(firstName) {
cy.get('#user_firstname').type(firstName);
}

setUserLastName(lastName) {
cy.get('#user_lastname').type(lastName);
}

setUserMail(mail) {
cy.get('#user_mail').type(mail);
}

clickSubmitBtn()
{
cy.get('[type="submit"]').click();
}

verifyMailInfo() {
cy.contains(text.errorMailExist).should('be.visible');
}

veryfiLogininfo() {
cy.contains(text.errorLoginExist).should('be.visible');
}

register(login,password,passwordConfirmation,firstName,lastName,mail) {
this.setUserLogin(login)
this.setUserPassword(password)
this.setUserPasswordConfirmation(passwordConfirmation)
this.setUserFirstName(firstName)
this.setUserLastName(lastName)
this.setUserMail(mail)
this.clickSubmitBtn()
}

}

export default new RegisterPage();