// cc MaxStationIdReducer Reducer for maximum temperature example
// vv MaxStationIdReducer
import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class MaxStationIdReducer
  extends Reducer<Text, IntWritable, Text, IntWritable> {
  
   int count = 0;
   int invalidRec;
   String stationid = "";
  @Override
  public void reduce(Text key, Iterable<IntWritable> values,
      Context context)
      throws IOException, InterruptedException {
    
   
    stationid = key.toString();
    for (IntWritable value : values) {
      invalidRec = value.get();
      count++;
    }
   // context.write(key, new IntWritable(count));
  }
public void cleanup(Context context)throws IOException,InterruptedException{
context.write(new Text(stationid),new IntWritable(count));
}
}
// ^^ MaxStationIdReducer
