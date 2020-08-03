package com.google.sps.models;

public class AppOfTheWeekCluster extends Cluster {
    private String title = "Wear OS app of the week";
    private Card card;

    AppOfTheWeekCluster() {
        makeCluster();
        this.type = getType();
        this.id = getID();
    }

    public String getTitle() {
        return this.title;
    }

    public Card getCard() {
        return this.card;
    }

    public String getType() {
        return "AppOfTheWeekCluster";
    }

    public String getID() {
        return "AppOfTheWeekID";
    }
    
    public void makeCluster() {
        App mockApp = new App.Builder("1").setTitle("mockApp").setUrl("/images/emptyAppIcon.jpeg").setRating(5).setRated("Everyone").setAppDescription("mock app description").setDeveloper("Mock Developer").setReview("11K reviews").build();
        card = new Card("mockCard", "https://mockBigImageUrl.com", mockApp);

    }
}
