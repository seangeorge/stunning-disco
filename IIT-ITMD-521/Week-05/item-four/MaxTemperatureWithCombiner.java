// cc MaxTempLatWithCombiner Application to find the maximum temperature, using a combiner function for efficiency
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

// vv MaxTempLatWithCombiner
public class MaxTempLatWithCombiner {

  public static void main(String[] args) throws Exception {
    if (args.length != 2) {
      System.err.println("Usage: MaxTemperatureWithCombiner <input path> " +
          "<output path>");
      System.exit(-1);
    }
    
    Job job = new Job();
    job.setJarByClass(MaxTempLatWithCombiner.class);
    job.setJobName("Max temp");

    FileInputFormat.addInputPath(job, new Path(args[0]));
    FileOutputFormat.setOutputPath(job, new Path(args[1]));
    
    job.setMapperClass(MaxTemLatMapper.class);
    /*[*/job.setCombinerClass(MaxTempLatReducer.class)/*]*/;
    job.setReducerClass(MaxTempLatReducer.class);

    job.setOutputKeyClass(IntWritable.class);
    job.setOutputValueClass(IntWritable.class);
    
    System.exit(job.waitForCompletion(true) ? 0 : 1);
  }
}
// ^^ MaxTempLatWithCombiner
