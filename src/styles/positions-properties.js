// Flexbox
export const flex = {
  'flex-[value]': (value) => `flex: ${value}`,
  'flex-column': 'flex-direction: column',
  'flex-row': 'flex-direction: row',
  'flex-reverse-column': 'flex-direction: column-reverse',
  'flex-reverse-row': 'flex-direction: row-reverse',
  'flex-wrap': 'flex-wrap: wrap',
  'flex-nowrap': 'flex-wrap: nowrap',
  'flex-reverse-wrap': 'flex-wrap: wrap-reverse'
}

// Float
export const float = {
  'to-right': 'float: right',
  'to-left': 'float: left'
}

// Gap
export const gap = {
  'gap-[value]': (value) => `gap: ${value}`
}

// Grid
export const grid = {
  'grid-[value]': (value) => `grid: ${value}`,
  'grid-columns-[value]': (value) => `grid-column: ${value}`,
  'grid-rows-[value]': (value) => `grid-rows: ${value}`,
  'grid-template-columns-[value]': (value) => `grid-template-columns: ${value}`,
  'grid-template-rows-[value]': (value) => `grid-template-rows: ${value}`
}

// Justify Content
export const justify = {
  'justify-start': 'justify-content: start',
  'justify-end': 'justify-content: end',
  'justify-center': 'justify-content: center',
  'justify-between': 'justify-content: space-between',
  'justify-around': 'justify-content: space-around',
  'justify-evenly': 'justify-content: space-evenly',
  'justify-stretch': 'justify-content: stretch'
}

// Margin
export const margin = {
  'margin-[value]': (value) => `margin: ${value}`,
  'margin-top-[value]': (value) => `margin-top: ${value}`,
  'margin-bottom-[value]': (value) => `margin-bottom: ${value}`,
  'margin-left-[value]': (value) => `margin-left: ${value}`,
  'margin-right-[value]': (value) => `margin-right: ${value}`,
  'margin-x-[value]': (value) => `margin-left: ${value}; margin-right: ${value}`,
  'margin-y-[value]': (value) => `margin-top: ${value}; margin-bottom: ${value}`,

  '\-margin-[value]': (value) => `margin: -${value}`,
  '\-margin-top-[value]': (value) => `margin-top: -${value}`,
  '\-margin-bottom-[value]': (value) => `margin-bottom: -${value}`,
  '\-margin-left-[value]': (value) => `margin-left: -${value}`,
  '\-margin-right-[value]': (value) => `margin-right: -${value}`,
  '\-margin-x-[value]': (value) => `margin-left: ${value}; margin-right: -${value}`,
  '\-margin-y-[value]': (value) => `margin-top: ${value}; margin-bottom: -${value}`
}

// Padding
export const padding = {
  'padding-[value]': (value) => `padding: ${value}`,
  'padding-top-[value]': (value) => `padding-top: ${value}`,
  'padding-bottom-[value]': (value) => `padding-bottom: ${value}`,
  'padding-left-[value]': (value) => `padding-left: ${value}`,
  'padding-right-[value]': (value) => `padding-right: ${value}`,
  'padding-x-[value]': (value) => `padding-left: ${value}; padding-right: ${value}`,
  'padding-y-[value]': (value) => `padding-top: ${value}; padding-bottom: ${value}`,

  '\-padding-[value]': (value) => `padding: -${value}`,
  '\-padding-top-[value]': (value) => `padding-top: -${value}`,
  '\-padding-bottom-[value]': (value) => `padding-bottom: -${value}`,
  '\-padding-left-[value]': (value) => `padding-left: -${value}`,
  '\-padding-right-[value]': (value) => `padding-right: -${value}`,
  '\-padding-x-[value]': (value) => `padding-left: ${value}; padding-right: -${value}`,
  '\-padding-y-[value]': (value) => `padding-top: ${value}; padding-bottom: -${value}`
}

// Place Content
export const place_content = {
  'place-start': 'place-content: start',
  'place-end': 'place-content: end',
  'place-center': 'place-content: center',
  'place-between': 'place-content: space-between',
  'place-around': 'place-content: space-around',
  'place-evenly': 'place-content: space-evenly',
  'place-stretch': 'place-content: stretch'
}

export default {
  ...flex,
  ...float,
  ...gap,
  ...grid,
  ...justify,
  ...margin,
  ...padding,
  ...place_content
}
