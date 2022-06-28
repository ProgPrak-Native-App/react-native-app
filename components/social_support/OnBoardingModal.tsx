import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, Modal, View, StyleSheet, Pressable } from 'react-native';
import { ARROW_GRAY, ORANGE, PRIMARY, PURPLE, SIZES, WHITE } from '../../styles';
import { SocialSupportStackParamList } from './SocialNavigation';

const textLvl1 = [
  {
    heading: '',
    text: 'Für diese Übung trägst Du Menschen aus Deinem Umfeld in folgendes Schema ein. Du selbst bist der Mittelpunkt.',
  },
  {
    heading: 'Innerer Kreis:',
    text: 'Trage hier die wichtigsten Menschen in deinem Leben ein.',
  },
  {
    heading: 'Mittlerere Kreis:',
    text: 'Trage hier Personen ein, die dir noch nahe stehen und/oder mit denen du regelmäßig Zeit verbringst.',
  },
  {
    heading: 'Äußerer Kreis:',
    text: 'Trage hier Bekannte und eher entferntere Personen ein, mit denen du aber auch ab und zu zu tun hast.',
  },
];
const textLvl2 = [
  {
    icon: '❤️📚 💪',
    heading: '',
    text: 'Schaue dir noch einmal dein soziales Netz an. Überlege, welche Personen dich vielleicht schon wie unterstützt haben oder an wen du dich in Bezug auf bestimmten Themen beziehungsweise Bedürfnissen am ehsten wenden würdest und versehe die Personen in deinem sozialen Netz mit den entsprechenden, folgenden Symbolen. (Jede Person kann 0-3 Symbole zugeordnet bekommen.)',
  },
  {
    icon: '❤️',
    heading: 'Emotionale Unterstützung:',
    text: 'Manchmal tut es einfach nur gut, über die eigenen Gefühle sprechen zu können und sich verstanden und akzeptiert zu fühlen beziehungsweise braucht man vielleicht auch nur eine mitfühlende Umarmung, Aufmunterung oder das überhaupt jemand da ist.',
  },
  {
    icon: '📚 ',
    heading: 'Informationale Unterstützung:',
    text: 'Zwei Köpfe sind nicht selten besser als einer und Wissen, Ratschläge und Meinungen anderer können hilfreich sein, wenn wir uns mit Dingen nicht so sicher fühlen – immerhin, vielleicht hat eine andere Person schon Erfahrungen mit einem bestimmten Problem gemacht oder kennt sich mit dem Thema aus, was uns Sorgen bereitet.',
  },
  {
    icon: '💪',
    heading: 'Instrumentale Unterstützung:', 
    text: 'Bei so manchem Problem, was uns Kopfzerbrechen bereitet, kann praktische Hilfe Anderer und sei sie in Form von Taten oder materiellen Dingen einiges dazu beitragen, die Situation zu lösen oder zumindest besser zu machen.',
  },
];
export default function OnBoardingModal({ toggle, level }: { toggle: () => void; level: number }) {
  const { navigate } = useNavigation<NavigationProp<SocialSupportStackParamList>>();

  const [innerColor, setInnerColor] = useState('#f9bf9e');
  const [middleColor, setMiddleColor] = useState('#e9dffb');
  const [outerColor, setOuterColor] = useState('#c8feed');
  const [count, setCount] = useState(0);

  const shrinking = () => {
    if (count === 0) {
      navigate('IntroVideoScreen');
    } else if (count === 1) {
      setInnerColor('#f9bf9e');
    } else if (count === 2) {
      setInnerColor(ORANGE);
      setMiddleColor('#e9dffb');
    } else {
      setMiddleColor(PURPLE);
      setOuterColor('#c8feed');
    }
    setCount((prev) => prev - 1);
  };

  const expanding = () => {
    if (count === 0) {
      setInnerColor(ORANGE);
    }else if (count === 1) {
      setInnerColor('#f9bf9e');
      setMiddleColor(PURPLE);
    } else if (count === 2) {
      setMiddleColor('#e9dffb');
      setOuterColor(PRIMARY);
    } else if (count === 3) {
      toggle();
    }
    setCount((prev) => prev + 1);
  };
  return (
    <Modal transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.background}>
          {level === 1 && (
            <>
              <View style={[styles.container, { flex: 0 }]}>
                <View style={[styles.outerCircle, { backgroundColor: outerColor }]} />
                <View style={[styles.middleCircle, { backgroundColor: middleColor }]} />
                <View style={[styles.innerCircle, { backgroundColor: innerColor }]} />
                <View style={styles.meCircle}>
                  <Text style={{ fontSize: 18 }}>ICH</Text>
                </View>
              </View>
              <View style={{ flex: 0, minHeight: 150 }}>
                <Text style={styles.heading}>{textLvl1[count].heading}</Text>
                <Text style={styles.text}>{textLvl1[count].text}</Text>
              </View>
            </>
          )}
          {level === 2 && (
            <>
              <View style={styles.container}>
                <View style={{ flex: 0 }}>
                  <Text style={{ fontSize: 80 }}>{textLvl2[count].icon}</Text>
                </View>
              </View>
              <View style={{ flex: 0, minHeight: 360 }}>
                <Text style={styles.heading}>{textLvl2[count].heading}</Text>
                <Text style={styles.text}>{textLvl2[count].text}</Text>
              </View>
            </>
          )}
          <View style={styles.btnContainer}>
            <Pressable onPress={shrinking} style={[styles.button, styles.back]}>
              <Text style={{ fontSize: SIZES.font }}>ZURÜCK</Text>
            </Pressable>
            <Pressable onPress={expanding} style={[styles.button, styles.next]}>
              <Text style={[styles.buttonTxt, { fontSize: SIZES.font, textAlign: 'center' }]}>
                {count < 3 ? 'WEITER' : 'ÜBUNG BEGINNEN'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    zIndex: 100,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 0,
    flexDirection: 'column',
    marginTop: 50,
    backgroundColor: WHITE,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 5,
    maxHeight: '90%',
    top: -40,
  },
  heading: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: SIZES.font * 1.2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: SIZES.font,
    textAlign: 'center',
    lineHeight: SIZES.default_line_height,
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meCircle: {
    height: 80,
    width: 80,
    borderColor: ORANGE,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  innerCircle: {
    height: 130,
    width: 130,
    borderRadius: 100,
    position: 'absolute',
  },
  middleCircle: {
    height: 190,
    width: 190,
    borderRadius: 150,
    position: 'absolute',
  },
  outerCircle: {
    height: 250,
    width: 250,
    borderColor: PRIMARY,
    borderRadius: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    minHeight: 50,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  buttonTxt: {
    marginHorizontal: 4,
    marginVertical: 15,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    minWidth: '40%',
  },
  back: {
    borderColor: ARROW_GRAY,
    marginRight: 8,
  },
  next: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
  },
});
