import { mkdir, readdir, copyFile } from 'fs/promises'
import { join } from 'path'

const dirToCopyPath = join(import.meta.dirname, 'files')
const dirToCopyIntoPath = join(import.meta.dirname, 'files_copy')

const copy = async () => {
  try {
    const files = await readdir(dirToCopyPath, {
      recursive: true,
      withFileTypes: true,
    })

    await mkdir(dirToCopyIntoPath)

    files.forEach((dirent) => {
      if (dirent.isFile()) {
        copyFile(join(dirToCopyPath, dirent.name), join(dirToCopyIntoPath, dirent.name))
      }
    })
  } catch (err) {
    console.log(err)
    throw new Error('FS operation failed')
  }
}

await copy()
