# Instructions to Run Minimum Temperature Per year

Since the combined .txt files are already present in the vagrant box. We need to follow the steps below

Step 1. Copy the MaxTemperature files to home directory :
	
	cd hadoop-book
	cd ch02-mr-intro
	cd src
	cd main
	cd java and cp MaxTemperature*.java ~/

	then cd ~

Step 2. Now we have all the files in our home directory. Run the following command :
        
	vi MaxTemperatureMapper.java and modify the file as per the requirement for minimum temperature.

Step 3. Rename  the files :
	
	mv MaxTemperatureMapper.java MinTemperatureMapper.java

Step 4. Modify all the files in the same way as described in Step 2 and 3. The files to be modifies are :

	MinTemperatureReducer.java (Here two changes have been Math.max changed to Math.min and Integer.MIN_VALUE changed to Integer.MAX_VALUE)
	MinTemperature.java
	MinTemperatureWithCombiner.java

Step 5. Now compile using : 

	hadoop com.sun.tools.javac.Main MinTemperature*.java

Step 6. Create a jar file in this case mintemp.jar : 

	jar cf mintemp.jar MinTemperature*.class

Step 7. Run the job :

	hadoop jar mintemp.jar MinTemperature spg/ncdc/90919293/1/90919293.txt output/ncdc/90919293/15

Step 8. Now view the output :

	hadoop fs -cat output/ncdc/90919293/15/part-r-00000

Step 9. Output :

Temperature value / 1o i.e -79 C,-75 C,-84.8 C,-83 C

![george-sean-week-05-item2](https://user-images.githubusercontent.com/31294255/30898016-d6115e82-a31e-11e7-8bf2-e91ef64402eb.PNG)

Step 10. Job history

![george-sean-week-05-item2 job history](https://user-images.githubusercontent.com/31294255/30898019-d985de08-a31e-11e7-8e02-b6fbe1eef82f.PNG)

	
        
        
	
  
           