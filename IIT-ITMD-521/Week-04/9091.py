#Author : Sean George
#Program Name : 9091.py
#Description : To Read the file 9091.txt and Insert it into the table Ninety Ninety One using python 
#Created : 09/23/2017 

import MySQLdb                                                 # Import my sql db         
import datetime                                                # Import date time
conn = MySQLdb.connect("localhost","root","itmd521","itmd521spg")    # Connection to MySQLdb
cursor = conn.cursor()
with open('9091.txt','r',encoding='latin_1') as input:         #Read .txt 
	for line in input:
		usweatherstationidentifier = line[4:10]
		wbanweatherstationidentifier = line[10:15]
		observedatetime = line[15:27]
		dt = datetime.datetime.strptime(observedatetime,"%Y%m%d%H%M")       #Converted date to mysql format
		lat = line[28:34]
		longi = line[34:41]
		elv = line[46:51]
		winddirection = line[61:64]
		winddirection_qc = line[64:65]
		skyceiling = line[72:76]
		skyceiling_qc = line[76:77]
		visibility_distance = line[78:83]
		visibility_distance_qc = line[83:84]
		airtemp = line[87:92]
		air_temp_qc = line[92:93]
		dw_pt_temp = line[93:98]
		dw_pt_temp_qc = line[98:99]
		atmospressure = line[99:104]
		atmospressure_qc = line[104:105]
		cursor.execute("INSERT INTO spgninetyninetyone(us_wea_sid_spg,wban_wea_sid_spg,observationdatetime_spg,latitude_spg,longitude_spg,elevation_spg,wind_direction_spg,qua_code_wd_spg,sky_ceilingheight_spg,qua_sch_spg,vis_dis_spg,qua_vis_dis_spg,at_spg,qua_at_spg,dp_temp_spg,qua_dp_spg,at_pressure_spg,qua_ap_spg)VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",(usweatherstationidentifier,wbanweatherstationidentifier,dt.strftime("%Y-%m-%d-%H-%M"),lat,longi,elv,winddirection,winddirection_qc,skyceiling,skyceiling_qc,visibility_distance,visibility_distance_qc,airtemp,air_temp_qc,dw_pt_temp,dw_pt_temp_qc,atmospressure,atmospressure_qc))	#Insert into the table
conn.commit()                                                #Commit
print ("Records added in Table Ninety Ninety One")           #Print  
conn.close()
