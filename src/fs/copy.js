import { mkdir, readdir, copyFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const dirToCopyPath = join(__dirname, 'files')
const dirToCopyIntoPath = join(__dirname, 'files_copy')

const copy = async () => {
  try {
    const files = await readdir(dirToCopyPath, {
      recursive: true,
      withFileTypes: true,
    })

    await mkdir(dirToCopyIntoPath)

    files.forEach((dirent) => {
      if (dirent.isFile()) {
        copyFile(
          join(dirToCopyPath, dirent.name),
          join(dirToCopyIntoPath, dirent.name)
        )
      }
    })
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await copy()
