const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

// MARK: Add
yargs.command({
    command: 'add', 
    description: 'Adding a note',
    builder: {
        title: {
            description: `Note title`,
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`title: `, argv.title)
    }
})

// MARK: Remove
yargs.command({
    command: `remove`,
    description: `Remove a note`,
    handler: function () {
        console.log(`Removing a note!`)
    }

})

// MARK: Read
yargs.command({
    command: `read`,
    description: `Read a note`,
    handler: function () {
        console.log(`Reading a note!`)
    }
})

// MARK: List
yargs.command({
    command: `list`,
    description: `show list`,
    handler: function () {
        console.log(`Show list of notes!`)
    }
})

console.log(yargs.argv)
