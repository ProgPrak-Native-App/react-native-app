import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { TERTIARY } from '../styles';

export type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function KopfsachenButton(props: Props) {
  const { onPress, children, style } = props;
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TERTIARY,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});
