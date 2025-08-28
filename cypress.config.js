const { defineConfig } = require('cypress')

module.exports = defineConfig({
   watchForFileChanges: false,
   env: {
    baseUrl: "https://www.redmine.org",
    userName: "Barabulka2003",
    password: "Barabulka2003",
    login: "Barabulka2003",
    passwordConfirmation: "Barabulka2003",
    firstName: "Barabulka",
    lastName: "Barabulka",
    mail: "maryna.h@jetbase.io",
    newPassword: "Barabulka2003",
    newPasswordConfirmation: "Barabulka2003",
   },

   e2e: {
    setupNodeEvents(on, config) {
    },
  },
});

