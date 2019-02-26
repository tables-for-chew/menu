const connection = require("./db");
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const server = express();
server.use(cors());
server.use(compression());

server.use(express.static(path.join(__dirname, '../client/dist')));

server.get("/menu", function (req, res) {
  let meal = req.query.q === undefined ? 'lunch' : req.query.q;
  let queryStr = "select * from " + meal;
  connection.connection.query(queryStr, function (err, result) {
    if (err) {
      console.log("error message: ", err);
      return;
    }
    res.send(result);
  });
});

server.use("/:id", express.static(path.join(__dirname, '../client/dist')));
module.exports = server;

