import type { Compiler } from 'webpack'

/**
 * Build the CSS File based on the HTML/JSX File
 */
export function build(args: ConfigFile): void

/**
 * Load the Config File returning the Configuration
 */
export function resolveConfigFile(): ConfigFile

/**
 * Parse Selectors Classes
 */
export function parseSelector(className: string): string | null

/**
 * Parse Media Queries Classes
 */
export function parseMediaQuery(className: string): string | null

/**
 * Parse Classes
 */
export function parseClass(className: string): string | null

/**
 * Parse Stylesheet
 */
export function parseStyle(style: string, defer?: string[] | never[]): string

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
