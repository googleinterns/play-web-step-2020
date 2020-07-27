package com.google.sps.models;

abstract class Cluster {
    String type;
    String id;
    
    abstract String getType();
    abstract String getID();
    abstract void makeCluster();
}
