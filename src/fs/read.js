import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const targetFileName = 'fileToRead.txt'
const targetFilePath = path.join(__dirname, 'files', targetFileName)

const read = async () => {
  try {
    const targetFile = await fs.open(targetFilePath)

    const content = await targetFile.readFile()

    console.log(content.toString())

    targetFile.close()
  } catch (err) {
    throw new Error('FS operation failed')
  }
}
await read()
