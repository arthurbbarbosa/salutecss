/**
 * CSS Backgrounds and Borders
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders
 */
module.exports = {
  'background-[value]': (value) => `background: ${value}`,

  'border-size-[value]': (value) => `border-width: ${value}`,
  'border-color-[value]': (value) => `border-color: ${value}`,
  'border-[value]': (value) => `border: ${value}`,

  'border-top-size-[value]': (value) => `border-top-width: ${value}`,
  'border-color-[value]': (value) => `border-top-color: ${value}`,
  'border-top-[value]': (value) => `border-top: ${value}`,

  'border-bottom-size-[value]': (value) => `border-bottom-width: ${value}`,
  'border-color-[value]': (value) => `border-bottom-color: ${value}`,
  'border-bottom-[value]': (value) => `border-bottom: ${value}`,

  'border-left-size-[value]': (value) => `border-left-width: ${value}`,
  'border-color-[value]': (value) => `border-left-color: ${value}`,
  'border-left-[value]': (value) => `border-left: ${value}`,

  'border-right-size-[value]': (value) => `border-right-width: ${value}`,
  'border-color-[value]': (value) => `border-right-color: ${value}`,
  'border-right-[value]': (value) => `border-right: ${value}`,

  'border-spacing-[value]': (value) => `border-spacing: ${value}`,

  'round-[value]': (value) => `border-radius: ${value}`,

  'shadow-[value]': (value) => `box-shadow: ${value}`
}
