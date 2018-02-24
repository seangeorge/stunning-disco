# Instructions to Run Highest Visibility Per year

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
        
	vi MaxTemperatureMapper.java and modify the file as per the requirement for highest visibility.

Step 8. Rename  the files :
	
	mv MaxTemperatureMapper.java MaxVisibilityMapper.java

Step 9. Modify all the files in the same way as described in Step 7 and 8. The files to be modifies are :

	MaxTemperatureReducer.java
	MaxTemperature.java
	MaxTemperatureWithCombiner.java

Step 10. Now compile using : 

	hadoop com.sun.tools.javac.Main MaxVisibility*.java

Step 11. Create a jar file in this case mv.jar : 

	jar cf mv.jar MaxVisibility*.class

Step 12. Run the job :

	hadoop jar mv.jar MaxVisibility spg/ncdc/90919293/1/90919293.txt output/ncdc/90919293/12

Step 13. Now view the output :

	hadoop fs -cat output/ncdc/90919293/12/part-r-00000

Step 14. Output :

Distance is in meters.

![george-sean-week-05-item1](https://user-images.githubusercontent.com/31294255/30890257-736d5358-a2f1-11e7-93dd-94e2664c5ceb.PNG)

Step 15. Job history

![george-sean-week-05-item1 job history](https://user-images.githubusercontent.com/31294255/30891402-cc679cb4-a2f8-11e7-979a-97ec024b7dad.PNG)
	
        
        
	
  
           