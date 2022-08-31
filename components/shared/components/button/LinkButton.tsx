import React, { useCallback } from 'react';
import { Alert, ColorValue, Linking, StyleSheet, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export type KsButtonProp = {
  id?: string;
  label?: string | 'Kein label definiert';
  description?: string;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  link?: string;
  icon?: string;
  children?: JSX.Element | JSX.Element[];
  style?: string;
};

// From https://reactnative.dev/docs/linking#open-links-and-deep-links-universal-links
const LinkButton = (link: KsButtonProp) => {
  const backgroundColor = link.backgroundColor ? link.backgroundColor : '#53C991';
  const linkToOpen = link.link ? link.link : '';
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(linkToOpen);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(linkToOpen);
    } else {
      Alert.alert(`Diese URL wird nicht unterstützt: ${linkToOpen}`);
    }
  }, [link.link]);

  return (
    <View style={styles.container}>
      <FontAwesome5.Button
        backgroundColor={backgroundColor}
        color="#C4C4C4"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={link.icon ? (link.icon as any) : 'circle'}
        onPress={handlePress}
        style={{ borderRadius: 6 }}>
        {link.children}
      </FontAwesome5.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 4,
  },
});

export default LinkButton;
