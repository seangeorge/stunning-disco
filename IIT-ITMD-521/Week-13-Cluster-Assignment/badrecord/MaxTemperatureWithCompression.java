import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.io.compress.CompressionCodec;
import org.apache.hadoop.io.compress.GzipCodec;

public class MaxTemperatureWithCompression extends Configured implements Tool {

  @Override
  public int run(String[] args) throws Exception {
    if (args.length != 2) {
      System.err.printf("Usage: %s [generic options] <input> <output>\n",
          getClass().getSimpleName());
      ToolRunner.printGenericCommandUsage(System.err);
      return -1;
    }
    
    Configuration conf = new Configuration();
    conf.setBoolean(Job.MAP_OUTPUT_COMPRESS, true);
    conf.setClass(Job.MAP_OUTPUT_COMPRESS_CODEC, GzipCodec.class,
        CompressionCodec.class);    
    
    Job job = new Job(conf);
   // Job job = new Job();
    job.setJarByClass(MaxTemperatureWithCompression.class);
    job.setNumReduceTasks(8);
    job.setJobName("SPG Test14-8 txt File");

    FileInputFormat.addInputPath(job, new Path(args[0]));
    FileOutputFormat.setOutputPath(job, new Path(args[1]));
    
    job.setMapperClass(MaxTemperatureMapper.class);
    job.setCombinerClass(MaxTemperatureReducer.class);
    job.setReducerClass(MaxTemperatureReducer.class);

    job.setOutputKeyClass(Text.class);
    job.setOutputValueClass(IntWritable.class);
    
    return job.waitForCompletion(true) ? 0 : 1;
  }
  
  public static void main(String[] args) throws Exception {
    int exitCode = ToolRunner.run(new MaxTemperatureWithCompression(), args);
    System.exit(exitCode);
  }
} 
