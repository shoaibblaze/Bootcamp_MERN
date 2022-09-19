const mysql=require('mysql');
const config =require('./config');

const con =mysql.createConnection(config);
con.connect(function(err){
    if (err){
        return console.error("Error:" + err.message);
    }
        const sql =`INSERT INTO departments(deptid, deptname, city)
                    VALUES (1,'ACCOUNTING','NEW YORK')`;
        con.query(sql,function (err,result, fields){
            if(err){
                console.log(err.message);
            }
            else {
                console.log('Row inserted sucessfully');
            }
        });
        con.end(function(err){
            if(err){
            console.log(err.message);
        }
        });
});