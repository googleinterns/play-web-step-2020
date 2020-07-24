package com.google.sps.models;
import java.util.ArrayList;

class Card {
    private String title;
    private String bigImageUrl;
    private App apps;

    Card(String title, String bigImageUrl, App apps) {
        this.title = title;
        this.bigImageUrl = bigImageUrl;
        this.apps = apps;
    }

    public String getTitle() {
        return this.title;
    }

    public String getBigImageUrl() {
        return this.bigImageUrl;
    }

    public App getApp() {
        return this.apps;
    }
}
