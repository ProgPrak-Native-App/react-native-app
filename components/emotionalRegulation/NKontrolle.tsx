import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ACCENT, BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../../styles';
import Title from '../Title';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskProp } from './GroupALP';
import Checks from './Checks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { EmoRoutes } from './Navigation';
import { MotivatorRoutes } from '../motivators/Motivator';
import { getMotivatorByType } from '../motivators/MotivatorProps';

export default function NKontrolle() {
  /** get the users safed tasks from earlier */
  async function retriveTasks(): Promise<TaskProp[]> {
    const startTime = await AsyncStorage.getItem('@saved_tasks');
    if (startTime) {
      return JSON.parse(startTime);
    }
    return [];
  }
  const props = getMotivatorByType('situationControl');
  const navigation = useNavigation<NavigationProp<EmoRoutes>>();
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();
  const [tasks, setTasks] = useState<TaskProp[]>([]);

  /** get all tasks that they have set earlier */
  useEffect(() => {
    retriveTasks().then((t) => setTasks(t));
  }, []);

  /** elemets are checked off */
  const handleChecked = (item: TaskProp) => {
    setTasks((prevTasks) =>
      prevTasks.map((elem) =>
        elem.id === item.id
          ? {
              ...elem,
              checked: !elem.checked,
            }
          : elem
      )
    );
  };

  /** calc if they have checkd off more than 50% of tasks for navigation */
  const onDone = () => {
    const all = tasks.length;
    const d = tasks.filter((elem) => elem.checked === true).length;
    /** yeah */
    if (d / all >= 0.5) {
      navigation.navigate('Nice');
    } else {
      // navigate to checked off < 50%
      navigate('FeedbackNavigation', { name: 'IntroScreen', title: 'Situationskontrolle', color: PURPLE });
    }
  };

  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Situationskontrolle" />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.para}>
            <Text style={{ color: ACCENT, fontWeight: 'bold' }}>ALPEN</Text>
            -Methode
          </Text>
        </View>
        <View>
          <Text style={styles.heading}>
            <Text style={styles.accent}>N</Text>
            achkontrolle:
          </Text>
          <Text style={styles.description}>a) Was habe ich geschafft, was nicht?</Text>
        </View>

        <View style={styles.sortContainer}>
          {tasks.map((item, idx) => (
            <Checks handleChecked={handleChecked} item={item} key={idx} />
          ))}
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            accessibilityHint="Beende die Übung"
            onPress={onDone}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
            <Text style={styles.txt}>Fertig</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  para: {
    fontSize: SIZES.font,
    marginHorizontal: 10,
    textAlign: 'center',
    lineHeight: SIZES.default_line_height,
  },
  sortContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    minHeight: '10%',
    marginVertical: 30,
    width: '90%',
  },
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
    minHeight: SIZES.target_size,
    width: '40%',
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 15,
  },
});
