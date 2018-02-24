// cc MinTemperatureWithCombiner Application to find the minimum temperature, using a combiner function for efficiency
//Author : Sean George
//Date : 09/26/2017
//Description : Minimum Temperature Combiner class

import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

// vv MinTemperatureWithCombiner
public class MinTemperatureWithCombiner {

  public static void main(String[] args) throws Exception {
    if (args.length != 2) {
      System.err.println("Usage: MinTemperatureWithCombiner <input path> " +
          "<output path>");
      System.exit(-1);
    }
    
    Job job = new Job();
    job.setJarByClass(MinTemperatureWithCombiner.class);
    job.setJobName("Min temperature");

    FileInputFormat.addInputPath(job, new Path(args[0]));
    FileOutputFormat.setOutputPath(job, new Path(args[1]));
    
    job.setMapperClass(MinTemperatureMapper.class);
    /*[*/job.setCombinerClass(MinTemperatureReducer.class)/*]*/;
    job.setReducerClass(MinTemperatureReducer.class);

    job.setOutputKeyClass(Text.class);
    job.setOutputValueClass(IntWritable.class);
    
    System.exit(job.waitForCompletion(true) ? 0 : 1);
  }
}
// ^^ MinTemperatureWithCombiner
