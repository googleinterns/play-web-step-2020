package com.google.sps.models;

import java.util.ArrayList;
import java.util.List;

public class Stream {
    private List<Cluster> clusters = new ArrayList<Cluster>();

    public Stream() {
        TopChartsCluster topCharts = new TopChartsCluster();
        clusters.add(topCharts);
        StandardCluster standard = new StandardCluster();
        clusters.add(standard);
    }

    public List<Cluster> getClusters() {
        return this.clusters;
    }
}
