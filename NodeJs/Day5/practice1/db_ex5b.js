const mysql=require('mysql');
const config =require('./config');

const con =mysql.createConnection(config);
con.connect(function(err){
    if (err){
        return console.error("Error:" + err.message);
    }
        const sql =`INSERT INTO departments(deptid, deptname, city)
                    VALUES (?,?,?)`;
        const theTask =[ 5,'R&D','PUNE'];
        con.query(sql,theTask,function (err,result, fields){
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