import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../../styles';
import Title from '../Title';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../motivators/Motivator';
import { getMotivatorByType } from '../motivators/MotivatorProps';

export default function Nice() {
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();
  const props = getMotivatorByType('situationControl');
  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Situationskontrolle" />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.heading}>Super gemacht!</Text>
          <Text style={styles.description}>Du bist heute ein ganzes Stück weitergekommen mit deinen Aufgaben.</Text>
        </View>
        <Image source={require('../../assets/images/achievement-gf08e1d499_1920.png')} style={styles.img} />
        <Pressable
          accessibilityHint="Beende die Übung"
          onPress={() => {
            navigate('FeedbackNavigation', { name: 'MoodEntry', title: 'Situationskontrolle', color: PURPLE });
          }}
          style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
          <Text style={styles.txt}>Fertig</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    position: 'absolute',
    top: '40%',
    height: 450,
    width: '100%',
    resizeMode: 'cover',
    zIndex: -10,
  },
  txt: {
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    padding: 12,
  },
  container: {
    maxHeight: '100%',
    marginTop: 30,
    width: '88%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  heading: {
    alignSelf: 'center',
    paddingBottom: 5,
    fontSize: SIZES.font * 2,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    lineHeight: SIZES.default_line_height,
    fontSize: SIZES.font,
  },
  btn: {
    position: 'absolute',
    minHeight: SIZES.target_size,
    width: '40%',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top: '270%',
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 15,
  },
});
