import React from 'react';
import renderer from 'react-test-renderer';

import Bold from '../Bold';

describe('<Bold />', () => {
  it('Matches Snapshot', async () => {
    const tree = renderer.create(<Bold />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
