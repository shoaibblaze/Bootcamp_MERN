console.log("Lets start");

setTimeout(function () {
    console.log("This is SettimeOut function running after 1000ms ");
}, 0)


var prom = new Promise(function (resolve, reject) {
    console.log("Hey !! from Promise");
    if (true) {
        resolve("Promise got Resolved");
    }
    else {
        reject("Rejected");
    }

})

prom.then(function (result) {
    console.log(result);

    process.nextTick(() => {
        console.log('Executed in the next iteration');
    });


})
console.log("Last Of The the programm");

