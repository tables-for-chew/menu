**Get Meal**
----
  Reads one of three meals by restuarant id 

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
    { "id": 9, "name": "butter", "description": "blakfjgldkshg;jdshgierhjg;khjf", "price": 15, "restaurant_id": 4} 
    {
      ...
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

**Add a Meal**
----
  Updates one of three meals by restaurant id 

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
    { "id": 9, "name": "butter", "description": "blakfjgldkshg;jdshgierhjg;khjf", "price": 15, "restaurant_id": 4} 
    {
      ...
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

**Update a Meal**
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
      **Content:** `
    { "id": 9, "name": "butter", "description": "blakfjgldkshg;jdshgierhjg;khjf", "price": 15, "restaurant_id": 4} 
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

**Remove a Meal**
----
  Deletes one of three meals by restaurant id 

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
    **Content:** `{ error : "Not Updated" }`

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

