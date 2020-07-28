package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;

public class RecommendedCategories extends Cluster {
    private String title = "Browse recommended categories";
    private String subtitle = "Didn't find what you're looking for?";
    private List<Container> container = new ArrayList<Container>();
    private String navigation = "See all categories";

    RecommendedCategories() {
        makeCluster();
        this.type = getType();
        this.id = getID();
    }

    public String getTitle() {
        return this.title;
    }

    public String getSubtitle() {
        return this.subtitle;
    }

    public List<Container> getContainer() {
        return this.container;
    }

    public String getNavigation() {
        return this.navigation;
    }

    public String getType() {
        return "RecommendedCategories";
    }

    public String getID() {
        return "recommendedCategoriesID";
    }

    public void makeCluster() {
        Container mockContainer1 = new Container("mockContainer1", "Health & fitness", "mockIcon1.png");
        Container mockContainer2 = new Container("mockContainer2", "Weather", "mockIcon2.png");
        Container mockContainer3 = new Container("mockContainer3", "Productivity", "mockIcon3.png");
        Container mockContainer4 = new Container("mockContainer4", "Communication", "mockIcon4.png");
        Container mockContainer5 = new Container("mockContainer5", "Music & audio", "mockIcon5.png");
        Container mockContainer6 = new Container("mockContainer6", "Educational", "mockIcon6.png");
        Container mockContainer7 = new Container("mockContainer7", "Sports", "mockIcon7.png");
        Container mockContainer8 = new Container("mockContainer8", "Maps & Navigation", "mockIcon8.png");
        container.add(mockContainer1);
        container.add(mockContainer2);
        container.add(mockContainer3);
        container.add(mockContainer4);
        container.add(mockContainer5);
        container.add(mockContainer6);
        container.add(mockContainer7);
        container.add(mockContainer8);
        

    }
}