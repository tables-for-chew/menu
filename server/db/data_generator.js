const faker = require('faker');
var fs = require("fs");
var Promise = require('bluebird');

console.log("Generating data now");

const randomNumber = (range) => {
  return Math.floor(Math.random() * range) + 1 
}

const foodItem = (id, restaurant_id) => {
  let foodItem = {};
  foodItem.id = id; 
  foodItem.name = faker.lorem.word();
  foodItem.description = faker.lorem.sentence(); 
  foodItem.price = randomNumber(100);
  foodItem.restaurant_id = restaurant_id; 
  return foodItem;
}

console.log(JSON.stringify(foodItem(2,37)));

// const generateMenus = () => {
//   const foodId = 0;
//   const meals = '';
  

//   //generate one menu
//   const oneMenu = () => {
//     const oneMenu = '';
//     for (let i = 0; i < 100; i++) {
//       let foodId = 
//       foodItem(foodId, i)
//       foodId += 1; 
//     }
//   } 

//   var menuStream = fs.createWriteStream('./menu_data/lunches.csv');
//   menuStream.write(...,'UTF8');
// }

const writeStream = () => {
  
  var createWriteStream = Promise.promisify(fs.createWriteStream);
  
  createWriteStream('./menu_data/output.json', "utf8").then(() => {
    var data = JSON.stringify(foodItem(2,37));
    console.log(data);

    // Write the data to stream with encoding to be utf8
    writerStream.write(data,'UTF8');
    // Mark the end of file
    writerStream.end();
    // Handle stream events --> finish, and error
    writerStream.on('finish', function() {
      console.log("Write completed.");
    });
    writerStream.on('error', function(err) {
      console.log(err.stack);
    });
    
  }).then(() => {
    console.log("Program Ended");
    
  }).catch(SyntaxError, function(e) {
      console.log("File had syntax error", e);

  // // Create a writable stream
  // var writerStream = fs.createWriteStream('./menu_data/output.json');
  // // Write the data to stream with encoding to be utf8
  // writerStream.write(data,'UTF8');
  // // Mark the end of file
  // writerStream.end();
  // // Handle stream events --> finish, and error
  // writerStream.on('finish', function() {
  //    console.log("Write completed.");
  // });
  // writerStream.on('error', function(err) {
  //    console.log(err.stack);
  // });
  // console.log("Program Ended");
}



/*

I: dummyData with food words
O: three CSV files, one for each type of menu (lunch, dinner, dessert)

require: faker, fs.writeFile , dummy_data

//model data shape 

item = { 
  "id": INTEGER, 
  "name": STRING, 
  "description": STRING, 
  "price": INTEGER between 1 and 100
  "restaurant_id": INTEGER that INCREMENTS to 10 Million 
}

tables/documents = [lunch, dinner, dessert]
//write one CSV file for each menu type: lunch.csv, dinner.csv, dessert.csv

//30 Million records total (for 10 Million restaurants)
//randomize the restaurant between 1 and 10 million

  //genererate a menu for lunch 
    //with 100 food items

  //generate a menu for dinner 
    //with 100 food items 

  //generate a menu for dessert 
    //with 100 food items

  write in chunks of 100,000

*/