package com.google.sps.service;

import com.google.sps.models.App;
import com.google.appengine.api.datastore.Entity;
import java.util.ArrayList;
import java.util.List;

public class AppConverter {
    
    public List<App> convertToApp(List<Entity> appEntities) {
        ArrayList<App> apps = new ArrayList<App>();
        for(Entity entity: appEntities) {
           apps.add(convertEntityProperties(entity));
        }
        return apps;
    }

    private App convertEntityProperties(Entity entity) {
        return new App.Builder((String)entity.getProperty("id"))
                .setTitle((String)entity.getProperty("title"))
                .setUrl((String)entity.getProperty("url"))
                .setCategory((String)entity.getProperty("category"))
                .setRating((double)entity.getProperty("rating"))
                .setPrice((double)entity.getProperty("price"))
                .setRated((String)entity.getProperty("rated"))
                .setAppDescription((String)entity.getProperty("description"))
                .build();
    }
}
