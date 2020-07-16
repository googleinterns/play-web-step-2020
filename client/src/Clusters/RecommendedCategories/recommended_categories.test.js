import React from 'react';
import { render, wait } from '@testing-library/react';
import RecommendedCategories from './recommended_categories.js';

test('correct header', () => {
    const{ getByText } = render(<RecommendedCategories />);
    const textElement = getByText('Browse recommended categories');
    expect(textElement).toBeInTheDocument();
})