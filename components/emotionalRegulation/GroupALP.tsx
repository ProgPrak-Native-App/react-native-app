import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../Title';
import { PRIMARY, PURPLE, SIZES, BLACK, TERTIARY } from '../../styles';
import A from './A';
import L from './L';
import P from './P';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { EmoRoutes } from './Navigation';
import { getMotivatorByType } from '../motivators/MotivatorProps';

export type TaskProp = {
  descr: string;
  id: number;
  checked: boolean;
};

export default function ALP() {
  const { navigate } = useNavigation<NavigationProp<EmoRoutes>>();
  const props = getMotivatorByType('situationControl');
  /** tasks holds all added tasks */
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [idCount, setIdCount] = useState(0);
  const [tmpTask, setTmpTask] = useState({ desc: '', deadline: '' });
  const [canGoOn, setCanGoOn] = useState(false);

  const [time, setTime] = useState({
    days: '',
    hours: '',
    mins: '',
  });
  const [puffer, setPuffer] = useState({
    days: '0',
    hours: '0',
    mins: '0',
  });

  /** after task has been added to tasks reset params */
  const reset = () => {
    addTask();
    setTime(() => ({ days: '', hours: '', mins: '' }));
    setPuffer(() => ({ days: '0', hours: '0', mins: '0' }));
    setTmpTask(() => ({ desc: '', deadline: '' }));
  };
  /** needs to be asnyc to ensure we can only go to next step until at least one thing has been
   * added to tasks
   */
  const addTask = async () => {
    if (tmpTask.desc !== '') {
      if (tasks.filter((elem) => elem.descr === tmpTask.desc).length === 0) {
        setTasks((prev) => [
          ...prev,
          {
            descr: tmpTask.desc,
            id: idCount,
            checked: false,
          },
        ]);
        setIdCount((prev) => prev + 1);
      }
    } else {
      if (tasks.length === 0) {
        Alert.alert('Da hast Du was vergessen', 'Du musst eine Aufgabe in das erste Feld eintragen');
        return false;
      }
    }
    return true;
  };
  /** handles any text field inputs */
  const handleTextInput = (key: string, val: string) => {
    setTmpTask((prevTmp) => {
      return {
        ...prevTmp,
        [key]: val,
      };
    });
  };
  /** handles any 'time' inputs */
  const handleTimeInput = (key: string, val: string) => {
    setTime((prevTmp) => {
      return {
        ...prevTmp,
        [key]: val,
      };
    });
  };

  /** calculates automatically 1/3 to the estimated time */
  const calculatePuffer = () => {
    let d = Number.isNaN(parseInt(time.days)) ? 0 : parseInt(time.days) * 24 * 60;
    let h = Number.isNaN(parseInt(time.hours)) ? 0 : parseInt(time.hours) * 60;
    let m = Number.isNaN(parseInt(time.mins)) ? 0 : parseInt(time.mins);

    let s = (d + h + m) * (4 / 3);

    d = Math.trunc(s / (60 * 24));
    s = s % (60 * 24);

    h = Math.trunc(s / 60);
    m = Math.trunc(s % 60);

    setPuffer({
      days: d.toString(),
      hours: h.toString(),
      mins: m.toString(),
    });
  };

  /** if user wants to go on, addTmpTask to tasks and after it has been succ. added, give ok to go to next scrren */
  const handleGoOn = () => {
    addTask().then((t) => setCanGoOn(t));
  };

  /** if okay (at least one task in tasks), go to next screen */
  useEffect(() => {
    if (canGoOn) {
      navigate('E', { tasks });
      setCanGoOn(() => false);
    }
  }, [canGoOn]);

  /** everytime a user enters a time, calucalte 1/3 to it */
  useEffect(() => {
    calculatePuffer();
  }, [time]);

  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Situationskontrolle" />
      <ScrollView contentContainerStyle={styles.container}>
        <A desc={tmpTask.desc} handleInput={handleTextInput} />
        <L deadline={tmpTask.deadline} handleInput={handleTimeInput} handleTextInput={handleTextInput} time={time} />
        <P puffer={puffer} />
        <View style={{ marginTop: 10, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Pressable
            accessibilityHint="Füge eine neue Aufgabe hinzu"
            onPress={reset}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
            <Text style={{ textAlign: 'center', fontSize: SIZES.font, padding: 15 }}>Aufgabe hinzufügen</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Zum nächsten Schritt"
            onPress={handleGoOn}
            style={({ pressed }) => [{ backgroundColor: pressed ? TERTIARY : PRIMARY }, styles.btn]}>
            <Text style={{ textAlign: 'center', fontSize: SIZES.font, padding: 15 }}>Weiter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    paddingBottom: 50,
    width: '88%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btn: {
    borderColor: BLACK,
    width: '48%',
    minHeight: SIZES.target_size,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
});
