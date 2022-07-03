import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { TaskProp } from './GroupALP';
import { PRIMARY, SIZES, WHITE } from '../../styles';

export default function Checks({ item, handleChecked }: { item: TaskProp; handleChecked: (item: TaskProp) => void }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleToggle = () => {
    setToggleCheckBox((prev) => !prev);
    handleChecked(item);
  };
  return (
    <View key={item.id} style={styles.tile}>
      <Text style={styles.tiletxt}>{item.descr}</Text>
      <Checkbox style={styles.checkBox} disabled={false} value={toggleCheckBox} onValueChange={handleToggle} />
    </View>
  );
}
const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: WHITE,
    position: 'absolute',
    right: 10,
    minHeight: 48,
    minWidth: 48,
    justifyContent: 'center',
  },
  tile: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 58,
    backgroundColor: PRIMARY,
  },
  tiletxt: {
    fontSize: SIZES.font,
    fontWeight: 'bold',
  },
});
