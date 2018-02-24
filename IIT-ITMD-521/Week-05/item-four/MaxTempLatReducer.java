// cc MaxTempLatReducer Reducer for maximum temperature example
// vv MaxTemLatReducer
import java.io.IOException;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class MaxTempLatReducer
  extends Reducer<IntWritable, IntWritable, IntWritable, IntWritable> {
  
  @Override
  public void reduce(IntWritable key, Iterable<IntWritable> values,
      Context context)
      throws IOException, InterruptedException {
    int maxValue;
    for (IntWritable value : values) {
      maxValue = value.get();
    }
    context.write(key, new IntWritable(maxValue));
  }
}
// ^^ MaxTempLatReducer
