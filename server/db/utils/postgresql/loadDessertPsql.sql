\COPY dessert(id,name,description,restaurant_id) FROM '/Users/acaciapappas/Desktop/TableForChew/menu/server/db/utils/generator/menu_data/dessert.csv' DELIMITER ',' CSV HEADER;

-- SELECT setval('dessert_id_seq', (SELECT MAX(id) FROM dessert)+1);
ALTER TABLE "dinner_id_seq" RESTART WITH 200000002;


CREATE INDEX restaurant_id_index_dessert ON dessert(restaurant_id);