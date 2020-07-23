package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;

public class TopChartsCluster extends Cluster {
    private String title = "Top Charts";
    private String subtitle = "For Wear OS";
    private List<Chart> charts = new ArrayList<Chart>();

    TopChartsCluster() {
        makeCluster();
        this.type = getType();
    }

    public String getTitle() {
        return this.title;
    }

    public String getSubtitle() {
        return this.subtitle;
    }

    public List<Chart> getCharts() {
        return this.charts;
    }

    public String getType() {
        return "TopCharts";
    }

    public void makeCluster(){
        App mockApp1 = new App.Builder("1").setTitle("mockApp1").setIcon("mockIcon1.png").setCategory("Fake Apps").setRating(5).setPrice(0).build();
        App mockApp2 = new App.Builder("2").setTitle("mockApp2").setIcon("mockIcon2.png").setCategory("Fake Apps").setRating(5).setPrice(0).build();
        App mockApp3 = new App.Builder("3").setTitle("mockApp3").setIcon("mockIcon3.png").setCategory("Fake Apps").setRating(5).setPrice(0).build();
        App mockApp4 = new App.Builder("4").setTitle("mockApp4").setIcon("mockIcon4.png").setCategory("Fake Apps").setRating(5).setPrice(0).build();
        App mockApp5 = new App.Builder("5").setTitle("mockApp5").setIcon("mockIcon5.png").setCategory("Fake Apps").setRating(5).setPrice(0).build();
        App mockApp6 = new App.Builder("6").setTitle("mockApp6").setIcon("mockIcon6.png").setCategory("Fake Apps").setRating(5).setPrice(0).build();

        ArrayList<App> topFree = new ArrayList<App>();
        ArrayList<App> topGrossing = new ArrayList<App>();
        ArrayList<App> topPaid = new ArrayList<App>();

        Chart topFreeColumn = new Chart("Top Free", topFree);
        Chart topGrossingColumn = new Chart("Top Grossing", topGrossing);
        Chart topPaidColumn = new Chart("Top Paid", topPaid);
        topFree.add(mockApp1);
        topFree.add(mockApp2);

        topGrossing.add(mockApp3);
        topGrossing.add(mockApp4);

        topPaid.add(mockApp5);
        topPaid.add(mockApp6);

        charts.add(topFreeColumn);
        charts.add(topGrossingColumn);
        charts.add(topPaidColumn);
    }
}
