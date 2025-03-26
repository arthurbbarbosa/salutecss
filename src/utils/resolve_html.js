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

  let input = ''

  for (const name of classes) {
    const style_name = name.replace(/\[(.+?)\]/, '[value]')
    const style_value = name.match(/\[(.+?)\]/)

    if (styles[style_name]) {
      const style = Object.entries(styles)
        .find(([class_name]) => class_name === style_name)

      if (style_value?.[1])
        input += `.${name.replace(/\[/, '\\[').replace(/\]/, '\\]')}{${style[1](style_value[1].replace(/\_/g, ' '))}}`
      else input += `.${name}{${style[1]}}`
    } else continue
  }

  const presetscss = ['normalize.min.css', 'salutecss.min.css']
    .map((file) => readFileSync(resolve(__dirname, '..', 'styles', 'presets', file), 'utf-8'))
    .join('')

  return (presetscss + input).replace(/\n/g, '')
}
