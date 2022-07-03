import { View, Text, Pressable, ScrollView, StyleSheet, Animated, Easing } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StackScreenProps } from './Navigation';
import Title from '../Title';
import SortableList from 'react-native-sortable-list';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACCENT, BLACK, PRIMARY, PURPLE, SIZES, TERTIARY, WHITE } from '../../styles';
import { TaskProp } from './GroupALP';
import { AntDesign } from '@expo/vector-icons';

/** for moving / sortable tasks:
 * source: https://github.com/gitim/react-native-sortable-list/blob/master/examples/Basic/App.js
 * */
function Row(props: { data: string; active: boolean; deleteTask: (v: string) => void }) {
  const { active, data, deleteTask } = props;

  const activeAnim = useRef(new Animated.Value(0));
  const style = useMemo(
    () => ({
      transform: [
        {
          scale: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.01],
          }),
        },
      ],
    }),
    []
  );

  useEffect(() => {
    Animated.timing(activeAnim.current, {
      duration: 300,
      easing: Easing.bounce,
      toValue: Number(active),
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <Animated.View style={[style, styles.tile]}>
      <Text style={styles.tiletxt}>{data}</Text>
      <Pressable onPress={() => deleteTask(data)} style={styles.delete}>
        <AntDesign name="close" size={24} />
      </Pressable>
    </Animated.View>
  );
}

function E({ route, navigation }: StackScreenProps<'E'>) {
  /** save tasks to async Storage to retrive later */
  async function saveTaskList() {
    try {
      await AsyncStorage.setItem('@saved_tasks', JSON.stringify(newOrder));
    } catch (err) {
      console.warn(err);
    }
  }
  const OGTasks = route.params.tasks;
  const [data, setData] = useState<string[]>(route.params.tasks.map((item) => item.descr));
  const [newOrder, setNewOrder] = useState<TaskProp[]>(OGTasks);

  const renderRow = useCallback(({ data, active }) => {
    return <Row active={active} data={data} deleteTask={deleteTask} />;
  }, []);

  /** delete a task & save neworder */
  const deleteTask = (taskName: string) => {
    const tmp = data.filter((elem) => elem !== taskName);
    setData((prevData) => prevData.filter((elem) => elem !== taskName));
    setNewOrder((prevOrder) => tmp.map((elem) => prevOrder.filter((p) => p.descr === elem)).flat());
  };

  /** save newOrder of task for later */
  const onReleaseRow = (key: string, currentOrder: string[]) => {
    setNewOrder(currentOrder.map((item) => OGTasks.filter((entry) => parseInt(item) === entry.id)).flat());
  };
  const handleGoOn = () => {
    saveTaskList();
    navigation.navigate('N');
  };

  return (
    <>
      <Title back color={PURPLE} text="Situationskontrolle" />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.para}>
            Jetzt geht es darum die Aufgaben nach der Wichtigkeit zu sortieren. Du kannst die Aufgaben einfach in die
            gewünscht Reihenfolge verschieben.
          </Text>
        </View>
        <View>
          <Text style={styles.heading}>
            <Text style={styles.accent}>E</Text>ntscheidungen treffen:
          </Text>
          <Text style={styles.description}> a) Das Wichtigste zuerst </Text>
          <Text style={styles.description}> b) Es ist okay, wenn du nicht alles schaffst!</Text>
        </View>

        <SortableList data={data} onReleaseRow={onReleaseRow} renderRow={renderRow} style={styles.sortContainer} />
        <Pressable
          accessibilityHint="Zum nächsten Schritt "
          onPress={handleGoOn}
          style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.btn]}>
          <Text style={{ fontSize: SIZES.font, padding: 12 }}>Fertig sortiert</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
export default E;

const styles = StyleSheet.create({
  delete: {
    minHeight: SIZES.target_size,
    minWidth: SIZES.target_size,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: SIZES.target_size,
  },
  para: {
    fontSize: SIZES.font,
    marginHorizontal: 20,
    textAlign: 'center',
    lineHeight: SIZES.default_line_height,
  },
  container: {
    minHeight: '100%',
    marginVertical: 20,
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
  btn: {
    borderColor: BLACK,
    width: '48%',
    minHeight: SIZES.target_size,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
  tile: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: SIZES.target_size * 1.2,
    backgroundColor: PRIMARY,
  },
  tiletxt: {
    fontSize: SIZES.font,
    fontWeight: 'bold',
  },
  sortContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    minHeight: '12%',
    flex: 0,
    marginVertical: 30,
    backgroundColor: WHITE,
    width: '90%',
  },
});
