/**
 * CSS Positioned Layout
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout
 */
module.exports = {
  'top-[value]': (value) => `top: ${value}`,
  'bottom-[value]': (value) => `bottom: ${value}`,
  'left-[value]': (value) => `left: ${value}`,
  'right-[value]': (value) => `right: ${value}`,

  'inset-[value]': (value) => `inset: ${value}`,

  'static': 'position: static',
  'relative': 'position: relative',
  'absolute': 'position: absolute',
  'fixed': 'position: fixed',
  'sticky': 'position: sticky',

  'to-right': 'float: right',
  'to-left': 'float: left',

  '\-index-[value]': (value) => `z-index: -${value}`,
  'index-[value]': (value) => `z-index: ${value}`
}
