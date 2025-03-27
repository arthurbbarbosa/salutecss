#!/usr/bin/env node
const { build } = require('../index.js')

const print_help = () => console.log(`Usage:
  salute [command] [options]

Commands:
  build     Compile styles once
  help      Shows the Help

Options:
  --input    Input file/directory path  (required)
  --output   Output file path           (default: salute.css)

Examples:
  $ salute build --input src/index.html
  $ salute build --input src/**/*.js --output public/styles.css
  $ salute build`)

const parse_arguments = () => {
  const args = process.argv.slice(2)
  const options = {}

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].replace(/^--?/, '')

      if (['input', 'output'].includes(key))
        options[key] = args[++i]
    }
  }

  return { command: args[0], ...options }
}

const { command, ...args } = parse_arguments()

if (command === 'build') {
  const start = Date.now()
  build({ args })

  console.log(`SaluteCSS: Build successfully completed in ${Date.now() - start}ms`)
}
else if (command === 'help') print_help()
else console.log('Invalid Command: try to get more informations at "salute help"')
