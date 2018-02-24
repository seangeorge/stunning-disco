#!/bin/bash
#Author : Sean George
#Created on : 11/03/2017
#description : Script to Run 2000 records from widgets table based on where condition

sqoop import --connect jdbc:mysql://localhost/hadoopguide --table widgets -m 1 --username root --password itmd521 --where "id >= 1000 and id < 3000"
