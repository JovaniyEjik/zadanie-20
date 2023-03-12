const fs = require('fs')

const readStream = fs.createReadStream('text.txt')
const writeStream = fs.createWriteStream('textNew.txt')
let a = 1;

readStream.on('data', (chunk) =>{
    console.log(`\nчасть ${a}\n`)
    console.log(chunk.toString())
    a++
}).pipe(writeStream)