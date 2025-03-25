import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { styles } from '../styles/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function resolve_html(HTML, defer) {
  const classes = [
    ...new Set(
      [...HTML.matchAll(/(?:class|className)="([^"]*)"/g)]
        .flatMap((match) => match[1].split(' ')),
      ...defer
    )
  ]

  const input = Array.from(classes).reduce((acc, name) => {
    const style_name = name.replace(/\[(.+?)\]/, '[value]')
    const style_value_match = name.match(/\[(.+?)\]/)
    const style_value = style_value_match ? style_value_match[1] : null

    if (styles[style_name]) {
      const style_function = styles[style_name]
      const style_content = style_value ? style_function(style_value) : style_function()

      acc += `.${name.replace(/\[/g, '\\[').replace(/\]/g, '\\]')}{${style_content}}`
    }

    return acc
  }, '')

  const presetscss = ['normalize.min.css', 'salutecss.min.css']
    .map((file) => readFileSync(resolve(__dirname, '..', 'styles', 'presets', file), 'utf-8'))
    .join('')

  return (presetscss + input).replace(/\n/g, '')
}
