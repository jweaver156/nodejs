const { readFile, writeFile } = require('fs')

// Reading file with callback ('err' is declared automatically as null    and 'result' is declared as the text from desired file)
console.log('start')
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
  if (err) {
    const error = 'you messed something up bro..'
    console.log(error)
    return
  }
  const first = result
  readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
    if (err) {
      const error = 'you messed something up bro..'
      console.log(error)
      return
    }
    const second = result
    // Creating new file, logging to terminal & appending msg
    writeFile(
      './content/subfolder/result-async.txt',
      `AND the addition : ${first}, ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(error)
          return
        }
        console.log('done with this task')
        // const third = `${first} ${second}`
        // console.log(third)
      }
    )
  })
})
console.log('starting next task')
