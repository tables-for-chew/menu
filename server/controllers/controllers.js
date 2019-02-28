const models = require('../models/models.js');

module.exports = {

  get: (req, res) => {

    let meal = req.query.q === undefined ? 'lunch' : req.query.q;
    console.log(meal); // => lunch, dinner or dessert
    console.log('params', req.params); // => restaurant id
    res.status(200).send("you have hit the GET method within the controller!");
    //use promises here below to call models async here...
  },

  post: (req, res) => {
    res.status(200).send("you have hit the POST method within the controller!");
  },

  put: (req, res) => {
    res.status(200).send("you have hit the PUT method within the controller!");
  },

  delete: (req, res) => {
    res.status(200).send("you have hit the DELETE method within the controller!");
  }

}