import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render }from '@testing-library/react';
import TopCharts from './TopCharts.js';

const renderer = new ShallowRenderer();
renderer.render(<TopCharts data={cluster} />);
const result = render.getRenderOutput();

test('correct column titles', () => {
    expect(result.props.className).to.equal("section");
})
