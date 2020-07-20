import React from 'react';
import { render, wait } from '@testing-library/react';
import Footer from './Footer.js';

test('correct category', () => {
    const { getByText } = render(<Footer />);
    const textElement = getByText('For Families');
    expect(textElement).toBeInTheDocument();
});
