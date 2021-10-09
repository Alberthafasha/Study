// To call different modules

const name=require('./names')
const sayname = require("./function")
const data=require('./information')
require('./addition')



sayname(name.Nina)
sayname('Samson')

// To call a function module
console.log(data)

