import React from 'react';
import Title from '../../Title';
import KopfsachenButton from '../../KopfsachenButton';
import { getMotivatorByType } from '../MotivatorProps';
import { SafetyNetDType } from './SecurityNetHome';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SecurityNetRoutes } from './SecurityNet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

async function finishSecurityNetItem(navigation: NavigationProp<SecurityNetRoutes>, newComponent: SafetyNetDType) {
  if (
    newComponent.strategies[0] !== '...' &&
    newComponent.strategies[1] !== '...' &&
    newComponent.strategies[2] !== '...'
  ) {
    // TODO: send SafetyNetItem to DB with POST
    navigation.navigate('SecurityNetHome');
  }
}

export default function SecurityNetAssistance({
  navigation,
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetAssistance'>) {
  const props = getMotivatorByType('relaxation');
  const currentComponent = route.params.component;

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.text}>Trage 3 Wege ein, auf denen dir diese Person oder Aktivität helfen kann.</Text>
        <TextInput
          onChangeText={(input: string) => (currentComponent.strategies[0] = input)}
          placeholder={currentComponent.strategies[0]}
          style={styles.textinput}
        />
        <TextInput
          onChangeText={(input: string) => (currentComponent.strategies[1] = input)}
          placeholder={currentComponent.strategies[1]}
          style={styles.textinput}
        />
        <TextInput
          onChangeText={(input: string) => (currentComponent.strategies[2] = input)}
          placeholder={currentComponent.strategies[2]}
          style={styles.textinput}
        />
      </View>
      <KopfsachenButton
        onPress={() => finishSecurityNetItem(navigation, currentComponent)}
        style={[styles.button, styles.shadow]}>
        Weiter!
      </KopfsachenButton>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 350,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: 'center',
  },
  textinput: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 9,
    height: 50,
    width: 250,
  },
  button: {
    paddingHorizontal: 4,
    alignSelf: 'center',
  },
  shadow: {
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
