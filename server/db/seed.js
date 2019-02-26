const mysql = require('mysql');
const connection = require("./index.js");
const data = require('./dummy_data.js');

function seeding(meal, whichMeal) {
  for (let i = 0; i < 100; i++) {
    let name = whichMeal.name[i].trim();
    let description = whichMeal.des[i].trim();
    let price = Math.random() * (25 - 9) + 9;
    let params = [name, description, price];
    let queryStr = 'insert into ' + meal + '(name, description,price) \
        values (?,?,?)';

    connection.connection.query(queryStr, params, function (err, result) {
      if (err) {

        // If you have errors: 
        console.log("\n\n----------------------------------------");
        console.log("                                        | ");
        console.log("                                        | ");
        console.log("    1. Did you insert schema.sql?       |");
        console.log("    2. Did you connect your server ?    | ");
        console.log("    3. Do you have MySQL in computer?   | ");
        console.log("    4. Did you change MySQL password?   | ");
        console.log("                                        | ");
        console.log("----------------------------------------\n\n");

        console.log("error message: ", err);
        return;
      }
    });
  }
}

// Create 3 tables and insert dummy data.
seeding("lunch", data.lunch);
seeding("dinner", data.dinner);
seeding("dessert", data.dessert);
connection.connection.end();

console.log("\n\n----------------------------------------");
console.log("                                        | ");
console.log("                                        | ");
console.log("       Done! Data inserted!             |");
console.log("       Check your database!             | ");
console.log("                                        | ");
console.log("                                        | ");
console.log("----------------------------------------\n\n");

