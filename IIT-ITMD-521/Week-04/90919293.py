#Author : Sean George
#Program Name : 90919293.py
#Description : To Read the maximum temperature from two tables and print it 
#Created : 09/23/2017 

import MySQLdb               #Import MySQLdb                
import datetime              #Import datetime
conn = MySQLdb.connect("localhost","root","itmd521","itmd521spg")      #Connect to Database
cursor = conn.cursor()
print ("Connection successfull");                               

cursor.execute("SELECT year(observationdatetime_spg) AS YEAR, max(at_spg) AS Maximum_Temperature from spgninetyninetyone WHERE at_spg != 9999 AND (qua_at_spg = '0' || qua_at_spg = '1' || qua_at_spg = '4' || qua_at_spg = '5' || qua_at_spg = '9') GROUP BY year(observationdatetime_spg);") # Select from 9091 and using group by clause


r1 = cursor.fetchone()  
while r1:
        print("The Year is " +str(r1[0])+ " and the Maximum Temperature is " +str(r1[1]));    #print the year and maximum temperature
        r1 = cursor.fetchone()

cursor.execute("SELECT year(observationdatetime_spg) AS YEAR, max(at_spg) AS Maximum_Temperature from spgninetytwoninetythree WHERE at_spg != 9999 AND (qua_at_spg = '0' || qua_at_spg = '1' || qua_at_spg = '4' || qua_at_spg = '5' || qua_at_spg= '9') GROUP BY year(observationdatetime_spg);") # Select from 9293 and using group by clause

r1 = cursor.fetchone()
while r1:
        print("The Year is " +str(r1[0])+ " and the Maximum Temperature is " +str(r1[1]));  #print the year and maximum temperature
        r1 = cursor.fetchone()
conn.commit()
conn.close()
