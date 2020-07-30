package com.google.sps.models;

import java.util.ArrayList;
import java.util.List;

public class Stream {
    private List<Cluster> clusters = new ArrayList<Cluster>();

    public Stream() {
        AppOfTheWeekCluster appOfTheWeek = new AppOfTheWeekCluster();
        clusters.add(appOfTheWeek);
        StandardCluster standard = new StandardCluster();
        clusters.add(standard);
        TopChartsCluster topCharts = new TopChartsCluster();
        clusters.add(topCharts);
        RecommendedCategoriesCluster recommendedCategories = new RecommendedCategoriesCluster();
        clusters.add(recommendedCategories);
    }

    public List<Cluster> getClusters() {
        return this.clusters;
    }
}
