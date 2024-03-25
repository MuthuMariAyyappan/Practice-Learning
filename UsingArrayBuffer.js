const arrayBuffer = new ArrayBuffer(20)

const view = new DataView(arrayBuffer)

view.setInt32(0,23)
view.setFloat64(4,Math.PI)
view.setUint8(12,255)

console.log("Integer value: ",view.getInt32(0))
console.log("Float value: ",view.getFloat64(4))
console.log("Unsigned byte value: ",view.getUint8(12))