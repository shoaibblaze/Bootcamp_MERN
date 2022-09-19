// var hello=document.querySelector(".hello")

// hello.addEventListener("click", e =>  {

//     console.log(e.target)
// })

var $ =function(id){
    return document.getElementById(id);
}
console.log("hey")
var hello=function(){
    
    console.log("who are you");
    setTimeout(function check(){
        console.log("Come_back")
    },2000 )
   
}
console.log("I am your friend")

window.onload=function(){
    $("hello").onclick =hello;
}