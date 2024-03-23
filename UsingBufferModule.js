
const buffer1 = Buffer.alloc(18)
buffer1.write("Happy Words")
console.log("Buffer: ",buffer1.toJSON());

const buffer2 = Buffer.from("This is an buffer example")
console.log("buffer2",buffer2.toString())
console.log("buffer3",Buffer.byteLength(buffer1))
const newBuffer = Buffer.alloc(30)
 buffer1.copy(newBuffer)
 console.log("buffer 1 copy to buffer 2",newBuffer.toString('utf-8'));
//  const buffer3 =
console.log("Concat buffer: ",Buffer.concat([buffer1,buffer2]).toString());