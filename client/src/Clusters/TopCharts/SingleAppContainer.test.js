import React from 'react';
import { render, wait }from '@testing-library/react';
import SingleAppContainer from './SingleAppContainer.js';

const renderSingleAppContainer = () =>
    render(
        <SingleAppContainer 
            listNum={1}
            url={"testURL"}
            title={"Test Title"}
            category={"test"}
            rating={4.5} />
    );

test('passes correct title', async () => {
    const { getByText } = renderSingleAppContainer();
    await wait(() => expect(getByText("Test Title")).toBeInTheDocument());
});

test('passes correct url', async () => {
    const { getByText } = renderSingleAppContainer();
    await wait(() => expect(getByText("testURL")).toBeInTheDocument());
});

test('passes correct category', async () => {
    const { getByText } = renderSingleAppContainer();
    await wait(() => expect(getByText("test")).toBeInTheDocument());
});

test('passes correct rating', async () => {
    const { getByText } = renderSingleAppContainer();
    await wait(() => expect(getByText(4.6)).toBeInTheDocument());
});
