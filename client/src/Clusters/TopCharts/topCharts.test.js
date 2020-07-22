import React from 'react';
import { render, wait } from '@testing-library/react';
import TopCharts from './TopCharts.js';

const data =  {
             title:"Top Charts",
             subtitle:"For Wear OS",
             charts:
             [{
                title:"Top Free",
                 apps:
                 [{
                    id:"1",
                    icon:"mockIcon1.png",
                    title:"mockApp1",
                    category:"Fake Apps",
                    rating:5.0,
                    price:0.0
                }],
             }]}

const renderTopChart = () =>
    render(
        <TopCharts
          data={data} />
    );

test('correct column titles', async() => {
    const { getByText } = renderTopChart();
    await wait(() => expect(getByText('Top Free')).toBeInTheDocument());
});
