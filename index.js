const { build } = require('./src/index.js')
const { SaluteWebpackPlugin } = require('./src/adapters/webpack.js')

module.exports = {
  SaluteWebpackPlugin,
  build
}
