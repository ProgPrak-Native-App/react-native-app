import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AntDesign, FontAwesome5} from '@expo/vector-icons';

type Props = {
  title: string;
  icon: string;
};

export default function ProfileOption({title, icon}: Props) {
  return (
    <Pressable style={styles.profileItem}>
      <View style={styles.itemContainer}>
        <FontAwesome5 name={icon} size={20} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <AntDesign name='right' size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  profileItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 16,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
  },
});
