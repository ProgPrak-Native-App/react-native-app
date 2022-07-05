import React from 'react';
import renderer from 'react-test-renderer';

import Bold from '../Bold';

describe('<Bold />', () => {
  it('Is a Bold component', async () => {
    const tree = renderer.create(<Bold />);
    expect(tree.getInstance()?.type).toBe(<Bold />);
  });
  it('Matches Snapshot', async () => {
    const tree = renderer.create(<Bold />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Text is bold', async () => {
    const tree = renderer.create(<Bold />);
    console.log('tree root', tree.root);
    console.log('tree toTree', tree.toTree());

    const styles = tree.getInstance();
    console.log('styles', styles);
    expect(styles).toBe('bold');
  });

  it('Adding additional property works', async () => {
    // eslint-disable-next-line react-native/no-raw-text
    const tree = renderer.create(<Bold style={{ backgroundColor: 'red' }}>Boldtext</Bold>).toJSON();
    console.log('tree as json', tree);
    expect(tree).toMatchSnapshot();
  });
  afterAll(() => setTimeout(() => process.exit(0), 1000));
});
