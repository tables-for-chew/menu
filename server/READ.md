**Get Menu**
----
  Returns a menu for given restaurant id and meal. The meal can be one of three: lunch, dinner, or dessert. 

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

**Add a Menu**
----
  Updates a menu with a given restaurant id and type of meal

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
    [
    {
        "id": 1,
        "name": "cherry pie",
        "description": "yum yum yum made from fresh cherries for your local orchard",
        "price": 15
        "restaurant_id": 67
    },
    {
        "id": 2,
        "name": "peach cobbler",
        "description": "Made form local peaches",
        "price": 15,
        "restaurant_id": 67
    },
    {
        "id": 3,
        "name": "chocolate mousse",
        "description": "creamy deliciousness",
        "price": 15
        "restaurant_id": 67
    }
    ]`
 
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
  Updates one of three meals by restaurant id 

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
  Deletes one of three menus by restaurant id and type of menu

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

