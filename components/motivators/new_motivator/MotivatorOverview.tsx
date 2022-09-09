import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import KopfsachenButton from '../../shared/components/button/KopfsachenButton';
import Title from '../../shared/components/Title';
import React, { useEffect, useState } from 'react';
import { Motivator, MotivatorName, motivators } from '../model';
import { GREY, MOTIVATOR, STYLES } from '../../shared/styles';
import { MotivatorRoutes } from '../MotivatorNavigator';
import MotivatorClient from '../../../api/MotivatorClient';
import { useUserContext } from '../../UserProvider';

function OldMotivatorGridView(motivators: Motivator[]) {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  const { sessionToken } = useUserContext();

  return (
    <>
      {motivators.map((props, index) => (
        <Pressable
          accessibilityHint={'Übungen von ' + props.name + ' öffnen'}
          key={index}
          onPress={() => navigation.navigate(props.screen)}
          style={[styles.gridItem, { backgroundColor: props.color }, STYLES.shadow]}>
          <Text style={styles.text}>{props.name}</Text>
          {props.icon}
        </Pressable>
      ))}
    </>
  );
}

export default function MotivatorOverview() {
  const initialState: Motivator[] = [];
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  const [oldMotivators, setOldMotivators] = useState(initialState);
  const { sessionToken } = useUserContext();

  // update state with motivators
  const client = new MotivatorClient(sessionToken, 'motivator');
  useEffect(() => {
    client.getMotivators().then(setOldMotivators);
  }, []);

  return (
    <>
      <Title
        Icon={() => <Image source={require('../../../assets/motivator.png')} style={{ height: 80, width: 80 }} />}
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
            style={[styles.button, STYLES.shadow]}>
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
});
