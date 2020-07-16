import React from 'react';
import { render, wait }from '@testing-library/react';
import SingleCardContainer from './SingleCardContainer.js';

const renderSingleCardContainer = () =>
    render(
        <SingleCardContainer 
            bigImage="http://imageurl.com"
            title="test Card Container"
            iconUrl="http://testiconurl.com"
            rating={5}
            rated="Everyone"
            appDescription="this is a test"
        />
    );

test('passes correct imageUrl', async () => {
    const { getByAltText } = renderSingleCardContainer();
    await expect(getByAltText("largeImage").src).toEqual("http://imageurl.com/"); 
});

test('passes correct title', async () => {
    const { getByText } = renderSingleCardContainer();
    await expect(getByText("test Card Container")).toBeInTheDocument(); 
});

test('passes correct iconUrl', async () => {
    const { getByAltText } = renderSingleCardContainer();
    await expect(getByAltText("appIcon").src).toEqual("http://testiconurl.com/"); 
});

test('passes correct rating', async () => {
    const { getByText } = renderSingleCardContainer();
    await expect(getByText("5", { exact: false })).toBeInTheDocument();     
});

test('passes correct rated', async () => {
    const { getByText } = renderSingleCardContainer();
    await expect(getByText("Everyone", { exact: false })).toBeInTheDocument();     
});

test('passes correct appDescription', async () => {
    const { getByText } = renderSingleCardContainer();
    await expect(getByText("this is a test")).toBeInTheDocument();     
});