import React, { useRef, useState } from 'react';
import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../Title';
import { parseMotivator } from '../MotivatorProps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Countdown, Timer } from 'react-native-element-timer';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { MOTIVATOR, SHADOW } from '../../../styles';

export default function OptimismExercise() {
  const props = parseMotivator('optimism');

  return (
    <>
      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      <View style={styles.container}>
        <CountdownCircleTimer
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          duration={100}
          isPlaying>
          {({ remainingTime }) => <Text>{remainingTime}</Text>}
        </CountdownCircleTimer>
        <Pressable style={styles.taskButton}>
          <Text>...</Text>
        </Pressable>
        <Pressable style={styles.taskButton}>
          <Text>...</Text>
        </Pressable>
        <Pressable style={styles.taskButton}>
          <Text>...</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  taskButton: {
    backgroundColor: MOTIVATOR.SECURITYNET,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    width: '80%',
    elevation: 5,
    shadowColor: SHADOW,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
