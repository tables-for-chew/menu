    ssh -i acacia-pappas-key-pair-northern-ca.pem ec2-13-59-207-125.us-east-2.compute.amazonaws.com
    sudo yum update
    sudo yum install postgresql postgresql-server postgresql-devel postgresql-contrib postgresql-docs
    sudo service postgresql initdb
    
    sudo vim /var/lib/pgsql9/data/pg_hba.conf
    sudo vim /var/lib/pgsql9/data/postgresql.conf
    sudo service postgresql start
    sudo su - postgres