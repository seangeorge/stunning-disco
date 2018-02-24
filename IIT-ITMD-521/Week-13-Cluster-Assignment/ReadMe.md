# Explanation of Tests

Note : The following page numbers have been used for reference :
	54
	181
	203
	229
	233
	119 

## Test 1

* Without combiner,without intermediate compression,1, 2, 4 and 8 reducers

![george-sean-week-13-cluster-43](https://user-images.githubusercontent.com/31294255/33729067-20474970-db42-11e7-9738-2b58cce1697f.PNG)

### Answer 

	The above graph shows time comparison for the jobs run on 1994 data set. The jobs are run with 1, 2, 4 and 8 reducers.
	
	.txt
	The Hadoop file system takes the least time to run the job on .txt version in the case of 1, 4 and 8 reducers.
	The time is more in case of 2 reducers, because of the average map, shuffle, merge, reduce time is more compared to the others. 
	It takes The Hadoop file system takes the least time to run the job on .txt version in the case of 1, 4 and 8 reducers. 
	Since .txt is uncompressed and allows data to be read arbitrarily, it takes lesser time to run the job.
	
	.bz2
	In .bzip2 the data needs to be decompressed first to run the job and this codec actually takes more time than other formats to decompress and compress a file. [Pg 119]
	This is evident with 2 and 4 reducers where the time is maximum.
	
	.gz
	The gzip format	uses DEFLATE  to store the compressed data.
	From the graphs, you notice that the job time reduces for 2 reducers, This is because earlier when the number of reducers was set to 1, there was a bottleneck at the reduce phase.
	Later on, when the number of reducers was set to 4 the execution time increased to a greater extent. 
	This is because of more complicated “Shuffle and Sort” mechanism. 
	It is important to note that when there are multiple reducers, the map tasks partition their output, each creating one partition for each reduce task. 
	Since here there were 4 reducers, output of each map task was divided into four partitions. 
	Each of these partitions were then transferred over network to each reducer. 
	The map output partitions were then merged at node where reduce task was running and then passed to user-defined reduce function.  
	So in this case the data transferred over network was more as compared to one where number of reduce tasks was set to 1 or 2.  
	It allows synchronization marker between the blocks unlike .bzip2 hence taking lesser time to decompress the data and run the job. [Pg 123]
	This format takes considerably longer time than .txt since decompression is involved but takes lesser time than a .bzip2 codec.
	This is evident in the case of 4 reducers.

---

## Test 2

* With combiner, with intermediate compression, 1, 2, 4 and 8 reducers

![george-sean-week-13-cluster-44](https://user-images.githubusercontent.com/31294255/33729068-2058f3fa-db42-11e7-9e46-1a1088f6b897.PNG)

### Answer

	The above graph shows time comparison for the jobs run on 1994 data set. The jobs are run with 1, 2, 4 and 8 reducers.
	
	.txt
	Here the time taken is least when the reducer is set to 8. 
	The execution time has increased when the reducer value is set to 1, 2 and 4. 
	This shows that the optimal reducer value for this job is 8 and there is no more space for more number of reducers. 
	
	.bz2
	From the above data we can see that the job run's the fastest when the reducer is set to 8.
	With four reducers the execution time increased because of the shuffle and sort mechanism.
	For the collected data here, 8 will be the optimal value for the reducer for this job.  

	.gz
	There has been a significant change in performance for .gz file.
	It has the least execution time when the reducers are set 2.
	By using intermediate compression we compressed the intermediate map output locally and thus eventually reduced the amount of data to be transferred across the network. 
	As a result, since the volume of data to be transferred was decreased, it took less time to finish the job and we were able to achieve a performance gain.
	For the collected data here, 2 will be the optimal value for the reducer for this job. 
 
---

## Test 3

* With combiner, without intermediate compression, 1, 2, 4 and 8 reducers

![george-sean-week-13-cluster-45](https://user-images.githubusercontent.com/31294255/33729069-2067206a-db42-11e7-981a-352ff9b36641.PNG)

### Answer

	The above graph shows time comparison for the jobs run on 1994 data set. The jobs are run with 1, 2, 4 and 8 reducers.
	The combiner function doesn’t replace the reduce function. But it can help cut down the	amount of data shuffled	between	the mappers and	the reducers, 
	and for this reason alone it is	always worth considering whether you can use a combiner function in your MapReduce job.[Pg 57]

	.txt
	From the above data we can see that the job run's the fastest when the reducer is set to 4. 
	So giving it less number of reducers, 2 and 1 for example leaves the job with space available for more reducers.
	On comparing the execution times, the execution time with 1 reducer is considerably large compared to that with 2 reducers because,  
	when the number of reducers was set to 1, there was a bottleneck at the reduce phase. On the other hand, 
	when number of reducers was set to 4, the undue load was balanced among two reducers and therefore due to parallelism total execution time got decreased.

	.bz2
	The job run's the fastest when the reducer is set to 2.
	The bz2 file format execution time increases because of the Shuffle and sort mechanism, in case of 4 reducers.
	
	.gz
	The job run's the fastest when the reducer is set to 1.
	So giving it more number of reducers, 2 and 4 for example leaves the job with no space available for more reducers. 	
---

## Test 4

* Without combiner, without intermediate compression, and 1, 2,4 and 8 reducers

![george-sean-week-13-cluster-t4](https://user-images.githubusercontent.com/31294255/33755380-1191422c-dbb6-11e7-96d1-cd2991ecb698.PNG)

### Answer
	
	.txt
	From the above data we can see that the job run's the fastest when the reducer is set to 2.
	There is a bottleneck when the reducer is set to 1.
	When we add 4 and 8 reducers the times increase because of the Shuffle and sort mechanism.

	.bz2
	From the above data we can see that the job run's the fastest when the reducer is set to 2.
	As we add more number of reducers the time to execute the job increases.
	
	.gz
	From the above data we can see that the job run's the fastest when the reducer is set to 4.
	This is because when the number of reducers was set to 1, 2 and 8 there was a bottleneck at the reduce phase.
	Also giving less number of reducers, 2 and 1 for example leaves the job with space available for more reducers.				
---

## Test 5

* With combiner, with intermediate compression, 1, 2, 4 and 8 reducers

![george-sean-week-13-cluster-46- 5](https://user-images.githubusercontent.com/31294255/33729070-20784124-db42-11e7-87f9-cc2130af349e.PNG)

### Answer

	The above graph shows time comparison for the jobs run on 1990 data set. The jobs are run with 1, 2, 4 and 8 reducers.

	.txt
	When the reducer is set to 1, there is a bottleneck at the reduce phase.
	The execution time is the least, when the number of reducers are set to 2, load was balanced among two reducers and therefore due to parallelism total execution time got decreased.

	.bz2
	The execution time is the least, when the number of reducers are set to 2.
	Due to parallelism the execution time decreased.
	
	.gz
	The execution time is the least, when the number of reducers are set to 4.
	This is because when the number of reducers was set to 1, 2 and 8 there was a bottleneck at the reduce phase.
	Also giving less number of reducers, 2 and 1 for example leaves the job with space available for more reducers.				
---

## Test 6

* With combiner, without intermediate compression, 1, 2, 4 and 8 reducers

![george-sean-week-13-cluster-47](https://user-images.githubusercontent.com/31294255/33729071-20838ea8-db42-11e7-8677-7c7aba39d0ec.PNG)

### Answer

	.txt
	The execution time is the least, when the number of reducers are set to 2.
	There is a bottleneck at the reduce phase, when the number of reducer is set 1. It increases again when
	the number of reducers increase and is set to 4 and 8.
	
	.bz2
	The execution time is the least, when the number of reducer is set to 4.
	
	.gz
	The execution time is the least, when the number of reducer is set to 1.
	If the reducer is set to a larger value, the execution time has increased as there is no more space available for more reducers. 	
---

## Test 7

* Without combiner, without intermediate compression, and 1, 2,4 and 8 reducers

![george-sean-week-13-cluster-t7](https://user-images.githubusercontent.com/31294255/33754747-567c8e76-dbb3-11e7-82d8-26267da28c68.PNG)

### Answer
	
	.txt
	The execution time is the least with 1 reducer, it then increases as the number of 
	reducers are increased to 2 , 4 and 8. This is because of the complicated Shuffle and sort 
	mechanism when there are multiple reducers. The map partitions it's output based on the number
	of reducers and it is then transferred over the network to each reducer, hence the time is more
	in case of 2, 4 and 8 reducers [Pg 54]. Thus the optimal value gor the number of reducer in this case
	will be 1.
	
	.bz2
	As observed from the matrix and the graph above, we can see that as the reduce task is set to a higher value 
	the time taken for the job to run has also increased. The same reason goes here with no of reducer tasks 1 
	only one task will assign work to and all of the job is given to that task. When x=2 it distributes the work 
	to two tasks and the job is run parallel among two blocks. Even though this results in the job to be run faster 
	much of the time is taken to split and assign the work to the two tasks and the overall time taken to run the job increases.
	Thus the optimal value for the number of reducer in this case will be 1.    	

## Test 8

* With combiner, with intermediate compression, and 1,2,4 and 8 reducers

![george-sean-week-13-cluster-t8](https://user-images.githubusercontent.com/31294255/33754748-5688e892-dbb3-11e7-8594-9e06590ef083.PNG)

### Answer

	.txt
	The .txt file takes the least time to run when the number of reducer is set to 1.  With x=1 the master will have only one task 
	to assign work to and all of the job is given to that task. As the number of reducers increase the time increases because of the
	complicated Shuffle and sort mechanism. This is evident in the graph when reducers are set to 2 and 4.Thus the optimal value for 
	the number of reducer in this case will be 1.

	.bz2
	The same follows with .bz2 format, it has the least execution time when it execute with 1 reducer. The reason for which is same
	as the one for the .txt versin. The execution time increases when the number of reducers are set to 2 and 4, because more time is taken
	to assign the work to 2, 4 and 8 reducer tasks repectively and we can also count in the Shuffle and sort mechanism.
	Thus the optimal value for the number of reducer in this case will be 1. 
---

## Test 9

* With combiner, without intermediate compression, and 1,2, 4 and 8 reducers

![george-sean-week-13-cluster-t9](https://user-images.githubusercontent.com/31294255/33754749-5695bf4a-dbb3-11e7-9af7-db1b15c95fc8.PNG)

### Answer

	.txt
	From the above data we can see that the job run's the fastest when the reducer is set to 1, because one task is there
	to assign work. The execution time increases when the number of reducers increase which is evident in graph with 2 and 4 reducers
	because more time is taken to assign the work to the increasing number of reducers.The time reduces slightly once again when the reducer is 
	set to 8, but not much of a difference. Thus the optimal value for the number of reducer in this case will be 1.

	.bz2
	The optimal value for the number of reducer in this case will be 1,since in this case there is no shuffle and sort mechanism.
	The execution time increases with 2 and 4 reducers considerably because of the numbers of reducers and the time taken to shuffle 
	and sort map task output. 	   
---

## Test 10

* Without combiner, without intermediate compression, and 1 , 2, 4 and 8 reducers (Text File)

![george-sean-week-13-cluster-37](https://user-images.githubusercontent.com/31294255/33531159-ce7e6196-d84e-11e7-89e8-b002d9b66360.PNG)

### Answer

	This data set run's with the block sixe increased to 256.
	There is only one file format which is the text format.
	When the number of reducer is set to 2 it takes the least time, because
	at one there is a bottleneck since the reducer is set 1 at the reducer phase,
	which clears at reducer phase 2. But it increases as we increase the number of reducers,
	It is important to note that when there are multiple reducers, the map tasks partition their output, 
	each creating one partition for each reduce task. Since here there were 4 reducers, 
	output of each map task was divided into four partitions. It slightly decreases with 8 reducers.
	The optimal time is when the reducers is set to 2. 
---

## Test 11

* With combiner, with intermediate compression, and 1 , 2, 4 and 8 reducers (Text File)

![george-sean-week-13-cluster-38](https://user-images.githubusercontent.com/31294255/33531160-ce9397f0-d84e-11e7-9eeb-827183f38b3a.PNG)

### Answer
	
	The optimal time is when the reducers is set to 1.
	As observed from the graph above, we can see that as the reduce task is set to a higher value the time 
	taken for the job to run has also increased. With x=1 only one task to assign work to 
	and all of the job is given to that task. When x=2 the master distributes the work to two tasks and the job 
	is run parallel among two blocks. Even though this results in the job to be run faster much of the time is 
	taken to split and assign the work to the two tasks and the overall time taken to run the job increases. Similarly, 
	more time is taken to assign work to three reduce tasks when x=3 so the time taken when x=3 further increases. 
	Thus we can say that the optimal value for the number of reduce tasks in this case will be 1. 
---

## Test 12

* With combiner, without intermediate compression, and 1 , 2, 4 and 8 reducers (Text File)

![george-sean-week-13-cluster-39](https://user-images.githubusercontent.com/31294255/33531161-cea49866-d84e-11e7-8526-ededed47199e.PNG)

### Answer
	
	The optimal time is when the reducers is set to 2.
	When the reducer is set to 1, the time is more because of the traffic at the reduce phase.
	When it is set to 2 it eases out since, the map partitions it's output.
	It again increases when it is set to 4 and 8 because of the shuffle and sort mechanism.
---

## Test 13

* Without combiner, without intermediate compression, and 1, 2, 4 and 8 Reducers (Text File)

![george-sean-week-13-cluster-40](https://user-images.githubusercontent.com/31294255/33531162-ceb4adf0-d84e-11e7-8408-1a1c8ebd51a0.PNG)

### Answer
	
	This data set run's with the block sixe increased to 512.
	The optimal time is when the reducers is set to 2.
	When the reducer is set to 1, the time is more because of the complex mesh at the reduce phase.
	When it is set to 2 the time decreases since, the map partitions it's output.
	It again increases when it is set to 4 and 8 because of the shuffle and sort mechanism.
---

## Test 14

* With combiner, with intermediate compression, and 1, 2, 4 and 8 Reducers (Text File)

![george-sean-week-13-cluster-41](https://user-images.githubusercontent.com/31294255/33531163-cec94cba-d84e-11e7-8442-aadf84e1b52e.PNG)

### Answer

	The optimal time is when the reducers is set to 2,since, the map partitions it's output.
	It again increases when it is set to 4 and 8 because of the shuffle and sort mechanism.
---

## Test 15

* With combiner, without intermediate compression, and 1, 2, 4 and 8 Reducers (Text File)

![george-sean-week-13-cluster-42](https://user-images.githubusercontent.com/31294255/33531164-cedcb642-d84e-11e7-9a26-217754fd87c8.PNG)

### Answer
	
	Here the time taken by the reducer is least when the reducer is set to 1. 
	The execution time has increased when the reducer value is set to more than 1, this shows that the optimal reducer value for this job is 1 
	and there is no more space for more number of reducers. 
---

## Test 16

![george-sean-week-13-cluster-test-16graph](https://user-images.githubusercontent.com/31294255/33757549-4a83a8e0-dbc0-11e7-9452-dfac83024e60.PNG)

	In my graph, I have considered the which reducers and 
	which codec has least time in all the tests. That is how,
	I plotted my graph.

	The optium value here is Test 3 With combiner, without intermediate 
	compression txt file with 4 reducers, since it took the least time to execute.
---
	
## Test 17
	
In terms of input data format .txt being the simplest has lesser execution time in general it is evident in Test 3 with four reducers. 
	
Intermediate compression :Use of 
 intermediate compression decreases the time required to 
transfer the data over the network and wrirting time to disk. We can notice the time difference
in executing the jobs in Tests 2 and Test 1. Test 1 takes longer time whereas Test 2 take comparitvely
less time to run.	
	
Combiners: Hadoop allows the user to specify a combiner function to be run on the map output, 
and the combiner function’s
 output forms the input to the reduce function. 
	
Block Size : Block size decide the number of input splits. The least time taken
is in Test 11 where the block size is 256.

Number of Reducers : Use of number of reducers depends on
factors like weather or not enough space is available for adding more reducers.
The more the number of reducers the more complicated the shffule sort mechanism. 
Depending upto map output, number of reducers could be set. As per our tests 
opitmal could be 4
which is evident in Test 3.
  
	

 