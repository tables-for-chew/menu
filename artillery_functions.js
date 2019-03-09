
'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {

  const meal = Math.floor(Math.random() * 2) + 1;;
  const restaurantId = Math.floor(Math.random() * 10000000) + 1;

  // add variables to virtual user's context:
  userContext.vars.meal = meal;
  userContext.vars.restaurantId = restaurantId;

  // continue with executing the scenario:
  return done();
}

