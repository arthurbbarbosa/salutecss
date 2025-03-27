// Font Weight
const font_weight = {
  'font-thin': 'font-weight: 100',
  'font-extra-light': 'font-weight: 200',
  'font-light': 'font-weight: 300',
  'font-regular': 'font-weight: 400',
  'font-medium': 'font-weight: 500',
  'font-semi-bold': 'font-weight: 600',
  'font-bold': 'font-weight: 700',
  'font-extra-bold': 'font-weight: 800',
  'font-black': 'font-weight: 900'
}

// Font Family
const font_family = {
  'font-family-serif': 'font-family: ui-serif',
  'font-family-sans-serif': 'font-family: ui-sans-serif',
  'font-family-monospace': 'font-family: ui-monospace',
  'font-family-rounded': 'font-family: ui-rounded',
  'font-family-system-ui': 'font-family: system-ui',
  'font-family-[value]': (value) => `font-family: ${value}`
}

// Font Size
const font_size = {
  'font-size-10': 'font-size: 0.625em',
  'font-size-12': 'font-size: 0.75em',
  'font-size-14': 'font-size: 0.875em',
  'font-size-16': 'font-size: 1em',
  'font-size-20': 'font-size: 1.25em',
  'font-size-24': 'font-size: 1.5em',
  'font-size-26': 'font-size: 1.625em',
  'font-size-28': 'font-size: 1.75em',
  'font-size-30': 'font-size: 1.875em',
  'font-size-32': 'font-size: 2em',
  'font-size-36': 'font-size: 2.25em',
  'font-size-40': 'font-size: 2.5em',
  'font-size-48': 'font-size: 3em',
  'font-size-64': 'font-size: 4em',
  'font-size-80': 'font-size: 5em',
  'font-size-96': 'font-size: 6em',
  'font-size-112': 'font-size: 7em',
  'font-size-128': 'font-size: 8em',
  'font-size-[value]': (value) => `font-size: ${value}`
}

// Font Style
const font_style = {
  'italic': 'font-style: italic'
}

// Letter Spacing
const font_space = {
  '\-font-spacing-[value]': (value) => `letter-spacing: -${value}`,
  'font-spacing-[value]': (value) => `letter-spacing: ${value}`
}

module.exports = {
  ...font_weight,
  ...font_family,
  ...font_size,
  ...font_style,
  ...font_space
}
