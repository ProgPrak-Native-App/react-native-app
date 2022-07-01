import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Title from '../../Title';
import { parseMotivator } from '../MotivatorProps';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { MOTIVATOR, SHADOW, SIZES } from '../../../styles';
import KopfsachenButton from '../../KopfsachenButton';

export default function OptimismExercise() {
  const props = parseMotivator('optimism');

  return (
    <>
      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      <View style={styles.container}>
        <View style={styles.countdown}>
          <CountdownCircleTimer
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[75, 50, 25, 0]}
            duration={100}
            isPlaying>
            {({ remainingTime }) => <Text>{remainingTime}</Text>}
          </CountdownCircleTimer>
        </View>
      </View>
      <View style={styles.countdownButtons}>
        <KopfsachenButton style={styles.taskButton}>Start</KopfsachenButton>
        <KopfsachenButton style={styles.taskButton}>Stop</KopfsachenButton>
      </View>
      <View style={styles.container}>
        <TextInput placeholder="..." style={styles.input} />
        <TextInput placeholder="..." style={styles.input} />
        <TextInput placeholder="..." style={styles.input} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  countdown: {
    marginTop: 15,
  },
  input: {
    height: 40,
    fontSize: SIZES.font,
    width: '80%',
    borderWidth: 1,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: MOTIVATOR.SECURITYNET,
    borderRadius: 20,
  },
  countdownButtons: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  taskButton: {
    width: '40%',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
