const tab =() => console.log("tab");
const bat =() => console.log("bat");

const foo =() =>{
    console.log("foo");
    tab();
    bat();
    setTimeout(function check(){
        console.log("Come_back")
    },0 )
}

foo()