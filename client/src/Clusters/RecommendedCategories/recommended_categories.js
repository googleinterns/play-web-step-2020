import React, { Component } from 'react';
import CardContainer from './card_container.js';
import { cluster } from './mock_data.js';
import '../styles.css';

class RecommendedCategories extends Component {
    render() {
        const makeCard = item => (
            <CardContainer
                key={item.id}
                category={item.category}
                url={item.url}
            />
        );

        return (
            <div className="category-section">
                <div className="category-section-header">
                    <h6>Didn't find what you're looking for?</h6>
                    <h2>Browse recommended categories</h2>
                </div>
                <div className="card-container">
                    {cluster.cards.map(makeCard)}
                </div>
                <a href="https://play.google.com/">See all categories</a>
            </div>
        );
    }
}

export default RecommendedCategories;