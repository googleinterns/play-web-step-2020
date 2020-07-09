package com.google.sps.servlets;
import java.util.ArrayList;

public class App {
    int id;
    String icon, name, category;
    double rating, price;

    App(int id, String name, String icon, String category, double rating, double price) {
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.category = category;
        this.rating = rating;
        this.price = price;
    }
}
