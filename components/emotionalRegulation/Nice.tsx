import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { motivators } from '../motivators/model';
import { BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';
import { MotivatorRoutes } from '../motivators/MotivatorNavigator';

export default function Nice() {
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();
  return (
    <>
      <Title Icon={() => motivators.situationControl.icon} back color={PURPLE} text="Situationskontrolle" />
      <ImageBackground source={require('../../assets/images/achievement-gf08e1d499_1920.png')} style={styles.img} />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.heading}>Super gemacht!</Text>
          <Text style={styles.description}>Du bist heute ein ganzes Stück weitergekommen mit deinen Aufgaben.</Text>
        </View>
        <Pressable
          accessibilityHint="Beende die Übung"
          onPress={() => navigate('Feedback', { motivator: 'situationControl' })}
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
    minHeight: SIZES.target_size,
    minWidth: '40%',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 15,
  },
});
