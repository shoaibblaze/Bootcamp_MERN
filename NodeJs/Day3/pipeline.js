const{pipeline}=require('stream');
const fs =require('fs');
const zlib = require('zlib');

pipeline(
    fs.createReadStream('./assets/file1.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./assets/file1.gz'),
    (err) =>{
        if(err){
            console.error("pipeline failed",err);
        }else{
            console.log('pipeline succedded !');
        }
    }
)