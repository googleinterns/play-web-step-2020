package com.google.sps.models;
import java.util.ArrayList;
import java.util.List;

public class RecommendedCategories extends Cluster {
    private String title = "Browse recommended categories";
    private String subtitle = "Didn't find what you're looking for?";
    private List<RecommendedCategoryCard> card = new ArrayList<RecommendedCategoryCard>();
    private String text = "See all categories";
    private String url = "https://play.google.com";


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

    public List<RecommendedCategoryCard> getRecommendedCategoryCard() {
        return this.card;
    }

    public String getText() {
        return this.text;
    }

    public String getUrl() {
        return this.url;
    }

    public String getType() {
        return "RecommendedCategories";
    }

    public String getID() {
        return "recommendedCategoriesID";
    }

    public void makeCluster() {
        RecommendedCategoryCard mockCard1 = new RecommendedCategoryCard("mockCard1", "Health & fitness", "/images/healthAndFitnessIcon.png");
        RecommendedCategoryCard mockCard2 = new RecommendedCategoryCard("mockCard2", "Weather", "/images/weatherIcon.png");
        RecommendedCategoryCard mockCard3 = new RecommendedCategoryCard("mockCard3", "Productivity", "/images/productivityIcon.png");
        RecommendedCategoryCard mockCard4 = new RecommendedCategoryCard("mockCard4", "Communication", "/images/communicationIcon.png");
        RecommendedCategoryCard mockCard5 = new RecommendedCategoryCard("mockCard5", "Music & audio", "/images/musicAndAudioIcon.png");
        RecommendedCategoryCard mockCard6 = new RecommendedCategoryCard("mockCard6", "Educational", "/images/educationalIcon.png");
        RecommendedCategoryCard mockCard7 = new RecommendedCategoryCard("mockCard7", "Sports", "/images/sportsIcon.png");
        RecommendedCategoryCard mockCard8 = new RecommendedCategoryCard("mockCard8", "Maps & Navigation", "/images/mapsAndNavigationIcon.png");
        card.add(mockCard1);
        card.add(mockCard2);
        card.add(mockCard3);
        card.add(mockCard4);
        card.add(mockCard5);
        card.add(mockCard6);
        card.add(mockCard7);
        card.add(mockCard8);
    }
}