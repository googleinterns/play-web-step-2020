package com.google.sps.servlets;

abstract class Cluster {
    String type;
    
    abstract String getType();
    abstract void makeCluster();
}
