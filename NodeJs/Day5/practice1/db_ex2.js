const mysql=require('mysql');
const config =require('./config');

const con =mysql.createConnection(config);
con.connect(function(err){
    if (err){
        return console.error("Error:" + err.message);
    }
        const departments =`CREATE TABLE IF NOT EXISTS departments(
         deptID         int PRIMARY KEY AUTO_INCREMENT,
         deptName       varchar(15) NOT NULL,
         city           varchar(10) NOT NULL           
        )`;
        con.query(departments,function(err,result, fields){
            if(err){
                console.log(err.message);
            }
        });
        con.end(function(err){
            if(err){
            console.log(err.message);
        }
        });
});