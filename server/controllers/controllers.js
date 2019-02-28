const models = require('../models/models.js');

module.exports = {

  get: (req, res) => {

    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = req.params.restaurantId; 

    models.select(meal, id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
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
    .catch((error) => {
      console.log(error);
      res.status(304).send(error);
    });
  },

  put: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 

    models.update(meal, id, req.body)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(304).send(error);
    });
  },

  delete: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 

    models.delete(meal, id)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(304).send(error);
    });  
  }

}