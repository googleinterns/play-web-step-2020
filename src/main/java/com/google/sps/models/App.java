package com.google.sps.models;
import java.util.ArrayList;

public class App {
        private String id;
        private String url, title, category, rated, appDescription, developer, review;
        private double rating, price;

    public static class Builder {
        private String id;
        private String url, title, category, rated, appDescription, developer, review;
        private double rating, price;

        public Builder(String id) {
            this.id = id;
        }

        public Builder setTitle(String title) {
            this.title = title;
            return this;
        }

        public Builder setUrl(String url) {
            this.url = url;
            return this;
        }

        public Builder setCategory(String category) {
            this.category = category;
            return this;
        }

        public Builder setRating(double rating) {
            this.rating = rating;
            return this;
        }

        public Builder setPrice(double price) {
            this.price = price;
            return this;
        }

        public Builder setRated(String rated) {
            this.rated = rated;
            return this;
        }

        public Builder setAppDescription(String appDescription) {
            this.appDescription = appDescription;
            return this;
        }

        public Builder setDeveloper(String developer) {
            this.developer = developer;
            return this;
        }

        public Builder setReview(String review) {
            this.review = review;
            return this;
        }

        public App build() {
            App app = new App();
            app.id = this.id;
            app.title = this.title;
            app.url = this.url;
            app.category = this.category;
            app.rating = this.rating;
            app.price = this.price;
            app.rated = this.rated;
            app.appDescription = this.appDescription;
            app.developer = this.developer;
            app.review = this.review;
            return app;
        }
    }
}
