# Code for Parts d, e, f

## For Part c
	
	Instructions in ReadMe.md for spark installation

Make Folders Before Loading spark :

	mkdir -p spark/scala/categories
	cp categories.avro spark/scala/categories
	hadoop fs -mkdir /user/root2
	hadoop fs -chown root /user/root2
	hadoop fs -mkdir -p /user/root2/spark/scala
	cd spark
	cd scala
	cd categories
	/home/vagrant/spark/scala/categories
	hadoop fs -put /home/vagrant/spark/scala/categories /user/root2/spark/scala
	hadoop fs -ls /user/root2/spark/scala/categories
	/user/root2/spark/scala/categories/categories.avro


	mkdir -p spark/scala/data1
	cp products.avro spark/scala/data1
	hadoop fs -mkdir /user/root1
	hadoop fs -chown root /user/root1
	hadoop fs -mkdir -p /user/root1/spark/scala
	cd spark
	cd scala
	cd data1
	/home/vagrant/spark/scala/data1
	hadoop fs -put /home/vagrant/spark/scala/data1 /user/root1/spark/scala
	hadoop fs -ls /user/root1/spark/scala/data1
 	/user/root1/spark/scala/data1/products.avro

## Codes for Part d

	From hadoop home :

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0    

        From scala :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc)
	val categories = sqlContext.read.avro("hdfs://localhost/user/root2/spark/scala/categories")
	val products = sqlContext.read.avro("hdfs://localhost/user/root1/spark/scala/data1")
	categories.take(20).foreach(println)
	products.take(20).foreach(println)

## Codes for Part e

	From hadoop home :

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0    

        From scala :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc)
	val categories = sqlContext.read.avro("hdfs://localhost/user/root2/spark/scala/categories")
	val products = sqlContext.read.avro("hdfs://localhost/user/root1/spark/scala/data1")

	val categoriesrdd = categories.as[(String,String)].rdd
	val productsrdd = products.as[(String,String,String,String,String)].rdd
	val product1 = productsrdd.filter(_._4.toString !="")
	val product2 = product1.filter(_._4.toFloat < 100.00)
 	product2.count()
 	val producttextfile = product2.saveAsTextFile("Result_0")
 	:q
 	
	From hadoop home :

 	ls
 	cd Result_0
 	ls
 	cat part-00000 > Result_0.txt
 	cp Result_0.txt /vagrant/data

## Codes for Part f

	From hadoop home :

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0

	From scala :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc) 
	val join = categories.join(products, categories("category_id") === products("_2"))
	import org.apache.spark.sql.functions.{row_number, max, broadcast}
	import org.apache.spark.sql.expressions.Window
	val joinorder = Window.partitionBy($"category_id").orderBy($"_4".desc)
	val top10 = join.withColumn("rn", row_number.over(joinorder)).where($"rn" <= 10).drop("rn").filter($"_4" < 100)
	val joinfinal = top10.select($"category_name", $"_3", $"_4")
	val catnamefinal = joinfinal.withColumnRenamed("category_name","category name")
	val prodnm = catnamefinal.withColumnRenamed("_3","product name")
	val catprodfinal = prodnm.withColumnRenamed("_4","product price")
	catprodfinal.write.format("com.databricks.spark.csv").option("delimiter", "\t").save("Result_1")
	:q

	From hadoop home :

	cd Result_1
	cat part*.csv > Result_1.txt
	cp Result_1.txt /vagrant/data

## Codes for Part g

	From hadoop home :

	spark-shell --packages com.databricks:spark-avro_2.11:4.0.0

	From scala :

	import com.databricks.spark.avro._
	import org.apache.spark.sql.SparkSession
	import org.apache.spark.sql.SQLContext
	val sqlContext = new SQLContext(sc)
	import org.apache.spark.sql.functions.{row_number, max, broadcast}
	import org.apache.spark.sql.expressions.Window
	val categories = sqlContext.read.avro("hdfs://localhost/user/root2/spark/scala/categories")
	val products = sqlContext.read.avro("hdfs://localhost/user/root1/spark/scala/data1")
	val cat1 = categories.withColumn("category_id", 'category_id.cast("Float"))
	val prod1 = products.withColumn("_4", '_4.cast("Float"))
	val dfjoin = cat1.join(prod1, cat1("category_id") === products("_2"))
	val orderddesc = Window.partitionBy($"category_id").orderBy($"_4".desc)
	val orderedAsc = Window.partitionBy($"category_id").orderBy($"_4".asc)
	val dataframemax = dfjoin.withColumn("row_num",row_number.over(orderddesc)).where($"row_num" === 1).drop("row_num")
	val dataframemin = dfjoin.withColumn("row_num",row_number.over(orderedAsc)).where($"row_num" === 1).drop("row_num")
	val Selmax = dataframemax.select($"category_name",$"_3",$"_4")
	val Selmin = dataframemin.select($"category_name",$"_3",$"_4")
	val Namemax1 = Selmax.withColumnRenamed("category_name","category name").withColumnRenamed("_3","highest_product_name").withColumnRenamed("_4","Highest product price")
	val Namemin = Selmin.withColumnRenamed("category_name","category name").withColumnRenamed("_3","lowest_product_name").withColumnRenamed("_4","Lowest product price")
	val result = Namemax1.join(Namemin, "category name")
	result.write.format("com.databricks.spark.csv").option("delimiter", "||").save("Result_2")

	From hadoop home :

	cd Result_2
	cat part*.csv > Result_2.avro
	cp Result_2.avro /vagrant/data

	 




	  

 	

  
	

 