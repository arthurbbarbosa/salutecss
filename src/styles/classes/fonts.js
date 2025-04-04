/**
 * CSS Fonts
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts
 */
module.exports = {
  'font-family-serif': 'font-family: ui-serif',
  'font-family-sans-serif': 'font-family: ui-sans-serif',
  'font-family-monospace': 'font-family: ui-monospace',
  'font-family-rounded': 'font-family: ui-rounded',
  'font-family-system-ui': 'font-family: system-ui',
  'font-family-[value]': (value) => `font-family: ${value}`,

  'font-size-[value]': (value) => `font-size: ${value}`,

  'italic': 'font-style: italic',

  'font-thin': 'font-weight: 100',
  'font-extra-light': 'font-weight: 200',
  'font-light': 'font-weight: 300',
  'font-regular': 'font-weight: 400',
  'font-medium': 'font-weight: 500',
  'font-semi-bold': 'font-weight: 600',
  'font-bold': 'font-weight: 700',
  'font-extra-bold': 'font-weight: 800',
  'font-black': 'font-weight: 900',

  'line-height-[value]': (value) => `line-height: ${value}`,
}
