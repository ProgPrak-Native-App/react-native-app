import React from 'react';
import { getMotivatorByType } from '../MotivatorProps';
import { SecurityNetRoutes } from './SecurityNet';
import Title from '../../Title';
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

export type SafetyNetDType = {
  type: string;
  icon: JSX.Element | undefined;
  title: string;
  strategies: [string, string, string];
};

const iconMapSize = 32;
export const iconMap = new Map<string, JSX.Element>([
  ['personalStrengths', <Ionicons name="person" size={iconMapSize}></Ionicons>],
  ['people', <FontAwesome5 name="user-friends" size={iconMapSize}></FontAwesome5>],
  ['activities', <FontAwesome name="soccer-ball-o" size={iconMapSize}></FontAwesome>],
  ['other', <FontAwesome5 name="tv" size={iconMapSize}></FontAwesome5>],
  ['pets', <FontAwesome name="paw" size={iconMapSize}></FontAwesome>],
]);

export const empty: SafetyNetDType = {
  type: 'NONE',
  icon: undefined,
  title: '...',
  strategies: ['...', '...', '...'],
};

export default function SecurityNetHome() {
  const iconSize = 40;
  const props = getMotivatorByType('relaxation');

  const navigation = useNavigation<NavigationProp<SecurityNetRoutes>>();

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Welche Personen oder Aktivitäten bereiten dir im Alltag Freude und geben dir Antrieb?
        </Text>
        <ImageBackground
          source={require('../../../assets/securitynetIcon.png')}
          style={{ height: 180, width: 180, justifyContent: 'space-between' }}>
          <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'personalStrengths' })}>
            <Ionicons name="person" size={iconSize} style={styles.icon} />
          </Pressable>
          <View style={[styles.iconrow, { marginBottom: 15 }]}>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'people' })}>
              <FontAwesome5 name="user-friends" size={iconSize} style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'pets' })}>
              <FontAwesome name="paw" size={iconSize} style={styles.icon} />
            </Pressable>
          </View>
          <View style={[styles.iconrow, { marginTop: 5 }]}>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'activities' })}>
              <FontAwesome name="soccer-ball-o" size={iconSize} style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'other' })}>
              <FontAwesome name="music" size={iconSize} style={styles.icon} />
            </Pressable>
          </View>
          <Pressable onPress={() => navigation.navigate('SecurityNetItem', { component: empty })}>
            <Image
              source={require('../../../assets/icon_plus.png')}
              style={{ height: 48, width: 48, alignSelf: 'center', marginTop: 10 }}
            />
          </Pressable>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 375,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  iconrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconcontainer: {
    flexDirection: 'row',
  },
});
