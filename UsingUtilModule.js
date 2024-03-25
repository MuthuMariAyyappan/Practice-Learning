const util = require('util');
const fs = require('fs');
const name = "Priya"
let age=34
let percentage =89.45
let favSubjects = {sub1: "Maths", sub2: "English"}

console.log(
  "Util Fomat: ",
  util.format("My name is %s", name),
  util.format("I am %d years old", age),
  util.format("I secured %d %", percentage),
  util.format("My fav subjects are %j", favSubjects)
);



//using util.promisify = which converts the call back function to promise

const readDirectory = util.promisify(fs.readdir)

readDirectory("FileSystemModuleImplementation")
        .then((data) =>{
            console.log("USING PROMISIFY FILE DIRECTORY READ",data)
        })
        .catch((err) =>{
            console.error("ERROR IN USING PROMISIFY FOR READDIRECOTRY", err)
        })

const readTheFile = util.promisify(fs.readFile)

const fileReadFunction = async() =>{
    try{
        const readFileData = await readTheFile("FileSystemModuleImplementation\\File03.txt","utf-8")
        console.log("The read File data",readFileData)
    }
    catch{
        console.log("ERROR IN ASYNC AWAIT FILE READ")
    }
}

console.log("CALLING ASYNC AWAIT FILE READ",fileReadFunction())

//Using callbackify = which convert promise or async functions

const myFunc = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await response.json();
}

const callBackFn = util.callbackify(myFunc)
callBackFn((err,data) =>{
    if(err) throw err
    else{
        console.log("API RESPONSE", data)
    }
})