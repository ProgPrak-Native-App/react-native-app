import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { PRIMARY, TERTIARY } from '../styles';

export type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  responsive?: boolean;
};

export default function KopfsachenButton(props: Props) {
  const { onPress, children, style, accessibilityLabel, accessibilityHint, responsive } = props;
  function onPressBackground(pressed: boolean) {
    return {
      backgroundColor: pressed && (responsive ?? true) ? PRIMARY : TERTIARY,
    };
  }
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [onPressBackground(pressed), styles.button, style]}>
      <Text accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} style={styles.buttonText}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});
