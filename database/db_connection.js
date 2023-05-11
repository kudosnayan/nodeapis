var mysql = require('mysql');
var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}
var connection = mysql.createConnection(config);
try {
    connection.connect(function (err) {
        if (err) throw err;
        // console.log("Connected!");
    });
} catch (error) {
    console.log(error, 'error in connection');
}

module.exports = {
    connection: mysql.createConnection(config)
} 