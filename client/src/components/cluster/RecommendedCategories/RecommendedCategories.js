import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer.js';
import { listOne, listTwo } from './mockData.js';

class RecommendedCategories extends Component {
    render() {
        const makeRow = item => (
            <CategoryContainer
                category={item.category}
                url={item.url}
            />
        );

        return (
            <div className="category-section">
                <div class="section-header">
                    <h2>Didn't find what you're looking for?</h2>
                    <h1>Browse recommended categories</h1>
                </div>

                {charts.map((value) => {
                    return <div class="row">
                        <div class="horizontal-row">
                            {value.cards.map(makeRow)}
                        </div>
                    </div>
                })}
                <h6>See all categories</h6>
            </div>
        );
    }
}

export default RecommendedCategories;