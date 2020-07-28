package com.google.sps.servlets;

import com.google.sps.seeder.AppSeeder;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/api/v1/seed")
public class SeederServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        AppSeeder appsToDB = new AppSeeder();
        appsToDB.seedDB();
    }
}
