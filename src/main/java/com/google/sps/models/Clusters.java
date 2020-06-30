package com.google.sps.servlets;
import java.util.ArrayList;

public class Clusters{
    ArrayList<TopChartsCluster> stream = new ArrayList<TopChartsCluster>();
    
    Clusters(){
        TopChartsCluster topCharts = new TopChartsCluster();
        stream.add(topCharts);
    }
}
