package com.google.sps.models;

abstract class Cluster {
    String type;
    
    abstract String getType();
    abstract void makeCluster();
}
