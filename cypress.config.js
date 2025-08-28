const { defineConfig } = require('cypress')

module.exports = defineConfig({
   watchForFileChanges: false,
   env: {
    baseUrl: "https://www.redmine.org",
    userName: "Barabulka",
    password: "Barabulka",
    login: "Barabulka",
    passwordConfirmation: "Barabulka",
    firstName: "Barabulka",
    lastName: "Barabulka",
    mail: "marynahorda2901@gmail.com",
    newPassword: "Barabulka",
    newPasswordConfirmation: "Barabulka",
   },

   e2e: {
    setupNodeEvents(on, config) {
    },
  },
});

