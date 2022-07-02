import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Title from '../../Title';
import { getMotivatorByType } from '../MotivatorProps';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { BACKGROUND, MOTIVATOR, SHADOW, SIZES } from '../../../styles';
import KopfsachenButton from '../../KopfsachenButton';

function formatTime(seconds: number) {
  return (
    Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0') +
    ':' +
    (seconds % 60).toString().padStart(2, '0')
  );
}

export default function OptimismExercise({ navigation }: any) {
  const props = getMotivatorByType('optimism');
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent={true}
        visible={modalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Du hast die Übung geschafft! {'\n'} Hier sind dein zukünftiges Selbst:{' '}
              </Text>
              <KopfsachenButton
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={styles.button}>
                Let's go!
              </KopfsachenButton>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      <View style={styles.container}>
        <View style={styles.countdown}>
          <CountdownCircleTimer
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[600, 400, 200, 0]}
            duration={600}
            isPlaying={isPlaying}
            key={key}
            onComplete={() => ({ shouldRepeat: true, delay: 1 })}
            size={150}>
            {({ remainingTime, color }) => <Text style={{ color, fontSize: 35 }}>{formatTime(remainingTime)}</Text>}
          </CountdownCircleTimer>
        </View>
      </View>
      <View style={styles.countdownButtons}>
        <KopfsachenButton onPress={() => setIsPlaying(true)} style={styles.taskButton}>
          Start
        </KopfsachenButton>
        <KopfsachenButton
          onPress={() => {
            setKey((prevKey) => prevKey + 1);
            setIsPlaying(false);
          }}
          style={styles.taskButton}>
          Reset
        </KopfsachenButton>
        <KopfsachenButton onPress={() => setIsPlaying(false)} style={styles.taskButton}>
          Stop
        </KopfsachenButton>
      </View>
      <View style={styles.container}>
        <TextInput placeholder="..." style={styles.input} />
        <TextInput placeholder="..." style={styles.input} />
        <TextInput placeholder="..." style={styles.input} />
        <KopfsachenButton onPress={() => setModalVisible(true)} style={styles.taskButton}>
          Done
        </KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: BACKGROUND,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    lineHeight: SIZES.default_line_height,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: SIZES.font,
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
    justifyContent: 'space-evenly',
  },
  taskButton: {
    width: '25%',
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
  button: {
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
