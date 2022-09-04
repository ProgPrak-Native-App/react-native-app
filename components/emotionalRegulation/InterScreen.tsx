import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CompositeScreenProps } from '@react-navigation/native';
import { EmoNavigationProps, EmoRoutes } from './Navigation';
import { motivators } from '../motivators/model';
import { BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = CompositeScreenProps<NativeStackScreenProps<EmoRoutes, 'InterScreen'>, EmoNavigationProps>;

export default function InterScreen({ navigation }: Props) {
  return (
    <>
      <Title Icon={() => motivators.situationControl.icon} back color={PURPLE} text="Situationskontrolle" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[{ marginBottom: 30 }, styles.txt]}>Es ist Zeit deinen Tagesplan zu kontrollieren!</Text>
        <View style={{ width: '100%' }}>
          <Pressable
            accessibilityHint="Beende die Übung"
            onPress={() => navigation.navigate('NKontrolle')}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
            <Text style={[{ marginVertical: 10 }, styles.txt]}>Alles klar!</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Beende die Übung"
            onPress={() => navigation.navigate('Feedback', { motivator: 'situationControl' })}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
            <Text style={[{ marginVertical: 10 }, styles.txt]}>Heute lieber nicht</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    padding: 12,
  },
  container: {
    minHeight: '100%',
    marginTop: 30,
    width: '88%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btn: {
    marginBottom: 50,
    minHeight: 48,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 20,
  },
});
