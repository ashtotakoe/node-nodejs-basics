import fs from 'fs/promises'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const fileNames = {
  wrongFilePath: join(__dirname, 'files', 'wrongFilename.txt'),
  correctFilePath: join(__dirname, 'files', 'properFilename.md'),
}

const rename = async () => {
  try {
    if (
      !existsSync(fileNames.wrongFilePath) ||
      existsSync(fileNames.correctFilePath)
    ) {
      throw new Error()
    }

    fs.rename(fileNames.wrongFilePath, fileNames.correctFilePath)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await rename()
