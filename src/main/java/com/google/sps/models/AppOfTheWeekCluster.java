package com.google.sps.models;

public class AppOfTheWeekCluster extends Cluster {
    private String title = "Wear OS app of the week";

    AppOfTheWeekCluster() {
        makeCluster();
        this.type = getType();
        this.id = getID();
    }

    public String getTitle() {
        return this.title;
    }

    public String getType() {
        return "AppOfTheWeekCluster";
    }

    public String getID() {
        return "AppOfTheWeekID";
    }
    
    public void makeCluster() {
        App mockApp = new App.Builder("1").setTitle("mockApp").setUrl("mockIcon.png").setCategory("Fake Apps").setRating(5).setRated("Everyone").setAppDescription("mock app description").setDeveloper("Mock Developer").setReview("11K reviews").build();
        Card mockCard = new Card("mockCard", "https://mockBigImageUrl.com", mockApp);

    }
}
