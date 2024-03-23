const _ = require('lodash')

const arr=[1,[23,34,43],[3,54,[45]]]
console.log("Flatten deep: ",_.flattenDeep(arr)) 

const arr1 = [23,34,43,3,54,45];
console.log("Making Chunks", _.chunk(arr1,2))

const arr2 =[0,1,2,3,false,NaN,undefined,null,"hello"]
console.log("Remove Falsy values :",_.compact(arr2))

console.log("Drop elements:", _.drop(arr1,2))

console.log("Fill the given value:", _.fill(arr1,6,2,4));

console.log("Make the 2d array as k-v objects:", _.fromPairs([["one",1],["two",2],["three",3],["four",'4']]))

const obj ={"one":1,"two":2,"three":3}
console.log("Make the obj to 2d array",_.toPairs(obj))