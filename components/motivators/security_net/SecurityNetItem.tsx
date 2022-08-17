import React, { useState } from 'react';
import Title from '../../Title';
import KopfsachenButton from '../../KopfsachenButton';
import { getMotivatorByType } from '../MotivatorProps';
import { SafetyNetDType } from './SecurityNetHome';
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
      if (currentComponent.name !== initialComponent.name && currentComponent.type !== initialComponent.type) {
        navigation.navigate('SecurityNetAssistance', {
          component: currentComponent,
          modified: true,
          modifying,
        });
      } else {
        Alert.alert(
          'Da hast du wohl was vergessen',
          'Bitte wähle sowohl einen Titel als auch eine Kategorie für diese Komponente!'
        );
      }
    } else {
      if (currentComponent.name !== initialComponent.name || currentComponent.type !== initialComponent.type) {
        navigation.navigate('SecurityNetAssistance', {
          component: currentComponent,
          modified: true,
          modifying,
        });
      } else {
        navigation.navigate('SecurityNetAssistance', {
          component: currentComponent,
          modified: false,
          modifying,
        });
      }
    }
  }

  const props = getMotivatorByType('relaxation');
  const iconSize = 48;
  const initialComponent = route.params.component;
  const [currentComponent, setResource] = useState(initialComponent);

  const modifying = route.params.modifying;

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Das bereitet mir Freude:</Text>
        <TextInput
          multiline
          onChangeText={(input: string) => setResource({ ...currentComponent, name: input })}
          placeholder={currentComponent.name !== '' ? currentComponent.name : 'Trage hier ein was dir Freude macht!'}
          style={styles.textinput}
        />
        <Text style={styles.text}>Zu welcher Kategorie gehört diese Ressource?</Text>
        <View style={styles.iconcontainer}>
          <Pressable onPress={() => setResource({ ...currentComponent, type: 'personalStrengths' })}>
            <Ionicons
              name="person"
              size={iconSize}
              style={[styles.icon, currentComponent.type === 'personalStrengths' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setResource({ ...currentComponent, type: 'people' })}>
            <FontAwesome5
              name="user-friends"
              size={iconSize}
              style={[styles.icon, currentComponent.type === 'people' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setResource({ ...currentComponent, type: 'pets' })}>
            <FontAwesome
              name="paw"
              size={iconSize}
              style={[styles.icon, currentComponent.type === 'pets' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setResource({ ...currentComponent, type: 'activities' })}>
            <FontAwesome
              name="soccer-ball-o"
              size={iconSize}
              style={[styles.icon, currentComponent.type === 'activities' ? { backgroundColor: GREY } : {}]}
            />
          </Pressable>
          <Pressable onPress={() => setResource({ ...currentComponent, type: 'other' })}>
            <FontAwesome5
              name="tv"
              size={iconSize}
              style={[styles.icon, currentComponent.type === 'other' ? { backgroundColor: GREY } : {}]}
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
