package com.google.sps.servlets;
import java.util.ArrayList;
import java.util.List;

public class StandardCluster extends Cluster {
    private String title = "Rock out while you work out";
    private List<Card> cards = new ArrayList<Card>();

    StandardCluster() {
        makeCluster();
        this.type = getType();
        this.id = getID();
    }

    public String getTitle() {
        return this.title;
    }

    public List<Card> getCards() {
        return this.cards;
    }

    public String getType() {
        return "StandardCluster";
    }

    public String getID() {
        return "standardClusterID";
    }

    public void makeCluster() {
        App mockApp1 = new App.Builder("1").setTitle("mockApp1").setIcon("mockIcon1.png").setCategory("Fake Apps").setRating(5).setPrice(0).setRated("Everyone").setAppDescription("mock app description").build();
        App mockApp2 = new App.Builder("2").setTitle("mockApp2").setIcon("mockIcon2.png").setCategory("Fake Apps").setRating(5).setPrice(0).setRated("Everyone").setAppDescription("mock app description").build();
        App mockApp3 = new App.Builder("3").setTitle("mockApp3").setIcon("mockIcon3.png").setCategory("Fake Apps").setRating(5).setPrice(0).setRated("Everyone").setAppDescription("mock app description").build();
        App mockApp4 = new App.Builder("4").setTitle("mockApp4").setIcon("mockIcon4.png").setCategory("Fake Apps").setRating(5).setPrice(0).setRated("Everyone").setAppDescription("mock app description").build();
        Card mockCard1 = new Card("mockCard1", "https://mockBigImageUrl.com", mockApp1);
        Card mockCard2 = new Card("mockCard2", "https://mockBigImageUrl.com", mockApp2);
        Card mockCard3 = new Card("mockCard3", "https://mockBigImageUrl.com", mockApp3);
        Card mockCard4 = new Card("mockCard4", "https://mockBigImageUrl.com", mockApp4);
        cards.add(mockCard1);
        cards.add(mockCard2);
        cards.add(mockCard3);
        cards.add(mockCard4);
    }
}
