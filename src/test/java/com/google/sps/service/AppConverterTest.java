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

package com.google.sps.service;

import com.google.sps.service.AppConverter;
import com.google.sps.models.App;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.tools.development.testing.LocalServiceTestHelper;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public final class AppConverterTest {
  // LocalServiceTestHelper is needed in order to avoid 'no API environment' error
  private static final LocalServiceTestHelper helper =
      new LocalServiceTestHelper();

    @BeforeClass
    public static void setup() {
        helper.setUp();
    }

    @AfterClass
    public static void done() {
        helper.tearDown();
    }

    @Test
    public void testAppSeeder() throws Exception {
        List<Entity> entities = new ArrayList<Entity>();
        Entity app1 = new Entity("App");
        app1.setProperty("category", "test");
        app1.setProperty("description", "this is a test app");
        app1.setProperty("url", "www.testapp.com");
        app1.setProperty("id", "testId");
        app1.setProperty("title", "test app 1");
        app1.setProperty("price", 0.99);
        app1.setProperty("rating", 3.6); 
        app1.setProperty("rated", "Everyone");

        Entity app2 = new Entity("App");
        app2.setProperty("category", "test");
        app2.setProperty("description", "this is another test app");
        app2.setProperty("url", "www.testapp2.com");
        app2.setProperty("id", "test2Id");
        app2.setProperty("title", "test app 2");
        app2.setProperty("price", 0.99);
        app2.setProperty("rating", 3.6); 
        app2.setProperty("rated", "Everyone");

        entities.add(app1);
        entities.add(app2);

        List<App> convertedApps = new AppConverter().convertToApp(entities);
        assertEquals("test app 1", convertedApps.get(0).getTitle());
        assertEquals(2, convertedApps.size());
    }
}
