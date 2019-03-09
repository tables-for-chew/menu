const fs = require("fs");
const dummyFoods = require('./dummy_data.js');
console.log("Generating menus now...");

/*
Generate 10,000,000 primary records, 3 menus for each, with 50-100 food items for each menu => 1,500,000,000
500,000,000 food items per menu in chunks of 10,000.

The file for this proved to be HUGE so for dinner and desserts, I generated 15-20 items per menu => 600,000,000 secondary records
200,000,000 food items per menu in chunks of 10,000.
*/

//set the menu from one of three: lunch, dinner, dessert. Multiple helpers depend on this const. 
const meal = 'lunch';
// const filePath = `./menu_data/${meal}.csv`;
const filePath = `./menu_data/${meal}.csv`;

//Total number of foodItems to generate, should be 50 items per menu => set to 10,000 items
const itemsPerChunk = 10000;
// const itemsPerChunk = 10; // => for test file

//sets loop for number of chunks to gennerate => set to 1000
var chunkCount = 20000;
// var chunkCount = 10; // => for test file
var chunkDecrementer = 20000; 

//10,000,000 primary records by restaurant id
//generate restaurant_ids within this range
// querying for records under one million should return more results than over one million. 
const subTotalRecords = 1000000
const totalRecords = 10000000; 

//sets unique id for each food item
var itemIdCount = 1;

const randomNumber = (range) => {
  return Math.floor(Math.random() * range) + 1;
}

const foodItem = (id, restaurant_id) => {
  var randomIndex = randomNumber(99);
  let name = dummyFoods[meal].name[randomIndex].replace(/\s/g, '');
  let description = dummyFoods[meal].des[randomIndex].replace(/ +(?= )/g,'');
  let foodItem = `${id},${name},${description},${restaurant_id}\n`;
  return foodItem;
}

const chunker = () => {
  var chunk = '';
  for (let i = 0; i < itemsPerChunk; i++) {
    var randomRestaurantId = randomNumber(totalRecords);
    var newItem = foodItem(itemIdCount, randomRestaurantId);
    chunk = chunk + newItem;
    itemIdCount++;
  }
  return chunk;
}

const setHeaders = () => {
  const headers = "id,name,description,restaurant_id\n"
  var writerStream = fs.createWriteStream(filePath);
  writerStream.write(headers,'UTF8', () => {
    console.log('headers set')
  });
  writerStream.end();
  writerStream.on('finish', function() {
    console.log("Headers are written.");
  });

  writerStream.on('error', function(err) {
    console.log(err.stack);
  });

  console.log("Program Ended");
}

//writes a chunker batch to a file...
const writeFiles = async () => {
  setHeaders();
  
  const writeFn = () => {
    //promisify writing the file to wait until it's finished
    var writePromise = new Promise((resolve, reject) => {
      var data = chunker();
      var writeStream = fs.createWriteStream(filePath, {flags: 'a'});
      writeStream.write(data, 'UTF8');
      writeStream.end();
      writeStream.on('finish', function () {
        chunkCount--;
        console.log(`${chunkCount} chunks written to ${filePath}`)
        resolve();
      });
      writeStream.on('error', function (err) {
        reject();
        console.log(err.stack);
      });
    })
    return writePromise; 
  }
  
  for(let i = 0; i < chunkCount; i--) {
    if(chunkDecrementer > 0){
      chunkDecrementer--;
      await writeFn()
    }
  }
}

(async () => {
  console.time("Program Ended")
  await writeFiles();
  console.timeEnd("Program Ended");
})()