import { createHash } from 'crypto'
import fs from 'fs'
import url from 'url'
import path from 'path'
import { Transform } from 'stream'

const { stdout } = process

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const targetPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

const toSHA256 = new Transform({
  transform(chunk, encoding, callback) {
    const content = chunk.toString()

    const hash = createHash('sha256').update(content).digest('hex')

    callback(null, `${hash} \n`)
  },
})

const calculateHash = async () => {
  const input = fs.createReadStream(targetPath)

  input.pipe(toSHA256).pipe(stdout)
}

await calculateHash()
