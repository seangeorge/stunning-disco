// cc MaxTempLat Application to find the maximum temperature in the weather dataset
// vv MaxTempLat
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class MaxTempLat {

  public static void main(String[] args) throws Exception {
    if (args.length != 2) {
      System.err.println("Usage: MaxTempLat <input path> <output path>");
      System.exit(-1);
    }
    
    Job job = new Job();
    job.setJarByClass(MaxTempLat.class);
    job.setJobName("Max templat");

    FileInputFormat.addInputPath(job, new Path(args[0]));
    FileOutputFormat.setOutputPath(job, new Path(args[1]));
    
    job.setMapperClass(MaxTemLatMapper.class);
    job.setReducerClass(MaxTempLatReducer.class);

    job.setOutputKeyClass(Text.class);
    job.setOutputValueClass(IntWritable.class);
    
    System.exit(job.waitForCompletion(true) ? 0 : 1);
  }
}
// ^^ MaxTempLat
