const mysql = require("mysql")

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
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