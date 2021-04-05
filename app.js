
//local dependency - use it only in this particular project
// global dependenct - use it in any project...npx
//sudo npm install -g <packageName> (mac)

//package.json - manifest file

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];

//lodash has a built in method (flattenDeep) that will flatten the array

const newItems = _.flattenDeep(items)
console.log(newItems)
//[ 1, 2, 3, 4 ]

