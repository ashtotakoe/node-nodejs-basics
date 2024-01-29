import url from 'url'
import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

const gunzip = zlib.createGunzip()

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const inputPath = path.join(__dirname, 'files', 'archive.gz')
const outputPath = path.join(__dirname, 'files', 'fileToCompress.txt')

const decompress = async () => {
  const input = fs.createReadStream(inputPath)
  const output = fs.createWriteStream(outputPath)

  input.pipe(gunzip).pipe(output) 
}

await decompress()
