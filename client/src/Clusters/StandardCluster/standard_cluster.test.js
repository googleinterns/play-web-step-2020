import React from 'react';
import { render, wait } from '@testing-library/react';
import StandardCluster from './standard_cluster.js';

const data = {
    title: "Rock out while you work out",
         cards: [
            {
               title: "mockCard1",
               bigImageUrl: "https://mockBigImageUrl.com",
               apps: {
                  id: "1",
                  icon: "mockIcon1.png",
                  title: "mockApp1",
                  category: "Fake Apps",
                  rated: "Everyone",
                  appDescription: "mock app description",
                  rating: 5,
                  price: 0
               }
            },
         ]}

const renderStandardCluster = () =>
    render(
        <StandardCluster
          data={data} />
    );

test('correct title and app card data', async () => {
    const { getByText } = renderStandardCluster();
    await wait(() => expect(getByText('Rock out while you work out')).toBeInTheDocument());
    await wait(() => expect(getByText('mockCard1')).toBeInTheDocument());
});
