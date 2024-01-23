import { writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const { dirname } = import.meta

const targetFilePath = path.resolve(dirname, 'files', 'hello.txt')


const create = async () => {
  if (!existsSync(targetFilePath)) {
    await writeFile(targetFilePath, 'I am fresh and young')

    return
  }

  throw new Error('FS operation failed')
}

await create()

