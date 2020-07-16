import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('loads and displays text from Top Charts', () => {
    const { getByText } = render(<App />);
    const textElement = getByText('Top Charts');
    expect(textElement).toBeInTheDocument();
});

test('loads and displays greeting from Recommended Categories', () => {
    const { getByText } = render(<App />);
    const textElement = getByText('Browse recommended categories');
    expect(textElement).toBeInTheDocument();
});

test('loads and displays greeting from App of the week', () => {
    const { getByText } = render(<App />);
    const textElement = getByText('App of the week');
    expect(textElement).toBeInTheDocument();
});
