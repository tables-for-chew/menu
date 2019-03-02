const mysql = require('mysql');
const config = require('./config.js');

var connection = mysql.createConnection(config);

module.exports = connection;
