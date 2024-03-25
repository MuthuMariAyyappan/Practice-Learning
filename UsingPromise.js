const fs = require('fs');

// console.log("start");
// const getUser = () => {
//   return new Promise((resolve, reject) => {
//     resolve({ name: "hjggh", age: 90 });
//     reject("err");
//     console.log("in side promise");
//   });
// };

// getUser().then((data) => {
//   console.log("data", data);
// });
// console.log("end");


console.time("time taken promise")

const getFileText = (path) =>{
  return new Promise((resolve,reject) => {
    fs.readFile(path,"utf-8",(err,data) =>{
      if(err){
        reject(err)
      }
      else{
        resolve(data)
      }
    })
  })
}
getFileText("FileSystemModuleImplementation\\File01.txt").then((data) =>{
  console.log("PROMISE READ DATA", data)
})
.catch((err) =>{
  console.log(err)
})
console.timeEnd("time taken promise")

console.time("time taken")
fs.readFile("FileSystemModuleImplementation\\File01.txt","utf-8",(err,data) =>{
  if(err){
   console.log("normal call error",err)
  }
  else{
    console.log("normal call success data:",data)
  }
})

console.timeEnd("time taken")