// cc MaxVisibilityWithCombiner Application to find the maximum visibility, using a combiner function for efficiency
//Author: Sean George
//Date:09/26/2017

import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

// vv MaxVisibilityWithCombiner
public class MaxVisibilityWithCombiner {

  public static void main(String[] args) throws Exception {
    if (args.length != 2) {
      System.err.println("Usage: MaxVisibilityWithCombiner <input path> " +
          "<output path>");
      System.exit(-1);
    }
    
    Job job = new Job();
    job.setJarByClass(MaxVisibilityWithCombiner.class);
    job.setJobName("Max visibility");

    FileInputFormat.addInputPath(job, new Path(args[0]));
    FileOutputFormat.setOutputPath(job, new Path(args[1]));
    
    job.setMapperClass(MaxVisibilityMapper.class);
    /*[*/job.setCombinerClass(MaxVisibilityReducer.class)/*]*/;
    job.setReducerClass(MaxVisibilityReducer.class);

    job.setOutputKeyClass(Text.class);
    job.setOutputValueClass(IntWritable.class);
    
    System.exit(job.waitForCompletion(true) ? 0 : 1);
  }
}
// ^^ MaxVisibilityWithCombiner
