# Instructions

## Part c

Step 1: Go to spark.apache.org. Click on Download spark.

![george-sean-week-13-1](https://user-images.githubusercontent.com/31294255/33106072-1a0337e8-cef6-11e7-88e9-6f9ef79fa718.PNG)

Step 2: Choose the spark release and a package type. In our case Pre-built for Apache Hadoop 2.6. Click on spark-2.2.0-bin-hadoop2.6.tgz

![george-sean-week-13-2](https://user-images.githubusercontent.com/31294255/33106074-1cdc92f2-cef6-11e7-97b9-ec6e2476766d.PNG)

Step 3: Copy the link which is highlighted in yellow.

![george-sean-week-13-3](https://user-images.githubusercontent.com/31294255/33106076-1fb08d8a-cef6-11e7-81e9-0be2da85a815.PNG)

Step 4: Do a vagrant up for the box you want to download spark on.

Step 5: Do a vagrant ssh.

Step 6: Do a wget and paste the link you copied which was in Yellow.

![george-sean-week-13-4](https://user-images.githubusercontent.com/31294255/33106078-21acc1a8-cef6-11e7-89c4-e64d17c1f311.PNG)

Step 7: When you do an ls we will be able to see the spark .tgz file as shown below.

![george-sean-week-13-5](https://user-images.githubusercontent.com/31294255/33106239-cefbf91e-cef6-11e7-931f-7d8327871cda.PNG)

Step 8: Now type the following command from home:

	tar -xvzf spark-2.2.0-bin-hadoop2.6.tgz

![george-sean-week-13-6](https://user-images.githubusercontent.com/31294255/33106245-d45231e4-cef6-11e7-9b67-b22668ed7444.PNG)

Step 9: We need to add spark in our bash file.Run the following command : 

	vim ~/.bashrc

![george-sean-week-13-7_1](https://user-images.githubusercontent.com/31294255/33106250-d8202524-cef6-11e7-9494-8a057ba0c5de.PNG)

Step 10: Add two export's in the bashrc file :

	export SPARK_HOME=/home/vagrant/spark-2.2.0-bin-hadoop2.6
	export PATH=$PATH:$SPARK_HOME/bin

![george-sean-week-13-7](https://user-images.githubusercontent.com/31294255/33106247-d61d06f2-cef6-11e7-8f64-b5f5760932e1.PNG)

Step 11: Re-run the bashrc file, with the following command :

	. ~/.bashrc

![george-sean-week-13-8](https://user-images.githubusercontent.com/31294255/33106253-dc57a5cc-cef6-11e7-87dc-3c034badc6de.PNG)

Step 12: Now start spark, using the command :

	spark-shell

![george-sean-week-13-9](https://user-images.githubusercontent.com/31294255/33106273-fdce93aa-cef6-11e7-8439-da14b37762ac.PNG)

## Part d

Step 13. Copy categories.avro and products.avro in data folder.

![george-sean-week-13-10](https://user-images.githubusercontent.com/31294255/33222622-40dfee72-d11e-11e7-87ca-4c171fee56e1.PNG)

Step 14. Do a vagrant up for the box you want to run your code on and a vagrant ssh.

Step 15. Run the below command from home :

	cd /vagrant_data/
	ls

![george-sean-week-13-11](https://user-images.githubusercontent.com/31294255/33222626-45be9f4c-d11e-11e7-9bcf-d3bbf8937e4c.PNG)
	
	cp categories.avro products.avro ~

![george-sean-week-13-12](https://user-images.githubusercontent.com/31294255/33222630-4cde62d0-d11e-11e7-9586-1beed915cd67.PNG)

	cd ~
	ls

![george-sean-week-13-13](https://user-images.githubusercontent.com/31294255/33222635-5339090a-d11e-11e7-8168-9d6d38da0bf3.PNG)
 
Step 16. To load categories.avro from HDFS into spark, I have created directories. Run the following commands from home to create directories :

	mkdir -p spark/scala/categories

	cp categories.avro spark/scala/categories

![george-sean-week-13-21](https://user-images.githubusercontent.com/31294255/33222651-62d11682-d11e-11e7-8402-b39e170e9b57.PNG)

	hadoop fs -mkdir /user/root2

![george-sean-week-13-22](https://user-images.githubusercontent.com/31294255/33222652-62f17e68-d11e-11e7-9c49-b4fd75dd4659.PNG)

	hadoop fs -chown root /user/root2

![george-sean-week-13-23](https://user-images.githubusercontent.com/31294255/33222653-630f77ec-d11e-11e7-92ba-e075d2388fa3.PNG)

	hadoop fs -mkdir -p /user/root2/spark/scala

![george-sean-week-13-24](https://user-images.githubusercontent.com/31294255/33222654-6328bf18-d11e-11e7-8067-965d4d86e68b.PNG)

	cd spark
	cd scala
	cd categories

![george-sean-week-13-25](https://user-images.githubusercontent.com/31294255/33222655-6347aa40-d11e-11e7-8428-ccbb75a8bebd.PNG)

	pwd

![george-sean-week-13-26](https://user-images.githubusercontent.com/31294255/33222656-6362aef8-d11e-11e7-8e25-1a578cedf80f.PNG)

	hadoop fs -put /home/vagrant/spark/scala/categories /user/root2/spark/scala

![george-sean-week-13-27](https://user-images.githubusercontent.com/31294255/33222657-637e5ec8-d11e-11e7-83d8-4096049aa9cc.PNG)

	hadoop fs -ls /user/root2/spark/scala/categories

![george-sean-week-13-28](https://user-images.githubusercontent.com/31294255/33222658-639a5574-d11e-11e7-8c9d-617493b0da77.PNG)

	cd ~

![george-sean-week-13-29](https://user-images.githubusercontent.com/31294255/33222659-63bdec46-d11e-11e7-846a-34fdfc98c51a.PNG)

Step 17. To load products.avro from HDFS into spark, I have created directories. Run the following commands from home to create directories :

	mkdir -p spark/scala/data1

![george-sean-week-13-14](https://user-images.githubusercontent.com/31294255/33222643-61f19e8a-d11e-11e7-8f4a-e3a9a9b71d50.PNG)

	cp products.avro spark/scala/data1

	hadoop fs -mkdir /user/root1

![george-sean-week-13-15](https://user-images.githubusercontent.com/31294255/33222644-6205ed72-d11e-11e7-921a-136016e9cc82.PNG)

	hadoop fs -chown root /user/root1

	hadoop fs -mkdir -p /user/root1/spark/scala

	cd spark
	cd scala
	cd data1
	pwd

![george-sean-week-13-16](https://user-images.githubusercontent.com/31294255/33222645-621c88ac-d11e-11e7-9383-0ad6d0ec1731.PNG)

	hadoop fs -put /home/vagrant/spark/scala/data1 /user/root1/spark/scala

![george-sean-week-13-17](https://user-images.githubusercontent.com/31294255/33222646-623245de-d11e-11e7-8f5d-43981b8981c5.PNG)

	hadoop fs -ls /user/root1/spark/scala/data1

![george-sean-week-13-18](https://user-images.githubusercontent.com/31294255/33222647-6251ca4e-d11e-11e7-917a-cde389cd90c5.PNG)

Step 18. Now start spark-shell, using the command :

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0

![george-sean-week-13-30](https://user-images.githubusercontent.com/31294255/33222660-63e15aaa-d11e-11e7-99b7-d6dab3a97630.PNG)

Step 19. Run the below statements to import packages :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc)

![george-sean-week-13-31](https://user-images.githubusercontent.com/31294255/33222661-6400cebc-d11e-11e7-9497-ab0b327dc43f.PNG)

Step 20. Now load the categories.avro data from HDFS into spark :

	val categories = sqlContext.read.avro("hdfs://localhost/user/root2/spark/scala/categories")

![george-sean-week-13-32](https://user-images.githubusercontent.com/31294255/33222662-6417a8e4-d11e-11e7-9c1b-1409b61a338f.PNG)
	
Step 21. Now load the products.avro data from HDFS into spark :

	val products = sqlContext.read.avro("hdfs://localhost/user/root1/spark/scala/data1")

![george-sean-week-13-33](https://user-images.githubusercontent.com/31294255/33222663-6435dca6-d11e-11e7-8aa9-9399a322466a.PNG)

Step 22. Displaying first 20 rows of each dataset, use the below commands :
	
	categories.take(20).foreach(println)
	products.take(20).foreach(println)

![george-sean-week-13-34](https://user-images.githubusercontent.com/31294255/33222664-645397c8-d11e-11e7-9559-eca51baaa742.PNG)

## Part e

Step 23. Converting categories dataset which is in DataFrame format to rdd, use the below command : 

	val categoriesrdd = categories.as[(String,String)].rdd

![george-sean-week-13-35](https://user-images.githubusercontent.com/31294255/33222665-6478c23c-d11e-11e7-8cab-64631eff74ad.PNG)

Step 24. Converting products dataset which is in DataFrame format to rdd, use the below command :

	val productsrdd = products.as[(String,String,String,String,String)].rdd

![george-sean-week-13-36](https://user-images.githubusercontent.com/31294255/33222666-64928910-d11e-11e7-84c5-12def6a9d810.PNG)

Step 25. Filtering out the Null values from product rdd, use the below command :

	val product1 = productsrdd.filter(_._4.toString !="")

![george-sean-week-13-37](https://user-images.githubusercontent.com/31294255/33222667-64b10c6e-d11e-11e7-916f-eec29555ddfc.PNG)

Step 26. Applying filter, based on condition, use the below command :

	val product2 = product1.filter(_._4.toFloat < 100.00)

![george-sean-week-13-38](https://user-images.githubusercontent.com/31294255/33222668-64d4c42e-d11e-11e7-860d-60482e11648d.PNG)

Step 27. Save the result obtained to a text file, use the below command :

	val producttextfile = product2.saveAsTextFile("Result_0")       

![george-sean-week-13-39](https://user-images.githubusercontent.com/31294255/33222669-64fe0618-d11e-11e7-89a7-99e3ce0d2ecd.PNG)

This get saved as a directory with part-00000, which is re-named to Result_0.txt using the command :

![george-sean-week-13-41](https://user-images.githubusercontent.com/31294255/33222671-6543c8a6-d11e-11e7-8934-29f1502ef468.PNG)

	cat part-00000 > Result_0.txt

![george-sean-week-13-42](https://user-images.githubusercontent.com/31294255/33222672-65689b36-d11e-11e7-9eba-2356bfe78b34.PNG)

This command is run from Result_0 folder in vagrant.

Continue with part f

## Part f (Continue..)

Step 28. If you quit spark, run the Following command from home : 

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0

Step 29. Then the following commands from scala :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc)
	val categories = sqlContext.read.avro("hdfs://localhost/user/root2/spark/scala/categories")
	val products = sqlContext.read.avro("hdfs://localhost/user/root1/spark/scala/data1")

Step 30. If continuing after part e, run the following command from scala :

	val join = categories.join(products, categories("category_id") === products("_2"))

![george-sean-week-13-43](https://user-images.githubusercontent.com/31294255/33237251-0882ec20-d234-11e7-9440-3eb58a05830a.PNG)

Step 31. Import the following :

	import org.apache.spark.sql.functions.{row_number, max, broadcast}
	import org.apache.spark.sql.expressions.Window

![george-sean-week-13-44](https://user-images.githubusercontent.com/31294255/33237252-089332ce-d234-11e7-8fb9-154090ed1fe9.PNG)

Step 32. Run the following from scala :

	val joinorder = Window.partitionBy($"category_id").orderBy($"_4".desc)

![george-sean-week-13-45](https://user-images.githubusercontent.com/31294255/33237253-089fa6d0-d234-11e7-8c78-ce90f7b43aac.PNG)

	val top10 = join.withColumn("rn", row_number.over(joinorder)).where($"rn" <= 10).drop("rn").filter($"_4" < 100)

![george-sean-week-13-46](https://user-images.githubusercontent.com/31294255/33237254-08aee758-d234-11e7-8c4e-8b8766e7136f.PNG)

	val joinfinal = top10.select($"category_name", $"_3", $"_4")

![george-sean-week-13-47](https://user-images.githubusercontent.com/31294255/33237255-08bb830a-d234-11e7-9e6b-18255b2fc2cd.PNG)

	val catnamefinal = joinfinal.withColumnRenamed("category_name","category name")
	val prodnm = catnamefinal.withColumnRenamed("_3","product name")
	val catprodfinal = prodnm.withColumnRenamed("_4","product price")

![george-sean-week-13-48](https://user-images.githubusercontent.com/31294255/33237256-08c784fc-d234-11e7-98f2-974e600ee58a.PNG)

Step 33. Save it using the command :

	catprodfinal.write.format("com.databricks.spark.csv").option("delimiter", "\t").save("Result_1")

## Part g

Step 34. If you quit spark, run the Following command from home : 

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0

Step 35. Then the following commands from scala :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc)
	val categories = sqlContext.read.avro("hdfs://localhost/user/root2/spark/scala/categories")
	val products = sqlContext.read.avro("hdfs://localhost/user/root1/spark/scala/data1")

Step 36. If you continue after part f, run the following commands :

	val cat1 = categories.withColumn("category_id", 'category_id.cast("Float"))

	val prod1 = products.withColumn("_4", '_4.cast("Float"))

![george-sean-week-13-51](https://user-images.githubusercontent.com/31294255/33237259-08ee86e2-d234-11e7-8eb3-a0d670c4b3e2.PNG)

	val dfjoin = cat1.join(prod1, cat1("category_id") === products("_2"))

![george-sean-week-13-52](https://user-images.githubusercontent.com/31294255/33237260-08fcba8c-d234-11e7-80f6-49f78fdcbd8e.PNG)

	val orderddesc = Window.partitionBy($"category_id").orderBy($"_4".desc)

![george-sean-week-13-53](https://user-images.githubusercontent.com/31294255/33237261-09096a70-d234-11e7-9beb-14a366b6e90e.PNG)

	val orderedAsc = Window.partitionBy($"category_id").orderBy($"_4".asc)
		
	val dataframemax = dfjoin.withColumn("row_num",row_number.over(orderddesc)).where($"row_num" === 1).drop("row_num")

![george-sean-week-13-54](https://user-images.githubusercontent.com/31294255/33237262-091592b4-d234-11e7-9ffc-4ede7a5e82f1.PNG)

	val dataframemin = dfjoin.withColumn("row_num",row_number.over(orderedAsc)).where($"row_num" === 1).drop("row_num")

![george-sean-week-13-55](https://user-images.githubusercontent.com/31294255/33237263-0923cb22-d234-11e7-9a66-decf31204ef0.PNG)

	val Selmax = dataframemax.select($"category_name",$"_3",$"_4")

![george-sean-week-13-56](https://user-images.githubusercontent.com/31294255/33237264-093152b0-d234-11e7-91ce-65bb19aec654.PNG)

	val Selmin = dataframemin.select($"category_name",$"_3",$"_4")

![george-sean-week-13-57](https://user-images.githubusercontent.com/31294255/33237265-093d2db0-d234-11e7-80d2-70a50c7e088a.PNG)

	val Namemax1 = Selmax.withColumnRenamed("category_name","category name").withColumnRenamed("_3","highest_product_name").withColumnRenamed("_4","Highest product price")

![george-sean-week-13-59](https://user-images.githubusercontent.com/31294255/33237267-09554576-d234-11e7-9b27-a1055254b0b2.PNG)

	val Namemin = Selmin.withColumnRenamed("category_name","category name").withColumnRenamed("_3","lowest_product_name").withColumnRenamed("_4","Lowest product price")

![george-sean-week-13-60](https://user-images.githubusercontent.com/31294255/33237268-09639eaa-d234-11e7-856d-ce35755457fb.PNG)

	val result = Namemax1.join(Namemin, "category name")

![george-sean-week-13-61](https://user-images.githubusercontent.com/31294255/33237269-0970d3c2-d234-11e7-8d24-110c27a9c396.PNG)

	result.show

![george-sean-week-13-62](https://user-images.githubusercontent.com/31294255/33237270-097ca1d4-d234-11e7-9687-644651c8e9fe.PNG)

	result.write.format("com.databricks.spark.csv").option("delimiter", "||").save("Result_2")

![george-sean-week-13-63](https://user-images.githubusercontent.com/31294255/33237271-098b0ab2-d234-11e7-9461-4e2464969a0a.PNG)
	






 
  




	  

 	

  
	

 