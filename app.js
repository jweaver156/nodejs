// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>

// package.json - manifest file (stores important info about projects/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter yot skip)
// npm init -y (everything default)

const _ = require('lodash')

// Turns an array of arrays into a single array
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
