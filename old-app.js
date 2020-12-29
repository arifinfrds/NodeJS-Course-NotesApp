const add = require(`./Utils.js`)
const getNotes = require('./notes.js')
const fs = require('fs');
const validator = require(`validator`)
const chalk = require('chalk')

// fs.writeFileSync('notes.txt', 'Hi, I am Arifin Firdaus!');

// fs.appendFileSync('notes.txt', ' 24 years.');

const sum = add(1, 2);
console.log(sum);

const message = getNotes()
console.log(message);

console.log(validator.isURL('arifinfrds.engineer@gmail.com'));
console.log(chalk.green('arifinfrds'));
console.log(chalk.blue('Hello world!'));
