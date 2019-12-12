import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../Detail/Detail';

test('renders correctly detail screen', () => {
    const tree = renderer.create(<Detail />).toJSON();
    expect(tree).toMatchSnapshot();
});
