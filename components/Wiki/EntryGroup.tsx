import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { WikiStackParamList } from './Navigation';
import { WikiEntry } from '../../api/WikiClient';

type Props = {
  letter: string;
  entries: WikiEntry[];
};

const EntryGroup = ({ letter, entries }: Props) => {
  const { navigate } = useNavigation<NavigationProp<WikiStackParamList>>();
  return (
    <View>
      <Text style={styles.capital}>{letter}</Text>
      {entries.map((item, i) => (
        <Pressable key={i} onPress={() => navigate('WikiEntry', item)} style={styles.container}>
          <Text style={styles.text}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    capital: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingHorizontal: 5
    },
    text: {
        fontSize: 18,
        paddingVertical: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 25
    },
})

export default EntryGroup;
