import React, { useState } from 'react';
import Title from '../../shared/components/Title';
import KopfsachenButton from '../../shared/components/button/KopfsachenButton';
import { getMotivatorByType } from '../MotivatorProps';
import SecurityNetClient, { SafetyNetDType } from '../../../api/SecurityNetClient';
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputEndEditingEventData, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SecurityNetRoutes } from './SecurityNet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BLACK, STYLES } from '../../shared/styles';

export default function SecurityNetAssistance({
  navigation,
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetAssistance'>) {
  async function finishSecurityNetItem(navigation: NavigationProp<SecurityNetRoutes>, newComponent: SafetyNetDType) {
    if (newComponent.strategies[0] !== '' || newComponent.strategies[1] !== '' || newComponent.strategies[2] !== '') {
      if (modified) {
        if (modifying) {
          new SecurityNetClient('http://localhost:4010/safetyNet').replaceItem(newComponent);
        } else {
          new SecurityNetClient('http://localhost:4010/safetyNet').addItem(newComponent);
        }
      }
      navigation.navigate('SecurityNetHome');
    }
  }

  const props = getMotivatorByType('relaxation');
  const initialComponent = route.params.component;
  const modifying = route.params.modifying;
  const [modified, setModified] = useState(route.params.modified);
  const [currentComponent, setResource] = useState(initialComponent);

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.text}>Trage bis zu 3 Wege ein, auf denen dir diese Person oder Aktivität helfen kann.</Text>
        <TextInput
          onChangeText={(value) => {
            setResource({
              ...currentComponent,
              strategies: [value, currentComponent.strategies[1], currentComponent.strategies[2]],
            });
            setModified(true);
          }}
          placeholder={
            currentComponent.strategies[0] !== ''
              ? currentComponent.strategies[0]
              : 'Trage hier ein wie dieses Thema dir hilft!'
          }
          style={styles.textinput}
          value={currentComponent.strategies[0]}
        />
        <TextInput
          onChangeText={(value) => {
            setResource({
              ...currentComponent,
              strategies: [currentComponent.strategies[0], value, currentComponent.strategies[2]],
            });
            setModified(true);
          }}
          placeholder={
            currentComponent.strategies[1] !== ''
              ? currentComponent.strategies[1]
              : 'Trage hier ein wie dieses Thema dir hilft!'
          }
          style={styles.textinput}
          value={currentComponent.strategies[1]}
        />
        <TextInput
          onChangeText={(value) => {
            setResource({
              ...currentComponent,
              strategies: [currentComponent.strategies[0], currentComponent.strategies[1], value],
            });
            setModified(true);
          }}
          placeholder={
            currentComponent.strategies[2] !== ''
              ? currentComponent.strategies[2]
              : 'Trage hier ein wie dieses Thema dir hilft!'
          }
          style={styles.textinput}
          value={currentComponent.strategies[2]}
        />
      </View>
      <KopfsachenButton
        onPress={() => finishSecurityNetItem(navigation, currentComponent)}
        style={[styles.button, STYLES.shadow]}>
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
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 9,
    height: 50,
    width: '90%',
  },
  button: {
    paddingHorizontal: 4,
    alignSelf: 'center',
  },
});
