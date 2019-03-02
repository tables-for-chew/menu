const faker = require('faker');
var fs = require("fs");
console.log("Generating menus now...");

/*
Generate 10,000,000 primary records, 3 menus for each, with 50-100 food items for each menu => 1,500,000,000
500,000,000 food items per menu in chunks of 
*/

//Total number of foodItems to generate, should be 50 items per menu => set to 10,000 items
const itemsPerChunk = 100000;

//sets loop for number of chunks to gennerate => set to 1000
var chunkCount = 5000;

//generate restaurant_ids within this range
const totalRecords = 10000000; //10,000,000 primary records

//sets unique id for each food item
var itemIdCount = 1;

const randomNumber = (range) => {
  return Math.floor(Math.random() * range) + 1;
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

//returns a string of items => [{"id":2,"name":"rem","description":"Eum ab laudantium saepe et.","price":74,"restaurant_id":37}]
const chunker = () => {
  var chunk = '';
  for (let i = 0; i < itemsPerChunk; i++) {
    const randomRestaurantId = randomNumber(totalRecords)
    var newItem = foodItem(itemIdCount, randomRestaurantId);
    chunk = chunk + JSON.stringify(newItem);
    itemIdCount++;
  }
  return chunk;
}

//writes a chunker batch to a file...
const writeFiles = async () => {
  
  const writeFn = () => {

    //promisify writing the file to wait until it's finished
    var writePromise = new Promise((resolve, reject) => {
      var data = chunker();
      var filePath = `./menu_data/lunches.json`;
      var writeStream = fs.createWriteStream(filePath);

      writeStream.write(data, 'UTF8');
      writeStream.end();
  
      writeStream.on('finish', function () {
        chunkCount--;
        resolve();
      });
      
      writeStream.on('error', function (err) {
        reject();
        console.log(err.stack);
      });
    })
    return writePromise; 
  }
  
  var count = chunkCount; 
  for(let i = 0; i < chunkCount; i--) {
    if(count > 0){
      count--;
      await writeFn()
    }
  }
}

(async () => {
  console.time("Program Ended")
  await writeFiles();
  console.timeEnd("Program Ended");
})()