const { build } = require('../index.js')

/**
 * For Webpack Usage
 * @type {import('../../index.d.ts').SaluteWebpackPlugin}
 */
class SaluteWebpackPlugin {
  constructor() {
    this.buildCount = 0;
    this.lastBuildTime = 0;
  }

  apply(compiler) {
    compiler.hooks.watchRun.tap('SaluteWebpackPlugin', () => {
      const now = Date.now()

      if (now - this.lastBuildTime > 500) {
        this.buildCount++
        build()
        this.lastBuildTime = now
      }
    })
  }
}

module.exports.SaluteWebpackPlugin = SaluteWebpackPlugin
