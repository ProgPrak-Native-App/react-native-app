import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { EmoRoutes } from './Navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { getMotivatorByType } from '../motivators/model';
import { ACCENT, BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';

export default function IntroScreen() {
  const { navigate } = useNavigation<NavigationProp<EmoRoutes>>();
  const props = getMotivatorByType('situationControl');
  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Situationskontrolle" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Wenn du Situationskontrolle üben möchtest, kann dir die ALPEN-Methode helfen.</Text>
          <View style={[styles.text, { marginVertical: 10 }]}>
            <View>
              <Text style={styles.heading}>
                <Text style={styles.accent}>A</Text>ufgabe notieren
              </Text>
              <Text style={styles.heading}>
                <Text style={styles.accent}>L</Text>änge schätze
              </Text>
              <Text style={styles.heading}>
                <Text style={styles.accent}>P</Text>ufferzeiten einplanen
              </Text>
              <Text style={styles.heading}>
                <Text style={styles.accent}>E</Text>ntscheidungen treffen
              </Text>
              <Text style={styles.heading}>
                <Text style={styles.accent}>N</Text>achkontrolle
              </Text>
            </View>
          </View>
          <Pressable
            accessibilityHint="Starte Übung"
            onPress={() => navigate('GroupALP')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? PRIMARY : TERTIARY,
              },
              styles.button,
            ]}>
            <Text style={styles.text}>Let's Go</Text>
          </Pressable>
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
    flex: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  button: {
    marginTop: 30,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BLACK,
    minHeight: SIZES.target_size,
    padding: 10,
  },
  heading: {
    alignSelf: 'flex-start',
    marginHorizontal: 40,
    fontSize: SIZES.font,
    marginTop: SIZES.default_line_height,
  },
  accent: {
    fontSize: SIZES.font * 1.2,
    letterSpacing: 12,
    fontWeight: 'bold',
    color: ACCENT,
  },
});
