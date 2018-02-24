// cc MaxTemperatureMapper Mapper for maximum temperature in southern hemisphere
// vv MaxTemperatureMapper
//Author : Sean George
//Date: 09/30/2017

import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class MaxTemLatMapper
  extends Mapper<LongWritable, Text, IntWritable, IntWritable> {

  private static final int MISSING = 9999;
  
  @Override
  public void map(LongWritable key, Text value, Context context)
      throws IOException, InterruptedException {
    
    String line = value.toString();
 
    int lat=0;
    int airTemperature=0;
    lat = Integer.parseInt(line.substring(29,34));

if(line.charAt(28)=='-' && lat >= 1000 && lat <= 10000)
        {
                lat = Integer.parseInt(line.substring(29, 34));

                if (line.charAt(87) == '+')
                 {
                      airTemperature = Integer.parseInt(line.substring(88, 92));
                 }
                else
                 {
                airTemperature = Integer.parseInt(line.substring(87, 92));
                 }

         String quality = line.substring(92, 93);
         if (airTemperature != MISSING && quality.matches("[01459]"))
        {
         context.write(new IntWritable(lat), new IntWritable(airTemperature));
        }
    }
}}
// ^^ MaxTemLatMapper
