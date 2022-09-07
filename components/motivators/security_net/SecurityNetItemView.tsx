import React, { useEffect, useState } from 'react';
import { SecurityNetRoutes } from './SecurityNet';
import { getMotivatorByType } from '../model';
import { iconMap } from './SecurityNetHome';
import SecurityNetClient, { SafetyNetDType } from '../../../api/SecurityNetClient';
import Title from '../../shared/components/Title';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { SHADOW_COLOR, STYLES } from '../../shared/styles';

async function getSafetyNet() {
  return new SecurityNetClient('http://localhost:4010').getItems();
}

async function deleteEntry(item: SafetyNetDType) {
  new SecurityNetClient('http://localhost:4010').deleteItem(item);
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
              style={[styles.gridItem, STYLES.shadow]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: 25, height: 24 }} />
                <Text style={styles.text}>{data.name}</Text>
                <Pressable
                  onPress={() => {
                    deleteEntry(data);
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
