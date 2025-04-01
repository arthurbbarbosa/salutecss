const { resolve } = require('node:path')
const { readFileSync } = require('node:fs')

const { parseMediaQuery } = require('./styles/media-query.js')
const { parseSelector } = require('./styles/selectors.js')
const { parseClass } = require('./styles/classes.js')

/**
 * @type {import('../../../index.d.ts').parseStyle}
 */
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

  const stylesheetParts = classesName.map((resolvedClass) => {
    const parsedClass = parseClass(parseSelector(parseMediaQuery(resolvedClass)))
    return parsedClass && parsedClass
  })

  return (PRESETS + stylesheetParts.join('')).replace(/\n/g, '')
}

module.exports.parseStyle = parseStyle
