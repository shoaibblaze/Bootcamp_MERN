const probj = new Promise((res,rej)=>{
   let a=5
   let b=a*a
   res(b)
});
probj.then((b) =>{
    console.log(b);
})