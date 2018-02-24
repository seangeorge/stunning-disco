# Instructions to Run Deliverable 2

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
        
	vi MaxTemperatureMapper.java and modify the file as per the requirement .

Step 8. Rename  the files.
	
	

Step 9. Modify all the files in the same way as described in Step 7 and 8.

The logic here is that the since my last name start with P...i choose to do the southern hemisphere which is negative. Per degree 10 latitude has to br combined and
the maximum temperature has to be found for 18 sets.



	
  
           