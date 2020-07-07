import React from 'react';
import { render, wait } from '@testing-library/react';
import CategoryContainer from './CategoryContainer.js';

const renderCategoryContainer = () =>
    render(
        <CategoryContainer
            category={"test"}
            url={"testURL"} />
    );

test('passes correct category', async () => {
    const { getByText } = renderCategoryContainer();
    await wait(() => expect(getByText("test")).toBeInTheDocument());
});

test('passes correct url', async () => {
    const { getByAltText } = renderCategoryContainer();
    expect(getByAltText("Category Icon").src).toEqual("http://localhost/testURL");
});