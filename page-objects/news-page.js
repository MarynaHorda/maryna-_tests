class NewsPage {

clickOnRelease () {
cy.get(':nth-child(4) > header > h3 > a').click()
}

}

export default new NewsPage();