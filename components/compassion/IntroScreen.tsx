import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { BLACK, GREY, PRIMARY, PURPLE, SIZES, TERTIARY } from '../../styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import Title from '../Title';
import { CompassionRoutes } from './CompassionNavigation';

export default function IntroScreen() {
  const { navigate } = useNavigation<NavigationProp<CompassionRoutes>>();
  return (
    <>
      <Title back color={PURPLE} text="Selbstbezogenes Mitgefühl" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Es ist nicht schlimm, wenn du heute nicht so viele von den Aufgaben erledigen konntest.
          </Text>
          <Text style={[styles.text, { marginTop: 20 }]}>
            Probier’ doch eine Übung zum Selbstmitgefühl in schwierigen Situationen aus!
          </Text>
          <View style={styles.btnContainer}>
            <Pressable 
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}
              onPress={() => navigate('Home')}>
              <Text style={styles.text}>Heute nicht</Text>
            </Pressable>
            <Pressable 
              onPress={() => navigate('IntroVideoScreen')}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
              <Text style={styles.text}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    paddingBottom: 40,
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    flex: 0,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 30,
    width: '40%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: BLACK,
    minHeight: SIZES.target_size,
    padding: 15,
  },
  heading: {
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
    lineHeight: SIZES.default_line_height * 1.1,
    fontSize: SIZES.font * 1.1,
    marginTop: SIZES.default_line_height,
  },
});
