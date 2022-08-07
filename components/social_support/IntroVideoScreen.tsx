import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Title from '../shared/components/Title';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SocialSupportStackParamList } from './SocialNavigation';
import { BACKGROUND, ORANGE, SIZES, TERTIARY } from '../shared/styles';
import { Video } from 'expo-av';

export default function IntroVideoScreen() {
  const { navigate } = useNavigation<NavigationProp<SocialSupportStackParamList>>();

  return (
    <>
      <Title back color={ORANGE} text="Soziale Unterstützung" />
      <View style={styles.container}>
        <View style={{ flex: 0 }}>
          <Text style={styles.heading}>Finde heraus was dahinter steckt!</Text>
        </View>
        <View style={{ flex: 0 }}>
          <Video
            resizeMode="contain"
            source={require('../../assets/Optimism_Infovideo_WIP.mov')}
            style={{ aspectRatio: 16 / 9 }}
            useNativeControls
          />
        </View>
        <View style={[styles.buttons, { flex: 0 }]}>
          <Pressable onPress={() => navigate('SupportExercise', { level: 1 })} style={styles.buttonLvl}>
            <Text style={styles.text}>Level 1</Text>
          </Pressable>
          <Pressable onPress={() => navigate('SupportExercise', { level: 2 })} style={styles.buttonLvl}>
            <Text style={styles.text}>Level 2</Text>
          </Pressable>
          <Pressable onPress={() => navigate('SupportExercise', { level: 3 })} style={styles.buttonLvl}>
            <Text style={styles.text}>Level 3</Text>
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
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  buttonLvl: {
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: TERTIARY,
    height: 48,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    shadowColor: BACKGROUND,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 100,
    shadowRadius: 1,
  },
});
