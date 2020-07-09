import React from 'react';
import { render, wait }from '@testing-library/react';
import SingleAppContainer from './SingleAppContainer.js';

const renderSingleAppContainer = () =>
    render(
        <SingleAppContainer 
            listNum={1}
            url="http://testurl.com"
            title="Test Title"
            category="test"
            rating={4.5} />
    );

test('passes correct title', async() => {
    const { getByText } = renderSingleAppContainer();
    await expect(getByText("Test Title")).toBeInTheDocument();
});

test('passes correct url', async() => {
    const { getByAltText } = renderSingleAppContainer();
    await expect(getByAltText("icon 1").src).toEqual("http://testurl.com/");
});

test('passes correct category', async() => {
    const { getByText } = renderSingleAppContainer();
    await expect(getByText("test - Category")).toBeInTheDocument();
});

test('passes correct rating', async() => {
    const { getByText } = renderSingleAppContainer();
    await expect(getByText("4.5")).toBeInTheDocument();
});
