import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

type WrapperInnerProps = {
  size?: "small";
  children: JSX.Element | JSX.Element[];
};

const WrapperInner = (wrapper: WrapperInnerProps) => {
  const paddingSize = wrapper.size == "small" ? 8 : 16;

  return <View style={{ padding: paddingSize }}>{wrapper.children}</View>;
};

export default WrapperInner;
