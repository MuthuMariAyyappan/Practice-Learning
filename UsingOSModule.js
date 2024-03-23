const os = require('os')
console.log("OS",os.EOL); //End of Line which is different for each OS eg: windows = '/r/n'
    // UNIX,LINUX (Portable OS Interface(POSIX)) ='/n' 
console.log("array of objects containing information about each logical CPU core",os.cpus())
console.log("HOME DIRR",os.homedir(),os.hostname())
const currentOsDetails ={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    availableMemory: os.freemem()
}

console.log("currentOsDetails",currentOsDetails);

console.log("Endiness",os.endianness())