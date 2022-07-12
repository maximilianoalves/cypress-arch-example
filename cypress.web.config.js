const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    specPattern: 'cypress/e2e/web/**/*.web.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
