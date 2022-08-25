import React, { useEffect, useState } from 'react';
import { SecurityNetRoutes } from './SecurityNet';
import { getMotivatorByType } from '../MotivatorProps';
import { empty, iconMap, SafetyNetDType } from './SecurityNetHome';
import Title from '../../shared/components/Title';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SHADOW_COLOR, STYLES } from '../../shared/styles';

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
          type: item.type,
          icon: item.type,
          title: item.name,
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
              navigation.navigate('SecurityNetItem', { component: data });
            }}
            style={[styles.gridItem, STYLES.shadow]}>
            <Text style={styles.text}>{data.title}</Text>
            {iconMap.get(data.icon)}
          </Pressable>
        ))}
    </>
  );
}

export default function SecurityNetItemView({
  route,
}: NativeStackScreenProps<SecurityNetRoutes, 'SecurityNetItemView'>) {
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
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '46%',
    height: 120,
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: SHADOW_COLOR,
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
});
