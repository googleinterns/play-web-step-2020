package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;

class Chart {
    private String title;
    private String subtitle;
    private String id;
    private List<App> apps;

    Chart(String title, List<App> apps) {
        this.title = title;
        this.subtitle = subtitle;
        this.id = id;
        this.apps = apps;
    }

    public String getTitle() {
        return this.title;
    }

    public String getSubtitle() {
        return this.subtitle;
    }

    public String getID() {
        return this.id;
    }

    public List<App> getApps() {
        return this.apps;
    }
}
