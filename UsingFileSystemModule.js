const {readFileSync,writeFileSync} = require('fs')
const fileSystem = require('fs')

console.log("Read File:",readFileSync('FileSystemModuleImplementation\\File03.txt',"utf-8"))
console.log("Write File:",writeFileSync('FileSystemModuleImplementation\\File02.txt',"HELLO I AM GOING TO WRITE "))

fileSystem.readFile('FileSystemModuleImplementation\\File01.txt',(err,data) =>{
    if(data){
        console.log("Async read data: ",data.toString());
    }
    else{
        console.log("err",err);
    }
})
// fileSystem.writeFile("FileSystemModuleImplementation\\AsyncWriteFile.txt","Hello this is Async Write File","utf-8",(err) =>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("Async file written Successfully");
//     }
// })
const bufferData = Buffer.from("heloo123")
const writeData = new Uint8Array(bufferData);
fileSystem.writeFile("FileSystemModuleImplementation\\AsyncWriteFile.txt",writeData,(err) =>{
    if(err){
        throw err
    }
    console.log("SUCCESS");
})
const readFileDataBuffer = Buffer.alloc(1024)
const openFile =() =>{
    try{
        fileSystem.open("FileSystemModuleImplementation\\File01.txt",'a+',(err,fd) =>{
            if(err){
                throw err
            }          
            else{
                console.log("FILE OPENED")
                const writeDataBuffer = Buffer.from("Using open method")
                fileSystem.write(fd,writeDataBuffer,0,writeDataBuffer.length,0,(err,written,str)=>{
                    if(err){
                        console.log("err",err);
                    }
                    else{
                        console.log("written",written);
                    console.log("str",str)
                    }
                    
                })
                fileSystem.appendFileSync(fd,"\n This appended line","utf-8",(err)=>{
                    if(err){
                        throw err
                    }
                    else{
                        console.log("The Line Appened success fully");
                    }
                })
                fileSystem.read(fd,readFileDataBuffer,0,readFileDataBuffer.length,0,(err,bytesRead,buffer) =>{
                    if(err){
                        console.log("read err",err);
                    }
                    else{
                        console.log("The OPEN FILE READ DATA: ",buffer.toString())
                        console.log("The Bytes read", bytesRead)
                        fileSystem.close(fd,(err) =>{
                            if(err){
                                throw err
                            }
                            console.log("FILE CLOSED")
                        })   
                    }
                })
                
            }
        })
    }
    catch(err){
        console.log("error: ",err);
    }
   
}

openFile()
fileSystem.unlink("FileSystemModuleImplementation\\fileTobeDelete.txt",(err) =>{
    if(err){
        console.log("err",err);
    }
    console.log("File Deleted Sucessfully");
})

