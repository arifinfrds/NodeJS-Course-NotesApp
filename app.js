const chalk = require('chalk')
const getNotes = require('./notes.js')

console.log(process.argv)

const command = process.argv[2]

if (command === `add`) {
    console.log("Adding note!");
}
if (command === `remove`) {
    console.log("Removing note!");
}