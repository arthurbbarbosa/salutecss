import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

export const load_config = async () => {
  const { default: config } = await import(pathToFileURL(resolve(process.cwd(), 'salute.config.js')))

  return {
    input: config.content,
    output: config.output || 'salute.css',
    defer: config.defer || []
  }
}
