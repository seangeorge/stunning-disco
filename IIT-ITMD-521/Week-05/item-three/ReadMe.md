# Instructions to Run Max Station Id with invalid temperature records 

Step 1. Create a NCDC folder and copy all the year sample.txt files in the folder.

Step 2. Do a vagrant up for the box you want to run the code on.

Step 3. To copy all your files to vagrant box run the following :
        
	vagrant scp "./NCDC/1990-sample.txt" default:/home/vagrant/
	vagrant scp "./NCDC/1991-sample.txt" default:/home/vagrant/
	vagrant scp "./NCDC/1992-sample.txt" default:/home/vagrant/
	vagrant scp "./NCDC/1993-sample.txt" default:/home/vagrant/

Step 4. Do a vagrant ssh and then concannate all files into one run the following :
	
	cat 1990-sample.txt 1991-sample.txt 1992-sample.txt 1993-sample.txt > 90919293.txt

Step 5. Create a directory and copy from local :

	hadoop fs -mkdir -p spg/ncdc/90919293/1/
	hadoop fs -copyFromLocal 90919293.txt spg/ncdc/90919293/1/

Step 6. Now we need to copy the MaxTemperature files to home directory :
	
	cd hadoop-book
	cd ch02-mr-intro
	cd src
	cd main
	cd java and cp MaxTemperature*.java ~/

	then cd ~

Step 7. Now we have all the files in our home directory. Run the following command :
        
	vi MaxTemperatureMapper.java and modify the file as per the requirement for max station id with invalid temperature.

Step 8. Rename  the files :
	
	mv MaxTemperatureMapper.java MaxStationIdMapper.java

Step 9. Modify all the files in the same way as described in Step 7 and 8. The files to be modifies are :

	MaxStationId.java
	MaxStationIdReducer.java
	MaxStationIdWithCombiner.java

Step 10. Now compile using : 

	hadoop com.sun.tools.javac.Main MaxStationId*.java

Step 11. Create a jar file in this case maxsta2.jar : 

	jar cf maxsta2.jar MaxStationId*.class

Step 12. Run the job :

	hadoop jar maxsta2.jar MaxStationId spg/ncdc/90919293/1/90919293.txt output/ncdc/90919293/22

Step 13. Now view the output :

	hadoop fs -cat output/ncdc/90919293/22/part-r-00000

Step 14. Output :
	
	The output shows the count of all station id's highest :

![george-sean-week-05-item3](https://user-images.githubusercontent.com/31294255/31051683-ac5c22de-a634-11e7-95fc-4127e3cc9e52.PNG)

Step 15. Job history
	
![george-sean-week-05-item3-job history](https://user-images.githubusercontent.com/31294255/31051696-d966b118-a634-11e7-9a62-8e5b484b3268.PNG)
        
	
  
           