package com.google.sps.servlets;
import java.util.ArrayList;

class Chart {
    String title;
    ArrayList<App> apps;

    Chart(String title, ArrayList<App> apps) {
        this.title = title;
        this.apps = apps;
    }
}
