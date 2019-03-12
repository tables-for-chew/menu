#!/bin/bash
echo -e "\n# -------------------------------------"
echo "# STARTING POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
echo "# Resetting PostgreSQL schema...."

echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -U power_user -d menus < psql.sql
echo "# ----- END PostgreSQL Output -----"


echo "# Copying CSV data into Reservations database...."
start=$(date +'%T')
SECONDS=0

echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -U power_user -d menus < loadLunchPsql.sql
echo "# ----- END PostgreSQL Output -----"

end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"


echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -U power_user -d menus < loadDessertPsql.sql
echo "# ----- END PostgreSQL Output -----"

end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"

echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -U power_user -d menus < loadDinnerPsql.sql
echo "# ----- END PostgreSQL Output -----"

end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"

echo "# -------------------------------------"
echo "# FINISHED POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"