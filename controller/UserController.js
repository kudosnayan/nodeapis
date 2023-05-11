// List Users 
const connect = require('../database/db_connection');

exports.getAllUser = function (req, res) {
    // List all Users and sort by Date 
    connect.connection.query("select * from users order by id DESC", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
};

exports.getLasttoSecondData = function (req, res) {
    connect.connection.query("select * from users order by id DESC LIMIT 1,1", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
}

exports.getById = function (req, res) {
    var id = req.params.id
    if (id != null && id > 0) {
        connect.connection.query("select * from users where id='" + id + "'", function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    } else {
        res.send('no data found for id ="' + id + '"');
    }
}