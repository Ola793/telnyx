const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
 e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      emailForSignUp: process.env.CYPRESS_EMAIL_FOR_SIGNUP,
      passwordForSignUp: process.env.CYPRESS_PASSWORD_FOR_SIGNUP,
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD
    },
    // baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
  },
  screenshotOnRunFailure: false,   // default true
  video: false,                     // default false
  viewportHeight: 1000,            // default 660
  viewportWidth: 1500,           // default 1200
  // retries: 1,
  defaultCommandTimeout: 5000,   // default 4000
  requestTimeout: 10000,         // default 5000
  responseTimeout: 30000,         // default 30000
  // watchForFileChanges: false,
  // env: {
  //   password: process.env.PASS
  // }
});
