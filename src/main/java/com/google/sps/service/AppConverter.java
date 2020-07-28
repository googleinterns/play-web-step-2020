package com.google.sps.service;

import com.google.sps.models.App;
import com.google.appengine.api.datastore.Entity;
import java.util.ArrayList;
class AppConverter {
    
    public ArrayList<App> convertToApp(ArrayList<Entity> appEntities) {
        ArrayList<App> apps = new ArrayList<App>();
        for(Entity entity: appEntities) {
           apps.add(convertEntityProperties(entity));
        }
        return apps;
    }

    public App convertEntityProperties(Entity entity) {
        return addApp((String)entity.getProperty("id"), (String)entity.getProperty("title"), (String)entity.getProperty("url"), (String)entity.getProperty("category"), (double)entity.getProperty("rating"), (double)entity.getProperty("price"), (String)entity.getProperty("rated"), (String)entity.getProperty("description"));
    }

    public App addApp(String id, String title, String url, String category, double rating, double price, String rated, String appDescription) {
        App app = new App.Builder(id).setTitle(title).setUrl(url).setCategory(category).setRating(rating).setPrice(price).setRated(rated).setAppDescription(appDescription).build();
        return app;
    }
}
