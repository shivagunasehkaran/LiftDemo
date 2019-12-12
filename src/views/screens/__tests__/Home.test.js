import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home/Home';

describe('a start run button', () => {
    it('should be present', () => {
        let tree = renderer.create(<Home
            text={'Start Run'} />,
        ).toJSON();
        console.log(tree);
    });
});

test('renders correctly home screen', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});
