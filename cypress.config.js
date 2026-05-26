const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  pageLoadTimeout: 30000,

  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
