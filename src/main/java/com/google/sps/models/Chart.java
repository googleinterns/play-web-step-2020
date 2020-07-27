package com.google.sps.models;
import java.util.ArrayList;
import java.util.List;

class Chart {
    private String title;
    private String subtitle;
    private String chartId;
    private List<App> apps;

    private Chart(String title, String subtitle, String chartId, List<App> apps) {
        this.title = title;
        this.subtitle = subtitle;
        this.chartId = chartId;
        this.apps = apps;
    }

      public static class Builder {
        private String title;
        private String subtitle;
        private String chartId;
        private List<App> apps;

        public Builder(String chartId) {
            this.chartId = chartId;
        }

        public Builder setTitle(String title) {
            this.title = title;
            return this;
        }

        public Builder setSubtitle(String subtitle) {
            this.subtitle = subtitle;
            return this;
        }

        public Builder setApps(List<App> apps) {
            this.apps = apps;
            return this;
        }

        public Chart build() {
            return new Chart(title, subtitle, chartId, apps);
        }
    } 
}
