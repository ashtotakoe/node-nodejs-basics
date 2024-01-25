import { join } from 'path'
import { readdir } from 'fs/promises'

const targetDirPath = join(import.meta.dirname, 'files')

const list = async () => {
  try {
    const files = await readdir(targetDirPath)
    files.forEach((file) => console.log(file))
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await list()
