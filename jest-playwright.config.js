const { createTagNameEngine } = require("./tests/engine");

module.exports = {
  browsers: ["chromium"],
  launchOptions: {
    headless: true
  },
  selectors: [
    {name: 'tag', script: createTagNameEngine}
  ]
}