package com.google.sps.models;
import java.util.ArrayList;
import java.util.List;

public class RecommendedCategories extends Cluster {
    private String title = "Browse recommended categories";
    private String subtitle = "Didn't find what you're looking for?";
    private List<RecommendedCategoryCard> card = new ArrayList<RecommendedCategoryCard>();
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

    public List<RecommendedCategoryCard> getRecommendedCategoryCard() {
        return this.card;
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
        RecommendedCategoryCard mockCard1 = new RecommendedCategoryCard("mockCard1", "Health & fitness", "mockIcon1.png");
        RecommendedCategoryCard mockCard2 = new RecommendedCategoryCard("mockCard2", "Weather", "mockIcon2.png");
        RecommendedCategoryCard mockCard3 = new RecommendedCategoryCard("mockCard3", "Productivity", "mockIcon3.png");
        RecommendedCategoryCard mockCard4 = new RecommendedCategoryCard("mockCard4", "Communication", "mockIcon4.png");
        RecommendedCategoryCard mockCard5 = new RecommendedCategoryCard("mockCard5", "Music & audio", "mockIcon5.png");
        RecommendedCategoryCard mockCard6 = new RecommendedCategoryCard("mockCard6", "Educational", "mockIcon6.png");
        RecommendedCategoryCard mockCard7 = new RecommendedCategoryCard("mockCard7", "Sports", "mockIcon7.png");
        RecommendedCategoryCard mockCard8 = new RecommendedCategoryCard("mockCard8", "Maps & Navigation", "mockIcon8.png");
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