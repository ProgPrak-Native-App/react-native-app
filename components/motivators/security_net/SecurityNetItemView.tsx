import React, { useEffect, useState } from 'react';
import { SecurityNetRoutes } from './SecurityNet';
import { getMotivatorByType } from '../MotivatorProps';
import { empty, iconMap, SafetyNetDType } from './SecurityNetHome';
import Title from '../../Title';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { BLACK, SHADOW } from '../../../styles';

async function getSafetyNet() {
  return await fetch('http://localhost:4010/safetyNet', {
    headers: {
      Authorization: 'Bearer react-native-app',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const items: SafetyNetDType[] = [];
      for (const i in data) {
        const item = data[i];
        const newItem: SafetyNetDType = {
          id: item.id,
          type: item.type,
          name: item.name,
          strategies: item.strategies.slice(0, 3),
        };
        items.push(newItem);
      }
      return items;
    })
    .catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zur zeit keine Verbindung zu unserem Server :(');
      return [empty, empty, empty];
    });
}

async function deleteEntry(id: number) {
  return await fetch(`http://localhost:4010/safetyNet/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer react-native-app',
    },
  });
}

export default function SecurityNetItemView({
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetItemView'>) {
  function SecurityNetItemGridView(safetyNetItems: SafetyNetDType[], type: string) {
    const navigation = useNavigation<NavigationProp<SecurityNetRoutes>>();
    return (
      <>
        {safetyNetItems
          .filter((data) => data.type === type)
          .map((data, index) => (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate('SecurityNetItem', { component: data, modifying: true });
              }}
              style={[styles.gridItem, styles.shadow]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: 25, height: 24 }} />
                <Text style={styles.text}>{data.name}</Text>
                <Pressable
                  onPress={() => {
                    deleteEntry(data.id);
                    setSafetyNetItems(safetyNetItems.splice(safetyNetItems.indexOf(data), 1));
                  }}>
                  <Entypo name="cross" size={24} />
                </Pressable>
              </View>
              <View style={{ alignSelf: 'center' }}>{iconMap.get(data.type)}</View>
            </Pressable>
          ))}
      </>
    );
  }

  const props = getMotivatorByType('relaxation');
  const initialState: SafetyNetDType[] = [];
  const [safetyNetItems, setSafetyNetItems] = useState(initialState);
  useEffect(() => {
    getSafetyNet().then(setSafetyNetItems);
  }, []);

  const type = route.params.type;

  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <ScrollView>
        <View style={styles.gridContainer}>{SecurityNetItemGridView(safetyNetItems, type)}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    justifyContent: 'space-around',
    width: '46%',
    height: 120,
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: SHADOW,
  },
  gridContainer: {
    marginVertical: 5,
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
    letterSpacing: 0,
  },
  shadow: {
    elevation: 4,
    shadowColor: BLACK,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
