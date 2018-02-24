mysql -u root -pitmd521 -e "CREATE DATABASE hadoopguide"
mysql -uroot -pitmd521 hadoopguide <<EOF
CREATE TABLE widgets(id	INT NOT	NULL PRIMARY KEY AUTO_INCREMENT,
widget_name VARCHAR(64)	NOT NULL,
price DECIMAL(10,2),
design_date DATE,version INT,
design_comment VARCHAR(100)); 
EOF
echo "Database and Tables created"
