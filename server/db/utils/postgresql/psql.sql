CREATE TABLE dessert(
 id SERIAL PRIMARY KEY,
 name text,
 description text,
 price INT,
 restaurant_id INT NULL
);

CREATE TABLE dinner(
 id SERIAL PRIMARY KEY,
 name text,
 description text,
 price INT,
 restaurant_id INT
);

CREATE TABLE lunch(
 id SERIAL PRIMARY KEY,
 name text,
 description text,
 price INT,
 restaurant_id INT
);


