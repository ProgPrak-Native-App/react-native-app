import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Title from './shared/components/Title';
import { PINK, SIZES } from './shared/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MotivatorNavigatorProps, MotivatorRoutes } from './motivators/MotivatorNavigator';
import { motivators } from './motivators/model';
import KopfsachenButton from './shared/components/button/KopfsachenButton';
import { CompositeScreenProps } from '@react-navigation/native';

type Props = CompositeScreenProps<
  NativeStackScreenProps<MotivatorRoutes, 'MotivatorCompleted'>,
  MotivatorNavigatorProps
>;

export default function MotivatorCompleted({ navigation, route }: Props) {
  function onContinue() {
    // reset the MotivatorNavigator instead of just navigating, so that when the user later navigates there,
    // this screen isn't still shown
    navigation.reset({
      routes: [{ name: 'MotivatorOverview' }],
    });

    // if we came from mood entry, we return there to prompt the user for their final mood of the day
    if (route.params?.origin === 'MoodDiary') {
      navigation.navigate('MoodDiary', { screen: 'MoodEntry', params: { returnFrom: 'Motivator' } });
    }
  }

  const motivatorTitle = motivators[route.params.motivator].name;
  return (
    <>
      <Title Icon={() => <Image source={require('../assets/motivator.png')} />} color={PINK} text="Meine Starkmacher" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>{motivatorTitle} ist nun Teil deiner Starkmacher!</Text>
        <KopfsachenButton onPress={onContinue}>Okay!</KopfsachenButton>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  text: {
    marginVertical: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: SIZES.font * 1.5,
    lineHeight: SIZES.default_line_height,
  },
});
