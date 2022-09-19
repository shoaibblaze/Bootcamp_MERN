const  http = require('http');
const  fs = require('fs');

const server = http.createServer( (req, res) => {
    // Directly read the content of the file and send it as response
    // const text = fs.readFileSync('./assets/big_file.txt', 'utf-8');
    // res.end( text );

    const fileStream = fs.createReadStream('big.txt', 'utf-8');
    // Directly piping the file stream to the response obj
    fileStream.pipe(res);
})

server.listen(5000, () => {
    console.log("Server is listening at port 5000...");
})