#  Simple MapReduce Job

## 1. Creation of HDFS directory

The HDFS directory is created using the command : **hadoop fs -mkdir -p spg/ncdc/sample/** (Refer Image)

The output after the ls command is shown in the image below

![george-sean-week-03-hdfs directory](https://user-images.githubusercontent.com/31294255/30251935-53292f3c-962f-11e7-9a57-6db8f916a0bf.PNG)  

## 2. Sample data loaded in HDFS  

We need to load the sample data into HDFS, which can be done with a CopyFromLocal command.

The output after the ls command is shown in the image below

![george-sean-week-03-load sample data-hdfs](https://user-images.githubusercontent.com/31294255/30251947-771db520-962f-11e7-99c6-d4678077c599.PNG)

## 3. MaxTemperature Output

Run the application using the command : **hadoop jar mt.jar MaxTemperature spg/ncdc/sample/sample.txt output/ncdc/sample/1**

![george-sean-week-03-run application](https://user-images.githubusercontent.com/31294255/30301566-264664ba-9721-11e7-9272-a940ff9d03b0.PNG)

In the above command *spg/ncdc/sample/sample.txt* is the input directory in HDFS and *output/ncdc/sample/1* is the output directory in HDFS

Output :

![george-sean-week-03-max temperature-output](https://user-images.githubusercontent.com/31294255/30251958-ab008502-962f-11e7-853f-d712346fc0f2.PNG)




 