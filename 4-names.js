
//local
const secret = 'supersecret'

//can be accessed everywhere (shared with the rest of the application)
const john = 'john';
const peter = 'peter';


// console.log(module);

// exporting more than value, but you can also "export as you go" see 6-alternative_flavor file
module.exports = { john, peter };