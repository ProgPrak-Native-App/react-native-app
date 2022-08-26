import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import TimeModal from './TimeModal';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { EmoRoutes } from './Navigation';
import { getMotivatorByType } from '../motivators/MotivatorProps';
import { ACCENT, BLACK, LIGHT_BLUE, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';

export default function N() {
  const { navigate } = useNavigation<NavigationProp<EmoRoutes>>();
  const props = getMotivatorByType('situationControl');
  const [visible, setVisible] = useState(false);

  /** toggles time picker modal */
  const onToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {visible && <TimeModal toggle={onToggle} />}
      <Title Icon={() => props.icon} back color={PURPLE} text="Situationskontrolle" />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.para}>
            Der letzte Schritt der <Text style={{ color: ACCENT, fontWeight: 'bold' }}>ALPEN</Text>-Methode ist die
            Nachkontrolle.
          </Text>
        </View>
        <View>
          <Text style={styles.heading}>
            <Text style={styles.accent}>N</Text>achkontrolle:
          </Text>
          <Text style={styles.description}>a) Was habe ich geschafft, was nicht?</Text>
        </View>
        <View style={styles.bckRem}>
          <Text style={styles.para}>
            Wenn du möchtest, erhälst Du am Ende des Tages eine Benachrichtigung, um einzutragen, was du geschafft hast.
            Danach ist die Situationskontrolle Teil deiner Starkmacher!
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            accessibilityHint="Stelle Benachitigung ein"
            onPress={onToggle}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
            <Text style={styles.txt}>Bitte erinnere mich nachher</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Zurück zum Home Screen"
            onPress={() => navigate('InterScreen')}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
            <Text style={styles.txt}>Lieber beim nächsten Mal</Text>
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
  bckRem: {
    backgroundColor: LIGHT_BLUE,
    padding: 20,
    marginVertical: 10,
  },
  para: {
    fontSize: SIZES.font,
    marginHorizontal: 10,
    textAlign: 'center',
    lineHeight: SIZES.default_line_height,
  },
  container: {
    minHeight: '100%',
    marginTop: 30,
    width: '88%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  heading: {
    alignSelf: 'flex-start',
    paddingBottom: 5,
    fontSize: SIZES.font,
    marginTop: SIZES.default_line_height,
  },
  accent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ACCENT,
  },
  description: {
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    lineHeight: SIZES.default_line_height,
    fontSize: SIZES.font,
  },
  btnContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    flex: 0,
  },
  btn: {
    minHeight: 48,
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 15,
  },
});
