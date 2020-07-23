// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/api/v1/stream")
public class StreamServlet extends HttpServlet {

  DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Stream stream = new Stream();
    String jsonStream = convertToJson(stream);
    response.setContentType("application/json");
    response.getWriter().println(jsonStream); 
  }

  private String convertToJson(Stream stream) {
    Gson gson = new Gson();
    String json = gson.toJson(stream);
    return json;
  }

  public ArrayList<Entity> appReader(ArrayList<String> appIds) {
    ArrayList<Entity> apps = new ArrayList<Entity>();
    Query query = new Query("App");
    PreparedQuery results = datastore.prepare(query);

    for(String id: appIds) {
        for(Entity entity: results.asIterable()){
            if(((String)entity.getProperty("id")).equals(id)){
                apps.add(entity);
            }
        }
    }
    return apps;
  }
}
