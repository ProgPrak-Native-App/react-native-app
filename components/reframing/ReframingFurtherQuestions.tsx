import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Title from '../Title';
import { ACCENT, BLACK, PINK, PRIMARY, SIZES, TERTIARY } from '../../styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../motivators/Motivator';
import { getMotivatorByType } from '../motivators/MotivatorProps';

export default function RefraimingFurtherQuestions() {
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();
  const props = getMotivatorByType('reframing');

  return (
    <>
      <Title Icon={() => props.icon} back color={PINK} text="Reframing" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Belastet dich aktuell das Verhalten einer anderen Person, denk über folgende Fragen nach:
        </Text>

        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>
          1. Was sind mögliche Gründe für dieses Verhalten (die ggf. nichts mit dir zu tun haben)?
        </Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>
          2. Welche Bedürfnisse der anderen Person könnten dahinter stehen? (Zugehörigkeit, Verständnis, Sicherheit
          etc.)
        </Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>
          3. Was braucht diese Person mit diesem Bedürfnis? Was braucht sie anders als bisher?
        </Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>4. Von wem braucht diese Person etwas?</Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>5. Was braucht sie nicht?</Text>
        <Text style={[styles.text, { color: ACCENT, fontWeight: 'bold' }]}>
          6. Was konkret kannst du als nächstes tun?
        </Text>

        <View style={styles.btnConatiner}>
          <Pressable
            onPress={() =>
              navigate('FeedbackNavigation', { name: 'MotivatorCompleted', title: 'Refraiming', color: PINK })
            }
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
            <Text style={styles.buttonText}>Ich bin zu einer neuen Bewertung der Situationen gekommen.</Text>
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
