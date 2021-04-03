//CommonJS, every file in Node is a module (by default)
//Modules - encapsulated Code (only shar minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const alt_flavor = require('./6-alternative_flavor')
// console.log(names)
// console.log(alt_flavor)
//{ items: [ 'item 1, item 2' ], singlePerson: { name: 'bob' } }
//same as module.exports = { john, peter }

require('./7-mind-grenade')
//the sum is : 15

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);