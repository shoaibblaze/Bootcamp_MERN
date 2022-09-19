const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
var info = {};

const rl = readline.createInterface({input, output});
rl.question('FirstName :', (Firstname) => {
    info.Firstname = Firstname;
    rl.question('LastName :', (Lastname) => {
        info.Lastname = Lastname;
        rl.question('Gender :', (gender) => {
        info.gender = gender;
            rl.question('Age :', (age) => {
            info.age = age;
                rl.close();
                displayInfo(info);
            })
        })
    })
});

function displayInfo(personInfo){
    console.log(`Name   : ${personInfo.Firstname} ${personInfo.Lastname} Gender:${personInfo.gender} Age:${personInfo.age}`);
    //console.log(`Gender : ${personInfo.gender}`);
}

