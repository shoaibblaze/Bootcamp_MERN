var $ = function (id) {
    return document.getElementById(id);
}
var calculateClick = function () {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);



    var answer=0;
    for(let counter=1; counter<=years; counter++){
        answer= rate * investment;
    }
    
    if(isNaN(investment)){
        alert("entry of investment should be numeric")

    }
    else if(investment<=0){
        alert("entry of investment should be greater than zero ")
    }
    if(isNaN(rate)){
        alert("entry of rate should be numeric")

    }
    else if(rate<=0){
        alert("entry of rate should be greater than zero")
    }
    if(isNaN(years)){
        alert("entry of years should be numeric")

    }
    else if(years<=0){
        alert("entry of years should be greater than zero")
    }

    // console.log(answer)
    else{

    $("future_value").value = answer.toFixed(1);
    }
    }
    window.onload = function(){
        $("calculate").onclick = calculateClick;
        $("investment").focus();
}
