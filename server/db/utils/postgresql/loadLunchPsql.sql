\COPY lunch(id,name,description,restaurant_id) FROM '/Users/acaciapappas/Desktop/TableForChew/menu/server/db/utils/generator/menu_data/lunch.csv' DELIMITER ',' CSV HEADER;

-- SELECT setval('lunch', (SELECT MAX(id) FROM lunch)+1);
ALTER SEQUENCE "lunch_id_seq" RESTART WITH 200000002;

CREATE INDEX restaurant_id_index_lunch ON lunch(restaurant_id);