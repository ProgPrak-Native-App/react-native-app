import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CompassionRoutes } from './CompassionNavigation';
import { getMotivatorByType } from '../motivators/model';
import { BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';
import { TabRoutes } from '../MainTabBar';

export default function IntroScreen() {
  const navigation = useNavigation<NavigationProp<CompassionRoutes>>();
  const { navigate } = useNavigation<NavigationProp<TabRoutes>>();
  const props = getMotivatorByType('compassion');
  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Selbstbezogenes Mitgefühl" />
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
              onPress={() => navigate('Home')}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
              <Text style={styles.text}>Heute nicht</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('IntroVideoScreen')}
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
