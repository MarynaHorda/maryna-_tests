import { randomWait } from 'cypress/support/utils';

class ReleasePage {
  
  getLeaveComBtn() {
  return cy.get('#content > :nth-child(7) > a')
  }
  
  clickLeaveComBtn() {
  this.getLeaveComBtn().click()
  }

  getComField() {
  return cy.get('#comment_comments')
  }

  setComField(text:string) {
  this.getComField().type(text)
  }

  getSendComBtn() {
  return cy.get('p > input')
  }

  clickSendComBtn() {
  this.getSendComBtn().click()
  }

  writeAndSendCom(text:string) {
  this.setComField(text)
  randomWait(300, 800);
  this.clickSendComBtn()
  }

  getComAdded() {
  return cy.get('#flash_notice')
  }

  verifyComAdded() {
  this.getComAdded()
  cy.contains('Comment added').should('be.visible')
  }
}

export default new ReleasePage()
