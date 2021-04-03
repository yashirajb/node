// OS Module 

const os = require('os')
//no ./ because this is a built-in module

// info about current user

const user = os.userInfo();

console.log(user)

//how long the computer has been running (method returns the system uptime in seconds)

console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);