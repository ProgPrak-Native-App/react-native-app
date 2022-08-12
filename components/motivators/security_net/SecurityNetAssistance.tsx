import React, { useState } from 'react';
import Title from '../../Title';
import KopfsachenButton from '../../KopfsachenButton';
import { getMotivatorByType } from '../MotivatorProps';
import { SafetyNetDType } from './SecurityNetHome';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SecurityNetRoutes } from './SecurityNet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function SecurityNetAssistance({
  navigation,
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetAssistance'>) {
  async function finishSecurityNetItem(navigation: NavigationProp<SecurityNetRoutes>, newComponent: SafetyNetDType) {
    console.log(modified);
    if (newComponent.strategies[0] !== '' || newComponent.strategies[1] !== '' || newComponent.strategies[2] !== '') {
      if (modified) {
        const response = await fetch('http://localhost:4010/safetyNet/75', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer react-native-app',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComponent),
        });
        console.log(await response.json());
        // TODO: send SafetyNetItem to DB with POST
      }
      navigation.navigate('SecurityNetHome');
    }
  }

  const props = getMotivatorByType('relaxation');
  const initialComponent = route.params.component;
  const [modified, setModified] = useState(route.params.modified);
  const [currentComponent, setResource] = useState(initialComponent);

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.text}>Trage bis zu 3 Wege ein, auf denen dir diese Person oder Aktivität helfen kann.</Text>
        <TextInput
          onChangeText={(input: string) => {
            setResource({
              ...currentComponent,
              strategies: [input, currentComponent.strategies[1], currentComponent.strategies[2]],
            });
            setModified(true);
          }}
          placeholder={
            currentComponent.strategies[0] !== ''
              ? currentComponent.strategies[0]
              : 'Trage hier ein wie dieses Thema dir hilft!'
          }
          style={styles.textinput}
        />
        <TextInput
          onChangeText={(input: string) => {
            setResource({
              ...currentComponent,
              strategies: [currentComponent.strategies[0], input, currentComponent.strategies[2]],
            });
            setModified(true);
          }}
          placeholder={
            currentComponent.strategies[1] !== ''
              ? currentComponent.strategies[1]
              : 'Trage hier ein wie dieses Thema dir hilft!'
          }
          style={styles.textinput}
        />
        <TextInput
          onChangeText={(input: string) =>
            setResource({
              ...currentComponent,
              strategies: [currentComponent.strategies[0], currentComponent.strategies[1], input],
            })
          }
          placeholder={
            currentComponent.strategies[2] !== ''
              ? currentComponent.strategies[2]
              : 'Trage hier ein wie dieses Thema dir hilft!'
          }
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
    width: '90%',
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
