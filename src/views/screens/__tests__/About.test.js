import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About/About';

test('renders correctly about screen', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
});
