const fs=require('fs');
// (async()=>{
//     const writeStream =fs.createWriteStream('big.txt');
//     for (let i=0; i<1000;i++){
//         const overWatermark=writeStream.write(`${i},1/n`)
//     }
// })

const data =['name,const']
for(let i=0;i<1000;i++){
    data.push(`${i},print again`)
}
fs.writeFileSync('big.txt',data.join('\n'));