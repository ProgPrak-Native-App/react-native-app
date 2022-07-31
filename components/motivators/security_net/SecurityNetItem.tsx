import React, { useEffect, useState } from 'react';
import Title from '../../Title';
import KopfsachenButton from '../../KopfsachenButton';
import { getMotivatorByType } from '../MotivatorProps';
import { empty, SafetyNetDType } from './SecurityNetHome';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView, Alert } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { SecurityNetRoutes } from './SecurityNet';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BLACK, GREY, SHADOW } from '../../../styles';

export default function SecurityNetItem({
  navigation,
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetItem'>) {
  function navigate(
    navigation: NativeStackNavigationProp<SecurityNetRoutes, 'SecurityNetItem'>,
    currentComponent: SafetyNetDType
  ) {
    if (!modifying) {
      console.log(initialComponent);
      if (currentComponent.title !== initialComponent.title && currentComponent.type !== initialComponent.type) {
        navigation.navigate('SecurityNetAssistance', { component: currentComponent, modified: true });
      } else {
        Alert.alert(
          'Da hast du wohl was vergessen',
          'Bitte wähle sowohl einen Titel als auch eine Kategorie für diese Komponente!'
        );
      }
    } else {
      if (currentComponent.title !== initialComponent.title && currentComponent.type !== initialComponent.type) {
        navigation.navigate('SecurityNetAssistance', { component: currentComponent, modified: true });
      }
      navigation.navigate('SecurityNetAssistance', { component: currentComponent, modified: false });
    }
  }

  function setTypeAndIcon(component: SafetyNetDType, type: string) {
    component.type = type;
    setResource(type);
  }

  const props = getMotivatorByType('relaxation');
  const iconSize = 48;
  const [resource, setResource] = useState('');

  useEffect(() => {
    setResource(currentComponent.type);
  });

  const currentComponent = route.params.component;
  const test = JSON.parse(JSON.stringify(currentComponent));
  const initialComponent: SafetyNetDType = {
    id: currentComponent.id.valueOf(),
    type: currentComponent.type.valueOf(),
    title: currentComponent.title.valueOf(),
    strategies: currentComponent.strategies,
  };

  const modifying = route.params.modifying;

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Das bereitet mir Freude:</Text>
        <TextInput
          multiline
          onChangeText={(input: string) => (currentComponent.title = input)}
          placeholder={currentComponent.title !== '' ? currentComponent.title : 'Trage hier ein was dir Freude macht!'}
          style={styles.textinput}
        />
        <Text style={styles.text}>Zu welcher Kategorie gehört diese Ressource?</Text>
        <View style={styles.iconcontainer}>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, 'personalStrengths')}>
            <Ionicons
              name="person"
              size={iconSize}
              style={[styles.icon, resource === 'personalStrengths' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, 'people')}>
            <FontAwesome5
              name="user-friends"
              size={iconSize}
              style={[styles.icon, resource === 'people' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, 'pets')}>
            <FontAwesome
              name="paw"
              size={iconSize}
              style={[styles.icon, resource === 'pets' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, 'activities')}>
            <FontAwesome
              name="soccer-ball-o"
              size={iconSize}
              style={[styles.icon, resource === 'activities' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, 'other')}>
            <FontAwesome5
              name="tv"
              size={iconSize}
              style={[styles.icon, resource === 'other' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
        </View>
        <KopfsachenButton onPress={() => navigate(navigation, currentComponent)} style={[styles.button, styles.shadow]}>
          Ressource hinzufügen!
        </KopfsachenButton>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 450,
    marginHorizontal: 25,
    paddingTop: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: 'center',
  },
  icon: {
    padding: 8,
    marginHorizontal: 2,
    overflow: 'hidden',
    borderRadius: 12,
  },
  iconcontainer: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  textinput: {
    textAlign: 'center',
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 9,
    minHeight: 50,
    width: '90%',
    marginVertical: 30,
  },
  button: {
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
