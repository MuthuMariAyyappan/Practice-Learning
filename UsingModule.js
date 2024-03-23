const name = require('./module/DefaultName')
const greetingFunc = require('./module/Greeting')

const sampleFunction = () =>{
    setInterval(() =>{
        console.log("sampleFunction",name.defaultName1);

    },10000)
    greetingFunc(name.defaultName2)
    name.defaultName1 = "Mary"
}
sampleFunction()
console.log("out",name.defaultName1);
