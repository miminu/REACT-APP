var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'booksys'
});

module.exports = db;