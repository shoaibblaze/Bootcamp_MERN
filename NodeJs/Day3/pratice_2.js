const fs=require('fs');

// const { fstat } = require("fs");

// const content='Thats good to know!';
// fs.writeFile('./assets/file1.txt', content,err =>{
//     if(err){
//         console.error(err);
//     }
// })

const content='what are you doing today';
try{
    fs.writeFileSync('./assets/file1.txt',content);
} catch(err){
    console.error(err);
}

fs.appendFile('file.log', content, err =>{
    if(err){
        console.error(err);
    }
})
