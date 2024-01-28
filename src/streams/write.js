import fs from 'fs/promises'
import path from 'path'
import { stdin } from 'process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const targetFilePath = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
  const target = await fs.open(targetFilePath, 'w')

  const stream = target.createWriteStream()

  stdin.on('data', (data) => {
    stream.write(data.toString())
  })

  stdin.on('end', () => {
    stream.end()
  })
}

await write()
