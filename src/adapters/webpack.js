import { build } from '../index.js'

/**
 * For Webpack Usage
 */
export class SaluteWebpackPlugin {
  apply(compiler) {
    let built = false

    compiler.hooks.done.tap('SaluteWebpackPlugin', () => {
      if (!built) {
        built = true
        build()
      }
    })
  }
}
