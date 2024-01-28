import { join, dirname } from 'path'
import { readdir } from 'fs/promises'

import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const targetDirPath = join(__dirname, 'files')

const list = async () => {
  try {
    const files = await readdir(targetDirPath)
    files.forEach((file) => console.log(file))
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await list()
