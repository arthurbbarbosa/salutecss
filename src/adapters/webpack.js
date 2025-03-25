import { build } from '../index.js'

/**
 * For Webpack Usage
 */
export class SaluteWebpackPlugin {
  apply(compiler) {
    let built = false

    built = true
    compiler.hooks.done.tap('SaluteWebpackPlugin', () => !built && (built = true, build()))
  }
}
