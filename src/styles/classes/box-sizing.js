/**
 * CSS Box Sizing
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_sizing
 */
module.exports = {
  'height-[value]': (value) => `height: ${value}`,
  'width-[value]': (value) => `width: ${value}`,
  'size-[value]': (value) => `width: ${value}; height: ${value}`,

  'max-height-[value]': (value) => `max-height: ${value}`,
  'max-width-[value]': (value) => `max-width: ${value}`,
  'max-size-[value]': (value) => `max-width: ${value}; max-height: ${value}`,

  'min-height-[value]': (value) => `min-height: ${value}`,
  'min-width-[value]': (value) => `min-width: ${value}`,
  'min-size-[value]': (value) => `min-width: ${value}; min-height: ${value}`,

  'height-auto': 'height: auto',
  'width-auto': 'width: auto',
  'size-auto': 'width: auto; height: auto',

  'height-fit': 'height: fit-content',
  'width-fit': 'width: fit-content',
  'size-fit': 'width: fit-content; height: fit-content',

  'height-full': 'height: 100%',
  'width-full': 'width: 100%',
  'size-full': 'width: 100%; height: 100%',

  'height-screen': 'height: 100vh',
  'width-screen': 'width: 100vh',
  'size-screen': 'width: 100vh; height: 100vh',

  'ratio-[value]': (value) => `aspect-ratio: ${value}`
}
