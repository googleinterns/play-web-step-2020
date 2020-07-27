package com.google.sps.service;

import java.util.ArrayList;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;

public class AppReader {
    private DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    private  ArrayList<Entity> apps = new ArrayList<Entity>();

    public AppReader(ArrayList<String> appIds) {
        Query query = new Query("App");
        PreparedQuery results = datastore.prepare(query);

        for(String id: appIds) {
            for(Entity entity: results.asIterable()){
                if(((String)entity.getProperty("id")).equals(id)){
                    apps.add(entity);
                }
            }
        }
    }

    public ArrayList<Entity> getApps() {
        return apps;
    }
}
