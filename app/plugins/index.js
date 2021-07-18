const fs = require('fs')
const path = (...p) => require('path').join(__dirname, ...p)
const files = fs.readdirSync(path('.'))

const plugins = files
  .filter((file) => file !== 'index.js')
  .map((file) => require(`./${file}`))

exports.applyPlugins = (api) => {
  plugins.forEach((plugin) => {
    plugin.apply(api)
  })
}
