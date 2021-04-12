
//local dependency - use it only in this particular project
// global dependency - use it in any project...npx
//sudo npm install -g <packageName> (mac)

// const { readFile } = require("node:fs")

//package.json - manifest file
//devDependencies - dependencies used only while creatign the app
//Dependencies - dependencies needed to run the app after development 

// const _ = require('lodash');
// const items = [1, [2, [3, [4]]]];

// //lodash has a built in method (flattenDeep) that will flatten the array

// const newItems = _.flattenDeep(items)
// console.log(newItems)
// //[ 1, 2, 3, 4 ]
// console.log('hello people')



// const http = require('http');

// const server = http.createServer((req,res) =>{
//  if(req.url === '/' ){
//      res.end('Home Page')
//  }
//  if(req.url === '/about'){
//      //BLOCKING CODE!!! (Synchronous code)
//      for(let i = 0; i < 1000; i++){
//          for(let j = 0; j < 1000; j++){
//              console.log(`${i} ${j}`)
//          }
//      }
//      res.end('About Page')
//  }
//  res.end('Error Page')
// })

// server.listen(5000, ()=>{
//     console.log('Server listening on port 5000')
// })

// const { readFile, writeFile} = require('fs');
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) =>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         }) 
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
// getText('./content/test.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
// getText('./content/result-async.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
// getText('./content/result-sync.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

    //Async-Await

// const start = async() => {
//     try {
//     const first = await readFilePromise('./content/first.txt', 'utf8');
//     const second = await readFilePromise('./content/second.txt', 'utf8');
//     await writeFilePromise('./content/result-mnid-grenade.txt', `This is awesome : ${first} ${second}`)
//     console.log(first, second)
// } catch (error) {
//     console.log(error)
//     }
// }
// start()


const http = require('http');
const fs = require('fs');

http
 .createServer(function (req, res) {
     const text = fs.readFileSync('./content/big.txt', 'utf8')
     res.end(text)
 })
 .listen(5000, () => {
     console.log('listening on port 5000')
 })