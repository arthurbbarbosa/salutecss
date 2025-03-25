import { writeFile, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { SaluteWebpackPlugin } from './adapters/webpack.js'
import { resolve_html } from './utils/resolve_html.js'
import { load_config } from './utils/load_config.js'
import { glob } from './utils/glob.js'

/**
 * Build the CSS File based on the HTML/JSX File
 * @param {{ input: string, output?: string, defer?: string[] }} args
 * @returns {Promise<void>}
 */
async function build(args = {}) {
  const { input, output = 'salute.css', defer = [] } =
    args.input ? args : await load_config()

  const files = await glob(Array.isArray(input) ? input : input.split(' '))
  const css = await Promise.all(
    files.map(async (file) => resolve_html(await readFile(resolve(file), 'utf-8'), defer))
  )
    .then((results) => results.join(''))

  await writeFile(resolve(output), css.trim())
}

export { build, SaluteWebpackPlugin }
