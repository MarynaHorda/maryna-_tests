import { text } from "../cypress/fixtures/text";

class CreateNewQuestion{

clickCommitBtn() {
cy.get('[name="commit"]').click();
}

verifyError() {
cy.get('#errorExplanation')
cy.contains(text.errorEmptyTitle).should('be.visible');
}

highlightErrorField() {
cy.get('label[for="issue_subject"]').should('have.class', 'error');
}

checkErrorAndField() {
this.verifyError()
this.highlightErrorField()
}

}
export default new CreateNewQuestion();