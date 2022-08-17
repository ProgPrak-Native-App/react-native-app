import React from 'react';
import { getMotivatorByType } from '../MotivatorProps';
import { SecurityNetRoutes } from './SecurityNet';
import Title from '../../Title';
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import { LIGHT_BLUE } from '../../../styles';

export type SafetyNetDType = {
  id: number;
  type: string;
  name: string;
  strategies: [string, string, string];
};

const iconMapSize = 32;
export const iconMap = new Map<string, JSX.Element>([
  ['personalStrengths', <Ionicons name="person" size={iconMapSize} />],
  ['people', <FontAwesome5 name="user-friends" size={iconMapSize} />],
  ['activities', <FontAwesome name="soccer-ball-o" size={iconMapSize} />],
  ['other', <Entypo name="dots-three-horizontal" size={iconMapSize} />],
  ['pets', <FontAwesome name="paw" size={iconMapSize} />],
]);

export const empty: SafetyNetDType = {
  id: NaN,
  type: '',
  name: '',
  strategies: ['', '', ''],
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
          style={{ height: 250, width: 250, justifyContent: 'space-evenly' }}>
          <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'personalStrengths' })}>
            <Ionicons name="person" size={iconSize} style={styles.icon} />
          </Pressable>
          <View style={[styles.iconrow, { marginBottom: 30 }]}>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'people' })}>
              <FontAwesome5 name="user-friends" size={iconSize} style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'pets' })}>
              <FontAwesome name="paw" size={iconSize} style={styles.icon} />
            </Pressable>
          </View>
          <View style={[styles.iconrow, { marginTop: 30 }]}>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'activities' })}>
              <FontAwesome name="soccer-ball-o" size={iconSize} style={styles.icon} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SecurityNetItemView', { type: 'other' })}>
              <Entypo name="dots-three-horizontal" size={iconSize} style={styles.icon} />
            </Pressable>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate('SecurityNetItem', { component: structuredClone(empty), modifying: false })
            }>
            <Image
              source={require('../../../assets/icon_plus.png')}
              style={{ height: 48, width: 48, alignSelf: 'center', marginTop: 5 }}
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
    padding: 4,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: LIGHT_BLUE,
  },
  iconrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
