

USE menu; 

CREATE TABLE lunch (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(100),
    price INT,
    PRIMARY KEY(id),
    restaurant_id INT
);

CREATE TABLE dinner (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(100),
    price INT,
    PRIMARY KEY(id),
    restaurant_id INT
);

CREATE TABLE dessert (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    description VARCHAR(100),
    price INT,
    PRIMARY KEY(id),
    restaurant_id INT
);