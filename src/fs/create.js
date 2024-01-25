import { writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const targetFileName = 'fresh.txt'
const targetFilePath = resolve(__dirname, 'files', targetFileName)
const text = 'I am fresh and young'

const create = async () => {
  if (!existsSync(targetFilePath)) {
    await writeFile(targetFilePath, text)

    return
  }

  throw new Error('FS operation failed')
}

await create()
