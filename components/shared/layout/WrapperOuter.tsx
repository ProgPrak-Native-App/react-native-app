import React from 'react';
import { View } from 'react-native';

type WrapperOuterProps = {
  size?: 'small';
  children: JSX.Element | JSX.Element[];
};

const WrapperOuter = (wrapper: WrapperOuterProps) => {
  const marginSize = wrapper.size === 'small' ? 8 : 16;

  return <View style={{ margin: marginSize }}>{wrapper.children}</View>;
};

export default WrapperOuter;
