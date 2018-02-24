# Instructions to Run the Application

## Deliverable 1

Step 1. Download, Copy and paste the create.sql file in the data folder of itmd521.

Step 2. Do a vagrant up for the box.
 
Step 3. Do a vagrant ssh.

Step 4. Change the folder using the command :
        
	cd /vagrant_data/ and when you do an ls you can see the create.sql file as show below :

![george-sean-week-11-1](https://user-images.githubusercontent.com/31294255/32399306-ed402c48-c0c2-11e7-80b5-174f843b88b7.PNG)

Step 5. Copy the create.sql file to home directory using the command :
	
	cp create.sql ~

Step 6. Do cd ~ to go to home.

Step 7. When you do an ls from home it will look as seen below :

![george-sean-week-11-2](https://user-images.githubusercontent.com/31294255/32399308-eff1034a-c0c2-11e7-95c4-d172edc543e4.PNG)
	
Step 8. Now we have the file in our home directory. Run the following command's from home :
        
	chmod +x create.sql
	./create.sql
	
	This .sql file will create hadoopguide database and table widgets.

## Deliverable 2

Step 9. Now Download, Copy and paste the step-2.py file in the data folder of itmd521. After you run this file, 5000 records will be inserted randomly in widgets table.

Step 10. Run the following command from home:

	cd /vagrant_data/

Step 11. Copy the step-2.py file to home directory using the command :

	cp step-2.py ~

Step 12. Do cd ~ to go to home

Step 13. Now we have the file in our home directory. Run the following command's from home :
        
	sudo apt-get install python3-pip
	sudo apt-get install python3-mysqldb
	
	python3 step-2.py
	
	This will insert 5000 records in table widgets.

## Deliverable 3

Step 14. Now Download, Copy and paste the step-3.sh file in the data folder of itmd521. This file will execute the Sqoop import for all 5000 records from widgets table.

Step 15. Run the following command from home:

	cd /vagrant_data/

Step 16. Copy the step-3.sh file to home directory using the command :

	cp step-3.sh ~

Step 17. Do cd ~ to go to home

Step 18. Now we have the file in our home directory. Run the following command's from home :
	
	chmod +x step-3.sh
	./step-3.sh

Step 19. Once you run hadoop fs -cat widgets/part-m-00000 the output will look something like the one below :

	hadoop fs -cat widgets/part-m-00000

![george-sean-week-11-4](https://user-images.githubusercontent.com/31294255/32408034-827b9968-c15f-11e7-98d7-cd3a26891aee.PNG)

## Deliverable 4

Step 20. Now Download, Copy and paste the step-4.sh file in the data folder of itmd521. This file will execute the Sqoop import for records between 1000-3000 from widgets table.

Step 21. Run the following command from home:

	cd /vagrant_data/

Step 22. Copy the step-4.sh file to home directory using the command :

	cp step-4.sh ~

Step 23. Do cd ~ to go to home

Step 24. Run the command mentioned below from home. Otherwise it will throw an error saying /user/vagrant/widget already exists.

	hadoop fs -rm -r /user/vagrant/widgets

Step 25. Now we have the file in our home directory. Run the following command's from home :
	
	chmod +x step-4.sh
	./step-4.sh

Step 26. Once you run hadoop fs -cat widgets/part-m-00000 the output will look something like the one below :

	hadoop fs -cat widgets/part-m-00000
![george-sean-week-11-5](https://user-images.githubusercontent.com/31294255/32408035-84f5f800-c15f-11e7-9035-aed2b9e3f4ae.PNG)

## Deliverable 5

Step 27. To Run MaxWidgetId.java for 5000 records, the following needs to be done first from home :

	hadoop fs -rm -r /user/vagrant/widgets
	chmod +x step-3.sh
	./step-3.sh
	sqoop codegen --connect jdbc:mysql://localhost/hadoopguide --table widgets --username root --password itmd521 --class-name Widget

Step 28. Go to cd sqoop-1.4.6.bin__hadoop-2.0.4-alpha

Step 29. Open your bashrc file.In your bashrc file kindly see to it your hadoop classpath has the following :

	:/home/vagrant/sqoop-1.4.6.bin__hadoop-2.0.4-alpha/sqoop-1.4.6.jar

Step 30. Go to home using cd ~

Step 31. Go to the following folder:

	cd hadoop-book/
	cd ch15-sqoop/
	cd src/
	cd main/
	cd java

Step 32. Comipile using the command from the current folder i.e. java :

	hadoop com.sun.tools.javac.Main MaxWidgetId.java Widget.java

Step 33. Create a jar file using the command :

	jar cf sqoop-examples.jar *.class

Step 34. Run the job using the command :

	hadoop jar sqoop-examples.jar MaxWidgetId -libjars $SQOOP_HOME/sqoop-1.4.6.jar

Step 35. Output for this step can be viwed using the command :

	hadoop fs -cat /user/vagrant/maxwidget/part-r-00000

![george-sean-week-11-6](https://user-images.githubusercontent.com/31294255/32410627-3f178310-c193-11e7-897f-c9d489cbf38c.PNG)


Step 36. There is a Widget.java file if you do an ls in java folder, copy this to home using the command :

	cp Widget.java ~

Step 37. I have also provided the Widget.java to you.

## Deliverable 6

Step 38. Since my Last name starts with "P", I need to find the average price for each widget, for this first run the below command from home :

	hadoop fs -rm -r /user/vagrant/maxwidget

Step 39. Now Download, Copy and paste the AvgWidgetPr.java and the Widget.java file in the data folder of itmd521.

Step 40. Run the following command from home :

	cd /vagrant_data/

Step 41. Copy the AvgWidgetPr.java and the Widget.java files to home directory using the command :

	cp AvgWidgetPr.java ~
	cp Widget.java ~

Step 42. Do cd ~ to go to home

Step 43. Comipile using the command from the current folder i.e. java :

	hadoop com.sun.tools.javac.Main AvgWidgetPr.java Widget.java

Step 44. Create a jar file using the command :

	jar cf avg-widget.jar *.class

Step 45. Run the job using the command :

	hadoop jar avg-widget.jar AvgWidgetPr -libjars $SQOOP_HOME/sqoop-1.4.6.jar

Step 46. Output for this step can be viwed using the command :

	hadoop fs -cat /user/vagrant/maxwidget/part-r-00000

![george-sean-week-11-7](https://user-images.githubusercontent.com/31294255/32690783-da13f5dc-c6c1-11e7-9d0d-1fb44b00e9a6.PNG)





 

	 
   

           