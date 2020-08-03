import React from 'react';
import { render, wait }from '@testing-library/react';
import AppOfTheWeek from './AppOfTheWeek.js';

const data = {
    title: "Wear OS app of the week",
        card: {
            id: "mockCard",
            bigImageUrl: "https://mockBigImageUrl.com",
            app: {
                id: "1",
                url: "/images/emptyAppIcon.jpeg",
                title: "mockApp",
                rated: "Everyone",
                appDescription: "mock app description",
                developer: "Mock Developer",
                review: "11K reviews",
                rating: 5,
                price: 0
            }
        }
}

const renderAppOfTheWeekCluster = () =>
    render(
        <AppOfTheWeek data={data} />
    );

test('correct app title', async () => {
    const { getByText } = renderAppOfTheWeekCluster();
    await wait(() => expect(getByText('Wear OS app of the week')).toBeInTheDocument());
    await wait(() => expect(getByText('mockApp')).toBeInTheDocument());
});
