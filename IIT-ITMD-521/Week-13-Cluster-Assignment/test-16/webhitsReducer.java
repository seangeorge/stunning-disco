//Reducer for web log hits
//Programmed by Sean George

import java.io.IOException;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;
import java.util.ArrayList;

public class webhitsReducer extends Reducer<Text, Text, Text, Text> {
        @Override
        public void reduce(Text key, Iterable<Text> values, Context context) throws IOException, InterruptedException {
                //Unique links in the arraylist
                ArrayList<String> l1 = new ArrayList<String>();
                ArrayList<String> val = new ArrayList<String>();
                String l2;
                for (Text value : values) {
                        l2 = value.toString();
                        val.add(l2);
                        if (l1.contains(l2) != true) {
                                l1.add(l2);
                        }
                }
                int size = l1.size();
                int[] count = new int[size];
                //Calculate the count for each link
                for (int j = 0; j < l1.size(); j++) {
                        l2 = l1.get(j);
                        for (int i = 0; i < val.size(); i++) {
                                if (l2.compareTo(val.get(i)) == 0) {
                                        count[j]++;
                                }
                        }
                }
                int m1 = count[0];
                int i1 = 0;
                for (int j = 1; j < size; j++) {
                        if (m1 < count[j]) {
                                m1 = count[j];
                                i1 = j;
                        }
                }

                context.write(key, new Text(l1.get(i1) + ' ' + m1));
        }
}

