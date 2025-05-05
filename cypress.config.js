const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochaawsome',
  reporterOptions:{
    reporterDir:'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    specPattern: 'cypress/e2e/test/**/*.spec.{js,ts}'
  },
});
