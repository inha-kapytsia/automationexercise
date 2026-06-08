const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  pageLoadTimeout: 30000,
  // allowCypressEnv: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env: {
    ...process.env,
  },

  expose: { grepFilterSpecs: true, grepOmitFiltered: true },

  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      require("@bahmutov/cy-grep/src/plugin")(config);
      require("cypress-mochawesome-reporter/plugin")(on);
      // IMPORTANT: return the config object
      return config;
    },
    env: {
      snapshotOnly: true,
    },
  },
});
