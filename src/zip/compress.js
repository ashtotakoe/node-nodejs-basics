import url from 'url'
import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

const gzip = zlib.createGzip()

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const inputPath = path.join(__dirname, 'files', 'fileToCompress.txt')
const outputPath = path.join(__dirname, 'files', 'archive.gz')

const compress = async () => {
  const input = fs.createReadStream(inputPath)
  const output = fs.createWriteStream(outputPath)

  input.pipe(gzip).pipe(output)
}

await compress()
