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

import com.google.sps.seeder.AppSeeder;
import com.google.sps.service.AppReader;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import org.junit.Assert;
import org.junit.Test;
import org.junit.Rule;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import org.mockito.Mock;
import org.mockito.junit.MockitoRule;
import org.mockito.junit.MockitoJUnit;

import com.google.gson.Gson;

import java.io.*;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RunWith(JUnit4.class)
public final class SeederServletTest {
    
    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();

    private SeederServlet servlet;
    private StringWriter stringWriter;
        
    @Mock
    private HttpServletRequest mockRequest;
    @Mock
    private HttpServletResponse mockResponse;

    @Before 
    public void setUp() throws Exception {
        // Create real SeederServlet object.
        servlet = new SeederServlet();
        stringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(stringWriter);
        when(mockResponse.getWriter()).thenReturn(writer);  
    }
    
    @Test
    public void testDoGet() throws Exception {
        servlet.doGet(mockRequest, mockResponse);

        // Create test AppSeeder
        ArrayList<String> testApps = new ArrayList<String>();
        testApps.add("com.facebook.ocra");
        testApps.add("com.pandora.android");

        AppReader testAppSeeder = new AppReader(testApps);
        String actualId = "com.facebook.ocra";
        System.out.println("right here:  " + testAppSeeder);
        // Assert.assertEquals(actualId, testAppSeeder.get(0).getProperty("id"));
    }
}
