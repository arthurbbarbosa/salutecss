import { build } from '../index.js'

/**
 * For Webpack Usage
 */
export class SaluteWebpackPlugin {
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
