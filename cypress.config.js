const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {allureCypress(on);
      // implement node event listeners here
    },
    env: {
      "base_url": "localhost:8080",
      "backend": "localhost:5000"
    }
  },
});
