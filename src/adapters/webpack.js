const { build } = require('../index.js')

/**
 * For Webpack Usage
 * @type {import('../../index.d.ts').SaluteWebpackPlugin}
 */
class SaluteWebpackPlugin {
  constructor() {
    this.has_built = false;
  }

  apply(compiler) {
    compiler.hooks.watchRun.tap('SaluteWebpackPlugin', () => {
      if (!this.has_built) {
        try {
          build()
        } finally {
          this.has_built = true
        }
      }
    })
  }
}

module.exports.SaluteWebpackPlugin = SaluteWebpackPlugin
