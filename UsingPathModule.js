const path = require('path')
const process = require('process')

const path1 =path.format({
    root: 'C:\\',
    dir: 'webist\\dist',
    // base:'index.html',
    name: 'myFile',
    ext:'.html'
})
if( typeof path1 === '')
{
    console.log("String");
}
console.log("PATH: ", path1);
console.log("Extract base name: ",path.basename(path1,'.html'),path.dirname(path1))
console.log('The process environment',process.env.PATH.split(path.delimiter))
console.log('isAbsolute',path.isAbsolute('/lll/myFile.js'))
console.log("join",path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

const from='C:\\My Learnings\\practice Node JS\\UsingPathModule.js'
const to = 'C:\\My Learnings\\practice Node JS1\\module\\DefaultName.js'
console.log("Relative path: ",path.relative(from,to))
console.log("Resolve path:",path.resolve("practice js","java script\\","file.js"))

