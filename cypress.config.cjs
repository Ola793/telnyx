const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

require('dotenv').config();

module.exports = defineConfig({
 e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    env: {
      emailForSignUp: process.env.EMAIL_FOR_SIGNUP,
      passwordForSignUp: process.env.PASSWORD_FOR_SIGNUP,
      email: process.env.EMAIL,
      password: process.env.PASSWORD
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
});
