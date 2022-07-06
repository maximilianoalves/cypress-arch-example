const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
