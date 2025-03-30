/**
 * CSS Text
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text
 */
module.exports = {
  '\-letter-spacing-[value]': (value) => `letter-spacing: -${value}`,
  'letter-spacing-[value]': (value) => `letter-spacing: ${value}`,

  'text-center': 'text-align: center',
  'text-start': 'text-align: start',
  'text-end': 'text-align: end',
  'text-left': 'text-align: left',
  'text-right': 'text-align: right',

  'capitalize': 'text-transform: capitalize',
  'uppercase': 'text-transform: uppercase',
  'lowercase': 'text-transform: lowercase',

  'text-wrap': 'text-wrap: wrap',
  'text-nowrap': 'text-wrap: nowrap',

  'space-pre': 'white-space: pre',
  'space-prewrap': 'white-space: pre-wrap',
  'space-preline': 'white-space: pre-line',
  'space-wrap': 'white-space: wrap',
  'space-collapse': 'white-space: collapse',

  'word-break': 'word-break: break-all',
  'word-keep': 'word-break: keep-all'
}
