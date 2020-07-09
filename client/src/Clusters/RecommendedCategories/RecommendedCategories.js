import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer.js';
import { listOne, listTwo } from './mockData.js';
import '../styles.css';

class RecommendedCategories extends Component {
    render() {
        const makeRow = item => (
            <CategoryContainer
                key={item.id}
                category={item.category}
                url={item.url}
            />
        );

        const lists = [listOne, listTwo];

        return (
            <div className="category-section">
                <div className="category-section-header">
                    <h2>Didn't find what you're looking for?</h2>
                    <a href="https://play.google.com/">Browse recommended categories</a>
                </div>

                {lists.map((value, index) => {
                    return (
                        <div className="my-card" key={index}>
                            <div className="my-card-content">
                                {value.cards.map(makeRow)}

                            </div>
                        </div>
                    );
                })}
                <a href="https://play.google.com/">See all categories</a>
            </div>
        );
    }
}

export default RecommendedCategories;