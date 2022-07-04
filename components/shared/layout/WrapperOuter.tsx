import React, { useCallback } from "react";
import { Alert, Button, Linking, Text, StyleSheet, View, ColorValue, NativeSyntheticEvent, NativeTouchEvent, StyleProp, ViewStyle } from "react-native";

type WrapperOuterProps = {
    size?: 'small';
    children: JSX.Element|JSX.Element[];

};


const WrapperOuter = (wrapper: WrapperOuterProps) => {
  const marginSize = wrapper.size == "small" ? 8 : 16;
  
  return (
      <View style={{margin: marginSize}}>
        {wrapper.children}
      </View>);
};

export default WrapperOuter;
