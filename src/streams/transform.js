import { Transform, pipeline } from 'stream'

const { stdin, stdout } = process

const reverse = new Transform({
  transform(chunk, _encoding, callback) {
    callback(null, `${chunk.toString().split('').reverse().join('')} \n`)
  },
})

const transform = async () => {
  pipeline(stdin, reverse, stdout, (err) => {
    if (err) {
      console.err(err)
    }
  })
}

await transform()
