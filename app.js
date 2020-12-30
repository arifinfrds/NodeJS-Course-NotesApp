const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

yargs.command({
    command: 'add', 
    description: 'Adding a note',
    handler: function () {
        console.log(`Adding a note!`)
    }
})

console.log(yargs.argv)