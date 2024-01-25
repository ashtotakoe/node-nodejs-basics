import { join } from 'path'
import {  rm } from 'fs/promises'

const targetFilePath = join(import.meta.dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  try {
   await rm(targetFilePath)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await remove()
