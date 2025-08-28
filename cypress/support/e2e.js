Cypress.on('uncaught:exception', (err, runnable) => {
  // Запобігає фейлу тесту, якщо JS-помилка на сайті
  return false
})