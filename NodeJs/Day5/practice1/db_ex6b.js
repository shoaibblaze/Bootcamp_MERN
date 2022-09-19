
const mysql=require('mysql');
const config =require('./config');

const con =mysql.createConnection(config);
con.connect(function(err){
    if (err){
        return console.error("Error:" + err.message);
    }
        const sql=`SELECT * FROM departments WHERE city=? `;
        con.query(sql,['BOSTON'],function (err,result, fields){
            if(err){
                console.log(err.message);
            }
            else {
                console.log('The task are as follows:');
                result.forEach(row=>{
                    console.log(row);
                })
            }
        });
        con.end(function(err){
            if(err){
            console.log(err.message);
        }
        });
});