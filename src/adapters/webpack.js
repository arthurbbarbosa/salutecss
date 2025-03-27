const { build } = require('../index.js')

/**
 * For Webpack Usage
 * @type {import('../../index.d.ts').SaluteWebpackPlugin}
 */
class SaluteWebpackPlugin {
  constructor() {
    this.build_count = 0;
    this.last_build_time = 0;
  }

  apply(compiler) {
    compiler.hooks.watchRun.tap('SaluteWebpackPlugin', () => {
      const now = Date.now()

      if (now - this.last_build_time > 500) {
        this.build_count++
        build()
        this.last_build_time = now
      }
    })
  }
}

module.exports.SaluteWebpackPlugin = SaluteWebpackPlugin
