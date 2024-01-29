import fs from 'fs'
import { Transform, pipeline } from 'stream'

const { stdin, stdout } = process

const reverse = new Transform({
  transform(chunk, encoding, callback) {

    callback(null, `${chunk.toString().split('').reverse().join('')} \n`)
  },
})

const transform = async () => {
  pipeline(stdin, reverse, stdout, (err) => {
    if (err) {
      console.error('An error occured in pipeline.', err)
    } else {
      console.log('Pipeline execcution successful')
    }
  })
}

await transform()
