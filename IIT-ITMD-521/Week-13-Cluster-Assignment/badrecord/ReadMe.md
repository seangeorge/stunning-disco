# Instructions to Run Code for Test 4 - 15 

	Note : Test 4 to 6 did not have bad records for 1990 data set.
	Test 7 - 15 had malformed records.
	Code is taken from the Hadoop Text Book 6-12 example, based on which NcdcRecordParser.java is created.
	Method is the same to run for test 8 and 9 but while compiling with input path change class name.

## Instructions to Run for Test 7 using MaxTemperature.java	

1. Paste the MaxTemperature.java MaxTemperatureWithCombinerCounter.java MaxTemperatureWithCompression.java NcdcRecordParser.java in data folder of the box you want to run code on.

2. Vagrant up

3. vagrant ssh

4.Run the commands : 

	cd /vagrant_data/
	cp MaxTemperature.java MaxTemperatureWithCombinerCounter.java MaxTemperatureWithCompression.java NcdcRecordParser.java ~

5.Now use the following commands :

	cd hadoop-book
	cd ch02-mr-intro
	cd src
	cd main
	cd java
	rm MaxTemperature.java
	cd ~ 

6.Connect to cluster if required.

7.Copy the files to folder using command from home :

	cp MaxTemperature.java MaxTemperatureWithCombinerCounter.java MaxTemperatureWithCompression.java NcdcRecordParser.java hadoop-book/ch02-mr-intro/src/main/java

8.Now use the following commands :

	cd hadoop-book
	cd ch02-mr-intro
	cd src
	cd main
	cd java

9.Run the following commands from java folder :
 
	hadoop com.sun.tools.javac.Main MaxTemperature*.java NcdcRecordParser.java

	jar cf mt.jar MaxTemperature*.class NcdcRecordParser.class

	hadoop jar mt.jar MaxTemperature /user/ncdc/80-90/80-90.txt /output/jrh/test7txt

![george-sean-week-13-cluster-malformed](https://user-images.githubusercontent.com/31294255/33760637-e9ddb650-dbcb-11e7-9641-3f4ea203ed97.PNG)
	    

