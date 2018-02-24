# Instruction to Run Code

1.Paste the files in data folder of the box you want to run code on.

2.Vagrant up

3.vagrant ssh

4.Download webhitsMapper.java webhitsReducer.java and MaxTemperatureWithCombiner.java and Copy the java files to home :

	cd /vagrant_data/
	cp webhitsMapper.java webhitsReducer.java MaxTemperatureWithCombiner.java ~

5.Clear all existing java files if any.

6.Connect to cluster if required.

7.Now use the following commands :

	cd hadoop-book
	cd ch02-mr-intro
	cd src
	cd main
	cd java
	rm MaxTemperatureWithCombiner.java
  	cd ~

8.Copy the files to folder using command from home :

	cp webhitsMapper.java webhitsReducer.java MaxTemperatureWithCombiner.java hadoop-book/ch02-mr-intro/src/main/java

9.Now use the following commands :

	cd hadoop-book
	cd ch02-mr-intro
	cd src
	cd main
	cd java

10.Run the following commands :

	hadoop com.sun.tools.javac.Main *.java
	jar cf web.jar *.class
	hadoop jar web.jar MaxTemperatureWithCombiner /user/large-log/web-server-logs.txt /output/spg/test16txt/fourreducer

11.This Program was tested on local with MaxTemperature as driver class and the output is as shown below (job_1510338738646_6861):

![george-sean-week-13-cluster-test-16](https://user-images.githubusercontent.com/31294255/33759039-6c1a6c90-dbc6-11e7-8d57-3ce18cf12072.PNG)	    

