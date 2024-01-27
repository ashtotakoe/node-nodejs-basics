const parseEnv = () =>
  console.log(
    Object.keys(process.env)
      .filter((key) => key.startsWith('RSS_'))
      .reduce((acc, key) => acc + `${key}=${process.env[key]}; `, '')
  )

parseEnv()
