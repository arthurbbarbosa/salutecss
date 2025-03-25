import { cwd } from 'node:process'
import { join, relative } from 'node:path'
import { readdir } from 'node:fs/promises'

export async function glob(patterns) {
  const files = new Set()
  const includes = []
  const excludes = []

  for (const pattern of patterns) {
    if (pattern.startsWith('!')) {
      excludes.push(glob_to_regex(pattern.slice(1)))
    } else {
      includes.push(glob_to_regex(pattern))
    }
  }

  async function scan(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const path = join(dir, entry.name)
      const relPath = relative(cwd(), path).replace(/\\/g, '/')

      if (entry.isDirectory()) {
        await scan(path)
      } else if (
        entry.isFile() &&
        !excludes.some(r => r.test(relPath)) &&
        (includes.length === 0 || includes.some(r => r.test(relPath)))
      ) {
        files.add(relPath)
      }
    }
  }

  await scan(cwd())
  return [...files]
}

function glob_to_regex(pattern) {
  const parts = pattern
    .replace(/\./g, '\\.')
    .replace(/\*\*/g, '.*')
    .replace(/\*/g, '[^/]*')
    .split('/')

  return new RegExp(`^${parts.join('/')}$`)
}
