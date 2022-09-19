const mysql = require('mysql');
const config = require('./config');

const con = mysql.createConnection(config);

con.connect(function (err) {
    if (err) {
        console.log("Connection Error...");
        console.error( err );
    }
    // Our DML statement
    const sql = `DELETE FROM departments WHERE deptName = ?`;

    con.query( sql, 'R&D', function (err, results, fields) {
        if (err) {
            console.error( err.message );
        }
        else {
            console.log('Deletion complete!');
            console.log( "Deleted Row(s) :" + results.affectedRows );
        }
    })

    con.end( (err) => {
        console.error( err );
    })
})

