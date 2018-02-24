// cc MaxVisibilityMapper Mapper for highest visibility 
// vv MaxVisibilityMapper
//Author :Sean George
//Date: 09/26/2017
//Descrption: Mapper for Highest visibility

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class MaxVisibilityMapper
  extends Mapper<LongWritable, Text, Text, IntWritable> {

  private static final int MISSING = 99999;
  
  @Override
  public void map(LongWritable key, Text value, Context context)
      throws IOException, InterruptedException {
    
    String line = value.toString();
    String year = line.substring(15, 19);
    int visdis;
    
    visdis = Integer.parseInt(line.substring(78, 83));
    String visqua = line.substring(83, 84);

    if (visdis != MISSING && visqua.matches("[01459]")) {
      context.write(new Text(year), new IntWritable(visdis));
    }
  }
}
// ^^ MaxVisibilityMapper
