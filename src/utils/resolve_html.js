import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { styles } from '../styles/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function resolve_html(HTML, defer) {
  const classes = [
    ...new Set(
      [...HTML.matchAll(/(?:class|className)="([^"]*)"/g)]
        .flatMap((match) => match[1].split(' ')),
      ...defer
    )
  ]

  let input = ''

  for (const name of classes) {
    if (typeof styles[name] === 'string') {
      input += `.${name}{${styles[name]}}`
      continue
    }

    for (const [pattern, generator] of Object.entries(styles)) {
      if (typeof generator === 'function') {
        const match = name.match(new RegExp(`^${pattern.replace('[value]', '(.+)')}$`))

        if (match) {
          const style = generator(match[1]).replace(/[[\]]/g, '').replace(/\_/g, ' ')
          input += `.${name.replace(/[[\]#]/g, '\\$&')}{${style}}`
        }
      }
    }
  }

  let presetscss = ''
  presetscss += readFileSync(resolve(__dirname, '..', 'styles', 'presets', 'normalize.min.css'), 'utf-8')
  presetscss += readFileSync(resolve(__dirname, '..', 'styles', 'presets', 'salutecss.min.css'), 'utf-8')

  return (presetscss + input).replace(/\n/g, '')
}
