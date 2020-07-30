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
    public void testAppConverter() throws Exception {
        AppSeeder addApps = new AppSeeder();
        addApps.seedDB();

        // Convert single entity
        ArrayList<String> EntityIds = new ArrayList<String>();
        EntityIds.add("com.facebook.ocra");
        Entity singleEntity = new AppReader().getApps(EntityIds).get(0);
        App convertedSingleEntity = new AppConverter().convertEntityProperties(singleEntity);
        assertEquals("Messenger", convertedSingleEntity.getTitle());
    
        // Convert multiple entities
        EntityIds.add("com.google.android.wearable.app");
        ArrayList<Entity> multipleEntities = new AppReader().getApps(EntityIds);
        ArrayList<App> convertedMultipleEntities = new AppConverter().convertToApp(multipleEntities);
        assertEquals("connect with friends", convertedMultipleEntities.get(0).getAppDescription());
        assertEquals("Wear OS by Google", convertedMultipleEntities.get(1).getTitle());
    }
}
