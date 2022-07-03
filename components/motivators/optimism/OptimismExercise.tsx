import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Title from '../../Title';
import { getMotivatorByType } from '../MotivatorProps';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { BACKGROUND, GREY, MOTIVATOR, SHADOW, SIZES } from '../../../styles';
import KopfsachenButton from '../../KopfsachenButton';
import * as Clipboard from 'expo-clipboard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../Motivator';

function formatTime(seconds: number) {
  return (
    Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0') +
    ':' +
    (seconds % 60).toString().padStart(2, '0')
  );
}

export default function OptimismExercise() {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  const props = getMotivatorByType('optimism');
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState(['', '', '']);

  function getText(newText: string, index: number) {
    setText((currentText) => {
      currentText[index] = newText;
      return currentText;
    });
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(
      'Du hast die Übung geschafft! \nHier sind deine Notizen: \n\n' + text[0] + '\n' + text[1] + '\n' + text[2]
    );
  };

  function getModal() {
    return (
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
              <Text style={styles.modalText}>Du hast die Übung geschafft! {'\n'} Hier sind deine Notizen:</Text>
              <View style={styles.resultContainer}>
                <Text style={styles.modalText}>{text[0]}</Text>
                <Text style={styles.modalText}>{text[1]}</Text>
                <Text style={styles.modalText}>{text[2]}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                <KopfsachenButton
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('NewMotivator');
                  }}
                  style={styles.button}>
                  Fertig
                </KopfsachenButton>
                <KopfsachenButton
                  onPress={() => {
                    copyToClipboard();
                  }}
                  style={styles.button}>
                  Kopieren in die Zwischenablage
                </KopfsachenButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }

  function getCountdown() {
    return (
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
    );
  }

  return (
    <>
      {getModal()}
      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      {getCountdown()}
      <View style={styles.countdownButtonContainer}>
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
        <TextInput onChangeText={(newText) => getText(newText, 0)} placeholder="..." style={styles.input} />
        <TextInput onChangeText={(newText) => getText(newText, 1)} placeholder="..." style={styles.input} />
        <TextInput onChangeText={(newText) => getText(newText, 2)} placeholder="..." style={styles.input} />
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
    minWidth: '80%',
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
  countdownButtonContainer: {
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
    minWidth: '30%',
    maxWidth: '50%',
    marginHorizontal: 10,
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
  resultContainer: {
    minWidth: '80%',
    backgroundColor: GREY,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    marginBottom: 15,
  },
});
