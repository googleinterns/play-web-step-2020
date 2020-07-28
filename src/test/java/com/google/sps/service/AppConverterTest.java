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
import com.google.sps.seeder.AppSeeder;
import com.google.sps.service.AppReader;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.tools.development.testing.LocalDatastoreServiceTestConfig;
import com.google.appengine.tools.development.testing.LocalServiceTestHelper;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public final class AppConverterTest {
  private static final LocalServiceTestHelper helper =
      new LocalServiceTestHelper(new LocalDatastoreServiceTestConfig().setDefaultHighRepJobPolicyUnappliedJobPercentage(0));

    @BeforeClass
    public static void setup() {
        helper.setUp();
    }

    @AfterClass
    public static void done() {
        helper.tearDown();
    }

    @Test
    public void testAppReader() throws Exception {
        AppSeeder populateDB = new AppSeeder();
        populateDB.seedDB();

        ArrayList<String> appsToQuery = new ArrayList<String>();
        appsToQuery.add("com.google.android.wearable.app");
        appsToQuery.add("com.acmeaom.android.myradar");
        ArrayList<Entity> appEntities = new AppReader().getApps(appsToQuery);
        ArrayList<App> convertedApps = new AppConverter().convertToApp(appEntities);
        
        assertEquals("Wear OS by Google", convertedApps.get(0).getTitle());
        assertEquals(2, convertedApps.size());
    }
}
