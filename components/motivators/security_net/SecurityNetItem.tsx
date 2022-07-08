import React, { useState } from 'react';
import Title from '../../Title';
import KopfsachenButton from '../../KopfsachenButton';
import { getMotivatorByType } from '../MotivatorProps';
import { iconMap, SafetyNetDType } from './SecurityNetHome';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { SecurityNetRoutes } from './SecurityNet';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { GREY } from '../../../styles';

function navigate(
  navigation: NativeStackNavigationProp<SecurityNetRoutes, 'SecurityNetItem'>,
  currentComponent: SafetyNetDType
) {
  if (currentComponent.title !== '...' && currentComponent.icon !== <Text></Text>) {
    navigation.navigate('SecurityNetAssistance', { component: currentComponent });
  }
}

export default function SecurityNetItem({
  navigation,
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetItem'>) {
  const props = getMotivatorByType('relaxation');
  const iconSize = 40;
  const [resource, setResource] = useState('');

  function setTypeAndIcon(component: SafetyNetDType, type: string) {
    component.type = type;
    component.icon = iconMap.get(type);
    setResource(type);
  }

  const currentComponent = route.params.component;

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.text}>Das bereitet mir Freude:</Text>
        <TextInput
          onChangeText={(input: string) => (currentComponent.title = input)}
          placeholder={currentComponent.title}
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 450,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 8,
    padding: 5,
    borderRadius: 4,
  },
  iconcontainer: {
    flexDirection: 'row',
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
