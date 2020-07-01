import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer.js';
import {listOne, listTwo} from './mockData.js';

class RecommendedCategories extends Component {
    render() {
        const makeRow = item => (
            <CategoryContainer
            category={item.category}
            url={item.url}
            />
        );
    }
}

export default RecommendedCategories;