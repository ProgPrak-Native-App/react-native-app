import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

type Props = {
  title: string;
  icon: string;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
};

export default function ProfileOption({ title, icon, onPress, color }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.profileItem}>
      <FontAwesome5 color={color} name={icon} size={20} style={styles.itemIcon} />
      <Text style={[styles.itemText, { color }]}>{title}</Text>
      <AntDesign color={color} name="right" size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  profileItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  itemText: {
    flexGrow: 1,
    fontSize: 20,
    marginLeft: 10,
  },
  itemIcon: {
    flexBasis: 30,
    textAlign: 'center',
  },
});
