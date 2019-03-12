COPY lunch (id,name,description,restaurant_id) 
FROM '/Users/acaciapappas/Desktop/TableForChew/menu/server/db/utils/generator/menu_data/lunch.csv' DELIMITER ',' CSV HEADER;

SELECT setval('lunch', (SELECT MAX(id) FROM lunch)+1);

CREATE INDEX restuarant_id ON lunch;