import fs from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'

const fileNames = {
  wrongFilePath: join(import.meta.dirname, 'files', 'wrongFilename.txt'),
  correctFilePath: join(import.meta.dirname, 'files', 'properFilename.md'),
}

const rename = async () => {
  try {
    if (
      (!existsSync(fileNames.wrongFilePath) ||
      existsSync(fileNames.correctFilePath))
    ) {
      throw new Error()
    }

    fs.rename(fileNames.wrongFilePath, fileNames.correctFilePath)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await rename()
