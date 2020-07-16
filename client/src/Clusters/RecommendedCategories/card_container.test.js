import React from 'react';
import { render, wait } from '@testing-library/react';
import CardContainer from './card_container.js';

const renderCardContainer = () =>
    render(
        <CardContainer
            category={"test"}
            url={"testURL"} />
    );

test('passes correct category', async () => {
    const { getByText } = renderCardContainer();
    await wait(() => expect(getByText("test")).toBeInTheDocument());
});

test('passes correct url', async () => {
    const { getByAltText } = renderCardContainer();
    expect(getByAltText("Category Icon").src).toEqual("http://localhost/testURL");
});