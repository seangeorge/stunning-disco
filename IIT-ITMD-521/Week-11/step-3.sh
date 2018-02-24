#!/bin/bash
#Author : Sean George
#Created on : 11/3/2017
#description : Sqoop import command to retrive all records in Widgets table

sqoop import --connect jdbc:mysql://localhost/hadoopguide --table widgets -m 1 --username root --password itmd521
