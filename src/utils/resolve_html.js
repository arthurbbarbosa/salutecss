const { readFileSync } = require('node:fs')
const { resolve } = require('node:path')

const { styles } = require('../styles/index.js')

const PRESETS = ['normalize.min.css', 'salutecss.min.css']
  .map((file) => readFileSync(resolve(__dirname, '..', 'styles', 'presets', file), 'utf-8'))
  .join('')

/**
 * @type {import('../../index.d.ts').resolve_html}
 */
function resolve_html(HTML, defer) {
  const classes = [
    ...new Set([...HTML.matchAll(/(?:class|className)="([^"]*)"/g)]
      .flatMap(match => match[1].split(' '))
      .concat(defer))
  ]

  let input = ''

  for (const class_name of classes) {
    const style_value = class_name.match(/\[(.+?)\]/)
    const style_name = class_name.replace(/\[(.+?)\]/, '[value]')

    if (styles[style_name]) {
      const style = Object.entries(styles).find(([name]) => name === style_name)

      if (style_value?.[1])
        input += `.${class_name.replace(/\[/, '\\[').replace(/\]/, '\\]')}{${style[1](style_value[1].replace(/\_/g, ' '))}}`
      else input += `.${class_name}{${style[1]}}`
    } else continue
  }

  return (PRESETS + input).replace(/\n/g, '')
}

module.exports.resolve_html = resolve_html
