package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;

public class Stream {
    private List<Cluster> clusters = new ArrayList<Cluster>();

    Stream() {
        StandardCluster standard = new StandardCluster();
        clusters.add(standard);
        TopChartsCluster topCharts = new TopChartsCluster();
        clusters.add(topCharts);
    }

    public List<Cluster> getClusters() {
        return this.clusters;
    }
}
