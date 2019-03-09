require('newrelic');
const connection = require("./db");
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const router = require('./routes.js');
const bodyParser = require('body-parser');

const server = express();

server.use(cors());
server.use(compression());

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

server.use('/api', router);

server.use(express.static(path.join(__dirname, '../client/dist')));
server.use("/:id", express.static(path.join(__dirname, '../client/dist')));

module.exports = server;

