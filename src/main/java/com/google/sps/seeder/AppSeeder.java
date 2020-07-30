package com.google.sps.seeder;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

public class AppSeeder {
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

    public void seedDB() {
        setEntityProperties("social", "connect with friends", "/images/emptyAppIcon.jpeg", "com.facebook.ocra", "Messenger", 0, 4.6,"Everyone");
        setEntityProperties("music", "Listen to your songs", "/images/emptyAppIcon.jpeg", "com.pandora.android", "Pandora", 0.99, 4.6,"Everyone");
        setEntityProperties("wearOS", "Be in control of you WearOS", "/images/emptyAppIcon.jpeg", "com.google.android.wearable.app", "Wear OS by Google", 0, 4.6,"Everyone");
        setEntityProperties("weather", "check the weather", "/images/emptyAppIcon.jpeg", "com.acmeaom.android.myradar", "myWeather Radar", 0.99, 4.6,"Everyone");
    }

    public void setEntityProperties(String category, String description, String url, String id, String title, double price, double rating, String rated) {
        Entity app = new Entity("App");
        app.setProperty("category", category);
        app.setProperty("description", description);
        app.setProperty("url", url);
        app.setProperty("id", id);
        app.setProperty("title", title);
        app.setProperty("price", price);
        app.setProperty("rating", rating); 
        app.setProperty("rated", rated);
        datastore.put(app);  
    }
}

