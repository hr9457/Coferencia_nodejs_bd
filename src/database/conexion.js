const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.0.11',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'Prueba',
});


module.exports = connection;