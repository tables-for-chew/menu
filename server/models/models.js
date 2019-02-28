var SqlString = require('sqlstring');
const db = require('../db/index.js');

db.connect();

module.exports = {

  //returns one meal 
  select: (meal, id) => {
    return new Promise(function(resolve, reject) {
      const query = `SELECT * FROM ${meal} WHERE ${SqlString.escape(id)};`
      console.log(query);
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
    console.log('data', typeof data.name, typeof data.description, typeof data.price);

    return new Promise(function(resolve, reject){
      const query = 
      `INSERT INTO ${meal} (id, name, description, price, restaurant_id) VALUES (${data.id}, '${data.name}', '${data.description}', ${data.price}, ${data.restaurant_id})`;
  
      console.log(query);
      db.query(query, function(error){
        if (error){
          reject(error);
        }

        var successNotification ='your message has been posted';
        resolve(successNotification);
      });
    });
  },

  //updates one meal 
  update: () => {
    const query = 
    `INSERT INTO ${meal} (id, name, description, price, restaurant_id) VALUES (${data.id}, '${data.name}', '${data.description}', ${data.price}, ${data.restaurant_id}) WHERE restaurant_id = ${SqlString.escape(id)};`;

    console.log(query);

  },

  //deletes one meal 
  delete: () => {}
}