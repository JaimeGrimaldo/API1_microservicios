const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host: 'ec2-44-211-209-255.compute-1.amazonaws.com',
    user: 'grimaldito',
    password: '191214',
    database: 'AlumnosUP',
});

mysqlConnection.connect(function(err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log("BD conectada.")
    }
});

module.exports = mysqlConnection;