import React from 'react';
import { render, wait } from '@testing-library/react';
import StandardCluster from './standard_cluster.js';

const data = {
    title: "Rock out while you work out",
         cards: [
            {
               id: "mockCard1",
               bigImageUrl: "/images/emptyAppIcon.jpeg",
               app: {
                  id: "1",
                  url: "/images/emptyAppIcon.jpeg",
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

test('correct title', async () => {
    const { getByText } = renderStandardCluster();
    await wait(() => expect(getByText('Rock out while you work out')).toBeInTheDocument());  
});

test('correct app object data', async () => {
    const { getByText } = renderStandardCluster();
    await wait(() => expect(getByText('mockApp1')).toBeInTheDocument());

});
