// Traditional way
// const fs = require('fs')
// fs.readFileSync();
// fs.writeFileSync()

// Destructured (quicker way)
const { readFileSync, writeFileSync } = require('fs')

// Reading file
const first = readFileSync('./content//subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')

// Creating a file and appending data
writeFileSync(
  './content/result-sync.txt',
  ` Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)

// Reading created file
const resultSync = readFileSync('./content/result-sync.txt', 'utf8')
console.log(resultSync)
console.log(first)
console.log(second)
