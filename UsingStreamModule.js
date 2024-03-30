const fs = require('fs')
const zlib = require('zlib')
let data = ""
const readStream = fs.createReadStream("FileSystemModuleImplementation\\File03.txt", "utf-8")

readStream.on("data", (chunk) => {
    console.log("chunk", chunk)
    data += chunk
})

readStream.on("end", () => {
    console.log("THE DATA RECEIVED", data)
})


readStream.on("error", (err) => console.error("ERROR", err))
let writeData = "Hello this is written with the stream"
const writeStream = fs.createWriteStream("FileSystemModuleImplementation\\File01.txt")

writeStream.write(writeData, "utf-8")
writeStream.end()

writeStream.on("close", () => console.log("FILE WRITTENED"))


const readUsingStream = fs.createReadStream("FileSystemModuleImplementation\\File01.txt")
const writeUsingStream = fs.createWriteStream("FileSystemModuleImplementation\\FilePipingtxt.txt")

readUsingStream.pipe(writeUsingStream)

console.log("PIPING FINISHED CHECK FilePipingtxt file")


const compressFile = (source, destination) => {
    fs.createReadStream(source)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(destination))
        .on("finish", () => {
            console.log("FILE COMPRESSED");
            decompressFile(destination, "FileSystemModuleImplementation\\FileChainUnzip.txt");

        })
}

const decompressFile = (source, destination) => {
    fs.createReadStream(source)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(destination))
        .on("finish", () => {
            console.log("FILE DECOMPRESSED CHECK FileChainUnzip.txt");

        })
}

compressFile("FileSystemModuleImplementation\\FileChaintxt.txt", "FileSystemModuleImplementation\\FileChaintxtgz.gz");