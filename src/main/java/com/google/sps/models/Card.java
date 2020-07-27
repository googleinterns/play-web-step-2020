package com.google.sps.servlets;
import java.util.ArrayList;

class Card {
    private String id;
    private String bigImageUrl;
    private App app;

    Card(String id, String bigImageUrl, App app) {
        this.id = id;
        this.bigImageUrl = bigImageUrl;
        this.app = app;
    }

    public String getId() {
        return this.id;
    }

    public String getBigImageUrl() {
        return this.bigImageUrl;
    }

    public App getApp() {
        return this.app;
    }
}
