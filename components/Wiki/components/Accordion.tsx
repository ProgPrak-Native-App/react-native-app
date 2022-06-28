import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Accordion = ({ title, descr }: { title: string; descr: {type: 'text' | 'url'; content: string }[] }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(!collapsed);
  };
  return (
    <View style={{ borderBottomWidth: 2 }}>
      <Pressable onPress={toggle} style={styles.container}>
        <Text style={{ textTransform: 'capitalize' }}>{title}</Text>
        <FontAwesome5 name={collapsed ? 'caret-down' : 'caret-up'} size={24}/>
      </Pressable>
      <View>
        {!collapsed && (
          <Text style={styles.container}>
            {descr.map((item, index: number) =>
              item.type.match('url') ? (
                <Text key={index} style={{ textDecorationLine: 'underline' }}>
                  {item.content + ' '}
                </Text>
              ) : (
                <Text key={index}>{item.content}</Text>
              )
            )}
          </Text>
        )}
      </View>
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
