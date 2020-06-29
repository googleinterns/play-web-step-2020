import React from 'react';
import { render } from '@testing-library/react';
import { FetchMock } from '@react-mock/fetch';
import App from './App';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const renderComponent = ({ text }) =>
render(
    <FetchMock
    mock={[
        {matcher: '/api/v1/test-servlet', response: 200}
    ]}
    >
    </FetchMock>
);

test('verifies fetch is called', async () => {
    const { getByText } = findRenderedComponentWithType();
    

})

test('loads and displays greeting', () => {
    const { getByText } = render(<App />);
    const textElement = getByText('Welcome to React');
    expect(textElement).toBeInTheDocument();
});
