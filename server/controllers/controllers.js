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
      res.satus(404)
    });
  },

  post: (req, res) => {
    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    let id = Number(req.params.restaurantId); 

    console.log('meal', meal, typeof meal); // => lunch, dinner or dessert
    console.log('id', id, typeof id); // => restaurant id

    models.insert(meal, id, req.body)
    .then(() => {
      res.status(201).send('Youve hit the POST');
    })
    .catch((error) => {
      console.log(error);
      res.status(304);
    });
  },

  put: (req, res) => {
    res.status(200).send("you have hit the PUT method within the controller!");
  },

  delete: (req, res) => {
    res.status(200).send("you have hit the DELETE method within the controller!");
  }

}