// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-first-Module')
const sayHi = require('./5-second-Module')
const data = require('./6-mod-AsYouGo')
require('./7-mind-Grenade')

sayHi(names.john)
sayHi(names.peter)
sayHi('Sushi')