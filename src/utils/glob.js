const { readdirSync } = require('fs')
const { resolve } = require('path')

function glob(pattern) {
  let paths = []

  for (const divisor of pattern.map((str) => str.split('/'))) {
    if (divisor[0].includes('.')) {
      paths.push(resolve(divisor[0]))
      continue
    }

    const dirs = []
    let file

    for (let i = 0; i < divisor.length; i++) {
      const val = divisor[i]

      if (val.includes('.')) file = val
      else dirs.push(val)
    }

    if (dirs.includes('**')) {
      const index = dirs.findIndex((val) => val === '**')
      const folder = dirs.splice(0, index).join('/')
      const ext = file.split('.').at(-1)

      transpose(folder, ext, paths)
    } else {
      if (file.includes('*')) {
        const dirPath = dirs.join('/')
        const ext = file.split('.').at(-1)

        const filesPath = readdirSync(dirPath)
          .filter((val) => val.endsWith(`.${ext}`))

        for (let i = 0; i < filesPath.length; i++) {
          paths.push(resolve(dirPath, filesPath[i]))
        }
      } else paths.push(resolve(dirs.join('/'), file))
    }
  }

  return paths
}

const transpose = (folder, extension, paths = []) => {
  const items = readdirSync(folder)

  for (let i = 0; i < items.length; i++) {
    if (items[i].includes('.') && items[i].endsWith(`.${extension}`))
      paths.push(resolve(folder, items[i]))
    else if (!items[i].includes('.'))
      transpose(resolve(folder, items[i]), extension, paths)
  }

  return paths
}

module.exports.glob = glob
