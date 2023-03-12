const fs = require('fs')
const zlib = require('zlib')
const compress = () =>{
    const readStream = fs.createReadStream('index.html')
    const compressStream = zlib.createGzip()
    const writeStream = fs.createWriteStream('indexNew.html.gz')
    readStream.pipe(compressStream).pipe(writeStream)
}
compress()