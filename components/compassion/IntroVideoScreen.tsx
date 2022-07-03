import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Title from '../Title';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../../styles';
import { ResizeMode, Video } from 'expo-av';
import { CompassionRoutes } from './CompassionNavigation';

export default function IntroVideoScreen() {
  const { navigate } = useNavigation<NavigationProp<CompassionRoutes>>();
  const video = React.useRef(null);
  return (
    <>
      <Title back color={PURPLE} text="Selbstbezogenes Mitgefühl" />
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
        <View style={styles.buttons}>
          <Pressable
            onPress={() => navigate('Home')}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.buttonLvl]}>
            <Text style={styles.text}>Andere Stargeie auswählen</Text>
          </Pressable>
          <Pressable
            onPress={() => navigate('CompassionMeditation')}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.buttonLvl]}>
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
    marginVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonLvl: {
    minHeight: SIZES.target_size,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15,
    maxWidth: '48%',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderColor: BLACK,
    borderWidth: 1,
  },
});
