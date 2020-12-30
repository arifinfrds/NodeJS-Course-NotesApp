const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

console.log(yargs.argv)

const command = process.argv[2]

if (command === `add`) {
    console.log("Adding note!");
}
if (command === `remove`) {
    console.log("Removing note!");
}