const probj = new Promise((res,rej)=>{
    res=('I am getting resolved..')
    rej=("oops! Rejected.")
    console.log(res);
});
