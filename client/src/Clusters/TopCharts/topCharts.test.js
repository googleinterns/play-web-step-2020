import React from 'react';
import { render, wait }from '@testing-library/react';
import TopCharts from './TopCharts.js';

test('correct column titles', () => {
    const { getByText } = render(<TopCharts />);
    const textElement = getByText('Top Free');
    expect(textElement).toBeInTheDocument();
})
