import homePage from 'page-objects/home-page'

Cypress.env('currentCodeIndex', 0)

Cypress.on('uncaught:exception', (err, runnable) => {
  // Запобігає фейлу тесту, якщо JS-помилка на сайті
  return false
})

beforeEach(() => {
  homePage.open()
  cy.intercept('**', (req) => {
    req.headers['accept-language'] = 'en-US,en;q=0.9'
  })
})
