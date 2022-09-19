const http= require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const fileStream=fs.createReadStream('big.txt','utf-8');
    fileStream.pipe(res)
})

server.listen(5000,()=>{
    console.log("hii");
    
})