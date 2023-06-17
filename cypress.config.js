const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: 'y5fany',
  env: {
    url : 'https://ProductINT:productINT1234@test12345.int.mozcomnonline.com/'
    //url : 'https://Product:product1234@ocean.stg.shopsphere.com/'

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
  },
  viewportHeight: 800,
  viewportWidth: 1440,
});
