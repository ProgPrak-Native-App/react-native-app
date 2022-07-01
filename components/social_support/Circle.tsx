import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { BACKGROUND } from '../../styles';

export type personProp = {
  name: string;
  resource: string;
  id: string;
};
export type circleProps = {
  people: personProp[];
  deletePerson: (props: personProp) => void;
  updatePerson: (item: { name: string; resource: string; id: string }) => void;
  toggleUpdate: (id: string) => void;
  level: number;
};
export default function Circle(props: circleProps) {
  /**  source code for calulation
   * of spacing of names on the circle
   * https://stackoverflow.com/questions/10152390/dynamically-arrange-some-elements-around-a-circle */
  const calc = (elem: personProp, angle: number) => {
    return (
      <Pressable
        accessibilityHint="Klicken um Daten der Person zu ändern oder zu löschen"
        key={elem.id}
        onPress={() => {
          props.toggleUpdate(elem.id);
        }}
        style={[
          styles.backDrop,
          {
            left: Math.round(width / 2 + radius * Math.cos(angle) - width / 2) + 115,
            top: Math.round(height / 2 + radius * Math.sin(angle) - height / 2) + 115,
            position: 'absolute',
          },
        ]}>
        <Text style={{ paddingHorizontal: 5, paddingVertical: 5 }}>{elem.name}</Text>
        {props.level === 2 && <Text style={{ paddingHorizontal: 7, paddingVertical: 5 }}>{elem.resource}</Text>}
      </Pressable>
    );
  };

  const circleElems = [];
  const radius = 85;
  const width = 300;
  const height = 300;

  let angle = 0;
  const step = (2 * Math.PI) / props.people.length;
  if (props.people.length > 0 && props.people[0].name !== '') {
    for (let i = 0; i < props.people.length; i++) {
      circleElems.push(calc(props.people[i], angle));
      angle += step;
    }
  }
  return <View style={styles.container}>{circleElems}</View>;
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: -150,
    width: 300,
    height: 300,
  },
  backDrop: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: BACKGROUND,
    minHeight: 48,
    minWidth: 48,
    borderRadius: 18,
  },
});
