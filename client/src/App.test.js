import React from 'react';
import { render, wait }from '@testing-library/react';
import { FetchMock } from '@react-mock/fetch';
import App from './App';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const renderComponent = () =>
    render(
        <FetchMock
            options={
                { matcher: '/api/v1/test-servlet', method: 'GET', response: "Hello world" }
            }
        >
            <App />
        </FetchMock>
    );

test('verifies fetch is called', async () => {
    const { getByText } = renderComponent();
    await wait(() => expect(getByText("Hello world")).toBeInTheDocument());
})

test('loads and displays greeting', () => {
    const { getByText } = render(<App />);
    const textElement = getByText('Welcome to React');
    expect(textElement).toBeInTheDocument();
});
