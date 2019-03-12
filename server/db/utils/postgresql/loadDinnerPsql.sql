COPY dinner(id,name,description,restaurant_id) 
FROM '/Users/acaciapappas/Desktop/TableForChew/menu/server/db/utils/generator/menu_data/dinner.csv' DELIMITER ',' CSV HEADER;

SELECT setval('dinner_id_seq', (SELECT MAX(id) FROM dinner)+1);

CREATE INDEX restuarant_id ON dinner;