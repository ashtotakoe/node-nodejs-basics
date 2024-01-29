import fs from 'fs/promises'
import path from 'path'
import { stdout } from 'process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const targetFilePath = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
  const target = await fs.open(targetFilePath, 'r')

  const stream = target.createReadStream()

  stream
    .on('data', (data) => {
      stdout.write(data.toString())
    })
    .on('end', () => {
      stdout.write('\n')
      target.close()
    })
}

await read()
