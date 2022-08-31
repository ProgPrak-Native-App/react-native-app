import { Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react';
import Title from '../shared/components/Title';
import { DARK_GREY, ORANGE, SIZES, TERTIARY } from '../shared/styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SocialSupportStackParamList } from './SocialNavigation';
import { getMotivatorByType } from '../motivators/MotivatorProps';

export default function IntroScreen() {
  const { navigate } = useNavigation<NavigationProp<SocialSupportStackParamList>>();
  const props = getMotivatorByType('socialSupport');
  return (
    <>
      <Title Icon={() => props.icon} back color={ORANGE} text="Soziale Unterstützung" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Anderen Personen tragen eine Menge dazu bei, wie es uns geht und können helfen zurechtzukommen.
          </Text>
          <Text style={[styles.text, { marginTop: SIZES.default_pSpace }]}>
            Gerade auch wir allein vielleicht einmal an unsere Grenzen stoßen – frei nach dem Motto gemeinsam sind wir
            stark!
          </Text>
          <Pressable
            accessibilityHint="Mehr zur Übung"
            onPress={() => navigate('IntroVideoScreen')}
            style={styles.button}>
            <Text style={styles.text}>Let's Go</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    flex: 0,
  },
  text: {
    flex: 0,
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  button: {
    marginTop: 30,
    width: '100%',
    borderRadius: 20,
    backgroundColor: TERTIARY,
    minHeight: 48,
    padding: 10,
    borderColor: DARK_GREY,
    borderWidth: 1,
    shadowColor: DARK_GREY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 100,
    shadowRadius: 1,
  },
});
