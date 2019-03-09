var SqlString = require('sqlstring');
const pool = require('../db/index.js');

pool.connect();

module.exports = {

  //reads a full menu (many items by restaurant_id);
  select: async (meal, id) => {
    var query = `SELECT * FROM ${meal} WHERE restaurant_id = ${SqlString.escape(id)};`;
    return await pool.query(query);
  },

  //inserts one item
  insert: async (meal, id, data) => {
    console.log(meal, id, data);
    var query = `INSERT INTO ${meal} (name, description, price, restaurant_id) VALUES ('${data.name}', '${data.description}', ${data.price}, ${id});`;
    console.log(query);
    return await pool.query(query);
  },

  //updates ONE item 
  updateOne: async (meal, id, data) => {
    const query = 
    `UPDATE ${meal} 
    SET name='${data.name}', description='${data.description}', price=${data.price}
    WHERE restaurant_id=${SqlString.escape(id)} AND id=${data.id};`
    return await pool.query(query);
  },

  //deletes a whole menu 
  delete: async (meal, id) => {
    const query = `DELETE FROM ${meal} WHERE restaurant_id=${SqlString.escape(id)};`
    return await pool.query(query);
  }
  
}

