const { resolve } = require('node:path')
const { readFileSync } = require('node:fs')

const { parseMediaQuery } = require('./styles/media-query.js')
const { parseSelector } = require('./styles/selectors.js')
const { parseClass } = require('./styles/classes.js')

function parseStyle(style, defer) {
  const classesName = Array.from(
    new Set(
      [...style.matchAll(/(className|class)=("|')(.+?)\2/g)]
        .flatMap((match) => match[3].split(' '))
        .concat(defer)
    )
  )

  const PRESETS = ['normalize.min.css', 'salutecss.min.css']
    .map((file) => readFileSync(resolve(__dirname, '..', '..', 'styles', 'presets', file), 'utf-8'))
    .join('')

  const stylesheet = classesName
    .map((resolvedClass) => parseMediaQuery(resolvedClass) || parseSelector(resolvedClass) || parseClass(resolvedClass))
    .filter(Boolean)
    .join('')

  return (PRESETS + stylesheet).replace(/\n/g, '')
}

module.exports.parseStyle = parseStyle
