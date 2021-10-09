// Duilt-in Modules (OS)
//To import OS module

const os = require('os')

// Info about user
const user = os.userInfo()
console.log(user)

// Module will return the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    platfrm:os.platform()

}

console.log(currentOS)

