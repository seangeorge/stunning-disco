# Instructions to run for calculating the maximum temperature for four years 1990, 1991 , 1992 and 1993 

Step 1. Make a folder NCDC and copy all sample text files into it. Also change the memory of the box and add 8088,19888 and 50070 forwarding ports.

Step 2. Install hadoop, install vagrant scp, refer the codes below to install scp and transfer files to home/vagrant :
	
	vagrant plugin install vagrant-scp

	vagrant scp "./NCDC/1990-sample.txt" default:/home/vagrant/
	vagrant scp "./NCDC/1991-sample.txt" default:/home/vagrant/
	vagrant scp "./NCDC/1992-sample.txt" default:/home/vagrant/
	vagrant scp "./NCDC/1993-sample.txt" default:/home/vagrant/

Step 3. Run the following commands after vagrant ssh from home :

	cat 1990-sample.txt 1991-sample.txt > 9091.txt
	cat 1992-sample.txt 1993-sample.txt > 9293.txt
	
	or Kindly copy the files given i.e. 9091.txt and 9293.txt to /home/vagrant

Step 4. Before Running shell scrip ensure that, you have installed mysql on your vagrant box and using mysql_secure_installation change the default password from root to itmd521.
 
Step 5. Run the Shell script from home : ./Master.sh

Step 6. Output for final maximum temperature:

![90919293_py](https://user-images.githubusercontent.com/31294255/30779421-fb2f604e-a0b5-11e7-9f13-77c1283dd054.PNG)


