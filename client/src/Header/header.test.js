import React from 'react';
import { render, wait }from '@testing-library/react';
import Header from './header.js';

test('correct navigation text', () => {
    const { getByText } = render(<Header />);
    const textElement = getByText('Games');
    expect(textElement).toBeInTheDocument();
});
