import { FontAwesome5 } from '@expo/vector-icons';
import React, { ReactNode, useState } from 'react';
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(!collapsed);
  };
  return (
    <View style={{ borderBottomWidth: 2 }}>
      <Pressable onPress={toggle} style={styles.container}>
        <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
        <FontAwesome5 name={collapsed ? 'caret-down' : 'caret-up'} size={24} />
      </Pressable>
      <View>{!collapsed && children}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Accordion;
