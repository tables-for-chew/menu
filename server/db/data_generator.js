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

//stack the buffer with 10,000 items
//write them to the file and when they are finished

//set before running this file
const bufferItems = 10;
const totalRecords = 30;

//counts
var fileWriteCount = 0; 
var itemCount = 1; 

//returns an array of items => [{"id":2,"name":"rem","description":"Eum ab laudantium saepe et.","price":74,"restaurant_id":37}]
const loadBuffer = () => {
  var buffer = [];
  for (let i = 0; i < bufferItems; i++) {
    const randomRestaurantId = randomNumber(totalRecords)
    var newItem = foodItem(itemCount, randomRestaurantId);
    buffer.push(newItem);
    itemCount++;
    console.log('item', itemCount);
  }
  return buffer; 
}

//writes a loadBuffer batch to a file...
const writeStream = () => {  

    //stringify here...
    var data = loadBuffer();
    var stringifiedData = JSON.stringify(data);

    // Create a writable stream
    var writerStream = fs.createWriteStream('./menu_data/output.json');

    // Write the data to stream with encoding to be utf8
    writerStream.write(stringifiedData,'UTF8');

    // Mark the end of file
    writerStream.end();

    // Handle stream events --> finish, and error
    writerStream.on('finish', function() {
       console.log("Write completed.");
    });
    writerStream.on('error', function(err) {
       console.log(err.stack);
    });
    console.log("Program Ended");
  }

  writeStream();
  


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