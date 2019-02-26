const mysql = require('mysql');
const config = require('./config.js');
var connection = mysql.createConnection(config);


connection.connect();

module.exports = { connection: connection };
