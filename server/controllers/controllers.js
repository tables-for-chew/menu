const models = require('../models/models.js');
const path = require('path');

module.exports = {

  bundle: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/bundle.js'))
  },

  get: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 
    models.select(meal, id)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch((e) => {
      console.log(e.stack);
      res.status(404)
    });
  },

  post: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 

    models.insert(meal, id, req.body)
    .then(() => {
      res.status(201).send('created!');
    })
    .catch((e) => {
      console.log(e);
      res.status(304).send(e.stack);
    });
  },

  put: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 

    models.updateOne(meal, id, req.body)
    .then((data) => {
      res.status(201).send('updated ' + data.rowCount + ' row!');
    })
    .catch((error) => {
      console.log(error);
      res.status(204).send(error);
    });
  },

  delete: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 

    models.delete(meal, id)
    .then((data) => {
      res.status(201).send('menu deleted ' + data.rowCount + ' items removed!' );
    })
    .catch((error) => {
      console.log(error);
      res.status(204).send(error);
    });  
  }

}