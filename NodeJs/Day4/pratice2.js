const http=require('http');
const server =http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.end( "<h1> Hello we are here from blazeclan<h1>")
        // res.end("<h1>hey </h1>")
    }
    else if( req.url ==='/about'){
        res.write("<h1>mission</h1><p>We are on a revolutionary path of leading excellence on cloud; by offering robust yet dynamic cloud technology to leverage our capabilities of providing business flexibility, reduced operational costs, decreased time to market, and the security and scalability of enterprise workloads for our valuable customers.</p> <h1>vision</h1> <p>We envision becoming a global leader in Cloud Consultancy through our invaluable and trustworthy customer service and experience.</p>")
        res.end()
    }
    else if( req.url ==='/contact'){
        res.write("<h1>Address</h1><p>6th Floor, Schindler House, Near Main Street, Chemtex Lane, Hiranandani Gardens, Sainath Nagar, Powai, Mumbai, Maharashtra 400076</p><h1>Url of the company</h1><a href=https://www.blazeclan.com/>Click </a><h1>Phone no.</h1><p>24323442</p>")
        res.end()
    }
    else{
        res.writeHead(404 ,{"Content-type":"text/html"});
        res.end("<h1>Page not find </h1>")
    }
    
})
server.listen(5000,()=>{
    console.log("hii");
})