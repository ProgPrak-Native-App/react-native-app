import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from './Motivator';
import KopfsachenButton from '../KopfsachenButton';
import Title from '../Title';
import React, { useEffect, useState } from 'react';
import { MotivatorProps, MotivatorTypes, getMotivatorByType } from './MotivatorProps';
import { GREY, MOTIVATOR, SHADOW } from '../../styles';
import OldMotivator from './old_motivator/OldMotivator';

async function getMotivators() {
  // change to BASE_URL once merged -> feature/7/wiki
  return await fetch('http://localhost:4010/motivator', {
    headers: {
      Authorization: 'Bearer react-native-app',
    },
  })
    .then((response) => response.json())
    .then((data: { type: keyof MotivatorTypes }[]) => data.map((value) => getMotivatorByType(value.type)))
    .catch(() => [getMotivatorByType('noMotivator')]);
}

function OldMotivatorGridView(motivators: MotivatorProps[]) {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  return (
    <>
      {motivators.map((props, index) => (
        <Pressable
          accessibilityHint={'Übungen von ' + props.name + ' öffnen'}
          key={index}
          onPress={() => navigation.navigate(props.screen, { props: props.type })}
          style={[styles.gridItem, { backgroundColor: props.color }, styles.shadow]}>
          <Text style={styles.text}>{props.name}</Text>
          {props.icon}
        </Pressable>
      ))}
    </>
  );
}

export default function MotivatorSelection() {
  const initialState: MotivatorProps[] = [];
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  const [oldMotivators, setOldMotivators] = useState(initialState);

  // update state with motivators
  useEffect(() => {
    getMotivators().then(setOldMotivators);
  }, []);

  return (
    <>
      <Title
        Icon={() => <Image source={require('../../assets/motivator.png')} style={{ height: 80, width: 80 }} />}
        color={MOTIVATOR.DEFAULT}
        text="Meine Starkmacher"
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Du hast schon so viele Starkmacher erkannt.{'\n'}Wenn du an deinen bestehenden Starkmachern arbeiten willst,
            klicke einfach auf das entsprechende Symbol! Ansonsten kriegst du nach einem Klick auf “Neue Starkmacher
            entdecken” eine Auswahl von neuen Übungen.
          </Text>

          <KopfsachenButton
            accessibilityHint={'Neue Starkmacher entdecken'}
            onPress={() => navigation.navigate('NewMotivator')}
            style={[styles.button, styles.shadow]}>
            Neue Starkmacher entdecken!
          </KopfsachenButton>
        </View>

        <View style={styles.gridContainer}>{OldMotivatorGridView(oldMotivators)}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '46%',
    height: 120,
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: GREY,
  },
  gridContainer: {
    marginVertical: 5,
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    marginTop: 15,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    letterSpacing: 0,
  },
  button: {
    margin: 15,
    paddingHorizontal: 4,
    alignSelf: 'center',
  },
  shadow: {
    elevation: 4,
    shadowColor: SHADOW,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
