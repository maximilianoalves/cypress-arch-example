const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    specPattern: 'cypress/e2e/api/**/*.api.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
