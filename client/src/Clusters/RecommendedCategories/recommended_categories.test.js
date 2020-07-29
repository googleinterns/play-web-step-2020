import React from 'react';
import { render, wait } from '@testing-library/react';
import RecommendedCategories from './recommended_categories.js';

const data = {
    title: "Browse recommended categories",
    subtitle: "Didn't find what you're looking for?",
    card: 
    [{
        id: "mockCard1",
		category: "Health & fitness",
		url: "/images/healthAndFitnessIcon.png"
	}]
}

const renderRecommendedCategoriesCluster = () =>
    render(
        <RecommendedCategories data={data} />
    );

test('correct header', async () => {
    const{ getByText } = renderRecommendedCategoriesCluster();
    await wait(() => expect(getByText('Browse recommended categories')).toBeInTheDocument());
    await wait(() => expect(getByText('Health & fitness')).toBeInTheDocument());
});