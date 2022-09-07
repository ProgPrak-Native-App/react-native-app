import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StackScreenProps } from './Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskProp } from './GroupALP';
import { AntDesign } from '@expo/vector-icons';
import { getMotivatorByType } from '../motivators/model';
import { ACCENT, BLACK, PRIMARY, PURPLE, SIZES, TERTIARY } from '../shared/styles';
import Title from '../shared/components/Title';

function Row(props: {
  data: string;
  deleteTask: (v: string) => void;
  upTask: (v: string) => void;
  downTask: (v: string) => void;
}) {
  const { data, deleteTask, upTask, downTask } = props;

  return (
    <View style={styles.tile}>
      <Text style={styles.tiletxt}>{data}</Text>
      <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Pressable onPress={() => upTask(data)} style={styles.delete}>
          <AntDesign name="up" size={30} />
        </Pressable>
        <Pressable onPress={() => downTask(data)} style={styles.delete}>
          <AntDesign name="down" size={30} />
        </Pressable>
        <Pressable onPress={() => deleteTask(data)} style={styles.delete}>
          <AntDesign name="close" size={24} />
        </Pressable>
      </View>
    </View>
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
  const [newOrder, setNewOrder] = useState<TaskProp[]>(OGTasks);
  const [data, setData] = useState<TaskProp[]>(OGTasks);
  const [canGoOn, setCanGoOn] = useState(false);
  const props = getMotivatorByType('situationControl');

  /** delete a task & save neworder */
  const deleteTask = (taskName: string) => {
    const tmp = data.filter((elem) => elem.descr !== taskName);
    setData((prevData) => prevData.filter((elem) => elem.descr !== taskName));
    setNewOrder((prevOrder) => tmp.map((elem) => prevOrder.filter((p) => p.descr === elem.descr)).flat());
  };

  const upTask = (taskUp: string) => {
    setData((prevData) =>
      prevData.map((task) => {
        return task.descr === taskUp
          ? {
              ...task,
              id: task.id === 0 ? task.id : task.id - 1,
            }
          : { ...task, id: task.id + 1 };
      })
    );

    setData((item) => item.sort((a, b) => a.id - b.id));
    setNewOrder(data);
  };

  const downTask = (taskUp: string) => {
    setData((prevData) =>
      prevData.map((task) => {
        return task.descr !== taskUp
          ? {
              ...task,
              id: task.id === 0 ? task.id : task.id - 1,
            }
          : { ...task, id: task.id + 1 };
      })
    );

    setData((item) => item.sort((a, b) => a.id - b.id));
    setNewOrder(data);
  };

  const safeAgain = async () => {
    setNewOrder(data);
    return true;
  };

  const handleGoOn = () => {
    safeAgain().then((t) => setCanGoOn(t));
  };

  /** if okay (task new order has been saved) go to next screen */
  useEffect(() => {
    if (canGoOn) {
      saveTaskList();
      navigation.navigate('N');
      setCanGoOn(() => false);
    }
  }, [canGoOn]);

  return (
    <>
      <Title Icon={() => props.icon} back color={PURPLE} text="Situationskontrolle" />

      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.para}>
            Jetzt geht es darum die Aufgaben nach der Wichtigkeit zu sortieren. Du kannst die Aufgaben einfach in die
            gewünscht Reihenfolge verschieben.
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.heading}>
            <Text style={styles.accent}>E</Text>ntscheidungen treffen:
          </Text>
          <Text style={styles.description}> a) Das Wichtigste zuerst </Text>
          <Text style={styles.description}> b) Es ist okay, wenn du nicht alles schaffst!</Text>
        </View>

        <View style={styles.sortContainer}>
          {data.map((item, idx) => (
            <Row data={item.descr} deleteTask={deleteTask} downTask={downTask} key={idx} upTask={upTask} />
          ))}
        </View>

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
    marginLeft: 10,
    marginVertical: 10,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: SIZES.target_size * 1.2,
    backgroundColor: PRIMARY,
  },
  tiletxt: {
    fontSize: SIZES.font,
    fontWeight: 'bold',
  },
  sortContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    minHeight: '12%',
    marginVertical: 30,
    width: '90%',
  },
});
