const http =require('http');
const server =http.createServer((req,res)=>{
    res.end("<h1>Hello from http server</h1>")
})

server.listen(5000,()=>{
    console.log("hii");
})