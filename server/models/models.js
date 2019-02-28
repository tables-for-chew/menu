var SqlString = require('sqlstring');
const db = require('../db/index.js');

db.connect();

module.exports = {

  //returns one meal 
  select: (meal, id) => {
    return new Promise(function(resolve, reject) {
      const query = `SELECT * FROM ${meal} WHERE ${SqlString.escape(id)};`
      db.query(query, function(error, data){
        if(error) {
          reject(error);
        }
        resolve(data);
      });
    });
  },

  //inserts one meal
  insert: (meal, id, data) => {
    return new Promise(function(resolve, reject){
      const query = 
      `INSERT INTO ${meal} (id, name, description, price, restaurant_id) VALUES (${data.id}, '${data.name}', '${data.description}', ${data.price}, ${data.restaurant_id})`;
        db.query(query, function(error){
        if (error){
          reject(error);
        }

        var successNotification ='Meal has been added!';
        resolve(successNotification);
      });
    });
  },

  //updates one meal 
  //NOTE: currently this query is not persisting in the db, needs attention
  update: (meal, id, data) => {
    return new Promise(function(resolve, reject){

      const query = 
      `UPDATE ${meal} SET id = ${data.id}, name='${data.name}', description='${data.description}', price=${data.price}, restaurant_id=${data.restaurant_id} WHERE restaurant_id=${SqlString.escape(id)};`

        db.query(query, function(error){
        if (error){
          reject(error);
        }

        var successNotification ='Meal has been updated!';
        resolve(successNotification);
      });
    });

  },

  //deletes one meal 
  delete: (meal, id) => {
    return new Promise(function(resolve, reject){

      const query = `DELETE FROM ${meal} WHERE restaurant_id=${SqlString.escape(id)};`

        db.query(query, function(error){
        if (error){
          reject(error);
        } 
        var successNotification ='Meal has been deleted!';
        resolve(successNotification);
      });
    });
  }
}

