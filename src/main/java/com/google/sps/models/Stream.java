package com.google.sps.servlets;
import java.util.ArrayList;

public class Stream {
    ArrayList<TopChartsCluster> stream = new ArrayList<TopChartsCluster>();
    
    Stream() {
        TopChartsCluster topCharts = new TopChartsCluster();
        stream.add(topCharts);
    }
}
