import { Text, StyleSheet, ScrollView, Pressable, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../shared/components/Title';
import { BLACK, DARK_GREY, ORANGE, PRIMARY, SIZES, TERTIARY } from '../shared/styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Duration, Instant } from '@js-joda/core';
import { getMotivatorByType } from '../motivators/MotivatorProps';
import { MotivatorRoutes } from '../motivators/Motivator';

/** source for storage code https://aloukissas.medium.com/how-to-build-a-background-timer-in-expo-react-native-without-ejecting-ea7d67478408 */
export default function ThirdLevelCountDown() {
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();
  const timeLimit = 10;
  // 14 Tage =  14 * 24 * 60 * 60
  const [toggle, setToggle] = useState<boolean>();

  const [toggleFwd, setToggleFwd] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>();

  const props = getMotivatorByType('socialSupport');

  /** store the timestamp when the start btn was clicked */
  async function recordStartTime() {
    try {
      const now = Instant.now();
      await AsyncStorage.setItem('@start_time', now.toJSON());
    } catch (err) {
      console.warn(err);
    }
  }
  /** if smth stored in async as start time challeng is running => hide start btn */
  async function setToggeling(): Promise<boolean> {
    return (await AsyncStorage.getItem('@start_time')) !== null;
  }

  /** when smth was in async storage then update the timer */
  const setCountDown = async () => {
    const startTime = await AsyncStorage.getItem('@start_time');
    const now = Instant.now();
    if (startTime) {
      const timeLeft = timeLimit - Duration.between(Instant.parse(startTime), now).seconds();
      if (timeLeft > 0) {
        return timeLeft;
      } else {
        await AsyncStorage.removeItem('@start_time');
        return 0;
      }
    }
    return timeLimit;
  };

  /** when start btn clicked hide & set timestamp */
  const onClick = () => {
    recordStartTime();
    setCountDown().then((time) => setSecondsLeft(time));
    setToggle((prev) => !prev);
  };

  const onRestart = () => {
    recordStartTime();
    setSecondsLeft(timeLimit);
    setToggleFwd((prev) => !prev);
    setToggle((prev) => !prev);
  };

  const onComplete = () => {
    setToggleFwd((prev) => !prev);
  };

  useEffect(() => {
    setToggeling().then((bool) => setToggle(bool));
    setCountDown().then((time) => setSecondsLeft(time));
  }, []);

  return (
    <>
      <Title Icon={() => props.icon} back color={ORANGE} text="Soziale Unterstützung" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.body}>
          Challenge dich selbst – markiere in jedem der 3 Kreise eine Person und schaue in den nächsten 2 Wochen, ob du
          sie vielleicht auf die eine oder andere Weise unterstützen kannst und wie es dir dabei geht.
        </Text>
        {secondsLeft !== undefined && toggle && (
          <CountDown
            digitStyle={{ backgroundColor: PRIMARY }}
            digitTxtStyle={{ color: BLACK }}
            onFinish={onComplete}
            size={30}
            style={{ marginVertical: 35 }}
            timeLabelStyle={{ color: BLACK, fontSize: 14 }}
            timeLabels={{ d: 'Tage', h: 'Stunden', m: 'Minuten', s: 'Sekunden' }}
            timeToShow={['D', 'H', 'M', 'S']}
            until={secondsLeft}
          />
        )}
        {!toggle && (
          <Pressable accessibilityHint="Starte einen 2 wöchigen Countdown" onPress={onClick} style={styles.button}>
            <Text style={[styles.body, { fontWeight: 'bold' }]}>Start challenge!</Text>
          </Pressable>
        )}
        {toggleFwd && (
          <View style={styles.btnContainer}>
            <Pressable
              accessibilityHint="Möchtest Du die Challenge neu starten?"
              onPress={onRestart}
              style={styles.buttons}>
              <Text style={[styles.body, { fontWeight: 'bold' }]}>Re-start challenge?</Text>
            </Pressable>
            <Pressable
              accessibilityHint="Zum Feedback und Übung beenden"
              onPress={() =>
                navigate('FeedbackNavigation', {
                  name: 'MoodEntry',
                  title: 'Soziale Unterstützung',
                  color: ORANGE,
                  icon: '../../assets/socialSupport.png',
                })
              }
              style={styles.buttons}>
              <Text style={[styles.body, { fontWeight: 'bold' }]}>Weiter</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: '88%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    minWidth: '70%',
    backgroundColor: TERTIARY,
    marginVertical: 40,
    borderColor: DARK_GREY,
    borderRadius: 30,
    borderWidth: 1,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    minWidth: '30%',
    backgroundColor: TERTIARY,
    marginVertical: 10,
    borderColor: DARK_GREY,
    borderRadius: 30,
    borderWidth: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});
