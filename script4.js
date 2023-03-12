const fs = require('fs')
const zlib = require('zlib')
const decompress = () =>{
    const decompressStream = zlib.createUnzip()
    const readStream = fs.createReadStream('indexNew.html.gz')
    const writeStream = fs.createWriteStream('index2.html')
    readStream.pipe(decompressStream).pipe(writeStream)
}
decompress()