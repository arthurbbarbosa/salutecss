/**
 * CSS Box Model
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model
 */
module.exports = {
  'margin-[value]': (value) => `margin: ${value}`,
  'margin-top-[value]': (value) => `margin-top: ${value}`,
  'margin-bottom-[value]': (value) => `margin-bottom: ${value}`,
  'margin-left-[value]': (value) => `margin-left: ${value}`,
  'margin-right-[value]': (value) => `margin-right: ${value}`,
  'margin-x-[value]': (value) => `margin-left: ${value}; margin-right: ${value}`,
  'margin-y-[value]': (value) => `margin-top: ${value}; margin-bottom: ${value}`,

  'padding-[value]': (value) => `padding: ${value}`,
  'padding-top-[value]': (value) => `padding-top: ${value}`,
  'padding-bottom-[value]': (value) => `padding-bottom: ${value}`,
  'padding-left-[value]': (value) => `padding-left: ${value}`,
  'padding-right-[value]': (value) => `padding-right: ${value}`,
  'padding-x-[value]': (value) => `padding-left: ${value}; padding-right: ${value}`,
  'padding-y-[value]': (value) => `padding-top: ${value}; padding-bottom: ${value}`,
}
