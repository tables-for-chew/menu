#!/bin/bash
echo -e "\n# -------------------------------------"
echo "# STARTING POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
echo "# Resetting PostgreSQL schema...."

echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -h ec2-13-59-207-125.us-east-2.compute.amazonaws.com -U power_user -d menus < psql.sql
echo "# ----- END PostgreSQL Output -----"


echo "# Copying CSV data into Menu database...."
start=$(date +'%T')
SECONDS=0

echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -h ec2-13-59-207-125.us-east-2.compute.amazonaws.com -U power_user -d menus < loadLunchPsql.sql
echo "# ----- END PostgreSQL Output -----"

end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"


echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -h ec2-13-59-207-125.us-east-2.compute.amazonaws.com -U power_user -d menus < loadDessertPsql.sql
echo "# ----- END PostgreSQL Output -----"

end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"

echo "Starting copying process at: $start"
echo "# ----- START PostgreSQL Output -----"
PGPASSWORD=$poweruserpassword psql -h ec2-13-59-207-125.us-east-2.compute.amazonaws.com -U power_user -d menus < loadDinnerPsql.sql
echo "# ----- END PostgreSQL Output -----"

end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"

echo "# -------------------------------------"
echo "# FINISHED POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"