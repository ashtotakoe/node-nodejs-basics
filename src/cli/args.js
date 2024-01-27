const parseArgs = () => {
  let output = ''
  let temp = ''

  process.argv.slice(2).forEach((arg, index) => {
    if (index % 2 === 0) {
      temp = index === 0 ? `${arg} is ` : `, ${arg} is `
      return
    }

    temp += arg
    output += temp
  })

  console.log(output)
}

parseArgs()
