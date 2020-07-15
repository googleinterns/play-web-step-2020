import React from 'react';
import { render, wait }from '@testing-library/react';
import AppOfTheWeek from './AppOfTheWeek.js';

test('correct column titles', () => {
    const { getByText } = render(<AppOfTheWeek />);
    const textElement = getByText('Wear OS app of the week');
    expect(textElement).toBeInTheDocument();
});
