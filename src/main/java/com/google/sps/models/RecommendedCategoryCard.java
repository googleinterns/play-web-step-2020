package com.google.sps.servlets;

class RecommendedCategoryCard {
    private String id;
    private String category;
    private String url;

    RecommendedCategoryCard(String id, String category, String url) {
        this.id = id;
        this.category = category;
        this.url = url;
    }

    public String getId() {
        return this.id;
    }

    public String getCategory() {
        return this.category;
    }

    public String getUrl() {
        return this.url;
    }
}