import type { Compiler } from 'webpack'

/**
 * Build the CSS File based on the HTML/JSX File
 */
export function build(args: ConfigFile): void

/**
 * For Webpack Usage
 * @example
 * // webpack.config.js
 * module.exports = {
 *   plugins: [new SaluteWebpackPlugin()]
 * }
 */
export class SaluteWebpackPlugin {
  constructor()
  apply(compiler: Compiler): void
}

/**
 * Configuration File
 */
export type ConfigFile = {
  input: string,
  output?: string,
  defer?: string[]
}
