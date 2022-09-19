// const fs=require('fs');
// fs.readFile('./assets/file1.txt','utf-8',(err,data)=>
// {
//     if(err){
//         console.error(err);
//         return;
//     }
//     else
//     console.log(data);
// })

const fs=require('fs');
try{
const first=fs.readFileSync('./assets/file1.txt','utf-8');
    console.log(first);
}
catch (err){
    console.error(err);
    
}
