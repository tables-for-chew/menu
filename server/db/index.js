const config = require('./config.js');
const { Pool } = require('pg');

const pool = new Pool(config);

module.exports = pool;
