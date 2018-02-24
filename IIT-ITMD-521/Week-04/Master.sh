#!/bin/bash
#Author : Sean George
#Created on : 09/23/2017
#description : Install mysql server,Install python packages,create database,create tables.


#Installed mysql

export DEBIAN_FRONTEND="noninteractive"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password root"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password root"
sudo apt-get install -y mysql-server

#Python packages

sudo apt-get install python3-pip
sudo apt-get install python3-mysqldb

#Created Database

mysql -u root -pitmd521 -e "create database itmd521spg"

#Creates Table for both years

mysql -uroot -pitmd521 itmd521spg <<EOF
CREATE TABLE spgninetyninetyone(
id int UNSIGNED NOT NULL AUTO_INCREMENT,
us_wea_sid_spg int,
wban_wea_sid_spg int,
observationdatetime_spg DATETIME,
latitude_spg int,
longitude_spg int,
elevation_spg int,
wind_direction_spg int,
qua_code_wd_spg varchar(1),
sky_ceilingheight_spg int,
qua_sch_spg varchar(1),
vis_dis_spg int,
qua_vis_dis_spg varchar(1),
at_spg int,
qua_at_spg varchar(1),
dp_temp_spg int,
qua_dp_spg varchar(1),
at_pressure_spg int,
qua_ap_spg varchar(1),
PRIMARY KEY(id));

CREATE TABLE spgninetytwoninetythree(
id int UNSIGNED NOT NULL AUTO_INCREMENT,
us_wea_sid_spg int,
wban_wea_sid_spg int,
observationdatetime_spg DATETIME,
latitude_spg int,
longitude_spg int,
elevation_spg int,
wind_direction_spg int,
qua_code_wd_spg varchar(1),
sky_ceilingheight_spg int,
qua_sch_spg varchar(1),
vis_dis_spg int,
qua_vis_dis_spg varchar(1),
at_spg int,
qua_at_spg varchar(1),
dp_temp_spg int,
qua_dp_spg varchar(1),
at_pressure_spg int,
qua_ap_spg varchar(1),
PRIMARY KEY(id));
EOF

echo "Database and Tables created"

python3 9091.py
python3 9293.py
python3 90919293.py
