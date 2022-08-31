import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { ReframingRoutes } from './Reframing';
import { getMotivatorByType } from '../motivators/MotivatorProps';
import Title from '../shared/components/Title';
import { ACCENT, BLACK, PINK, PRIMARY, SIZES, TERTIARY } from '../shared/styles';

export default function RefraimingQuestions() {
  const { navigate } = useNavigation<NavigationProp<ReframingRoutes>>();
  const props = getMotivatorByType('reframing');
  return (
    <>
      <Title Icon={() => props.icon} back color={PINK} text="Reframing" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Nun geht es darum die Perspektive zu wechseln und die Situationen in einen neuen Rahmen zu stellen. Es ist
          dabei nicht zwingend nötig eine positive Interpretaion der Situation zu finden, auch eine neutrale
          Interpretation kann dir helfen, die negative Stimmung zu bessern.
        </Text>
        <Text style={styles.text}>
          Geht es um eine bestimmte Handlung/ Verhalten, die du nicht ausführen möchtest, helfen dir die folgenden
          Fragen zu einer positiveren/ neutralen Bewertung zu kommen.
        </Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>
          A) Kontext erweitern/ in einem anderen Kontext betrachten:
        </Text>
        <Text style={styles.text}>Welchen Vorteil könnte eine ungeliebte Tätigkeit haben?</Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>B) Andere Bewertung anbieten:</Text>
        <Text style={styles.text}> Wozu könnte ein gewisses Verhalten dienen? Welche Funktion könnte es haben?</Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>C) Perspektive ändern:</Text>
        <Text style={styles.text}>Welche Bedeutung könnte es in 10 Jahren haben?</Text>

        <View style={styles.btnConatiner}>
          <Pressable
            onPress={() => navigate('ReframingFurtherQuestions')}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
            <Text style={styles.buttonText}>Weiter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingBottom: '15%',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    width: '90%',
  },
  btnConatiner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: BLACK,
    width: '90%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
});
