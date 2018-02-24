// cc MaxStationIdMapper Mapper for maximum temperature example
// vv MaxStationIdMapper
import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

public class MaxStationIdMapper
  extends Mapper<LongWritable, Text, Text, IntWritable> {

 private static final int MISSING = 9999;
 
  @Override
  public void map(LongWritable key, Text value, Context context)
      throws IOException, InterruptedException {
    
    String line = value.toString();
    String stationid = line.substring(4, 10);

    int airTemperature;
    
    if (line.charAt(87) == '+') { // parseInt doesn't like leading plus signs
      airTemperature = Integer.parseInt(line.substring(88, 92));
    } else {
      airTemperature = Integer.parseInt(line.substring(87, 92));
    }

     
  
    if (airTemperature == MISSING && Integer.parseInt(stationid)!= 999999) {
      context.write(new Text(stationid), new IntWritable(airTemperature));
    }
  }
}
// ^^ MaxStationIdMapper
