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

import com.google.sps.models.Stream;
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
public final class StreamServletTest {
  
  @Rule 
  public MockitoRule mockitoRule = MockitoJUnit.rule();
  
  private StreamServlet servlet;
  private StringWriter stringWriter;
  
  @Mock
  private HttpServletRequest mockRequest;
  @Mock
  private HttpServletResponse mockResponse;

  @Before
  public void setUp() throws Exception {
    // Create real StreamServlet object.
    servlet = new StreamServlet();
    stringWriter = new StringWriter();
    PrintWriter writer = new PrintWriter(stringWriter);
    when(mockResponse.getWriter()).thenReturn(writer);   
  }

  @Test
  public void testDoGet() throws Exception { 
    servlet.doGet(mockRequest, mockResponse);
    verify(mockResponse, atLeast(1)).setContentType("application/json");

    // Convert Java Object to Json
    Gson gson = new Gson();
    Stream stream = new Stream();
    String actualStream = gson.toJson(stream).trim();
    // Trimming the string to prevent extra spaces
    String testStream = stringWriter.toString().trim();

    Assert.assertEquals(actualStream, testStream);
  }
}
