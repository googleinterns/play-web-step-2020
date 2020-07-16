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
                    <h6>{cluster.subheading}</h6>
                    <h2>{cluster.heading}</h2>
                </div>
                <div className="card-container">
                    {cluster.cards.map(makeCard)}
                </div>
                <a href={cluster.navigation.url}>{cluster.navigation.text}</a>
            </div>
        );
    }
}

export default RecommendedCategories;