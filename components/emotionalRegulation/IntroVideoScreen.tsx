import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Title from '../Title';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BLACK, PURPLE, SIZES, TERTIARY } from '../../styles';
import { ResizeMode, Video } from 'expo-av';
import { EmoRoutes } from './Navigation';

export default function IntroVideoScreen() {
  const navigation = useNavigation<NavigationProp<EmoRoutes>>();
  const video = React.useRef(null);

  return (
    <>
      <Title back color={PURPLE} text="Emotionsregulation" />
      <View style={styles.container}>
        <View style={{ flex: 0 }}>
          <Text style={styles.heading}>Finde heraus was dahinter steckt!</Text>
        </View>
        <View style={{ flex: 0 }}>
          <Video
            ref={video}
            resizeMode={ResizeMode.CONTAIN}
            source={require('../../assets/Optimism_Infovideo_WIP.mov')}
            style={{ aspectRatio: 16 / 9 }}
            useNativeControls
          />
        </View>
        <View style={[styles.buttons, { flex: 0 }]}>
          <Pressable onPress={() => navigation.goBack()} style={styles.buttonLvl}>
            <Text style={styles.text}>Andere Strategie auswählen</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('IntroScreen')} style={styles.buttonLvl}>
            <Text style={styles.text}>Das will ich üben</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    flex: 0,
    width: '90%',
    alignSelf: 'center',
  },
  heading: {
    marginBottom: 20,
    fontSize: SIZES.font * 1.5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    padding: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonLvl: {
    borderColor: BLACK,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: TERTIARY,
    minHeight: SIZES.target_size,
    maxWidth: '48%',
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});
