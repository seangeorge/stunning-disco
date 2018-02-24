//Mapper for Web Log Hits
//Author: Programmed By Sean George

import java.io.IOException;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;
import java.lang.String;

public class webhitsMapper extends Mapper<LongWritable, Text, Text, Text> {

        @Override
        public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {

                String l1 = value.toString();

                if (!l1.startsWith("#")) {
                        if (!l1.contains("index.") == true) {

                                if (l1.contains(" 200 ") == true) {

                                        String keys = l1.substring(0, 7);
                                        int startlink = l1.indexOf("/");// Start of cs_uri_stem
                                                                                                                
                                        int endlink = l1.indexOf(" ", startlink); // End of
                                                                                                                           
                                        String u1 = l1.substring(startlink, endlink); // Cutting the data and taking out
                                        context.write(new Text(keys), new Text(u1));

                                }

                        }
                }
        }
}


