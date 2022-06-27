/* eslint-disable no-undef */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { StyleSheet, View, ColorValue, StyleProp, ViewStyle } from 'react-native';
import WrapperOuter from './WrapperOuter';
import WrapperInner from './WrapperInner';

type CardProps = {
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
};

const Card = (card: CardProps) => {
  return (
    <WrapperOuter>
      <View style={[styles.container, card.style, { backgroundColor: card.color ? card.color : '#dcdcde' }]}>
        <WrapperInner>{card.children}</WrapperInner>
      </View>
    </WrapperOuter>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
  },
});

export default Card;
