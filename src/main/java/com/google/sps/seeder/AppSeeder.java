package com.google.sps.seeder;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;


public class AppSeeder {
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

    public AppSeeder() {
        seedDB();
    }

    private void seedDB() {
        setEntityProperties("social", "connect with friends", "mockIcon.url", "com.facebook.ocra", "Messenger", 0, 4.6);
        setEntityProperties("music", "Listen to your songs", "mockIcon.url", "com.pandora.android", "Pandora", 0, 4.6);
        setEntityProperties("wearOS", "Be in control of you WearOS", "mockIcon.url", "com.google.android.wearable.app", "Wear OS by Google", 0, 4.6);
        setEntityProperties("weather", "check the weather", "mockIcon.url", "com.acmeaom.android.myradar", "myWeather Radar", 0, 4.6);
    }

    public void setEntityProperties(String category, String description, String icon, String id, String name, double price, double rating) {
        Entity app = new Entity("App");
        app.setProperty("category", category);
        app.setProperty("description", description);
        app.setProperty("icon", icon);
        app.setProperty("id", id);
        app.setProperty("name", name);
        app.setProperty("price", price);
        app.setProperty("rating", rating); 
        datastore.put(app);  
    }
}
