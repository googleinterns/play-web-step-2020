package com.google.sps.servlets;
import java.util.ArrayList;

public class TopChartsCluster {
    String title = "Top Charts";
    String backgroundImage = "background-image.png";
    ArrayList<Chart> charts = new ArrayList<Chart>();

    TopChartsCluster() {
        App mockApp1 = new App(1, "mockApp1", "mockIcon1.png", "Fake Apps", 5, 0);
        App mockApp2 = new App(2, "mockApp2", "mockIcon2.png", "Fake Apps", 5, 0);
        App mockApp3 = new App(3, "mockApp3", "mockIcon3.png", "Fake Apps", 5, 0);
        App mockApp4 = new App(4, "mockApp4", "mockIcon4.png", "Fake Apps", 5, 0);
        App mockApp5 = new App(5, "mockApp5", "mockIcon5.png", "Fake Apps", 5, 0);
        App mockApp6 = new App(6, "mockApp6", "mockIcon6.png", "Fake Apps", 5, 0);

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
