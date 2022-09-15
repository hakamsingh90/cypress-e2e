module.exports = {

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)

    },
    specPattern:'cypress/**',
    defaultCommandTimeout: 25000,

  },
}
