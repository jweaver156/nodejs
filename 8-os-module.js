const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime in seconds is ${os.uptime}`)

// object that returns info using os.modules
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
