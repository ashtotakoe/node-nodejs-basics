import { join, dirname } from 'path'
import { rm } from 'fs/promises'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const targetFilePath = join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  try {
    await rm(targetFilePath)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await remove()
