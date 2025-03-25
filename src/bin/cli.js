#!/usr/bin/env node
import { build } from '../index.js'

const print_help = () => console.log(`Usage:
  salute [command] [options]

Commands:
  build     Compile styles once

Options:
  -i, --input    Input file/directory path  (required)
  -o, --output   Output file path           (default: salute.css)
  -d, --defer    Defer Classes              (default: [''])
  -h, --help     Show this help

Examples:
  $ salute build --input src/index.html
  $ salute build --input src/**/*.js --output public/styles.css
  $ salute build`)

const parse_arguments = () => {
  const args = process.argv.slice(2)
  const command = args[0] === 'build' || args[0] === 'help' ? args[0] : null
  const options = {}

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('-')) {
      const key = args[i].replace(/^--?/, '')

      if (['input', 'output', 'defer'].includes(key)) {
        options[key] = args[++i] || (key === 'defer' ? [] : undefined)
      }

      if (key === 'help') {
        print_help()
        process.exit(0)
      }
    }
  }

  return { command, ...options }
}

(async () => {
  const { command, input, output, defer } = parse_arguments()

  if (command === 'build') {
    const start = Date.now()
    await build({ input, output, defer })

    console.log(`SaluteCSS: Build successfully completed in ${Date.now() - start}ms`)
  } else if (command === 'help') print_help()
  else console.log('Try to get more informations at "salute help"')
})()
