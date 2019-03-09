**Get Menu**
----
  Returns a menu for given restaurant id and meal. The meal can be one of three: lunch, dinner, or dessert. 
  It will be an array of objects, each object is a food item which includes that restaurant_id.

* **URL**

  /api/:restaurantId/menu?q=[meal]

* **Method:**

  `GET` 
  
*  **URL Params**

   **Required:**

   `/:restaurantId=[integer]` 
   `meal=[string]`

   Meal options: lunch, dinner, dessert

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
    [
    {
        "id": 3,
        "name": "sazon",
        "description": "A crunchy salad featuring fresh chickpea and baby courgette",
        "price": 15
        "restaurant_id": 67
    },
    {
        "id": 4,
        "name": "sazon",
        "description": "A crunchy salad featuring fresh chickpea and baby courgette",
        "price": 15,
        "restaurant_id": 67
    },
    {
        "id": 5,
        "name": "sazon",
        "description": "A crunchy salad featuring fresh chickpea and baby courgette",
        "price": 15
        "restaurant_id": 67
    }
    ]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Not Found" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Invalid Request" }`

* **Sample Call:**

   `$.ajax({
    url: "/api/:restaurantId/menu?q=[meal]",
    dataType: "json",
    type : "GET",
    success : (data) => {
      console.log(data)
    }
  });`

**Add a Menu Item**
----
  Adds an item to a menu with a given restaurant id and type of meal

* **URL**

  /api/:restaurantId/menu?q=[meal]

* **Method:**

  `POST` 
  
*  **URL Params**

   **Required:**

   `/:restaurantId=[integer]` 
   `meal=[string]`

   Meal options: lunch, dinner, dessert

* **Success Response:**

  * **Code:** 201
      **Content:** `
    {
        "id": 1, //will be reassigned within the database
        "name": "cherry pie",
        "description": "yum yum yum made from fresh cherries for your local orchard",
        "price": 15
        "restaurant_id": 67
    }
    `

 
* **Error Response:**

  * **Code:** 304 NOT MODIFIED <br />
    **Content:** `{ error : "Not Modified" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Invalid Request" }`

* **Sample Call:**

   `$.ajax({
    url: "/api/:restaurantId/menu?q=[meal]",
    dataType: "json",
    type : "POST",
    success : () => {
      console.log("posted!")
    }
  });`

**Update a Menu**
----
  Updates one menu item by resturant id, item id, and meal 

* **URL**

  /api/:restaurantId/menu?q=[meal]

* **Method:**

  `PUT` 
  
*  **URL Params**

   **Required:**

   `/:restaurantId=[integer]` 
   `meal=[string]`

   Meal options: lunch, dinner, dessert

* **Success Response:**

  * **Code:** 200 

    **Content:** `
    {
        "id": 1,
        "name": "cherry pie",
        "description": "yum yum yum made from fresh cherries for your local orchard",
        "price": 15
        "restaurant_id": 67
    }
    `
 
* **Error Response:**

  * **Code:** 304 NOT MODIFIED <br />
    **Content:** `{ error : "Not Updated" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Invalid Request" }`

* **Sample Call:**

   `$.ajax({
    url: "/api/:restaurantId/menu?q=[meal]",
    dataType: "json",
    type : "PUT",
    success : () => {
      console.log("updated!")
    }
  });`

**Remove a Menu**
----
  Deletes the menu for a the given restaurant id

* **URL**

  /api/:restaurantId/menu?q=[meal]

* **Method:**

  `DELETE` 
  
*  **URL Params**

   **Required:**

   `/:restaurantId=[integer]` 
   `meal=[string]`

   Meal options: lunch, dinner, dessert

* **Success Response:**

  * **Code:** 200 
 
* **Error Response:**

  * **Code:** 304 NOT MODIFIED <br />
    **Content:** `{ error : "Not Deleted" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Invalid Request" }`

* **Sample Call:**

   `$.ajax({
    url: "/api/:restaurantId/menu?q=[meal]",
    dataType: "json",
    type : "DELETE",
    success : () => {
      console.log("deleted!")
    }
  });`

