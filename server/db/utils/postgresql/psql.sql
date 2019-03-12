DROP TABLE IF EXISTS lunch;
DROP TABLE IF EXISTS dinner;
DROP TABLE IF EXISTS dessert;
DROP DATABASE IF EXISTS menus;
CREATE DATABASE menus;


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


