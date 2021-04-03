//Path module
const path = require('path');
// add seperator property that returns a very path specific seperator
console.log(path.sep)
//join method joins a sequence of path segments and returns a normalized resulting path
const filePath = path.join('/content','test.txt');
console.log(filePath);
//access basename (last file)
const base = path.basename(filePath);
console.log(base)
//returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'test.txt');
console.log(absolute)