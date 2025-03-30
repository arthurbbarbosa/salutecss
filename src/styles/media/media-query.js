module.exports = {
  'media-min-sm:[value]': (className, value) => `@media(min-width: 576px){.${className}{${value}}}`,
  'media-min-md:[value]': (className, value) => `@media(min-width: 768px){.${className}{${value}}}`,
  'media-min-lg:[value]': (className, value) => `@media(min-width: 992px){.${className}{${value}}}`,
  'media-min-xl:[value]': (className, value) => `@media(min-width: 1200px){.${className}{${value}}}`,
  'media-min-xxl:[value]': (className, value) => `@media(min-width: 1400px){.${className}{${value}}}`,

  'media-max-sm:[value]': (className, value) => `@media(max-width: 576px){.${className}{${value}}}`,
  'media-max-md:[value]': (className, value) => `@media(max-width: 768px){.${className}{${value}}}`,
  'media-max-lg:[value]': (className, value) => `@media(max-width: 992px){.${className}{${value}}}`,
  'media-max-xl:[value]': (className, value) => `@media(max-width: 1200px){.${className}{${value}}}`,
  'media-max-xxl:[value]': (className, value) => `@media(max-width: 1400px){.${className}{${value}}}`,

  'media-min-[width]:[value]': (className, value, width) => `@media(max-width: ${width}){.${className}{${value}}}`,
  'media-max-[width]:[value]': (className, value, width) => `@media(max-width: ${width}){.${className}{${value}}}`,
}
