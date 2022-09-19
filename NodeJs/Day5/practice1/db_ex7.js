
const mysql=require('mysql');
const config =require('./config');

const con =mysql.createConnection(config);
con.connect(function(err){
    if (err){
        return console.error("Error:" + err.message);
    }
        const sql=`UPDATE departments
         SET city = ?
         WHERE deptName = 'accounting' `;
        con.query(sql,['TEXAS'],function (err,result, fields){
            if(err){
                console.log(err.message);
            }
            else {
                console.log('completed');
                console.log( "Row(s) affected :" + results.affectedRows );
                
            
            }
        });
        con.end(function(err){
            if(err){
            console.log(err.message);
        }
        });
});