class ReleasePage {
  clickLeaveComBtn() {
    cy.get('#content > :nth-child(7) > a').click()
  }

  setComField(text) {
    cy.get('#comment_comments').type(text)
  }

  clickSendComBtn() {
    cy.get('p > input').click()
  }

  writeAndSendCom(text) {
    this.setComField(text)
    this.clickSendComBtn()
  }

  verifyComAdded() {
    cy.get('#flash_notice')
    cy.contains('Comment added').should('be.visible')
  }
}

export default new ReleasePage()
