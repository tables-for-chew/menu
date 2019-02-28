const connection = require("./db");
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const router = require('./routes.js')

const server = express();

server.use(cors());
server.use(compression());
server.use(morgan('dev'));

server.use('/api', router);

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use("/:id", express.static(path.join(__dirname, '../client/dist')));

module.exports = server;

