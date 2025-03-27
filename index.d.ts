import type { Compiler } from 'webpack'

/**
 * Build the CSS File based on the HTML/JSX File
 */
export function build(args: ConfigFile): void

/**
 * Resolve the HTML returning the Style File
 */
export function resolve_html(HTML: string, defer?: string[] | never[]): string

/**
 * Load the Config File returning the Configuration
 */
export function load_config(): ConfigFile

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
